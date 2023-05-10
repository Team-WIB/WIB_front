import { css } from "@emotion/react";

export const Positioner = css`
    width: calc(100% - 2vw);
    height: calc(80% - 4vh);
    margin: 3.5vh 1vw 0.5vh 1vw;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`