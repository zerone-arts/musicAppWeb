import React, { useEffect, useRef, useState } from "react";
import "./PlayBar.css";
import ReactPlayer from "react-player";
import List from "../../../types/list";
import CircularSlider from "react-circular-slider-svg";

interface Props {
  listToggle: string;
  list: List[];
  listCount: number;
  playing: boolean;
  playNextMusicHandle: () => void;
  theme: string;
}
function PlayBar({
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

  const circularSliderValue = (v: number) => {
    setPlayed(v * 0.01);
    playerRef.current!.seekTo(v * 0.01);
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
    <div className={`playbar-container ${listToggle}`}>
      <div className="playbar-time">{time}</div>
      <div className="playbar-hidemusic">
        <ReactPlayer
          width={200}
          height={100}
          url={list[listCount].url}
          onEnded={playNextMusicHandle}
          playing={theme === "round" ? playing : false}
          volume={0.5}
          onProgress={({ played }) => setPlayed(played)}
          onDuration={(duration) => setDuration(duration)}
          ref={playerRef}
        />
      </div>
      {/* <input
        className="playbar-input"
        type="range"
        min="0"
        max="0.999999"
        step="any"
        value={played}
        onChange={(e) => {
          setPlayed(parseFloat(e.target.value)); // 재생 포인트 위치 실시간 변경
          playerRef.current!.seekTo(parseFloat(e.target.value)); // 실제 영상 재생 위치 실시간 변경
        }}
      /> */}
      <div className="playbar-halfBar-container">
        <CircularSlider
          size={270}
          minValue={0}
          maxValue={100}
          startAngle={110}
          endAngle={250}
          angleType={{
            direction: "cw",
            axis: "-y",
          }}
          handle1={{
            value: played * 100,

            onChange: (v) => circularSliderValue(v),
          }}
          arcColor="black"
          arcBackgroundColor="#CECECE"
        />
      </div>
    </div>
  );
}

export default PlayBar;
