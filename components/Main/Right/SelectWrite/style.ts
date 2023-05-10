import { css } from "@emotion/react";

export const Positioner = css`
    width: calc(100% - 8vw);
    height: calc(100% - 3vh);
    border-radius: 10px;
    margin: 2.5vh 4vw 0.5vh 4vw;
    background-color: rgb(30, 30, 30);
    overflow-y: hidden;
`

export const LookingWrite = css`
    width: calc(100% - 5vw);
    height: calc(100% - 10vh);
    margin: 5vh 2.5vw 5vh 2.5vw;
    font-size: calc(2.5px + 0.9vw);
    font-weight: bold;
    color: white;
    overflow-y: auto;
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