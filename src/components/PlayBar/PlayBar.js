import React, { useState } from "react";
import "./PlayBar.css";
import ReactPlayer from "react-player";
function PlayBar({ listToggle, list, listCount }) {
    const [time, setTime] = useState(0);
    return (React.createElement("div", { className: `playbar-container ${listToggle}` },
        React.createElement("div", { className: "playbar-time" }, "01:20"),
        React.createElement(ReactPlayer, { width: 200, height: 100, url: list[listCount].url, onDuration: (duration) => setTime(duration) })));
}
export default PlayBar;
