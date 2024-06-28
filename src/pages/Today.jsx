import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import TodayInformation from "../components/TodayInformations";
import Top from "../components/Top";
import Menu from "../components/Menu";
import axios from "axios";
import Add from "../components/Add";

export default function Today() {

    const { token, setToken } = useContext(UserContext);
    const navigate = useNavigate();


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
                <TitleMenuContainer>
                    <h2>Meus hábitos</h2>
                    <Add />
                </TitleMenuContainer>

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
    height: 100vh;
    align-items: center;
    margin: 70px 0;
`

const BodyStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
`

const Content = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
`

const TitleMenuContainer = styled.div`
    width: 375px;
    margin-top: 21px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;

    h2 {
        color: #126BA5;
        font-family: "Lexend Deca", sans-serif;
        font-size: 23px;
        font-weight: 400;
        margin-left: 18px;
    }

`