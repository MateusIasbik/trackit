import React, { useState } from "react";
import logo from "../assets/logo.jpg"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [senha, setSenha] = useState("");
    const [photo, setPhoto] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function createAccount(e) {
        e.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const body = {
            email: email,
            name: name,
            image: photo,
            password: senha
        };

        setLoading(true);
        axios.post(URL, body)
            .then(() => {
                navigate("/")
                setLoading(false)
            })
            .catch(() => {
                alert(`Verifique os campos digitados e tente novamente!`)
                setLoading(false)
            });
    }

    return (
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={createAccount}>
                <FormDiv>
                    <input
                        required
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={loading}
                    />

                    <input
                        required
                        type="password"
                        placeholder="senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        disabled={loading}
                    />

                    <input
                        required
                        type="text"
                        placeholder="nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        disabled={loading}
                    />

                    <input
                        required
                        type="text"
                        placeholder="foto"
                        value={photo}
                        onChange={e => setPhoto(e.target.value)}
                        disabled={loading}
                    />

                    <button type="submit" disabled={loading}>
                        {!loading ? "Cadastrar" : <ThreeDots
                            visible={true}
                            height="40"
                            width="40"
                            color="#ffffff"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />}
                    </button>
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
            border-color: #52B6FF;
        }

        &:focus {
            border-color: #52B6FF;
            outline: none;
            color: #52B6FF;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
        color: #FFF;
        border: none;
        font-family: "Lexend Deca", sans-serif;
        font-size: 21px;
        font-weight: 400;
        cursor: pointer;    
    }
`

const RegisterNewAccount = styled(Link)`
    color: #52B6FF;
    margin-top: 25px;
`
