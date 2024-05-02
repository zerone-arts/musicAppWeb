import React, { useState } from "react";
import "./CirclePlayButton.css";
import arrow from "../../../assets/icon/arrow-white.png";
import arrowLeft from "../../../assets/icon/arrow-left-white.png";
import arrowRight from "../../../assets/icon/arrow-right-white.png";
interface Props {
  listToggleHandle: (value: string) => void;
  listSuffleHandle: () => void;
  playPrevHandle: () => void;
  playNextHandle: () => void;
  playingMusicHandle: (play: boolean) => void;
}
function CirclePlayButton({
  listToggleHandle,
  listSuffleHandle,
  playPrevHandle,
  playNextHandle,
  playingMusicHandle,
}: Props): JSX.Element {
  const [listToggle, setListToggle] = useState<string>("");
  const [playToggle, setPlayToggle] = useState<string>("stop");
  const listHandle = () => {
    if (listToggle === "") {
      listToggleHandle("active");
      setListToggle("active");
    } else {
      listToggleHandle("");
      setListToggle("");
    }
  };

  const playHandle = () => {
    if (playToggle === "stop") {
      setPlayToggle("play");
      playingMusicHandle(true);
    } else {
      setPlayToggle("stop");
      playingMusicHandle(false);
    }
  };

  return (
    <div className={`circle-playbutton-container ${listToggle}`}>
      <div className="circle-playbutton-whiteBox">
        <div
          className="circle-playbutton-whiteBox-arrow"
          id="arrow-left"
          onClick={() => {
            playPrevHandle();
          }}
        >
          <img src={arrowLeft} alt="arrowLeft" />
        </div>
        <div
          className="circle-playbutton-whiteBox-arrow"
          id="arrow-right"
          onClick={() => {
            playNextHandle();
          }}
        >
          <img src={arrowRight} alt="arrowRight" />
        </div>
      </div>
      <div className="circle-playbutton-blackBox" onClick={playHandle}>
        <div className="circle-playbutton-blackBox-arrow">
          {playToggle === "stop" ? (
            <div className="circle-playbutton-blackBox-arrow-triangle"></div>
          ) : (
            <ion-icon name="pause-outline"></ion-icon>
          )}
        </div>
      </div>
      <button
        className="circle-playbutton-shuffleBox"
        onClick={() => {
          listSuffleHandle();
          console.log("---------");
        }}
      >
        <ion-icon name="shuffle-outline"></ion-icon>
      </button>
      <button
        className="circle-playbutton-listBox ${listToggle}"
        onClick={listHandle}
      >
        <ion-icon name="list-outline"></ion-icon>
      </button>
    </div>
  );
}

export default CirclePlayButton;
