import React from "react";
import "./PlayList.css";
function PlayList({ listToggle, list, listCount }) {
    return (React.createElement("div", { className: `playlist-container ${listToggle}` },
        React.createElement("ul", { className: "playlist-wrapper" }, list.map((item, idx) => {
            return (React.createElement("li", { key: item.id, className: `playlist-wrapper-item ${listCount === idx ? "playing" : ""}` },
                React.createElement("p", null,
                    item.title,
                    React.createElement("span", null, item.time)),
                React.createElement("p", null, item.singer)));
        }))));
}
export default PlayList;
