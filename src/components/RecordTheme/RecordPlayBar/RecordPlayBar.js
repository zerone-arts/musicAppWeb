import React, { useEffect, useRef, useState } from "react";
import "./RecordPlayBar.css";
import ReactPlayer from "react-player";
function RecordPlayBar({ listToggle, list, listCount, playing, playNextMusicHandle, theme, }) {
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [time, setTime] = useState("0:00");
    const playerRef = useRef(null);
    const circularSliderValue = (e) => {
        setPlayed(parseFloat(e.target.value));
        playerRef.current.seekTo(parseFloat(e.target.value));
    };
    useEffect(() => {
        let timeGet, min, sec;
        let playedDuration = Math.floor(played * duration);
        min = parseInt(`${playedDuration / 60}`);
        sec = playedDuration % 60;
        timeGet = `${min}:${sec < 10 ? `0${sec}` : sec}`;
        setTime(timeGet);
    }, [played]);
    return (React.createElement("div", { className: `record-playbar-container ${listToggle}` },
        React.createElement("div", { className: "record-playbar-hidemusic" },
            React.createElement(ReactPlayer, { width: 200, height: 100, url: list[listCount].url, onEnded: playNextMusicHandle, playing: theme === "record" ? playing : false, volume: 0.2, onProgress: ({ played }) => setPlayed(played), onDuration: (duration) => setDuration(duration), ref: playerRef })),
        React.createElement("div", { className: "record-time-present" }, time),
        React.createElement("div", { className: "record-playBar" },
            React.createElement("input", { type: "range", min: 0, max: 0.9999, step: "any", value: played, onChange: (e) => circularSliderValue(e) })),
        React.createElement("div", { className: "record-time-duration" }, list[listCount].time)));
}
export default RecordPlayBar;
