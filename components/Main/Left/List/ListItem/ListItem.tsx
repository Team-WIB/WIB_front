/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import * as S from "./style";

export default function ListItem({ item, id }: { item: string; id: number }) {
  const router = useRouter();

  return (
    <div css={S.ItemBox} onClick={() => router.push(`/${id}`)}>
      <p>{item}</p>
    </div>
  );
}
