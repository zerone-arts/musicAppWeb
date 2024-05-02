import React, { useState } from "react";
import "./CircleTheme.css";
import CirclePlayBar from "./CirclePlayBar/CirclePlayBar";
import CirclePlayButton from "./CirclePlayButton/CirclePlayButton";
function CircleTheme({ list, listCount, listToggle, playing, playNextMusicHandle, themeSelectHandle, listToggleHandle, listSuffleHandle, playPrevHandle, playNextHandle, playingMusicHandle, menuSelectHandle, menuSelectList, }) {
    const gradientImage = () => {
        // Grade(document.querySelectorAll(".circle-container"));
    };
    const [bgGradientArr, setBgGradientArr] = useState([
        "one",
        "two",
        "three",
        "four",
        "five",
    ]);
    return (React.createElement("div", { className: `circle-container ${bgGradientArr[list[listCount].id - 1]} ${menuSelectList}` },
        React.createElement("div", { className: `circle-listImg ${listToggle}` },
            React.createElement("img", { src: list[listCount].img, alt: "img", onLoad: () => gradientImage(), style: list[listCount].id == 1
                    ? { transform: `translate(-50%, -50%) rotate(90deg)` }
                    : {
                        transform: `translate(-50%, -50%) `,
                    } })),
        React.createElement("button", { className: "circle-menuSelectBtn", onClick: menuSelectHandle },
            React.createElement("div", { className: "circle-menuSelectBtn-icon" })),
        React.createElement(CirclePlayBar, { listToggle: listToggle, list: list, listCount: listCount, playing: playing, playNextMusicHandle: playNextMusicHandle }),
        React.createElement(CirclePlayButton, { listToggleHandle: listToggleHandle, listSuffleHandle: listSuffleHandle, playNextHandle: playNextHandle, playPrevHandle: playPrevHandle, playingMusicHandle: playingMusicHandle })));
}
export default CircleTheme;
