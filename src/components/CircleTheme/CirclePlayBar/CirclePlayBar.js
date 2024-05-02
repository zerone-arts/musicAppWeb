import React, { useEffect, useRef, useState } from "react";
import "./CirclePlayBar.css";
import CircularSlider from "react-circular-slider-svg";
import ReactPlayer from "react-player";
function CirclePlayBar({ listToggle, list, listCount, playing, playNextMusicHandle, }) {
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
    return (React.createElement("div", { className: `circle-playbar-container ${listToggle}` },
        React.createElement("div", { className: "circle-playbar-time" },
            time,
            " ",
            React.createElement("span", null, "|"),
            list[listCount].time),
        React.createElement("div", { className: "circle-playbar-hidemusic" },
            React.createElement(ReactPlayer, { width: 200, height: 100, url: list[listCount].url, onEnded: playNextMusicHandle, playing: playing, volume: 0.5, onProgress: ({ played }) => setPlayed(played), onDuration: (duration) => setDuration(duration), ref: playerRef })),
        React.createElement("div", { className: "circle-playBar" },
            React.createElement(CircularSlider, { size: 250, minValue: 0, maxValue: 100, startAngle: 30, endAngle: 330, angleType: {
                    direction: "cw",
                    axis: "-y",
                }, handle1: {
                    value: played * 100,
                    onChange: (v) => circularSliderValue(v),
                }, arcColor: "black" }))));
}
export default CirclePlayBar;
