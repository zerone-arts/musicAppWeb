import React, { useState } from "react";
import "./Menu.css";
function Menu({ themeSelect, theme, themeSelectHandle }) {
    const [menuSlideActive, setMenuSlideActive] = useState(false);
    const [mouseDownY, setMouseDownY] = useState(0);
    const [mouseSlideY, setMouseSlideY] = useState(0);
    const menuSlideHandle = (e) => {
        if (menuSlideActive) {
            if (-100 < mouseDownY - e.clientY && mouseDownY - e.clientY < 50) {
                setMouseSlideY(mouseDownY - e.clientY);
                if (-100 < mouseDownY - e.clientY && mouseDownY - e.clientY < -20) {
                    themeSelectHandle();
                    setMouseSlideY(0);
                    setMenuSlideActive(false);
                }
            }
        }
    };
    const MouseDownHandle = (e) => {
        setMenuSlideActive(true);
        setMouseDownY(e.clientY);
    };
    return (React.createElement("div", { className: `menu-container ${theme} ${themeSelect}`, onMouseDown: MouseDownHandle, onMouseUp: () => setMenuSlideActive(false), onMouseMove: menuSlideHandle, style: menuSlideActive
            ? { bottom: mouseSlideY, transition: `0s` }
            : { bottom: mouseSlideY, transition: `0.5s` } },
        React.createElement("button", { className: "closeMenuBtn" })));
}
export default Menu;
