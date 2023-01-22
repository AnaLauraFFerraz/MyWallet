import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { UserContext } from "./context/UserContext"

import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Income from "./pages/Income"
import Expense from "./pages/Expense"

function App() {

    const [user, setUser] = useState({})

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/nova-entrada" element={<Income />} />
                    <Route path="/nova-saida" element={<Expense />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App;