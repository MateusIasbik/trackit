import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import styled from "styled-components"
import Login from "./pages/Login"
import Habits from "./pages/Habits"


export default function App() {
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits token={token} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
