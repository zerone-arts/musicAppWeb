import React from "react";
import "./PlayList.css";
import scrollIcon from "../../assets/icon/scoll.png";
import scrollIconWhite from "../../assets/icon/scroll-white.png";
function PlayList({ listToggle, list, listCount, theme }) {
    return (React.createElement("div", { className: `playlist-container ${listToggle} ${theme}` },
        React.createElement("div", { className: "playlist-wrapper" },
            React.createElement("ul", { className: "playlist-box" }, list.map((item, idx) => {
                return (React.createElement("li", { key: item.id, className: `playlist-box-item ${listCount === idx ? "playing" : ""}` },
                    React.createElement("p", null,
                        item.title,
                        React.createElement("span", null, item.time)),
                    React.createElement("p", null, item.singer)));
            }))),
        React.createElement("div", { className: `scollIcon ${theme}` },
            React.createElement("img", { src: theme === "circle" ? scrollIconWhite : scrollIcon, alt: "scrollicon" }))));
}
export default PlayList;
