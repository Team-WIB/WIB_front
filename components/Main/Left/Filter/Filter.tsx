/** @jsxImportSource @emotion/react */
import FilterIcon from "./FilterIcon/FilterIcon"
import * as S from "./style"

export default function Filter() {
    return (
      <div css={S.Positioner}>
        <div css={S.MojorFilter}>
            <div>Front-End</div>
            <div>Back-End</div>
        </div>
        <div css={S.DetailFilter}>
          <FilterIcon name="React.js" />
          <FilterIcon name="Next.js" />
          <FilterIcon name="Styled-components"/>
          <FilterIcon name="Emotion"/>
          <FilterIcon name="Redux" />
          <FilterIcon name="Recoil"/>
          <FilterIcon name="Javascript"/>
          <FilterIcon name="Typescript"/>
          <FilterIcon name="Dummy"/>
          <FilterIcon name="Dummy"/>
          <FilterIcon name="Dummy"/>
          <FilterIcon name="Dummy"/>
          <FilterIcon name="Dummy"/>
          <FilterIcon name="Dummy"/>
        </div>
      </div>
    )
}