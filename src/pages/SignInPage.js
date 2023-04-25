import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

import MyWalletLogo from "../components/MyWalletLogo"
import { UserContext } from "../context/UserContext"

export default function SignInPage() {

  const { setUser } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const BASE_URL = "https://mywallet-owev.onrender.com/"

  function handleSubmit(e) {
    e.preventDefault();

    const body = { email, password }

    axios.post(BASE_URL, body)
      .then((res) => {
        setUser(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  }

  return (
    <SingInContainer>
      <form onSubmit={handleSubmit}>
        <MyWalletLogo />
        <input 
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <button type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
