/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as S from "./style";
import { AddFormAtom, FixFormAtom } from "@/Atom/atoms";
import { useEffect, useState } from "react";

export default function SelectWrite() {
  const [addForm, setAddForm] = useRecoilState(AddFormAtom);
  const [fixForm, setFixForm] = useRecoilState(FixFormAtom);
  const [input, setInput] = useState('');

  return (
    <div css={S.Positioner}>
      <div css={S.LookingWrite}>
        {addForm ? (
          <S.InputBox />
        ) : fixForm ? (
          <S.InputBox onChange={(e) => e.target.value}>자바스크립트 라이브러리</S.InputBox>
        ) : (
          <p>자바스크립트 라이브러리</p>
        )}
      </div>
    </div>
  );
}
