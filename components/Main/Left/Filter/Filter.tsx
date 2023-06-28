import * as S from "./style";
import { useRecoilState } from "recoil";
import { isListFilterFront } from "@/Atom/atoms";

export default function Filter() {
  const [isFront, setIsFront] = useRecoilState(isListFilterFront);

  return (
    <>
      <S.Positioner>
        <S.MajorFilter>
          <S.ClickedFilter
            major={isFront ? "white" : "black"}
            onClick={() => {
              setIsFront(false);
            }}
          >
            Front-End
          </S.ClickedFilter>
          <S.ClickedFilter
            major={isFront ? "black" : "white"}
            onClick={() => {
              setIsFront(true);
            }}
          >
            Back-End
          </S.ClickedFilter>
        </S.MajorFilter>
      </S.Positioner>
    </>
  );
}
