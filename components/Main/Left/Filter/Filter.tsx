import * as S from "./style";
import { useRecoilState } from "recoil";
import { isListFilterFront } from "@/Atom/atoms";

export default function Filter() {
  const [isNotFront, setIsNotFront] = useRecoilState(isListFilterFront);

  return (
    <>
      <S.Positioner>
        <S.MajorFilter>
          <S.ClickedFilter
            major={isNotFront ? "black" : "white"}
            onClick={() => {
              setIsNotFront(false);
            }}
          >
            Front-End
          </S.ClickedFilter>
          <S.ClickedFilter
            major={isNotFront ? "white" : "black"}
            onClick={() => {
              setIsNotFront(true);
            }}
          >
            Back-End
          </S.ClickedFilter>
        </S.MajorFilter>
      </S.Positioner>
    </>
  );
}
