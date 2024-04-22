import React from "react";
import "./PlayList.css";
import List from "../../types/list";

interface Props {
  listToggle: string;
  listCount: number;
  list: List[];
}
function PlayList({ listToggle, list, listCount }: Props): JSX.Element {
  return (
    <div className={`playlist-container ${listToggle}`}>
      <ul className="playlist-wrapper">
        {list.map((item, idx) => {
          return (
            <li
              key={item.id}
              className={`playlist-wrapper-item ${
                listCount === idx ? "playing" : ""
              }`}
            >
              <p>
                {item.title}
                <span>3:25</span>
              </p>
              <p>{item.singer}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayList;
