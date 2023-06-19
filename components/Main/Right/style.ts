import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Positioner = css`
    width: calc(100% - 4vw);
    height: calc(100% - 10vh);
    margin: 5vh 2vw 5vh 2vw;
    display: flex;
    flex-direction: column;
`

export const PointerArrow = styled.div<{left: string}>`
    position: absolute;
    top: 60%;
    left: ${(props) => props.left};
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
`