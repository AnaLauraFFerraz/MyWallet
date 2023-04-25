import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react";
import styled from "styled-components"

import { UserContext } from "./context/UserContext"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import TransactionsPage from "./pages/TransactionPage"

export default function App() {

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? { token } : {};
  });
  const [name, setName] = useState("")

  return (
    <PagesContainer>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser, name, setName }}>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/nova-transacao/:tipo" element={<TransactionsPage />} />
          </Routes>
        </UserContext.Provider >
      </BrowserRouter >
    </PagesContainer >
  )
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  min-height:580px;
  padding: 25px;
`
