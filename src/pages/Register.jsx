import React, { useState } from "react";
import logo from "../assets/logo.jpg"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [senha, setSenha] = useState("");
    const [photo, setPhoto] = useState("");
    const navigate = useNavigate();

    function createAccount(e){
        e.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const body = {
            email: email,
            name: name,
            image: photo,
            password: senha
        };

        axios.post(URL, body)
            .then(() => navigate("/"))
            .catch(err => console.log(err.response.data));
    }

    return (
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={createAccount}>
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

                    <input 
                        required
                        type="text" 
                        placeholder="nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input 
                        required
                        type="text" 
                        placeholder="foto" 
                        value={photo}
                        onChange={e => setPhoto(e.target.value)}
                    />
                    
                    <button type="submit">Cadastrar</button>
                </FormDiv>
            </form>
            <RegisterNewAccount to={`/`}>Já tem uma conta? Faça login!</RegisterNewAccount>
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
