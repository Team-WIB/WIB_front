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
    height: 17.5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-size: 1vw;
    font-weight: bold;
    background-color: rgb(36, 36, 36);
`

export const DetailFilter = css`
    width: calc(100% - 10px);
    height: calc(100% - 17.5% - 10px);
    padding: 1rem;
    margin: 5px;
    border-radius: 5px;
    background-color: rgb(51, 51, 51);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    gap: 0.5rem;
`