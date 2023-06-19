import styled from "@emotion/styled";

export const Positioner = styled.div`
    width: calc(100% - 8vw);
    height: calc(20% - 10vh);
    margin: 5vh 4vw 5vh 4vw;
    border-radius: 5px;
`

export const MajorFilter = styled.div`
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

export const ClickedFilter = styled.div<{major: string}>`
    color: ${(props) => props.major === 'white' ? 'black' : 'white'};
    background-color: ${(props) => props.major};
    transition-duration: 0.2s;
    cursor: pointer;
`