import React, { useState } from "react";
import List from "../../types/list";
import "./MusicImage.css";
interface Props {
  list: List;
  listToggle: string;
}
function MusicImage({ list, listToggle }: Props): JSX.Element {
  return (
    <div className={`musicimage-container ${listToggle}`}>
      <img className="musicimage-image" src={list.img} alt={list.title} />
      <div className="musicimage-titleBox">
        <div>{list.title}</div>
      </div>
      <div className="musicimage-singerBox">
        <div>{list.singer}</div>
      </div>
    </div>
  );
}

export default MusicImage;
