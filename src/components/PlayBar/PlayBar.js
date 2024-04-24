import React, { useRef, useState } from "react";
import "./PlayBar.css";
import ReactPlayer from "react-player";
function PlayBar({ listToggle, list, listCount, playing, playNextMusicHandle, }) {
    const [played, setPlayed] = useState(0);
    const playerRef = useRef(null);
    console.log(played);
    return (React.createElement("div", { className: `playbar-container ${listToggle}` },
        React.createElement("div", { className: "playbar-time" }, "01:20"),
        React.createElement("div", { className: "playbar-hidemusic" },
            React.createElement(ReactPlayer, { width: 200, height: 100, url: list[listCount].url, onEnded: playNextMusicHandle, playing: playing, onProgress: ({ played }) => setPlayed(played), ref: playerRef })),
        React.createElement("div", { className: "playbar-bar" },
            React.createElement("div", { className: "playbar-bar-background" },
                React.createElement("div", { className: "testtest" })))));
}
export default PlayBar;
