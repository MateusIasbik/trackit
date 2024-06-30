import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Menu() {

    const [activeButton, setActiveButton] = useState("today");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Atualiza o botão ativo com base na rota atual
        if (location.pathname === "/habitos") {
          setActiveButton("habit");
        } else if (location.pathname === "/hoje") {
          setActiveButton("today");
        }
      }, [location.pathname]);
    

    function handleButtonClick(button) {
        setActiveButton(button);

        if(button === "habit"){
            navigate("/habitos")
        } else {
            navigate("/hoje")
        }
    }

    return (
        <Footer>
            <ButtonHabit
                onClick={() => handleButtonClick("habit")}
                isActive={activeButton === "habit"}
                // to={"/habitos"}
            >
                <CalendarMonthIcon />
                <span>
                    Hábitos
                </span>
            </ButtonHabit>

            <ButtonToday
                onClick={() => handleButtonClick("today")}
                isActive={activeButton === "today"}
                // to={"/hoje"}
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
    background-color: #F2F2F2 ;
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
    color: ${props => props.isActive ? "#FFF" : "#D4D4D4"};
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    background-color: ${props => props.isActive ? "#52B6FF" : "#FFFFFF"};
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 45px;
    text-decoration: none;

    span {
        padding-left: 5px;
    }
`

const ButtonToday = styled.div`
    height: 100%;
    width: 50%;
    color: ${props => props.isActive ? "#FFF" : "#D4D4D4"};
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    background-color: ${props => props.isActive ?  "#52B6FF" : "#FFFFFF"}; 
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 55px;
    text-decoration: none;

    span {
        padding-left: 5px;
    }
`
