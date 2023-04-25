import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

import MyWalletLogo from "../components/MyWalletLogo"
import { UserContext } from "../context/UserContext"

export default function SignInPage() {

  const { setUser, name, setName } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL

  function handleSubmit(e) {
    e.preventDefault();

    const body = { email, password }

    axios.post(`${REACT_APP_API_URL}/`, body)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("token", res.data.token);
        setName(name);
        navigate("/home");
      })
      .catch((err) => {
        const statusCode = err.response.status;

        if (statusCode === 422) {
          alert("A senha deve ter no mínimo 3 caracteres.");
        } else if (statusCode === 404) {
          alert("Esse usuário não está cadastrado.");
        } else if (statusCode === 401) {
          alert("Usuário ou senha incorretos.");
        } else {
          console.log(err.response.data);
        }
      })
  }

  return (
    <SingInContainer>
      <form onSubmit={handleSubmit}>
        <MyWalletLogo />
        <input
          data-test="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          data-test="password"
          name="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <button data-test="sign-in-submit" type="submit">Entrar</button>
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
