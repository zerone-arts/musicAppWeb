import React from "react";
import "./PlayBar.css";

interface Props {
  listToggle: string;
}
function PlayBar({ listToggle }: Props): JSX.Element {
  return (
    <div className={`playbar-container ${listToggle}`}>
      <div className="playbar-time">01:20</div>
    </div>
  );
}

export default PlayBar;
