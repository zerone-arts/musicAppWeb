import React, { useEffect, useRef, useState } from "react";
import "./MusicImage.css";
function MusicImage({ list, listToggle }) {
    const [titleWidth, setTitleWidth] = useState(0);
    const titleWidthRef = useRef(null);
    useEffect(() => {
        var _a;
        let width = (_a = titleWidthRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width;
        if (typeof width === "number")
            setTitleWidth(width);
    }, [list.title]);
    return (React.createElement("div", { className: `musicimage-container ${listToggle}` },
        React.createElement("img", { className: "musicimage-image", src: list.img, alt: list.title }),
        React.createElement("div", { className: "musicimage-titleBox" },
            React.createElement("div", { className: `musicimage-titleBox-title ${titleWidth >= 200 ? "over" : ""}` },
                React.createElement("span", null, list.title),
                titleWidth >= 200 ? React.createElement("span", null, list.title) : "",
                titleWidth >= 200 ? React.createElement("span", null, list.title) : "",
                titleWidth >= 200 ? React.createElement("span", null, list.title) : "",
                titleWidth >= 200 ? React.createElement("span", null, list.title) : "")),
        React.createElement("div", { className: "musicimage-singerBox" },
            React.createElement("div", null, list.singer)),
        React.createElement("div", { className: "musicImage-titleWidth" },
            React.createElement("span", { ref: titleWidthRef }, list.title))));
}
export default MusicImage;
