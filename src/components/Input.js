import styled from "styled-components";

export const Input = styled.input`
    display: flex;
    align-items: center;
    width: 100%;
    height: 58px;
    box-sizing: border-box;
    margin-bottom: 13px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: "#FFFFFF";

    color: #000000;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    &::placeholder {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
`
