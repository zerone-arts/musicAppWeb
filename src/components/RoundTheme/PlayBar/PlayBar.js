import React, { useEffect, useRef, useState } from "react";
import "./PlayBar.css";
import ReactPlayer from "react-player";
import CircularSlider from "react-circular-slider-svg";
function PlayBar({ listToggle, list, listCount, playing, playNextMusicHandle, theme, }) {
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [time, setTime] = useState("0:00");
    const playerRef = useRef(null);
    const circularSliderValue = (v) => {
        setPlayed(v * 0.01);
        playerRef.current.seekTo(v * 0.01);
    };
    useEffect(() => {
        let timeGet, min, sec;
        let playedDuration = Math.floor(played * duration);
        min = parseInt(`${playedDuration / 60}`);
        sec = playedDuration % 60;
        timeGet = `${min}:${sec < 10 ? `0${sec}` : sec}`;
        setTime(timeGet);
    }, [played]);
    return (React.createElement("div", { className: `playbar-container ${listToggle}` },
        React.createElement("div", { className: "playbar-time" }, time),
        React.createElement("div", { className: "playbar-hidemusic" },
            React.createElement(ReactPlayer, { width: 200, height: 100, url: list[listCount].url, onEnded: playNextMusicHandle, playing: theme === "round" ? playing : false, volume: 0.5, onProgress: ({ played }) => setPlayed(played), onDuration: (duration) => setDuration(duration), ref: playerRef })),
        React.createElement("div", { className: "playbar-halfBar-container" },
            React.createElement(CircularSlider, { size: 270, minValue: 0, maxValue: 100, startAngle: 110, endAngle: 250, angleType: {
                    direction: "cw",
                    axis: "-y",
                }, handle1: {
                    value: played * 100,
                    onChange: (v) => circularSliderValue(v),
                }, arcColor: "black", arcBackgroundColor: "#CECECE" }))));
}
export default PlayBar;
