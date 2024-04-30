import React, { useState } from "react";
import "./HideMusic.css";
import ReactPlayer from "react-player";
import List from "../../types/list";

interface Props {
  list: List[];
  listCount: number;
  getTimeHandle: (timeGetList: List[]) => void;
}
function HideMusic({ list, listCount, getTimeHandle }: Props): JSX.Element {
  const [time, setTime] = useState<number[]>([]);

  const getTime = (duration: number, id: number) => {
    let timeGet: string, min: string | number, sec: string | number;

    min = parseInt(`${duration / 60}`);
    sec = duration % 60;
    timeGet = `${min}:${sec < 10 ? `0${sec}` : sec}`;

    let timeGetList: List[] = list;

    timeGetList.map((item, idx) => {
      if (!item.time) {
        let found = list.findIndex((e) => e.id === id);
        timeGetList[found].time = timeGet;

        getTimeHandle(timeGetList);
      }
    });
  };

  return (
    <div className="hidemusic-container">
      {list.map((item, idx) => {
        return (
          <div className="hideMusic" key={idx}>
            <p style={{ fontSize: "20px", color: "white" }}>{time[idx]}</p>
            <ReactPlayer
              className="player"
              width="100px"
              height="100px"
              url={item.url}
              onDuration={(duration) => getTime(duration, item.id)}
            />
            <audio src=""></audio>
          </div>
        );
      })}
    </div>
  );
}

export default HideMusic;
