import React from "react";
import styled from "styled-components";

export default function Habits() {

    return (
        <Container>
            Olá Hábitos
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