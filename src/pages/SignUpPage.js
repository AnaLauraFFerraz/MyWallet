import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

import MyWalletLogo from "../components/MyWalletLogo"
import { UserContext } from "../context/UserContext"

export default function SignUpPage() {

  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const { name, setName } = useContext(UserContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL

  function signup(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.")
      return
    }
    if (name === "") {
      alert("Insira o nome do usuário.")
      return
    }

    const body = {
      name: name,
      email: email,
      password: password,
    }

    axios.post(`${REACT_APP_API_URL}/cadastro`, body)
      .then((res) => {
        setUser({ token: res.data.token });
        localStorage.setItem("token", res.data.token);
        setName(name);
        navigate("/");
      })
      .catch((err) => {
        const statusCode = err.response.status;

        if (statusCode === 422) {
          alert("A senha deve ter no mínimo 3 caracteres.");
        } else if (statusCode === 409) {
          alert("Esse usuário já está cadastrado.");
        } else {
          console.log(err.response.data);
        }
      })
  }

  return (
    <SingUpContainer>
      <form onSubmit={signup}>
        <MyWalletLogo />
        <input
          data-test="name"
          name="name"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          data-test="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          data-test="password"
          name="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          data-test="conf-password"
          name="confirmPassword"
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button data-test="sign-up-submit" type="submit" >Cadastrar</button>
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
