import React, { useEffect, useRef, useState } from "react";
import "./CircleTheme.css";
import CirclePlayBar from "./CirclePlayBar/CirclePlayBar";
import CirclePlayButton from "./CirclePlayButton/CirclePlayButton";
function CircleTheme({ list, listCount, listToggle, playing, playNextMusicHandle, listToggleHandle, listSuffleHandle, playPrevHandle, playNextHandle, playingMusicHandle, menuSelectHandle, menuSelectList, theme, }) {
    const [bgGradientArr, setBgGradientArr] = useState([
        "one",
        "two",
        "three",
        "four",
        "five",
    ]);
    const [titleWidth, setTitleWidth] = useState(0);
    const titleWidthRef = useRef(null);
    useEffect(() => {
        var _a;
        let width = (_a = titleWidthRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width;
        if (typeof width === "number")
            setTitleWidth(width);
    }, [list[listCount].title]);
    return (React.createElement("div", { className: `circle-container ${bgGradientArr[list[listCount].id - 1]} ${menuSelectList}` },
        React.createElement("div", { className: `circle-listImg ${listToggle}` },
            React.createElement("img", { src: list[listCount].img, alt: "img", style: list[listCount].id == 1
                    ? { transform: `translate(-50%, -50%) rotate(90deg)` }
                    : {
                        transform: `translate(-50%, -50%) `,
                    } })),
        React.createElement("button", { className: "circle-menuSelectBtn", onClick: menuSelectHandle },
            React.createElement("div", { className: "circle-menuSelectBtn-icon" })),
        React.createElement("div", { className: `circle-titleBox ${listToggle}` },
            React.createElement("div", { className: `circle-titleBox-title ${titleWidth >= 200 ? "over" : ""}` },
                React.createElement("span", null, list[listCount].title),
                titleWidth >= 200 ? React.createElement("span", null, list[listCount].title) : "",
                titleWidth >= 200 ? React.createElement("span", null, list[listCount].title) : "",
                titleWidth >= 200 ? React.createElement("span", null, list[listCount].title) : "",
                titleWidth >= 200 ? React.createElement("span", null, list[listCount].title) : "")),
        React.createElement("div", { className: `circle-singerBox ${listToggle}` },
            React.createElement("div", null, list[listCount].singer)),
        React.createElement("div", { className: "circle-titleWidth" },
            React.createElement("span", { ref: titleWidthRef }, list[listCount].title)),
        React.createElement(CirclePlayBar, { listToggle: listToggle, list: list, listCount: listCount, playing: playing, playNextMusicHandle: playNextMusicHandle, bgGradientArr: bgGradientArr, theme: theme }),
        React.createElement(CirclePlayButton, { listToggleHandle: listToggleHandle, listSuffleHandle: listSuffleHandle, playNextHandle: playNextHandle, playPrevHandle: playPrevHandle, playingMusicHandle: playingMusicHandle })));
}
export default CircleTheme;
