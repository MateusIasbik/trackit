import React, { useState } from "react";
import logo from "../assets/logo.jpg"
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    function sendLogin(e) {
        e.preventDefault();
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body = {
            email: email,
            password: senha
        };

        axios.post(URL, body)
            .then(() => navigate("/habitos"))
            .catch(err => console.log(err.response.data));
    }

    return (
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={sendLogin}>
                <FormDiv>
                    <input 
                        required
                        type="text" 
                        placeholder="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        required
                        type="password" 
                        placeholder="senha" 
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button type="submit">Entrar</button>
                </FormDiv>
            </form>
            <RegisterNewAccount to={`/cadastro`}>Não tem uma conta? Cadastre-se!</RegisterNewAccount>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    img {
        width: 190px;
        height: 180px;
        margin: 68px 0 32px 0;
    }
`

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;

    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        color: #D4D4D4;
        margin-bottom: 6px;
        border: 1px solid;
        font-family: "Lexend Deca", sans-serif;
        font-size: 20px;
        font-weight: 400;
        padding-left: 6px;
        box-sizing: border-box;

        &::placeholder {
            width: 100%;
            color: #DBDBDB;
        }

        &:hover {
            border-color: #52B6FF; /* Cor da borda ao passar o mouse */
        }

        &:focus {
            border-color: #52B6FF; /* Cor da borda ao focar */
            outline: none;
            color: #52B6FF; /* Cor da fonte ao focar */
        }
    }

    button {
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
        color: #FFF;
        border: none;
        font-family: "Lexend Deca", sans-serif;
        font-size: 21px;
        font-weight: 400;
    }
`

const RegisterNewAccount = styled(Link)`
    color: #52B6FF;
    margin-top: 25px;
`
