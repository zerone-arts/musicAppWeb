import React from "react";
import "./CircleTheme.css";

interface Props {
  themeSelectHandle: (count: number) => void;
}
function CircleTheme({ themeSelectHandle }: Props): JSX.Element {
  return <div className="circle-container">CircleTheme</div>;
}

export default CircleTheme;
