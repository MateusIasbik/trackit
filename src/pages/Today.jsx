import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import TodayInformation from "../components/TodayInformations";
import Top from "../components/Top";
import Menu from "../components/Menu";

export default function Today() {

    const { token } = useContext(UserContext);
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
    height: 100vh;
    align-items: center;
    margin-top: 70px;
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

