import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";

export default function TransactionsPage() {
  const { user } = useContext(UserContext);
  const token = user;

  const { tipo: id } = useParams();

  const [value, setValue] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  const BASE_URL = "https://mywallet-owev.onrender.com"

  function formatValue(value) {
    let formattedValue = parseFloat(value.toString().replace(',', '.')).toFixed(2);

    formattedValue = Math.abs(formattedValue);

    return formattedValue;
  }

  function validateInput(e) {
    const regex = /^-?\d*([.,]\d{0,2})?$/;
    if (regex.test(e.target.value)) {
      setValue(e.target.value);
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    const formattedValue = formatValue(value);

    const body = {
      value: formattedValue,
      description: description
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.post(`${BASE_URL}/nova-transacao/${id}`, body, config)
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => {
        if (err.response && err.response.status === 422) {
          alert("Dados inválidos. Por favor, verifique os campos e tente novamente.");
        } else {
          console.log(err.response.data);
        }
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
          onChange={validateInput}
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
