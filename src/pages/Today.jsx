import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import styled from "styled-components";
import Habits from "../components/Habits";
import Top from "../components/Top";
import Menu from "../components/Menu";

export default function Today() {

    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    // const [habits, setHabits] = useState([]);
    const [showHabits, setShowHabits] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate("/");
            return;
        } else {
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            // axios.get(URL, config)
            //     .then(res => console.log(res.data))
            //     .catch(err => setHabits(err))
        }
    }, []);

    return (
        <Container>
            <Top />

            <BodyStyled>
                <TitleMenuContainer>
                    <h2>Meus hábitos</h2>
                    <span>+</span>
                </TitleMenuContainer>
                {showHabits ? <Habits /> : "Hoje foi clicado"}
            </BodyStyled>

            <Menu setShowHabits={setShowHabits}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    margin: 70px 0;
`

const BodyStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
`

const TitleMenuContainer = styled.div`
    width: 375px;
    margin-top: 21px;
    display: flex;
    justify-content: space-between;

    h2 {
        color: #126BA5;
        font-family: "Lexend Deca", sans-serif;
        font-size: 23px;
        font-weight: 400;
        margin-left: 18px;
    }

    span {
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Lexend Deca", sans-serif;
        font-size: 27px;
        font-weight: 400;
        border-radius: 5px;
        margin-right: 22px;
    }

`