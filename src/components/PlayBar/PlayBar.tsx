import React, { useState } from "react";
import "./PlayBar.css";
import ReactPlayer from "react-player";
import List from "../../types/list";

interface Props {
  listToggle: string;
  list: List[];
  listCount: number;
}
function PlayBar({ listToggle, list, listCount }: Props): JSX.Element {
  const [time, setTime] = useState<number>(0);

  return (
    <div className={`playbar-container ${listToggle}`}>
      <div className="playbar-time">01:20</div>
      <ReactPlayer
        width={200}
        height={100}
        url={list[listCount].url}
        onDuration={(duration) => setTime(duration)}
      />
    </div>
  );
}

export default PlayBar;
