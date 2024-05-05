import React, { useEffect, useRef, useState } from "react";
import "./RecordPlayBar.css";
import CircularSlider from "react-circular-slider-svg";
import ReactPlayer from "react-player";
import List from "../../../types/list";

interface Props {
  listToggle: string;
  list: List[];
  listCount: number;
  playing: boolean;
  playNextMusicHandle: () => void;
  theme: string;
}

function RecordPlayBar({
  listToggle,
  list,
  listCount,
  playing,
  playNextMusicHandle,
  theme,
}: Props): JSX.Element {
  const [played, setPlayed] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [time, setTime] = useState<string>("0:00");
  const playerRef = useRef<ReactPlayer | null>(null);

  const circularSliderValue = (e: any) => {
    setPlayed(parseFloat(e.target.value));
    playerRef.current!.seekTo(parseFloat(e.target.value));
  };

  useEffect(() => {
    let timeGet: string, min: string | number, sec: string | number;
    let playedDuration = Math.floor(played * duration);
    min = parseInt(`${playedDuration / 60}`);
    sec = playedDuration % 60;
    timeGet = `${min}:${sec < 10 ? `0${sec}` : sec}`;

    setTime(timeGet);
  }, [played]);
  return (
    <div className={`record-playbar-container ${listToggle}`}>
      <div className="record-playbar-hidemusic">
        <ReactPlayer
          width={200}
          height={100}
          url={list[listCount].url}
          onEnded={playNextMusicHandle}
          playing={theme === "record" ? playing : false}
          volume={0.2}
          onProgress={({ played }) => setPlayed(played)}
          onDuration={(duration) => setDuration(duration)}
          ref={playerRef}
        />
      </div>
      <div className="record-time-present">{time}</div>
      <div className="record-playBar">
        <input
          type="range"
          min={0}
          max={0.9999}
          step="any"
          value={played}
          onChange={(e) => circularSliderValue(e)}
        />
      </div>
      <div className="record-time-duration">{list[listCount].time}</div>
    </div>
  );
}

export default RecordPlayBar;
