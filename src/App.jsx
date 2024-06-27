import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import styled from "styled-components"
import Login from "./pages/Login"
import Today from "./pages/Today"
import UserContext from "./contexts/UserContext"


export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser, token, setToken}}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
