/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as S from "./style";
import { AddFormAtom, FixFormAtom } from "@/Atom/atoms";
import CheckIcon from "@/assests/CheckIcon";
import { useEffect, useState } from "react";
import CrossIcon from "@/assests/CrossIcon";
import AddIcon from "@/assests/AddIcon";
import FixIcon from "@/assests/FixIcon";

export default function SelectItem() {
  const [addForm, setAddForm] = useRecoilState(AddFormAtom);
  const [fixForm, setFixForm] = useRecoilState(FixFormAtom);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (addForm === false) {
      setTitle("");
    }
  }, [addForm]);

  return (
    <div css={S.Positioner}>
      <div css={S.Positioner2}>
        <div css={S.SelectTitle}>
          {addForm === true ? (
            <S.TitleInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : fixForm === true ? (
            <S.TitleInput
              onChange={(e) => setTitle(e.target.value)}
            >React란 무엇인가요?</S.TitleInput>
          ) : (
            <p>React란 무엇인가요?</p>
          )}
        </div>
        {addForm === false ? (
          <S.IconBtn
            className={fixForm ? "check" : "fix"}
            onClick={() => {
              setFixForm((pre) => !pre);
            }}
          >
            {fixForm ? <CheckIcon /> : <FixIcon />}
          </S.IconBtn>
        ) : (
          <S.IconBtn className="cross" onClick={() => setAddForm(false)}>
            <CrossIcon />
          </S.IconBtn>
        )}
      </div>
      {fixForm ? (
        <S.IconBtn className="cross" onClick={() => setFixForm(false)}>
          <CrossIcon />
        </S.IconBtn>
      ) : (
        <S.IconBtn
          className="check"
          onClick={() => {
            setAddForm((pre) => !pre);
          }}
        >
          {addForm ? <CheckIcon /> : <AddIcon />}
        </S.IconBtn>
      )}
    </div>
  );
}
