import React, { useEffect, useRef, useState } from "react";
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
  const [titleWidth, setTitleWidth] = useState<number>(0);
  const titleWidthRef = useRef<HTMLDivElement>(null);
  const [playBtnCount, setPlayBtnCount] = useState<number>(0);
  const cdRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let width = titleWidthRef.current?.getBoundingClientRect().width;
    if (typeof width === "number") setTitleWidth(width);
  }, [list[listCount].title]);

  return (
    <div className="record-container">
      <button
        className="record-menuSelectBtn"
        onClick={menuSelectHandle}
        style={{}}
      >
        <div className="record-menuSelectBtn-icon"></div>
      </button>
      <div className="record-lp-wrapper">
        <div
          className="record-lp-cdBox"
          style={
            playing
              ? { animation: `cdAnimate 7s infinite linear` }
              : { animation: "none" }
          }
          ref={cdRef}
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

      <div className={`record-titleBox ${listToggle}`}>
        <div
          className={`record-titleBox-title ${titleWidth >= 200 ? "over" : ""}`}
        >
          <span>{list[listCount].title}</span>

          {titleWidth >= 200 ? <span>{list[listCount].title}</span> : ""}
          {titleWidth >= 200 ? <span>{list[listCount].title}</span> : ""}
          {titleWidth >= 200 ? <span>{list[listCount].title}</span> : ""}
          {titleWidth >= 200 ? <span>{list[listCount].title}</span> : ""}
        </div>
      </div>

      <div className={`record-singerBox ${listToggle}`}>
        <div>{list[listCount].singer}</div>
      </div>

      <div className={`record-titleWidth`}>
        <span ref={titleWidthRef}>{list[listCount].title}</span>
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
