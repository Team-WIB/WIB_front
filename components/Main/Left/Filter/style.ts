import { css } from "@emotion/react";

export const Positioner = css`
    width: calc(100% - 8vw);
    height: calc(40% - 10vh);
    margin: 5vh 4vw 5vh 4vw;
    border-radius: 5px;
    background-color: rgb(36, 36, 36);
`

export const MojorFilter = css`
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(36, 36, 36);
`

export const DetailFilter = css`
    width: calc(100% - 10px);
    height: calc(100% - 50px);
    padding: 1rem;
    margin: 5px;
    border-radius: 5px;
    background-color: rgb(51, 51, 51);
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`