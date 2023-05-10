/** @jsxImportSource @emotion/react */
import * as S from "./style"

import React, { useState } from "react";

export default function Filter() {
  return (
    <div css={S.Positioner}>
      <div css={S.MojorFilter}>
        <div css={S.ClickedFilter}>Front-End</div>
        <div>Back-End</div>
      </div>
    </div>
  )
}