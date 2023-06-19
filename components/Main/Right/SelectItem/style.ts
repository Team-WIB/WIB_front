import { css } from "@emotion/react";

export const Positioner = css`
    width: calc(100% - 8vw);
    height: 3.5vw;
    margin: 5vh 4vw 5vh 4vw;
    display: flex;
    flex-direction: row;
`

export const Positioner2 = css`
    width: calc(100% - 75px);
    font-weight: bold;
    display: flex;
    flex-direction: row;
`
export const SelectTitle = css`
    width: calc(100% - 80px);
    height: calc(3.5vw - 10px);
    display: flex;
    align-items: center;
    padding: 0px 50px 0px 50px;
    margin: 2.5px; 
    font-size: calc(5px + 1vw);
    color: white;
`

export const IconBtn = css`
    width: 75px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
`