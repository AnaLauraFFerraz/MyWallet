import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { UserContext } from "../context/UserContext"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Container, Logo, Form, StyledLink } from "../style/commonStyles"

export default function SignIn() {

    const { setUser } = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const BASE_URL = "http://localhost:5000"

    function handleSubmit(e) {
        e.preventDefault();

        const body = { email, password }

        axios.post(BASE_URL, body)
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Form onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button type="submit" >Entrar</Button>
            </Form>
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}
