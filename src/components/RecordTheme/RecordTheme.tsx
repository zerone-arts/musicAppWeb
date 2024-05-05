import React from "react";
import "./RecordTheme.css";
import List from "../../types/list";
import cdImg from "../../assets/img/cd.png";
import RecordPlayBar from "./RecordPlayBar/RecordPlayBar";
import RecordPlayButton from "./RecordPlayButton/RecordPlayButton";
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
  menuSelectHandle: () => void;
  theme: string;
}
function RecordTheme({
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
  menuSelectHandle,
  theme,
}: Props): JSX.Element {
  return (
    <div className="record-container">
      <div className="record-lp-wrapper">
        <div
          className="record-lp-cdBox"
          style={
            playing
              ? { animation: `cdAnimate 7s infinite linear` }
              : { animation: "none" }
          }
        >
          <img src={cdImg} alt="cdImg" />
          <div className="record-lp-innerImgBox">
            <img src={list[listCount].img} alt="recordinnerImg" />
          </div>
        </div>
        <div className="record-lp-imgBox">
          <img src={list[listCount].img} alt="recordImg" />
        </div>
      </div>
      <RecordPlayBar
        listToggle={listToggle}
        list={list}
        listCount={listCount}
        playing={playing}
        playNextMusicHandle={playNextMusicHandle}
        theme={theme}
      />
      <RecordPlayButton
        listToggleHandle={listToggleHandle}
        listSuffleHandle={listSuffleHandle}
        playNextHandle={playNextHandle}
        playPrevHandle={playPrevHandle}
        playingMusicHandle={playingMusicHandle}
      />
    </div>
  );
}

export default RecordTheme;
