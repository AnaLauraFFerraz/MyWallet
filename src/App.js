import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import React from "react";
import styled from "styled-components";

import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Income from "./pages/Income"
import Expense from "./pages/Expense"

function App() {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/nova-entrada" element={<Income />} />
                    <Route path="/nova-saida" element={<Expense />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;

const Container = styled.div`
    display: flex;
`