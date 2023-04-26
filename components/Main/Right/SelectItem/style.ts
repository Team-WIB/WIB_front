import { css } from "@emotion/react";

export const Positioner = css`
    width: calc(100% - 8vw);
    height: 70px;
    margin: 5vh 4vw 5vh 4vw;
    display: flex;
    flex-direction: row;
`

export const Positioner2 = css`
    width: calc(100% - 75px);
    border-radius: 5px;
    background-color: rgb(36, 36, 36);
    display: flex;
    flex-direction: row;
`
export const SelectTitle = css`
    width: calc(100% - 80px);
    line-height: 70px;
    padding: 0px 50px 0px 50px;
    margin: 2.5px; 
    font-size: 22.5px;
    color: white;
`

export const IconBtn = css`
    width: 75px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 30px;
        height: 30px;
    }
`