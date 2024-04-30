import React, { useState } from "react";
import "./HideMusic.css";
import ReactPlayer from "react-player";
function HideMusic({ list, listCount, getTimeHandle }) {
    const [time, setTime] = useState([]);
    const getTime = (duration, id) => {
        let timeGet, min, sec;
        min = parseInt(`${duration / 60}`);
        sec = duration % 60;
        timeGet = `${min}:${sec < 10 ? `0${sec}` : sec}`;
        let timeGetList = list;
        timeGetList.map((item, idx) => {
            if (!item.time) {
                let found = list.findIndex((e) => e.id === id);
                timeGetList[found].time = timeGet;
                getTimeHandle(timeGetList);
            }
        });
    };
    return (React.createElement("div", { className: "hidemusic-container" }, list.map((item, idx) => {
        return (React.createElement("div", { className: "hideMusic", key: idx },
            React.createElement("p", { style: { fontSize: "20px", color: "white" } }, time[idx]),
            React.createElement(ReactPlayer, { className: "player", width: "100px", height: "100px", url: item.url, onDuration: (duration) => getTime(duration, item.id) }),
            React.createElement("audio", { src: "" })));
    })));
}
export default HideMusic;
