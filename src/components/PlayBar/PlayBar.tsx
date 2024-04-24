import React, { useRef, useState } from "react";
import "./PlayBar.css";
import ReactPlayer from "react-player";
import List from "../../types/list";

interface Props {
  listToggle: string;
  list: List[];
  listCount: number;
  playing: boolean;
  playNextMusicHandle: () => void;
}
function PlayBar({
  listToggle,
  list,
  listCount,
  playing,
  playNextMusicHandle,
}: Props): JSX.Element {
  const [played, setPlayed] = useState<number>(0);
  const playerRef = useRef<ReactPlayer | null>(null);

  console.log(played);
  return (
    <div className={`playbar-container ${listToggle}`}>
      <div className="playbar-time">01:20</div>
      <div className="playbar-hidemusic">
        <ReactPlayer
          width={200}
          height={100}
          url={list[listCount].url}
          onEnded={playNextMusicHandle}
          playing={playing}
          onProgress={({ played }) => setPlayed(played)}
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
      <div className="playbar-bar">
        <div className="playbar-bar-background">
          <div className="testtest"></div>
        </div>
      </div>
    </div>
  );
}

export default PlayBar;
