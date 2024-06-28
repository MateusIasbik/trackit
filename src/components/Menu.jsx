import React, { useState } from "react";
import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link, useNavigate } from "react-router-dom";

export default function Menu( {setShowHabits} ) {

    const navigate = useNavigate();

    return (
        <Footer>
            <ButtonHabit 
                onClick={() => {
                    setShowHabits(true);
                    navigate("/habits");
                }} 
                to={"/habitos"} 
            >
                <CalendarMonthIcon />
                <span>
                    Hábitos
                </span>
            </ButtonHabit>

            <ButtonToday  
                onClick={() => {
                    setShowHabits(false);
                    // navigate("/habits");
                }} 
                to={"/hoje"} 
            >
                <EventAvailableIcon />
                <span>
                    Hoje
                </span>
            </ButtonToday>
        </Footer>
    )
}

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

const ButtonHabit = styled(Link)`
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
