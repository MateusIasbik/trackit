import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.jpg"
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UserContext";

export default function Login() {
    const { token, setToken, setImgFace } = useContext(UserContext);
    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            navigate("/hoje");
            return;
        } else {
            navigate("/");
        }
    }, []);

    function sendLogin(e) {
        e.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body = {
            email: email,
            password: senha
        };

        setLoading(true);
        axios.post(URL, body)
            .then((res) => {
                setImgFace(res.data.image)
                const imgFace = res.data.image;
                localStorage.setItem("imgFace", imgFace);

                setUser(res.data);
                const token = res.data.token;
                localStorage.setItem("token", token);
                setToken(token);
                navigate("/hoje");
                setLoading(false);
            })
            .catch(err => {
                alert(`${err.response.data.message}`);
                setLoading(false);
            });
    }

    return (
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={sendLogin}>
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

                    <button type="submit" disabled={loading}>
                        {!loading ? "Entrar" : <ThreeDots
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
            <RegisterNewAccount to={`/cadastro`}>Não tem uma conta? Cadastre-se!</RegisterNewAccount>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

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
    font-family: "Lexend Deca", sans-serif;
`
