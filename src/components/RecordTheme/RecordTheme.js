import React, { useEffect, useRef, useState } from "react";
import "./RecordTheme.css";
import cdImg from "../../assets/img/cd.png";
import RecordPlayBar from "./RecordPlayBar/RecordPlayBar";
import RecordPlayButton from "./RecordPlayButton/RecordPlayButton";
function RecordTheme({ list, listToggle, listCount, playing, playNextMusicHandle, listToggleHandle, listSuffleHandle, playPrevHandle, playNextHandle, playingMusicHandle, menuSelectHandle, theme, }) {
    const [titleWidth, setTitleWidth] = useState(0);
    const titleWidthRef = useRef(null);
    const [playBtnCount, setPlayBtnCount] = useState(0);
    const cdRef = useRef(null);
    useEffect(() => {
        var _a;
        let width = (_a = titleWidthRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width;
        if (typeof width === "number")
            setTitleWidth(width);
    }, [list[listCount].title]);
    return (React.createElement("div", { className: "record-container" },
        React.createElement("button", { className: "record-menuSelectBtn", onClick: menuSelectHandle, style: {} },
            React.createElement("div", { className: "record-menuSelectBtn-icon" })),
        React.createElement("div", { className: "record-lp-wrapper" },
            React.createElement("div", { className: "record-lp-cdBox", style: playing
                    ? { animation: `cdAnimate 7s infinite linear` }
                    : { animation: "none" }, ref: cdRef },
                React.createElement("img", { src: cdImg, alt: "cdImg" }),
                React.createElement("div", { className: "record-lp-innerImgBox" },
                    React.createElement("img", { src: list[listCount].img, alt: "recordinnerImg" }))),
            React.createElement("div", { className: "record-lp-imgBox" },
                React.createElement("img", { src: list[listCount].img, alt: "recordImg" }))),
        React.createElement("div", { className: `record-titleBox ${listToggle}` },
            React.createElement("div", { className: `record-titleBox-title ${titleWidth >= 200 ? "over" : ""}` },
                React.createElement("span", null, list[listCount].title),
                titleWidth >= 200 ? React.createElement("span", null, list[listCount].title) : "",
                titleWidth >= 200 ? React.createElement("span", null, list[listCount].title) : "",
                titleWidth >= 200 ? React.createElement("span", null, list[listCount].title) : "",
                titleWidth >= 200 ? React.createElement("span", null, list[listCount].title) : "")),
        React.createElement("div", { className: `record-singerBox ${listToggle}` },
            React.createElement("div", null, list[listCount].singer)),
        React.createElement("div", { className: `record-titleWidth` },
            React.createElement("span", { ref: titleWidthRef }, list[listCount].title)),
        React.createElement(RecordPlayBar, { listToggle: listToggle, list: list, listCount: listCount, playing: playing, playNextMusicHandle: playNextMusicHandle, theme: theme }),
        React.createElement(RecordPlayButton, { listToggleHandle: listToggleHandle, listSuffleHandle: listSuffleHandle, playNextHandle: playNextHandle, playPrevHandle: playPrevHandle, playingMusicHandle: playingMusicHandle })));
}
export default RecordTheme;
