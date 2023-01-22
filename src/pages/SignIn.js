import React from "react";
//import axios from "axios";
// import { UserContext } from "../context/UserContext"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Container, Title, Form, StyledLink } from "../style/commonStyles"

export default function SignIn() {

    // onSubmit={}
    // value={value} onChange={onChange}

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form>
                <Input name="email" type="email" placeholder="E-mail" required />
                <Input name="password" type="password" placeholder="Senha" required />
                <Button type="submit" >Entrar</Button>
            </Form>
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}
