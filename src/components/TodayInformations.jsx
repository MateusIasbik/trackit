import React from "react";
import styled from "styled-components";

export default function TodayInformation() {
    return (
        <TitleMenuContainer>
            <h2>Sábado, 29/06</h2>
            <ContentToday>
                Informações de hoje
            </ContentToday>
        </TitleMenuContainer>
    )
}

const TitleMenuContainer = styled.div`
    width: 375px;
    margin-top: 21px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
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

const ContentToday = styled.div`
    font-family: "Lexend Deca", sans-serif;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    margin-top: 20px;
    justify-content: center;

`