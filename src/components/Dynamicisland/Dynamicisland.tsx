import React from "react";
import "./Dynamicisland.css";
import dynamicislandLensImg from "../../assets/img/iPhone-dynamicisland-lens.png";

function Dynamicisland(): JSX.Element {
  return (
    <div className="dynamicisland-container">
      <img
        id="dynamicislandLensImg"
        src={dynamicislandLensImg}
        alt="dynamicislandLensImg"
      />
    </div>
  );
}

export default Dynamicisland;
