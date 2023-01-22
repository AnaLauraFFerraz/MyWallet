import styled from "styled-components"
//import axios from "axios"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Form } from "../style/commonStyles"

export default function Income() {
    return (
        <Container>
            <Header>
                <h1>Nova entrada</h1>
            </Header>
            <Form>
                <Input name="email" type="email" placeholder="Valor" required />
                <Input name="texto" type="text" placeholder="Descrição" required />
                <Button type="submit" >Salvar Entrada</Button>
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