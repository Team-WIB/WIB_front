import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Positioner = css`
  width: calc(100% - 8vw);
  height: calc(100% - 3vh);
  border-radius: 10px;
  margin: 2.5vh 4vw 0.5vh 4vw;
  background-color: rgb(30, 30, 30);
  overflow-y: hidden;
`;

export const LookingWrite = css`
  width: calc(100% - 5vw);
  height: calc(100% - 10vh);
  margin: 5vh 2.5vw 5vh 2.5vw;
  font-size: calc(2.5px + 0.9vw);
  font-weight: bold;
  color: white;
  text-align: center;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  p {
    font-size: 18px;
  }
`;

export const InputBox = styled.textarea`
  padding: 3px 5px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  background-color: #d9d9d9;
  font-size: 18px;
  border-radius: 8px;
`;
