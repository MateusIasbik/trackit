import React from "react";
import styled from "styled-components";

export default function Habits() {

    return (
        <Container>
            <BodyStyled>
                <TitleMenuContainer>
                    <h2>Meus hábitos</h2>
                    <span>+</span>
                </TitleMenuContainer>

                <Content>
                    Hábitos
                </Content>

            </BodyStyled>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    align-items: center;
`

const BodyStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    margin-top: 70px;
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