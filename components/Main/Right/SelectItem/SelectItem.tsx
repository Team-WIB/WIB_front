/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as S from "./style";
import {
  AddFormAnswerAtom,
  AddFormAtom,
  Answer,
  FixFormAtom,
  QuestCount,
  Question,
  isListFilterFront,
} from "@/Atom/atoms";
import CheckIcon from "@/assests/CheckIcon";
import { useEffect, useState } from "react";
import CrossIcon from "@/assests/CrossIcon";
import AddIcon from "@/assests/AddIcon";
import FixIcon from "@/assests/FixIcon";
import { customAxios } from "@/Utils/customAxios";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/router";

export default function SelectItem() {
  const [addForm, setAddForm] = useRecoilState(AddFormAtom);
  const [fixForm, setFixForm] = useRecoilState(FixFormAtom);
  const [addFormAnswer, setAddFormAnswer] = useRecoilState(AddFormAnswerAtom);
  const [title, setTitle] = useState("");
  const [major, setMajor] = useState("FE");
  const [question, setQuestion] = useRecoilState(Question);
  const [answer, setAnswer] = useRecoilState(Answer);
  const [cancelFixQu, setCancelFixQu] = useState(title);
  const [cancelFixAn, setCancelFixAn] = useState(addFormAnswer);
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const [questCnt, setQuestCnt] = useRecoilState(QuestCount);
  const [isFront, setIsFront] = useRecoilState(isListFilterFront);

  useEffect(() => {
    if (addForm === false) {
      setTitle("");
      setAddFormAnswer("");
    }
  }, [addForm]);

  const AddFormClick = async () => {
    try {
      await customAxios.post("/questions", {
        question: title,
        answer: addFormAnswer,
        tag: major,
      });
      mutate("/questions");
      setQuestCnt(questCnt + 1);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const FixFormClick = async () => {
    try {
      await customAxios.put("/questions" + router.asPath, {
        question: question,
        answer: answer,
        tag: isFront === true ? "BE" : "FE",
      });
      mutate("/questions");
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const { data, error } = useSWR(
    typeof window !== "undefined" ? router.pathname : null,
    AddFormClick
  );

  return (
    <>
      <div css={S.Positioner}>
        <div css={S.Positioner2}>
          <div css={S.SelectTitle}>
            {addForm ? (
              <S.TitleInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : fixForm ? (
              <S.TitleInput
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
              >
                {question}
              </S.TitleInput>
            ) : (
              <p>{question}</p>
            )}
          </div>
          {addForm === false ? (
            <S.IconBtn
              className={fixForm ? "check" : "fix"}
              onClick={() => {
                setFixForm((pre) => !pre);
              }}
            >
              {fixForm ? (
                <CheckIcon onClick={FixFormClick} />
              ) : (
                <FixIcon
                  onClick={() => {
                    setCancelFixQu(question);
                    setCancelFixAn(answer);
                  }}
                />
              )}
            </S.IconBtn>
          ) : (
            <S.IconBtn className="check" onClick={() => setAddForm(false)}>
              <CheckIcon onClick={AddFormClick} />
            </S.IconBtn>
          )}
        </div>
        {fixForm ? (
          <S.IconBtn className="cross" onClick={() => setFixForm(false)}>
            <CrossIcon onClick={() => {setQuestion(cancelFixQu); setAnswer(cancelFixAn)}} />
          </S.IconBtn>
        ) : (
          <S.IconBtn
            className="check"
            onClick={() => {
              setAddForm((pre) => !pre);
            }}
          >
            {addForm ? <CrossIcon /> : <AddIcon />}
          </S.IconBtn>
        )}
      </div>
      <S.MajorWrap display={addForm ? "flex" : "none"}>
        <div>
          <S.SelectMajor>Front-End</S.SelectMajor>
          <input
            defaultChecked
            type="radio"
            id="front"
            name="major"
            value={major}
            onClick={() => setMajor("FE")}
          />
          <label htmlFor="front"></label>
        </div>
        <div>
          <S.SelectMajor>Back-End</S.SelectMajor>
          <input
            type="radio"
            id="back"
            name="major"
            value={major}
            onClick={() => setMajor("BE")}
          />
          <label htmlFor="back"></label>
        </div>
      </S.MajorWrap>
    </>
  );
}
