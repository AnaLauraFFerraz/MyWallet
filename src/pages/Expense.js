import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import styled from "styled-components"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Form } from "../style/commonStyles"

export default function Expense() {
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const BASE_URL = "http://localhost:5000"

    function handleSubmit(e) {
        e.preventDefault();

        const body = {
            value: value,
            description: description
        }

        axios.post(`${BASE_URL}/nova-saida`, body)
            .then((res) => {
                console.log(res.data);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }

    return (
        <Container>
            <Header>
                <h1>Nova saída</h1>
            </Header>
            <Form onSubmit={handleSubmit}>
                <Input
                    name="value"
                    type="currency"
                    placeholder="Valor"
                    value={value}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <Input
                    name="description"
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setValue(e.target.value)}
                    required
                />
                <Button type="submit" >Salvar saída</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 25px 25px 25px 25px;
    background: #8C11BE;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 25px;
    background: #8C11BE;
    h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`