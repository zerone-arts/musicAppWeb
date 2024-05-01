import React, { useState } from "react";
import "./CircleTheme.css";
function CircleTheme({ list, themeSelectHandle }) {
    const gradientImage = () => {
        // Grade(document.querySelectorAll(".circle-container"));
    };
    const [bgGradientArr, setBgGradientArr] = useState([
        "one",
        "two",
        "three",
        "four",
        "five",
    ]);
    console.log(list.img);
    return (React.createElement("div", { className: `circle-container ${bgGradientArr[list.id - 1]}` },
        React.createElement("div", { className: "circle-listImg" },
            React.createElement("img", { src: list.img, alt: "img", onLoad: () => gradientImage(), style: list.id == 1
                    ? { transform: `translate(-50%, -50%) rotate(90deg)` }
                    : {
                        transform: `translate(-50%, -50%) `,
                    } }))));
}
export default CircleTheme;
