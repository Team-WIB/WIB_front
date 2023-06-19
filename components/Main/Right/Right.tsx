/** @jsxImportSource @emotion/react */
import * as S from "./style"
import SelectItem from "./SelectItem/SelectItem"
import SelectWrite from "./SelectWrite/SelectWrite"

export default function Right() {
    return (
      <div css={S.Positioner}>
        <SelectItem />
        <SelectWrite />
        <S.PointerArrow left="53%">{"<"}</S.PointerArrow>
        <S.PointerArrow left="97%">{">"}</S.PointerArrow>
      </div>
    )
  }