/** @jsxImportSource @emotion/react */
import * as S from "./style"
import Left from "./Left/Left"
import Right from "./Right/Right"

export default function Main() {
    return (
        <div css={S.BackGround}>
            <div css={S.Left}>
                <Left />
            </div>
            <div css={S.Line} />
            <div css={S.Rignt}>
                <Right />
            </div>
        </div>
    )
}