import React from "react";
import styled from "styled-components";

export default function TodayInformation() {
    return (
        <TitleMenuContainer>
            
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