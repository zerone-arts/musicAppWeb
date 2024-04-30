import React from "react";
import "./RoundTheme.css";
import MusicImage from "./MusicImage/MusicImage";
import PlayBar from "./PlayBar/PlayBar";
import PlayButton from "./PlayButton/PlayButton";
function RoundTheme({ list, listToggle, listCount, playing, playNextMusicHandle, listToggleHandle, listSuffleHandle, playPrevHandle, playNextHandle, playingMusicHandle, menuSelectHandle, }) {
    return (React.createElement("div", { className: "round-container" },
        React.createElement("button", { className: "menuSelectBtn", onClick: menuSelectHandle },
            React.createElement("div", { className: "menuSelectBtn-icon" })),
        React.createElement(MusicImage, { list: list[listCount], listToggle: listToggle }),
        React.createElement(PlayBar, { listToggle: listToggle, list: list, listCount: listCount, playing: playing, playNextMusicHandle: playNextMusicHandle }),
        React.createElement(PlayButton, { listToggleHandle: listToggleHandle, listSuffleHandle: listSuffleHandle, playNextHandle: playNextHandle, playPrevHandle: playPrevHandle, playingMusicHandle: playingMusicHandle })));
}
export default RoundTheme;
