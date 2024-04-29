import React, { MouseEventHandler, useState } from "react";
import "./Menu.css";

interface Props {
  themeSelect: string;
  theme: string;
  themeSelectHandle: () => void;
}

function Menu({ themeSelect, theme, themeSelectHandle }: Props): JSX.Element {
  const [menuSlideActive, setMenuSlideActive] = useState<boolean>(false);
  const [mouseDownY, setMouseDownY] = useState<number>(0);
  const [mouseSlideY, setMouseSlideY] = useState<number>(0);
  const menuSlideHandle: MouseEventHandler = (e) => {
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

  const MouseDownHandle: MouseEventHandler = (e) => {
    setMenuSlideActive(true);
    setMouseDownY(e.clientY);
  };

  return (
    <div
      className={`menu-container ${theme} ${themeSelect}`}
      onMouseDown={MouseDownHandle}
      onMouseUp={() => setMenuSlideActive(false)}
      onMouseMove={menuSlideHandle}
      style={
        menuSlideActive
          ? { bottom: mouseSlideY, transition: `0s` }
          : { bottom: mouseSlideY, transition: `0.5s` }
      }
    >
      <button className="closeMenuBtn"></button>
    </div>
  );
}

export default Menu;
