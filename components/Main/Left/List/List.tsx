/** @jsxImportSource @emotion/react */
import * as S from "./style";
import ListItem from "./ListItem/ListItem";
import { useEffect, useState } from "react";
import { customAxios } from "@/Utils/customAxios";
import { ListType } from "@/types/List";
import { useRecoilState } from "recoil";
import { isListFilterFront } from "@/Atom/atoms";

export default function List() {
  const [Blogs, setBlogs] = useState<ListType>();
  const [isFront, setIsFront] = useRecoilState(isListFilterFront);

  useEffect(() => {
    async function getBlog() {
      try {
        const { data } = await customAxios.get("/questions");
        setBlogs(data);
      } catch (e: any) {
        console.error(e.message);
      }
      getBlog();
    }
  }, []);

  return (
    <div css={S.Positioner}>
      {Blogs?.questions ? (
        Blogs.questions.map(
          (item, idx) =>
            (item.tag === "front") === isFront && (
              <>
                <ListItem key={idx} item={item.content} />
              </>
            )
        )
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
