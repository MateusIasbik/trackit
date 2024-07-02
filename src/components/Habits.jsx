import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import HabitsInformation from "./HabitsInformation";
import Top from "./Top";
import Menu from "./Menu";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Habits() {

    const {token} = useContext(UserContext);
    const navigate = useNavigate()
    const [showAddHabit, setShowAddHabit] = useState(false);

    function toggleAddHabit() {
        setShowAddHabit(habitState => !habitState);
    }

    useEffect(() => {
        if (!token) {
            navigate("/");
            return;
        }
    }, [token]);
    
    return (
        <Container>
            <Top />
            <BodyStyled>
                <TitleMenuContainer>
                    <h2>Meus hábitos</h2>
                    <PlusButton onClick={toggleAddHabit}>+</PlusButton>
                </TitleMenuContainer>

                <Content>
                    <HabitsInformation showAddHabit={showAddHabit} setShowAddHabit={setShowAddHabit} />
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
    overflow-y: auto;
`

const Content = styled.div`
    width: 340px;
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
    align-items: center;

    h2 {
        color: #126BA5;
        font-family: "Lexend Deca", sans-serif;
        font-size: 23px;
        font-weight: 400;
        padding-left: 18px;
    }

`

const PlusButton = styled.div`
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
    margin-right: 25px;
`

