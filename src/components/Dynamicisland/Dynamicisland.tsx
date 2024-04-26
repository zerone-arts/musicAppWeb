import React from "react";
import "./Dynamicisland.css";
import dynamicislandLensImg from "../../assets/img/iPhone-dynamicisland-lens.png";

interface Props {
  playing: boolean;
}

function Dynamicisland({ playing }: Props): JSX.Element {
  return (
    <div className="dynamicisland-container">
      <img
        id="dynamicislandLensImg"
        src={dynamicislandLensImg}
        alt="dynamicislandLensImg"
      />
      <div className={`dynamicisland-play ${playing ? "play" : ""}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Dynamicisland;
