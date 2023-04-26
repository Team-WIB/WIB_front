import { css } from "@emotion/react";

export const Positioner = css`
    width: calc(100% - 8vw);
    height: calc(100% - 10vh);
    margin: 5vh 4vw 5vh 4vw;
    background-color: rgb(51, 51, 51);
    display: flex;
    flex-direction: column;
`

export const PointerLeft = css`
    position: absolute;
    top: 60%;
    left: 56%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
`

export const PointerRight = css`
    position: absolute;
    top: 60%;
    left: 94%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
`