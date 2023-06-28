/** @jsxImportSource @emotion/react */
import * as S from "./style";

export default function ListItem({ item }: { item: string }) {
  return (
    <div css={S.ItemBox}>
      <p>React란 무엇인가요?</p>
    </div>
  );
}
