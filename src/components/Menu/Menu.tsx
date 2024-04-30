import React, { MouseEventHandler, useState } from "react";
import "./Menu.css";

interface Props {
  menuSelect: string;
  theme: string;
  menuSelectHandle: () => void;
  MenuSelectListHandle: (list: string) => void;
}

function Menu({
  menuSelect,
  theme,
  menuSelectHandle,
  MenuSelectListHandle,
}: Props): JSX.Element {
  const [menuSlideActive, setMenuSlideActive] = useState<boolean>(false);
  const [mouseDownY, setMouseDownY] = useState<number>(0);
  const [mouseSlideY, setMouseSlideY] = useState<number>(0);

  const menuSlideHandle: MouseEventHandler = (e) => {
    if (menuSlideActive) {
      if (-100 < mouseDownY - e.clientY && mouseDownY - e.clientY < 50) {
        setMouseSlideY(mouseDownY - e.clientY);

        if (-100 < mouseDownY - e.clientY && mouseDownY - e.clientY < -20) {
          menuSelectHandle();
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

  const menuSelectThemeHandle: MouseEventHandler = () => {
    menuSelectHandle();
    MenuSelectListHandle("theme");
  };

  return (
    <div
      className={`menu-container ${theme} ${menuSelect}`}
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
      <ul className="menu-listBox">
        <li className="menu-list">
          <button onClick={menuSelectThemeHandle}>Theme</button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
