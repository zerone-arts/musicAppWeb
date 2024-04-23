import React, { useState } from "react";
import "./HideMusic.css";
import ReactPlayer from "react-player";
import List from "../../types/list";

interface Props {
  list: List[];
  listCount: number;
}
function HideMusic({ list, listCount }: Props): JSX.Element {
  const [time, setTime] = useState<number[]>([]);

  const getTime = (duration: number, id: number) => {
    console.log(duration, id);
  };

  return (
    <div className="hidemusic-container">
      {list.map((item, idx) => {
        return (
          <div className="test" key={idx}>
            <p style={{ fontSize: "20px", color: "white" }}>{time[idx]}</p>
            <ReactPlayer
              className="player"
              width="200px"
              height="200px"
              url={item.url}
              onDuration={(duration) => getTime(duration, item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HideMusic;
