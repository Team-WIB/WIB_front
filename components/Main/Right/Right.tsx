/** @jsxImportSource @emotion/react */
import * as S from "./style"
import SelectItem from "./SelectItem/SelectItem"
import SelectWrite from "./SelectWrite/SelectWrite"

export default function Right() {
    return (
      <div css={S.Positioner}>
        <SelectItem />
        <SelectWrite />
        <div css={S.PointerLeft}> &lt; </div>
        <div css={S.PointerRight}> &gt; </div>
      </div>
    )
  }