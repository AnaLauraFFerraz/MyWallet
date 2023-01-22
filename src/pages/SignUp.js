import React from "react";
//import axios from "axios";
// import { UserContext } from "../context/UserContext"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Container, Title, Form, StyledLink } from "../style/commonStyles"


export default function SignUp() {
    return (
        <Container>
            <Title>MyWallet</Title>
            <Form>
                <Input name="name" type="text" placeholder="Nome" />
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Senha" />
                <Input name="password" type="password" placeholder="Confirme a senha" />
                <Button type="submit" >Cadastrar</Button>
            </Form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}
