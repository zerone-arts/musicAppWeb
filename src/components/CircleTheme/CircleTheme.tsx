import React, { useEffect, useState } from "react";
import "./CircleTheme.css";
import List from "../../types/list";
import Grade from "grade-js";

interface Props {
  list: List;
  themeSelectHandle: (count: number) => void;
}
function CircleTheme({ list, themeSelectHandle }: Props): JSX.Element {
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

  console.log(list.img);
  return (
    <div className={`circle-container ${bgGradientArr[list.id - 1]}`}>
      <div className="circle-listImg">
        <img
          src={list.img}
          alt="img"
          onLoad={() => gradientImage()}
          style={
            list.id == 1
              ? { transform: `translate(-50%, -50%) rotate(90deg)` }
              : {
                  transform: `translate(-50%, -50%) `,
                }
          }
        />
      </div>
    </div>
  );
}

export default CircleTheme;
