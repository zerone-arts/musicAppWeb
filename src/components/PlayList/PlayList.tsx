import React from "react";
import "./PlayList.css";
import List from "../../types/list";
import scrollIcon from "../../assets/icon/scoll.png";
import scrollIconWhite from "../../assets/icon/scroll-white.png";

interface Props {
  listToggle: string;
  listCount: number;
  list: List[];
  theme: string;
}
function PlayList({ listToggle, list, listCount, theme }: Props): JSX.Element {
  return (
    <div className={`playlist-container ${listToggle} ${theme}`}>
      <div className="playlist-wrapper">
        <ul className="playlist-box">
          {list.map((item, idx) => {
            return (
              <li
                key={item.id}
                className={`playlist-box-item ${
                  listCount === idx ? "playing" : ""
                }`}
              >
                <p>
                  {item.title}
                  <span>{item.time}</span>
                </p>
                <p>{item.singer}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`scollIcon ${theme}`}>
        <img
          src={theme === "circle" ? scrollIconWhite : scrollIcon}
          alt="scrollicon"
        />
      </div>
    </div>
  );
}

export default PlayList;
