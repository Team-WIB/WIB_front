import { css } from "@emotion/react";

export const Positioner = css`
    width: calc(100% - 8vw);
    height: calc(20% - 10vh);
    margin: 5vh 4vw 5vh 4vw;
    border-radius: 5px;
`

export const MojorFilter = css`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 1vw;
    font-weight: bold;
    color: white;
    background-color: rgb(50, 50, 50);
    div{
        width: 50%;
        height: 100%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ClickedFilter = css`
    color: black;
    background-color: rgb(240, 240, 240);
`