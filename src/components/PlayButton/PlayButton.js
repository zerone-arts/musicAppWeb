import React, { useState } from "react";
import "./PlayButton.css";
import arrow from "../../assets/icon/arrow.png";
import arrowLeft from "../../assets/icon/arrow-left.png";
import arrowRight from "../../assets/icon/arrow-right.png";
function PlayButton({ listToggleHandle, listSuffleHandle, playPrevHandle, playNextHandle, }) {
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
        }
        else {
            setPlayToggle("stop");
        }
    };
    console.log(listToggle);
    return (React.createElement("div", { className: `playbutton-container ${listToggle}` },
        React.createElement("div", { className: "playbutton-whiteBox" },
            React.createElement("div", { className: "playbutton-whiteBox-arrow", id: "arrow-left", onClick: () => {
                    playPrevHandle();
                } },
                React.createElement("img", { src: arrowLeft, alt: "arrowLeft" })),
            React.createElement("div", { className: "playbutton-whiteBox-arrow", id: "arrow-right", onClick: () => {
                    playNextHandle();
                } },
                React.createElement("img", { src: arrowRight, alt: "arrowRight" }))),
        React.createElement("div", { className: "playbutton-blackBox", onClick: playHandle },
            React.createElement("div", { className: "playbutton-blackBox-arrow" }, playToggle === "stop" ? (React.createElement("img", { src: arrow, alt: "arrow" })) : (React.createElement("ion-icon", { name: "pause-outline" })))),
        React.createElement("button", { className: "playbutton-shuffleBox", onClick: () => {
                listSuffleHandle();
            } },
            React.createElement("ion-icon", { name: "shuffle-outline" })),
        React.createElement("button", { className: "playbutton-listBox ${listToggle}", onClick: listHandle },
            React.createElement("ion-icon", { name: "list-outline" }))));
}
export default PlayButton;
