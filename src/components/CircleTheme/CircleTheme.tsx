import React, { useEffect, useRef, useState } from "react";
import "./CircleTheme.css";
import List from "../../types/list";
import Grade from "grade-js";
import CirclePlayBar from "./CirclePlayBar/CirclePlayBar";
import CirclePlayButton from "./CirclePlayButton/CirclePlayButton";

interface Props {
  list: List[];
  listToggle: string;
  listCount: number;
  playing: boolean;
  menuSelectList: string;
  theme: string;
  playNextMusicHandle: () => void;
  listToggleHandle: (value: string) => void;
  listSuffleHandle: () => void;
  playPrevHandle: () => void;
  playNextHandle: () => void;
  playingMusicHandle: (play: boolean) => void;
  themeSelectHandle: (count: number) => void;
  menuSelectHandle: () => void;
}
function CircleTheme({
  list,
  listCount,
  listToggle,
  playing,
  playNextMusicHandle,
  listToggleHandle,
  listSuffleHandle,
  playPrevHandle,
  playNextHandle,
  playingMusicHandle,
  menuSelectHandle,
  menuSelectList,
  theme,
}: Props): JSX.Element {
  const [bgGradientArr, setBgGradientArr] = useState<string[]>([
    "one",
    "two",
    "three",
    "four",
    "five",
  ]);

  const [titleWidth, setTitleWidth] = useState<number>(0);
  const titleWidthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let width = titleWidthRef.current?.getBoundingClientRect().width;
    if (typeof width === "number") setTitleWidth(width);
  }, [list[listCount].title]);

  return (
    <div
      className={`circle-container ${
        bgGradientArr[list[listCount].id - 1]
      } ${menuSelectList}`}
    >
      <div className={`circle-listImg ${listToggle}`}>
        <img
          src={list[listCount].img}
          alt="img"
          style={
            list[listCount].id == 1
              ? { transform: `translate(-50%, -50%) rotate(90deg)` }
              : {
                  transform: `translate(-50%, -50%) `,
                }
          }
        />
      </div>
      <button className="circle-menuSelectBtn" onClick={menuSelectHandle}>
        <div className="circle-menuSelectBtn-icon"></div>
      </button>

      <div className={`circle-titleBox ${listToggle}`}>
        <div
          className={`circle-titleBox-title ${titleWidth >= 200 ? "over" : ""}`}
        >
          <span>{list[listCount].title}</span>

          {titleWidth >= 200 ? <span>{list[listCount].title}</span> : ""}
          {titleWidth >= 200 ? <span>{list[listCount].title}</span> : ""}
          {titleWidth >= 200 ? <span>{list[listCount].title}</span> : ""}
          {titleWidth >= 200 ? <span>{list[listCount].title}</span> : ""}
        </div>
      </div>
      <div className={`circle-singerBox ${listToggle}`}>
        <div>{list[listCount].singer}</div>
      </div>

      <div className="circle-titleWidth">
        <span ref={titleWidthRef}>{list[listCount].title}</span>
      </div>
      <CirclePlayBar
        listToggle={listToggle}
        list={list}
        listCount={listCount}
        playing={playing}
        playNextMusicHandle={playNextMusicHandle}
        bgGradientArr={bgGradientArr}
        theme={theme}
      />

      <CirclePlayButton
        listToggleHandle={listToggleHandle}
        listSuffleHandle={listSuffleHandle}
        playNextHandle={playNextHandle}
        playPrevHandle={playPrevHandle}
        playingMusicHandle={playingMusicHandle}
      />
    </div>
  );
}

export default CircleTheme;
