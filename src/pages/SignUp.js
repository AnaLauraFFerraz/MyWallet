import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Container, Logo, Form, StyledLink } from "../style/commonStyles"

export default function SignUp() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const BASE_URL = "http://localhost:5000"

    function signup() {
        const body = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Form onSubmit={signup}>
                <Input name="name" type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                <Input name="email" type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                <Input name="password" type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                <Input name="password" type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <Button type="submit" >Cadastrar</Button>
            </Form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}
