import React, { useEffect, useRef, useState } from "react";
import List from "../../types/list";
import "./MusicImage.css";
interface Props {
  list: List;
  listToggle: string;
}
function MusicImage({ list, listToggle }: Props): JSX.Element {
  const [titleWidth, setTitleWidth] = useState<number>(0);
  const titleWidthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let width = titleWidthRef.current?.getBoundingClientRect().width;
    if (typeof width === "number") setTitleWidth(width);
  }, [list.title]);

  return (
    <div className={`musicimage-container ${listToggle}`}>
      <img className="musicimage-image" src={list.img} alt={list.title} />
      <div className="musicimage-titleBox">
        <div
          className={`musicimage-titleBox-title ${
            titleWidth >= 200 ? "over" : ""
          }`}
        >
          <span>{list.title}</span>

          {titleWidth >= 200 ? <span>{list.title}</span> : ""}
          {titleWidth >= 200 ? <span>{list.title}</span> : ""}
          {titleWidth >= 200 ? <span>{list.title}</span> : ""}
          {titleWidth >= 200 ? <span>{list.title}</span> : ""}
        </div>
      </div>
      <div className="musicimage-singerBox">
        <div>{list.singer}</div>
      </div>

      <div className="musicImage-titleWidth">
        <span ref={titleWidthRef}>{list.title}</span>
      </div>
    </div>
  );
}

export default MusicImage;
