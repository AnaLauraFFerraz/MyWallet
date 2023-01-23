import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import exit from "../assets/exit.png"
import { Icon } from '@iconify/react';
import { UserContext } from "../context/UserContext"

export default function Home() {

    const { user } = useContext(UserContext)
    const token = user
    console.log(token)
    const [transactions, setTransactions] = useState([])

    const BASE_URL = "http://localhost:5000"

    useEffect(() => {
        async function listTransactions() {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            axios.get(`${BASE_URL}/home`, config)
                .then((res) => {
                    setTransactions(res.data)
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log("ERR ", err.response.data);
                })
        }
        listTransactions()
    }, [token])

    function handleTransactions() {
        if (transactions.length === 0) {
            return (
                <NoTransactions>Não há registros de<br />entrada ou saída</NoTransactions>
            )
        }
        let balance = 0
        let balanceType = ""

        return (
            <Transactions>
                <ul>
                    {transactions.map((t, index) => {
                        const { value, description, date } = t

                        let type = ""
                        if (value < 0) {
                            type = "income"
                        } else {
                            type = "expense"
                        }
                        balance += value
                        balance > 0 ? balanceType = "positive" : balanceType = "negative"

                        return (

                            <Transaction key={index}>
                                <span className="value">{date}</span>
                                <span className="description"> {description} </span>
                                <span className="value" type={type}> {value} </span>
                                <span className="icon">" X "</span>
                            </Transaction>
                        )
                    })}
                </ul>
                <Balance>
                    <h2 className="balance" type={balanceType}>Saldo</h2>
                    <span className="banaceValue">{balance.toFixed(2)}</span>
                </Balance>
            </Transactions>
        )
    }

    return (
        <Container>
            <Header>
                <h1>{`Olá, NOME`}</h1>
                <Link to="/">
                    <img src={exit} alt="Sair" />
                </Link>
            </Header>
            {handleTransactions()}
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
const NoTransactions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const Transactions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 20px 0 13px 0;
    padding-top: 23px;
    border-radius: 5px;
    background: #FFFFFF;
`
const Transaction = styled.div`
  display: flex;
  :last-child {
    margin-bottom: 20px;
  }
  .date {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: #C6C6C6;
  }
  .description {
    width: 100%;
    margin-left: 8px;
    color: #000000;
    cursor: pointer;
  }
  .value {
    color: ${(props) => (props.type === "income" ? "#03AC00" : "#C70000")};
  }
  .icon {
    color: #C6C6C6;
    margin: 1px -5px 0 11px;
    font-size: 18px;
    line-height: 18.78px;
    cursor: pointer;
  }
`

const Balance = styled.div`
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 153px;
  left: 40px;
  right: 39px;
  background-color: #FFFFFF;
  .balance {
    font-size: 17px;
    color: #000000;
    line-height: 20px;
    font-weight: 700;
  }
  .balanceValue {
    color: ${(props) => (props.type = "income" ? "#03AC00" : "#C70000")};
    font-weight: 400;
  }
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