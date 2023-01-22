import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    box-sizing: border-box;
    padding: 25px;
    background: #8C11BE;
`

export const Title = styled.h1`
    margin-bottom: 24px;
    font-family: "Saira Stencil One";
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    text-align: center;
    color: #FFFFFF;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledLink = styled(Link)`
  margin-top: 36px;
  font-size: 14px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px; ;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
`;