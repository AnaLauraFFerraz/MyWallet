import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
//import axios from "axios"
import exit from "../assets/exit.png"
import { Icon } from '@iconify/react';

export default function Home() {
    return (
        <Container>
            <Header>
                <h1>{`Olá, NOME`}</h1>
                <Link to="/">
                    <img src={exit} alt="Sair" />
                </Link>
            </Header>
            <Transactions>Não há registros de<br />entrada ou saída</Transactions>
            <ButtonsContainer>
                <EntryButton to="/nova-entrada" style={{ marginRight: "15px" }}>
                    <Icon icon="mdi:plus-circle-outline" color="white" width="25" height="25" />
                    <p>Nova<br />entrada</p>
                </EntryButton>
                <EntryButton to="/nova-saida">
                    <Icon icon="mdi:minus-circle-outline" color="white" width="25" height="25" />
                    <p>Nova<br />saída</p>
                </EntryButton>
            </ButtonsContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    box-sizing: border-box;
    padding: 25px 25px 16px 25px;
    background: #8C11BE;
`

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`
const Transactions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 20px 0 13px 0;
    padding-top: 23px;
    border-radius: 5px;
    background: #FFFFFF;
    
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
`
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    p {
        text-decoration: none;
    }
`
const EntryButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 114px;
  box-sizing: border-box;
  padding: 9px 9px;
  border: none;
  border-radius: 5px;
  background: #A328D6;

  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
`;