/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as S from "./style";
import { AddFormAtom, FixFormAtom, AddFormAnswerAtom, Answer } from "@/Atom/atoms";
import { useEffect, useState } from "react";

export default function SelectWrite() {
  const [addForm, setAddForm] = useRecoilState(AddFormAtom);
  const [fixForm, setFixForm] = useRecoilState(FixFormAtom);
  const [addFormAnswer, setAddFormAnswer] = useRecoilState(AddFormAnswerAtom);
  const [answer, setAnswer] = useRecoilState(Answer);

  return (
    <div css={S.Positioner}>
      <div css={S.LookingWrite}>
        {addForm ? (
          <S.InputBox onChange={(e) => setAddFormAnswer(e.target.value)} value={addFormAnswer} />
        ) : fixForm ? (
          <S.InputBox onChange={(e) => setAnswer(e.target.value)} value={answer}>{answer}</S.InputBox>
        ) : (
          <p>{answer}</p>
        )}
      </div>
    </div>
  );
}
