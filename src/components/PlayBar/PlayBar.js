import React from "react";
import "./PlayBar.css";
function PlayBar({ listToggle }) {
    return (React.createElement("div", { className: `playbar-container ${listToggle}` },
        React.createElement("div", { className: "playbar-time" }, "01:20")));
}
export default PlayBar;
