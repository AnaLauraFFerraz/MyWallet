import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import axios from "axios";
// import { UserContext } from "../context/UserContext"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export default function SignIn() {

    // onSubmit={}
    // value={value} onChange={onChange}

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form>
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Senha" />
                <Button type="submit" >Entrar</Button>
            </Form>
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    box-sizing: border-box;
    padding: 25px;
    background: #8C11BE;
`

const Title = styled.h1`
    margin-bottom: 24px;
    font-family: "Saira Stencil One";
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    text-align: center;
    color: #FFFFFF;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledLink = styled(Link)`
  margin-top: 36px;
  font-size: 14px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px; ;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
`;