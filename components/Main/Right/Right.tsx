/** @jsxImportSource @emotion/react */
import * as S from "./style"
import SelectItem from "./SelectItem/SelectItem"
import SelectWrite from "./SelectWrite/SelectWrite"
import { useRouter } from "next/router"
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { QuestCount } from "@/Atom/atoms";

export default function Right() {
  const router = useRouter();
  const prevId = parseInt(router.asPath.substring(1));
  const [questCnt, setQuestCnt] = useRecoilState(QuestCount);

    return (
      <div css={S.Positioner}>
        <SelectItem />
        <SelectWrite />
        <S.PointerArrow left="53%" onClick={() => router.push("/" + (prevId > 1 ? prevId - 1 : prevId))}>{"<"}</S.PointerArrow>
        <S.PointerArrow left="97%" onClick={() => router.push("/" + (prevId + 1))}>{">"}</S.PointerArrow>
      </div>
    )
  }