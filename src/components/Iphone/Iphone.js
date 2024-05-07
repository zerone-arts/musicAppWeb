import React, { useEffect, useState } from "react";
import "./Iphone.css";
import iPhoneBg from "../../assets/img/iPhone.png";
import Dynamicisland from "../Dynamicisland/Dynamicisland";
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
import PlayList from "../PlayList/PlayList";
import HideMusic from "../HideMusic/HideMusic";
import RoundTheme from "../RoundTheme/RoundTheme";
import CircleTheme from "../CircleTheme/CircleTheme";
import Menu from "../Menu/Menu";
import RecordTheme from "../RecordTheme/RecordTheme";
function Iphone({ setAppBg }) {
    const [list, setList] = useState([
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
    const [listCount, setListCount] = useState(0);
    const [listToggle, setListToggle] = useState("");
    const [playing, setPlaying] = useState(false);
    const [themeCount, setThemeCount] = useState(0);
    const [themeArr, setThemeArr] = useState([
        "round",
        "circle",
        "record",
    ]);
    const [menuSelect, setMenuSelect] = useState("");
    const [menuSelectList, setMenuSelectList] = useState("");
    const [themeSlideActive, setThemeSlideActive] = useState(false);
    const [mouseDownX, setMouseDownX] = useState(0);
    const [mouseSlideX, setMouseSlideX] = useState(0);
    const [mousePrevX, setMousePrevX] = useState(0);
    const listToggleHandle = (value) => {
        listToggle === "" ? setListToggle("active") : setListToggle("");
    };
    const listSuffleHandle = () => {
        let suffleList = list.sort(() => Math.random() - 0.5);
        setList([...suffleList]);
    };
    const playNextHandle = () => {
        if (listCount + 1 === list.length) {
            setListCount(0);
        }
        else {
            setListCount(listCount + 1);
        }
    };
    const playPrevHandle = () => {
        if (listCount + 1 === 1) {
            setListCount(list.length - 1);
        }
        else {
            setListCount(listCount - 1);
        }
    };
    const getTimeHandle = (timeGetList) => {
        setList([...timeGetList]);
    };
    const playingMusicHandle = (play) => {
        setPlaying(play);
    };
    const playNextMusicHandle = () => {
        playPrevHandle();
    };
    const themeSelectHandle = (count) => {
        setThemeCount(count);
    };
    const menuSelectHandle = () => {
        menuSelect === "" ? setMenuSelect("menuActive") : setMenuSelect("");
    };
    const MenuSelectListHandle = (list) => {
        setMenuSelectList(list);
    };
    const MouseDownHandle = (e) => {
        setThemeSlideActive(true);
        setMouseDownX(e.clientX);
        setMousePrevX(e.clientX);
    };
    const mouseUpHandle = (e) => {
        setThemeSlideActive(false);
        if (mousePrevX == e.clientX) {
            setMenuSelectList("");
        }
    };
    const themeSlideHandle = (e) => {
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
                }
                else if (themeCount === 1) {
                    setMouseSlideX(e.clientX - mouseDownX);
                    if (e.clientX - mouseDownX < -range) {
                        setMouseSlideX(0);
                        setThemeCount(2);
                        setThemeSlideActive(false);
                    }
                    else if (e.clientX - mouseDownX > range) {
                        setMouseSlideX(0);
                        setThemeCount(0);
                        setThemeSlideActive(false);
                    }
                }
                else if (themeCount === 2) {
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
    return (React.createElement("div", { className: `iphone-container ${menuSelect}` },
        React.createElement("img", { className: "iPhoneBg", src: iPhoneBg, alt: "iPhone" }),
        React.createElement("div", { className: "iphone-wrapper" },
            React.createElement("ul", { className: `iphone-wrapper-lists ${themeArr[themeCount]} ${menuSelectList}`, style: menuSelect === "menuActive"
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
                        : { pointerEvents: "all" }, onMouseDown: MouseDownHandle, onMouseUp: mouseUpHandle, onMouseMove: themeSlideHandle },
                React.createElement("li", { className: "iphone-wrapper-lists-list" },
                    React.createElement(RoundTheme, { list: list, listCount: listCount, listToggle: listToggle, playing: playing, playNextMusicHandle: playNextMusicHandle, playNextHandle: playNextHandle, listToggleHandle: listToggleHandle, listSuffleHandle: listSuffleHandle, playPrevHandle: playPrevHandle, playingMusicHandle: playingMusicHandle, menuSelectHandle: menuSelectHandle, theme: themeArr[themeCount] })),
                React.createElement("li", { className: "iphone-wrapper-lists-list" },
                    React.createElement(CircleTheme, { list: list, listCount: listCount, listToggle: listToggle, playing: playing, playNextMusicHandle: playNextMusicHandle, playNextHandle: playNextHandle, listToggleHandle: listToggleHandle, listSuffleHandle: listSuffleHandle, playPrevHandle: playPrevHandle, playingMusicHandle: playingMusicHandle, themeSelectHandle: themeSelectHandle, menuSelectHandle: menuSelectHandle, menuSelectList: menuSelectList, theme: themeArr[themeCount] })),
                React.createElement("li", { className: "iphone-wrapper-lists-list" },
                    React.createElement(RecordTheme, { list: list, listCount: listCount, listToggle: listToggle, playing: playing, playNextMusicHandle: playNextMusicHandle, playNextHandle: playNextHandle, listToggleHandle: listToggleHandle, listSuffleHandle: listSuffleHandle, playPrevHandle: playPrevHandle, playingMusicHandle: playingMusicHandle, menuSelectHandle: menuSelectHandle, theme: themeArr[themeCount] }))),
            React.createElement(Menu, { menuSelect: menuSelect, theme: themeArr[themeCount], menuSelectHandle: menuSelectHandle, MenuSelectListHandle: MenuSelectListHandle }),
            React.createElement("div", { className: `theme-guideWrapper ${menuSelectList}` },
                React.createElement("div", { className: "theme-guide-ball" }),
                React.createElement("div", { className: "theme-guide-text" }, "Drag and Click"))),
        React.createElement(Dynamicisland, { playing: playing }),
        React.createElement(PlayList, { listToggle: listToggle, list: list, listCount: listCount, theme: themeArr[themeCount] }),
        React.createElement(HideMusic, { list: list, listCount: listCount, getTimeHandle: getTimeHandle })));
}
export default Iphone;
