/** @jsxImportSource @emotion/react */
import * as S from "./style";
import ListItem from "./ListItem/ListItem";
import { useEffect, useState } from "react";
import { customAxios } from "@/Utils/customAxios";
import { ListType } from "@/types/List";
import { useRecoilState } from "recoil";
import { Answer, Question, isListFilterFront } from "@/Atom/atoms";
import useSWR from "swr";

export default function List() {
  const [isnotFront] = useRecoilState(isListFilterFront);
  const [question, setQuestion] = useRecoilState(Question);
  const [answer, setAnswer] = useRecoilState(Answer);
  const { data: Blogs } = useSWR<ListType>("/questions");

  const GetQuestion = async () => {
    try {
      const { data } = await customAxios.get(
        "/questions" + window.location.pathname
      );
      setQuestion(data.question.question);
      setAnswer(data.question.answer);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const { data, error } = useSWR(
    typeof window !== "undefined" ? window.location.pathname : null,
    GetQuestion
  );

  return (
    <div css={S.Positioner}>
      {Blogs?.questions ? (
        Blogs.questions.map(
          (item, idx) =>
            (item.tag !== "FE") === isnotFront && (
              <>
                <div onClick={GetQuestion}>
                  <ListItem key={idx} item={item.question} id={item.id} />
                </div>
              </>
            )
        )
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
