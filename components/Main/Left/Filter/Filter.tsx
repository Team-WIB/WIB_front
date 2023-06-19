/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React, { useState } from "react";

export default function Filter() {
  const [chooseMajor, setChooseMajor] = useState("front");

  return (
    <>
      <S.Positioner>
        <S.MajorFilter>
          <S.ClickedFilter
            major={chooseMajor === "front" ? "white" : "black"}
            onClick={() => {
              setChooseMajor("front");
            }}
          >
            Front-End
          </S.ClickedFilter>
          <S.ClickedFilter
            major={chooseMajor === "back" ? "white" : "black"}
            onClick={() => {
              setChooseMajor("back");
            }}
          >
            Back-End
          </S.ClickedFilter>
        </S.MajorFilter>
      </S.Positioner>
    </>
  );
}
