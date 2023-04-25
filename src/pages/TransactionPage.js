import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";

export default function TransactionsPage() {
  const { user } = useContext(UserContext);
  const token = user;

  const { tipo: id } = useParams();
  console.log("id: ", id)

  const [value, setValue] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  const BASE_URL = "https://mywallet-owev.onrender.com"

  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      value: value,
      description: description
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.post(`${BASE_URL}/nova-transacao/${id}`, body, config)
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/")
      })
  }

  return (
    <TransactionsContainer>
      <h1>Nova {id}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="value"
          placeholder="Valor"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <input
          name="description"
          placeholder="Descrição"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit">Salvar {id}</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
