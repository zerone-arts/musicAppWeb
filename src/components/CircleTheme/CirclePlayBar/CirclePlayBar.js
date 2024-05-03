import React, { useEffect, useRef, useState } from "react";
import "./CirclePlayBar.css";
import CircularSlider from "react-circular-slider-svg";
import ReactPlayer from "react-player";
function CirclePlayBar({ listToggle, list, listCount, playing, playNextMusicHandle, bgGradientArr, theme, }) {
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
    return (React.createElement("div", { className: `circle-playbar-container ${listToggle} ${bgGradientArr}` },
        React.createElement("div", { className: "circle-playbar-time" },
            React.createElement("span", { style: playing ? { opacity: 1 } : { opacity: 0.5 } },
                " ",
                time),
            React.createElement("span", { style: playing ? { opacity: 1 } : { opacity: 0.5 } }, "|"),
            React.createElement("span", { style: playing
                    ? { color: `#f1caa5`, opacity: 1 }
                    : { color: `#fff`, opacity: 0.5 } }, list[listCount].time)),
        React.createElement("div", { className: "circle-playbar-hidemusic" },
            React.createElement(ReactPlayer, { width: 200, height: 100, url: list[listCount].url, onEnded: playNextMusicHandle, playing: theme === "circle" ? playing : false, volume: 0.2, onProgress: ({ played }) => setPlayed(played), onDuration: (duration) => setDuration(duration), ref: playerRef })),
        React.createElement("div", { className: "circle-playBar" },
            React.createElement(CircularSlider, { size: 250, minValue: 0, maxValue: 100, startAngle: 30, endAngle: 330, angleType: {
                    direction: "cw",
                    axis: "-y",
                }, handle1: {
                    value: played * 100,
                    onChange: (v) => circularSliderValue(v),
                }, arcColor: "#ddad87", arcBackgroundColor: "rgba(255,255,255,0.1)" }))));
}
export default CirclePlayBar;
