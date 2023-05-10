import { css } from "@emotion/react";

export const Positioner = css`
    width: calc(100% - 4vw);
    height: calc(100% - 10vh);
    margin: 5vh 2vw 5vh 2vw;
    display: flex;
    flex-direction: column;
`

export const PointerLeft = css`
    position: absolute;
    top: 60%;
    left: 54%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
`

export const PointerRight = css`
    position: absolute;
    top: 60%;
    left: 96%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
`