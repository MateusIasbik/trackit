import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import TodayInformation from "../components/TodayInformations";
import Top from "../components/Top";
import Menu from "../components/Menu";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

export default function Today() {

    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const currentDay = dayjs().format('dddd, DD/MM');

    useEffect(() => {
        if (!token) {
            navigate("/");
            return;
        }
    }, []);

    return (
        <Container>
            <Top />
            <BodyStyled>
                <TitleToday>
                    <h2>{currentDay}</h2>
                </TitleToday>
                <Content>
                    <TodayInformation />
                </Content>
            </BodyStyled>
            <Menu />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
`

const BodyStyled = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #F2F2F2;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px;
`

const TitleToday = styled.div`
    display: flex;
    width: 370px;
    margin-top: 27px;

    h2 {
            color: #126BA5;
            font-family: "Lexend Deca", sans-serif;
            font-size: 23px;
            font-weight: 400;
            margin-left: 18px;
        }
`

const Content = styled.div`
    width: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
`

