import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

export default function HabitsInformation() {

    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState(null);

    useEffect(() => {

        if (!token) {
            console.error("Token não está disponível");
            return;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then(res => {
                console.log(res.data);
                setHabits(res.data);
            })
            .catch(err => console.log(err.response.data));

    }, []);

    if (habits === null) {
        return (
            <div><ThreeDots
                visible={true}
                height="40"
                width="40"
                color="#126BA5"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /></div>
        )
    } else if (habits.length === 0) {
        return (
            <MessageEmpty>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MessageEmpty>
        )
    }

    return (
        <div>
            Colocar aqui o código quando a lista estiver com itens
        </div>
    )
}

const MessageEmpty = styled.div`
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    padding: 0 17px;
    text-align: left;
`