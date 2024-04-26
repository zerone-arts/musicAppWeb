import React from "react";
import "./Dynamicisland.css";
import dynamicislandLensImg from "../../assets/img/iPhone-dynamicisland-lens.png";
function Dynamicisland({ playing }) {
    return (React.createElement("div", { className: "dynamicisland-container" },
        React.createElement("img", { id: "dynamicislandLensImg", src: dynamicislandLensImg, alt: "dynamicislandLensImg" }),
        React.createElement("div", { className: `dynamicisland-play ${playing ? "play" : ""}` },
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null))));
}
export default Dynamicisland;
