import React, { useState } from "react";
import "./HideMusic.css";
import ReactPlayer from "react-player";
function HideMusic({ list, listCount }) {
    const [time, setTime] = useState([]);
    const getTime = (duration, id) => {
        console.log(duration, id);
    };
    return (React.createElement("div", { className: "hidemusic-container" }, list.map((item, idx) => {
        return (React.createElement("div", { className: "test", key: idx },
            React.createElement("p", { style: { fontSize: "20px", color: "white" } }, time[idx]),
            React.createElement(ReactPlayer, { className: "player", width: "200px", height: "200px", url: item.url, onDuration: (duration) => getTime(duration, item.id) })));
    })));
}
export default HideMusic;
