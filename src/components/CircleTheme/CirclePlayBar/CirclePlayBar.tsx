import React, { useEffect, useRef, useState } from "react";
import "./CirclePlayBar.css";
import CircularSlider from "react-circular-slider-svg";
import ReactPlayer from "react-player";
import List from "../../../types/list";

interface Props {
  listToggle: string;
  list: List[];
  listCount: number;
  playing: boolean;
  playNextMusicHandle: () => void;
  bgGradientArr: string[];
  theme: string;
}

function CirclePlayBar({
  listToggle,
  list,
  listCount,
  playing,
  playNextMusicHandle,
  bgGradientArr,
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
    <div className={`circle-playbar-container ${listToggle} ${bgGradientArr}`}>
      <div className="circle-playbar-time">
        <span style={playing ? { opacity: 1 } : { opacity: 0.5 }}> {time}</span>
        <span style={playing ? { opacity: 1 } : { opacity: 0.5 }}>|</span>
        <span
          style={
            playing
              ? { color: `#f1caa5`, opacity: 1 }
              : { color: `#fff`, opacity: 0.5 }
          }
        >
          {list[listCount].time}
        </span>
      </div>
      <div className="circle-playbar-hidemusic">
        <ReactPlayer
          width={200}
          height={100}
          url={list[listCount].url}
          onEnded={playNextMusicHandle}
          playing={theme === "circle" ? playing : false}
          volume={0.2}
          onProgress={({ played }) => setPlayed(played)}
          onDuration={(duration) => setDuration(duration)}
          ref={playerRef}
        />
      </div>
      <div className="circle-playBar">
        <CircularSlider
          size={250}
          minValue={0}
          maxValue={100}
          startAngle={30}
          endAngle={330}
          angleType={{
            direction: "cw",
            axis: "-y",
          }}
          handle1={{
            value: played * 100,

            onChange: (v) => circularSliderValue(v),
          }}
          arcColor="#ddad87"
          arcBackgroundColor="rgba(255,255,255,0.1)"
        />
      </div>
    </div>
  );
}

export default CirclePlayBar;
