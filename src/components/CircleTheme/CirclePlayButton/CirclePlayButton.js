import React, { useState } from "react";
import "./CirclePlayButton.css";
import arrowLeft from "../../../assets/icon/arrow-left-white.png";
import arrowRight from "../../../assets/icon/arrow-right-white.png";
function CirclePlayButton({ listToggleHandle, listSuffleHandle, playPrevHandle, playNextHandle, playingMusicHandle, }) {
    const [listToggle, setListToggle] = useState("");
    const [playToggle, setPlayToggle] = useState("stop");
    const listHandle = () => {
        if (listToggle === "") {
            listToggleHandle("active");
            setListToggle("active");
        }
        else {
            listToggleHandle("");
            setListToggle("");
        }
    };
    const playHandle = () => {
        if (playToggle === "stop") {
            setPlayToggle("play");
            playingMusicHandle(true);
        }
        else {
            setPlayToggle("stop");
            playingMusicHandle(false);
        }
    };
    return (React.createElement("div", { className: `circle-playbutton-container ${listToggle}` },
        React.createElement("div", { className: "circle-playbutton-whiteBox" },
            React.createElement("div", { className: "circle-playbutton-whiteBox-arrow", id: "arrow-left", onClick: () => {
                    playPrevHandle();
                } },
                React.createElement("img", { src: arrowLeft, alt: "arrowLeft" })),
            React.createElement("div", { className: "circle-playbutton-whiteBox-arrow", id: "arrow-right", onClick: () => {
                    playNextHandle();
                } },
                React.createElement("img", { src: arrowRight, alt: "arrowRight" }))),
        React.createElement("div", { className: "circle-playbutton-blackBox", onClick: playHandle },
            React.createElement("div", { className: "circle-playbutton-blackBox-arrow" }, playToggle === "stop" ? (React.createElement("div", { className: "circle-playbutton-blackBox-arrow-triangle" })) : (React.createElement("ion-icon", { name: "pause-outline" })))),
        React.createElement("button", { className: "circle-playbutton-shuffleBox", onClick: () => {
                listSuffleHandle();
                console.log("---------");
            } },
            React.createElement("ion-icon", { name: "shuffle-outline" })),
        React.createElement("button", { className: "circle-playbutton-listBox ${listToggle}", onClick: listHandle },
            React.createElement("ion-icon", { name: "list-outline" }))));
}
export default CirclePlayButton;
