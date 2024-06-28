import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Habits from "../components/Habits";
import Top from "../components/Top";

export default function Today() {

    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const [habits, setHabits] = useState([]);


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

            axios.get(URL, config)
                .then(res => console.log(res.data))
                .catch(err => setHabits(err))
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
                <Habits />
            </BodyStyled>

            <Footer>
                <ButtonHabit>
                    <CalendarMonthIcon />
                    <span>
                        Hábitos
                    </span>
                </ButtonHabit>
                <ButtonToday>
                    <EventAvailableIcon />
                    <span>
                        Hoje
                    </span>
                </ButtonToday>
            </Footer>
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
        margin-right: 18px;
    }

`

const Footer = styled.div`
    width: 100%;
    height: 65px;
    background-color: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
`

const ButtonHabit = styled.div`
    height: 100%;
    width: 50%;
    color: #FFF;
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    background-color: #52B6FF;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 45px;

    span {
        padding-left: 5px;
    }
`

const ButtonToday = styled.div`
    height: 100%;
    width: 50%;
    color: #D4D4D4;
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    background-color: #FFFFFF;  
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 55px;

    span {
        padding-left: 5px;
    }
`
