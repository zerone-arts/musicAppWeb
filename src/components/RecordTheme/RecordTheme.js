import React from "react";
import "./RecordTheme.css";
import cdImg from "../../assets/img/cd.png";
import RecordPlayBar from "./RecordPlayBar/RecordPlayBar";
import RecordPlayButton from "./RecordPlayButton/RecordPlayButton";
function RecordTheme({ list, listToggle, listCount, playing, playNextMusicHandle, listToggleHandle, listSuffleHandle, playPrevHandle, playNextHandle, playingMusicHandle, menuSelectHandle, theme, }) {
    return (React.createElement("div", { className: "record-container" },
        React.createElement("div", { className: "record-lp-wrapper" },
            React.createElement("div", { className: "record-lp-cdBox", style: playing
                    ? { animation: `cdAnimate 7s infinite linear` }
                    : { animation: "none" } },
                React.createElement("img", { src: cdImg, alt: "cdImg" }),
                React.createElement("div", { className: "record-lp-innerImgBox" },
                    React.createElement("img", { src: list[listCount].img, alt: "recordinnerImg" }))),
            React.createElement("div", { className: "record-lp-imgBox" },
                React.createElement("img", { src: list[listCount].img, alt: "recordImg" }))),
        React.createElement(RecordPlayBar, { listToggle: listToggle, list: list, listCount: listCount, playing: playing, playNextMusicHandle: playNextMusicHandle, theme: theme }),
        React.createElement(RecordPlayButton, { listToggleHandle: listToggleHandle, listSuffleHandle: listSuffleHandle, playNextHandle: playNextHandle, playPrevHandle: playPrevHandle, playingMusicHandle: playingMusicHandle })));
}
export default RecordTheme;
