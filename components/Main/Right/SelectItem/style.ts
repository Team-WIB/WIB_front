import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Positioner = css`
  width: calc(100% - 8vw);
  height: 3.5vw;
  margin: 5vh 4vw 3vh 4vw;
  display: flex;
  flex-direction: row;
  .check {
    svg {
      width: 45px;
      :hover {
        fill: green;
        transition-duration: 0.25s;
      }
    }
  }
  .cross {
    transform: scale(0.6);
  }
  .fix {
    transform: scale(0.45);
  }
`;

export const Positioner2 = css`
  width: calc(100% - 75px);
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;
export const SelectTitle = css`
  width: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 50px 0px 50px;
  margin: 2.5px;
  font-size: calc(5px + 1vw);
  color: white;
`;

export const TitleInput = styled.textarea`
  font-size: 1.1rem;
  padding-left: 3px;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  border-radius: 5px;
  overflow-y: hidden;
`;

export const IconBtn = styled.div`
  width: 75px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;

export const MajorWrap = styled.div<{display: string}>`
  height: 50px;
  margin-left: 4vw;
  display: ${(props) => props.display};
  gap: 20px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  input + label {
    display: inline-block;
    border-radius: 50px;
    width: 23px;
    height: 23px;
    border: 2px solid white;
    cursor: pointer;
  }
  input:checked + label {
    background-color: green;
  }
  input {
    display: none;
  }
`;

export const SelectMajor = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
`;
