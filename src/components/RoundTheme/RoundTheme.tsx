import React from "react";
import "./RoundTheme.css";
import MusicImage from "./MusicImage/MusicImage";
import List from "../../types/list";
import PlayBar from "./PlayBar/PlayBar";
import PlayButton from "./PlayButton/PlayButton";
interface Props {
  list: List[];
  listToggle: string;
  listCount: number;
  playing: boolean;
  playNextMusicHandle: () => void;
  listToggleHandle: (value: string) => void;
  listSuffleHandle: () => void;
  playPrevHandle: () => void;
  playNextHandle: () => void;
  playingMusicHandle: (play: boolean) => void;
  themeSelectHandle: () => void;
}
function RoundTheme({
  list,
  listToggle,
  listCount,
  playing,
  playNextMusicHandle,
  listToggleHandle,
  listSuffleHandle,
  playPrevHandle,
  playNextHandle,
  playingMusicHandle,
  themeSelectHandle,
}: Props): JSX.Element {
  return (
    <div className="round-container">
      <button className="themeSelectBtn" onClick={themeSelectHandle}>
        <div className="themeSelectBtn-icon"></div>
      </button>
      <MusicImage list={list[listCount]} listToggle={listToggle} />
      <PlayBar
        listToggle={listToggle}
        list={list}
        listCount={listCount}
        playing={playing}
        playNextMusicHandle={playNextMusicHandle}
      />
      <PlayButton
        listToggleHandle={listToggleHandle}
        listSuffleHandle={listSuffleHandle}
        playNextHandle={playNextHandle}
        playPrevHandle={playPrevHandle}
        playingMusicHandle={playingMusicHandle}
      />
    </div>
  );
}

export default RoundTheme;
