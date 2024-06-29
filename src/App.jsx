import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import styled from "styled-components"
import Login from "./pages/Login"
import Today from "./pages/Today"
import UserContext from "./contexts/UserContext"
import Habits from "./components/Habits"


export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [imgFace, setImgFace] = useState(null);

  useEffect(() => {
    const storageToken = localStorage.getItem("token");
    if (storageToken) {
      setToken(storageToken);
    }

  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, imgFace, setImgFace }}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
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
  width: 100%;
  height: 100%;
`
