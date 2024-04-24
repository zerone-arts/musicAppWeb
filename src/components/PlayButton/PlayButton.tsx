import React, { useState } from "react";
import "./PlayButton.css";
import arrow from "../../assets/icon/arrow.png";
import arrowLeft from "../../assets/icon/arrow-left.png";
import arrowRight from "../../assets/icon/arrow-right.png";
interface Props {
  listToggleHandle: (value: string) => void;
  listSuffleHandle: () => void;
  playPrevHandle: () => void;
  playNextHandle: () => void;
  playingMusicHandle: (play: boolean) => void;
}
function PlayButton({
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
    <div className={`playbutton-container ${listToggle}`}>
      <div className="playbutton-whiteBox">
        <div
          className="playbutton-whiteBox-arrow"
          id="arrow-left"
          onClick={() => {
            playPrevHandle();
          }}
        >
          <img src={arrowLeft} alt="arrowLeft" />
        </div>
        <div
          className="playbutton-whiteBox-arrow"
          id="arrow-right"
          onClick={() => {
            playNextHandle();
          }}
        >
          <img src={arrowRight} alt="arrowRight" />
        </div>
      </div>
      <div className="playbutton-blackBox" onClick={playHandle}>
        <div className="playbutton-blackBox-arrow">
          {playToggle === "stop" ? (
            <img src={arrow} alt="arrow" />
          ) : (
            <ion-icon name="pause-outline"></ion-icon>
          )}
        </div>
      </div>
      <button
        className="playbutton-shuffleBox"
        onClick={() => {
          listSuffleHandle();
          console.log("---------");
        }}
      >
        <ion-icon name="shuffle-outline"></ion-icon>
      </button>
      <button className="playbutton-listBox ${listToggle}" onClick={listHandle}>
        <ion-icon name="list-outline"></ion-icon>
      </button>
    </div>
  );
}

export default PlayButton;
