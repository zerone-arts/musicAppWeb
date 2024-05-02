import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import "./Iphone.css";
import List from "../../types/list";
import iPhoneBg from "../../assets/img/iPhone.png";
import Dynamicisland from "../Dynamicisland/Dynamicisland";
import MusicImage from "../RoundTheme/MusicImage/MusicImage";
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
import PlayBar from "../RoundTheme/PlayBar/PlayBar";
import PlayButton from "../RoundTheme/PlayButton/PlayButton";
import PlayList from "../PlayList/PlayList";
import ReactPlayer from "react-player";
import HideMusic from "../HideMusic/HideMusic";
import RoundTheme from "../RoundTheme/RoundTheme";
import CircleTheme from "../CircleTheme/CircleTheme";
import Menu from "../Menu/Menu";

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
  const [playing, setPlaying] = useState<boolean>(false);
  const [themeCount, setThemeCount] = useState<number>(1);
  const [themeArr, setThemeArr] = useState<string[]>([
    "round",
    "circle",
    "imsy",
  ]);
  const [menuSelect, setMenuSelect] = useState<string>("");
  const [menuSelectList, setMenuSelectList] = useState<string>("");
  const [themeSlideActive, setThemeSlideActive] = useState<boolean>(false);
  const [mouseDownX, setMouseDownX] = useState<number>(0);
  const [mouseSlideX, setMouseSlideX] = useState<number>(0);
  const [mousePrevX, setMousePrevX] = useState<number>(0);

  const listToggleHandle = (value: string) => {
    listToggle === "" ? setListToggle("active") : setListToggle("");
  };
  const listSuffleHandle = () => {
    let suffleList = list.sort(() => Math.random() - 0.5);
    setList([...suffleList]);
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
  const getTimeHandle = (timeGetList: List[]) => {
    setList([...timeGetList]);
  };
  const playingMusicHandle = (play: boolean) => {
    setPlaying(play);
  };
  const playNextMusicHandle = () => {
    playPrevHandle();
  };

  const themeSelectHandle = (count: number) => {
    setThemeCount(count);
  };

  const menuSelectHandle = () => {
    menuSelect === "" ? setMenuSelect("menuActive") : setMenuSelect("");
  };

  const MenuSelectListHandle = (list: string) => {
    setMenuSelectList(list);
  };

  const MouseDownHandle: MouseEventHandler = (e) => {
    setThemeSlideActive(true);
    setMouseDownX(e.clientX);
    setMousePrevX(e.clientX);
  };
  const mouseUpHandle: MouseEventHandler = (e) => {
    setThemeSlideActive(false);
    if (mousePrevX == e.clientX) {
      setMenuSelectList("");
    }
  };
  const themeSlideHandle: MouseEventHandler = (e) => {
    let range = 10;
    if (menuSelectList === "theme") {
      if (themeSlideActive) {
        if (themeCount === 0) {
          setMouseSlideX(e.clientX - mouseDownX);
          if (e.clientX - mouseDownX < -range) {
            setMouseSlideX(0);

            setThemeCount(1);
            setThemeSlideActive(false);
          }
        } else if (themeCount === 1) {
          setMouseSlideX(e.clientX - mouseDownX);
          if (e.clientX - mouseDownX < -range) {
            setMouseSlideX(0);

            setThemeCount(2);
            setThemeSlideActive(false);
          } else if (e.clientX - mouseDownX > range) {
            setMouseSlideX(0);

            setThemeCount(0);
            setThemeSlideActive(false);
          }
        } else if (themeCount === 2) {
          setMouseSlideX(e.clientX - mouseDownX);
          if (e.clientX - mouseDownX > range) {
            setMouseSlideX(0);
            setThemeCount(1);
            setThemeSlideActive(false);
          }
        }
      }
    }
  };

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * list.length);
    setListCount(randomNum);
    setAppBg(list[randomNum].backgroundImg);
  }, [listCount]);

  return (
    <div className={`iphone-container ${menuSelect}`}>
      {<img className="iPhoneBg" src={iPhoneBg} alt="iPhone" />}
      <div className="iphone-wrapper">
        <ul
          className={`iphone-wrapper-lists ${themeArr[themeCount]} ${menuSelectList}`}
          style={
            menuSelect === "menuActive"
              ? menuSelectList === "theme"
                ? {
                    pointerEvents: "none",
                    transform: `scale(0.7) translateX(${mouseSlideX}px)`,
                  }
                : { pointerEvents: "none" }
              : menuSelectList === "theme"
              ? {
                  pointerEvents: "all",
                  transform: `scale(0.7) translateX(${mouseSlideX}px)`,
                }
              : { pointerEvents: "all" }
          }
          onMouseDown={MouseDownHandle}
          onMouseUp={mouseUpHandle}
          onMouseMove={themeSlideHandle}
        >
          <li className="iphone-wrapper-lists-list">
            <RoundTheme
              list={list}
              listCount={listCount}
              listToggle={listToggle}
              playing={playing}
              playNextMusicHandle={playNextMusicHandle}
              playNextHandle={playNextHandle}
              listToggleHandle={listToggleHandle}
              listSuffleHandle={listSuffleHandle}
              playPrevHandle={playPrevHandle}
              playingMusicHandle={playingMusicHandle}
              menuSelectHandle={menuSelectHandle}
            />
          </li>
          <li className="iphone-wrapper-lists-list">
            <CircleTheme
              list={list}
              listCount={listCount}
              listToggle={listToggle}
              playing={playing}
              playNextMusicHandle={playNextMusicHandle}
              playNextHandle={playNextHandle}
              listToggleHandle={listToggleHandle}
              listSuffleHandle={listSuffleHandle}
              playPrevHandle={playPrevHandle}
              playingMusicHandle={playingMusicHandle}
              themeSelectHandle={themeSelectHandle}
              menuSelectHandle={menuSelectHandle}
              menuSelectList={menuSelectList}
            />
          </li>
          <li className="iphone-wrapper-lists-list"></li>
        </ul>
        <Menu
          menuSelect={menuSelect}
          theme={themeArr[themeCount]}
          menuSelectHandle={menuSelectHandle}
          MenuSelectListHandle={MenuSelectListHandle}
        />

        <div className={`theme-guideWrapper ${menuSelectList}`}>
          <div className="theme-guide-ball"></div>
          <div className="theme-guide-text">Drag and Click</div>
        </div>
      </div>

      <Dynamicisland playing={playing} />
      <PlayList listToggle={listToggle} list={list} listCount={listCount} />
      <HideMusic
        list={list}
        listCount={listCount}
        getTimeHandle={getTimeHandle}
      />
    </div>
  );
}

export default Iphone;
