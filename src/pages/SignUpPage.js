import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

import MyWalletLogo from "../components/MyWalletLogo"

export default function SignUpPage() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const BASE_URL = "https://mywallet-owev.onrender.com"

  function signup(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }
    
    const body = {
      name: name,
      email: email,
      password: password,
    }
    
    axios.post(`${BASE_URL}/cadastro`, body)
      .then((res) => {
        navigate("/")
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  }

  return (
    <SingUpContainer>
      <form onSubmit={signup}>
        <MyWalletLogo />
        <input
          name="name"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          // autoComplete="new-password"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          // autoComplete="new-password"
        />
        <button type="submit" >Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
