import React from "react";
import "./MusicImage.css";
function MusicImage({ list, listToggle }) {
    return (React.createElement("div", { className: `musicimage-container ${listToggle}` },
        React.createElement("img", { className: "musicimage-image", src: list.img, alt: list.title }),
        React.createElement("div", { className: "musicimage-titleBox" },
            React.createElement("div", null, list.title)),
        React.createElement("div", { className: "musicimage-singerBox" },
            React.createElement("div", null, list.singer))));
}
export default MusicImage;
