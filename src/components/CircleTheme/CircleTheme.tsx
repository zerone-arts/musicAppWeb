import React, { useEffect, useState } from "react";
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
  themeSelectHandle,
  listToggleHandle,
  listSuffleHandle,
  playPrevHandle,
  playNextHandle,
  playingMusicHandle,
  menuSelectHandle,
  menuSelectList,
}: Props): JSX.Element {
  const gradientImage = () => {
    // Grade(document.querySelectorAll(".circle-container"));
  };
  const [bgGradientArr, setBgGradientArr] = useState<string[]>([
    "one",
    "two",
    "three",
    "four",
    "five",
  ]);

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
          onLoad={() => gradientImage()}
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

      <CirclePlayBar
        listToggle={listToggle}
        list={list}
        listCount={listCount}
        playing={playing}
        playNextMusicHandle={playNextMusicHandle}
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
