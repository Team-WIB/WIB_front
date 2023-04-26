/** @jsxImportSource @emotion/react */
import * as S from "./style"
import Filter from "./Filter/Filter"
import List from "./List/List"

export default function Left() {
    return (
      <div css={S.Positioner}>
        <Filter />
        <List />
      </div>
    )
}