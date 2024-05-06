import React, { useState } from "react";
import "./RecordPlayButton.css";
import arrowLeft from "../../../assets/icon/arrow-left.png";
import arrowRight from "../../../assets/icon/arrow-right.png";
function RecordPlayButton({ listToggleHandle, listSuffleHandle, playPrevHandle, playNextHandle, playingMusicHandle, }) {
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
    return (React.createElement("div", { className: `record-playbutton-container ${listToggle}` },
        React.createElement("div", { className: "record-playbutton-whiteBox" },
            React.createElement("div", { className: "record-playbutton-whiteBox-arrow", id: "arrow-left", onClick: () => {
                    playPrevHandle();
                } },
                React.createElement("img", { src: arrowLeft, alt: "arrowLeft" })),
            React.createElement("div", { className: "record-playbutton-whiteBox-arrow", id: "arrow-right", onClick: () => {
                    playNextHandle();
                } },
                React.createElement("img", { src: arrowRight, alt: "arrowRight" }))),
        React.createElement("div", { className: "record-playbutton-blackBox", onClick: playHandle },
            React.createElement("div", { className: "record-playbutton-blackBox-arrow" }, playToggle === "stop" ? (React.createElement("div", { className: "record-playbutton-blackBox-arrow-triangle" })) : (React.createElement("ion-icon", { name: "pause-outline" })))),
        React.createElement("button", { className: "record-playbutton-shuffleBox", onClick: () => {
                listSuffleHandle();
                console.log("---------");
            } },
            React.createElement("ion-icon", { name: "shuffle-outline" })),
        React.createElement("button", { className: "record-playbutton-listBox ${listToggle}", onClick: listHandle },
            React.createElement("ion-icon", { name: "list-outline" }))));
}
export default RecordPlayButton;
