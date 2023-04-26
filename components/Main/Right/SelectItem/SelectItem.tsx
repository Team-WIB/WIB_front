/** @jsxImportSource @emotion/react */
import * as S from "./style"


export default function SelectItem() {
    return (
        <div css={S.Positioner}>
            <div css={S.Positioner2}>
                <div css={S.SelectTitle}>
                    <p>React란 무엇인가요?</p>
                </div>
                <div css={S.IconBtn}><img src="/icon_edit.png" /></div>
            </div>
            <div>
                <div css={S.IconBtn}><img src="/icon_plus.png" /></div>
            </div>
        </div>
    )
}