/** @jsxImportSource @emotion/react */
import * as S from "./style"
import SelectItem from "./SelectItem/SelectItem"
import SelectWrite from "./SelectWrite/SelectWrite"
import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Right() {
  const router = useRouter();

    return (
      <div css={S.Positioner}>
        <SelectItem />
        <SelectWrite />
        <S.PointerArrow left="53%" onClick={() => router.push("/" + (parseInt(router.asPath.substring(1)) - 1))}>{"<"}</S.PointerArrow>
        <S.PointerArrow left="97%" onClick={() => router.push("/" + (parseInt(router.asPath.substring(1)) + 1))}>{">"}</S.PointerArrow>
      </div>
    )
  }