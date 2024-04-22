import React, { useEffect, useState } from "react";
import "./Iphone.css";
import List from "../../types/list";
import iPhoneBg from "../../assets/img/iPhone.png";
import Dynamicisland from "../Dynamicisland/Dynamicisland";
import MusicImage from "../MusicImage/MusicImage";
import cyberpunkImg from "../../assets/img/cyberpunk2.png";
import cyberpunkBgImg from "../../assets/img/cyberpunkBg.jpeg";
import spiderImg from "../../assets/img/spider.png";
import spiderBgImg from "../../assets/img/spiderBg.jpg";
import clickImg from "../../assets/img/click.png";
import clickBgImg from "../../assets/img/clickBg.png";
import tenthousandImg from "../../assets/img/10000.png";
import tenthousandBgImg from "../../assets/img/10000Bg.png";
import numberonefanImg from "../../assets/img/numberonefan.png";
import numberonefanBgImg from "../../assets/img/numberonefanBg.png";
import PlayBar from "../PlayBar/PlayBar";
import PlayButton from "../PlayButton/PlayButton";
import PlayList from "../PlayList/PlayList";

interface Props {
  setAppBg: React.Dispatch<React.SetStateAction<string>>;
}

function Iphone({ setAppBg }: Props): JSX.Element {
  const [list, setList] = useState<List[]>([
    {
      id: 1,
      url: "https://youtu.be/q74fX9CnqtQ?si=X511V3rGM7CYx9qJ",
      title: "I Really Want to Stay At Your House",
      singer: "Rosa Walton",
      img: cyberpunkImg,
      backgroundImg: cyberpunkBgImg,
      titleColor: "#fff",
      singerColor: "#fff",
    },
    {
      id: 2,
      url: "https://youtu.be/0V3LwNtZxM4?si=lb3phuUYAMhIYLqL",
      title: "High Hopes",
      singer: "Panic! At The Disco",
      img: spiderImg,
      backgroundImg: spiderBgImg,
      titleColor: "#fff",
      singerColor: "#fff",
    },
    {
      id: 3,
      url: "https://youtu.be/e43uGyJbm64?si=thLUxh2DPyZzmfSG",
      title: "Click",
      singer: "Jake Miller",
      img: clickImg,
      backgroundImg: clickBgImg,
      titleColor: "#fff",
      singerColor: "#fff",
    },
    {
      id: 4,
      url: "https://youtu.be/3GOYaIIeT28?si=VByRALJ9vTzkh6sX",
      title: "10,000 Hours",
      singer: "Dan + Shay, Justin Bieber",
      img: tenthousandImg,
      backgroundImg: tenthousandBgImg,
      titleColor: "#fff",
      singerColor: "#fff",
    },
    {
      id: 5,
      url: "https://youtu.be/KqY1SHzFEiA?si=ReqK3awRut4fApOr",
      title: "Number One Fan",
      singer: "Jake Miller",
      img: numberonefanImg,
      backgroundImg: numberonefanBgImg,
      titleColor: "#fff",
      singerColor: "#fff",
    },
  ]);
  const [listCount, setListCount] = useState<number>(0);
  const [listToggle, setListToggle] = useState<string>("");
  const [testList, setTestList] = useState<[number, number, number, number]>([
    1, 2, 3, 4,
  ]);

  const listToggleHandle = (value: string) => {
    listToggle === "" ? setListToggle("active") : setListToggle("");
  };

  const listSuffleHandle = () => {
    console.log("섞어 !");
    let suffleList = list.sort(() => Math.random() - 0.5);
    setList([...suffleList]);
    console.log(list);
  };

  const playNextHandle = () => {
    if (listCount + 1 === list.length) {
      setListCount(0);
    } else {
      setListCount(listCount + 1);
    }
  };

  const playPrevHandle = () => {
    if (listCount + 1 === 1) {
      setListCount(list.length - 1);
    } else {
      setListCount(listCount - 1);
    }
  };

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * list.length);
    setListCount(randomNum);
    setAppBg(list[randomNum].backgroundImg);
  }, []);

  return (
    <div className="iphone-container">
      {<img className="iPhoneBg" src={iPhoneBg} alt="iPhone" />}
      <div className="iphone-wrapper">
        <MusicImage list={list[listCount]} listToggle={listToggle} />
        <PlayList listToggle={listToggle} list={list} listCount={listCount} />
        <PlayBar listToggle={listToggle} />
        <PlayButton
          listToggleHandle={listToggleHandle}
          listSuffleHandle={listSuffleHandle}
          playNextHandle={playNextHandle}
          playPrevHandle={playPrevHandle}
        />
      </div>

      <Dynamicisland />
    </div>
  );
}

export default Iphone;