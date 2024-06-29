import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

export default function HabitsInformation({ showAddHabit, setShowAddHabit }) {

    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState(null);

    useEffect(() => {

        if (!token) {
            console.log("Token não está disponível");
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

    function sendHabit(e) {
        e.preventDefault();
        setShowAddHabit(false);
        console.log("hábito salvo")
    }

    return (
        <div>

            {showAddHabit && (
                <form onSubmit={sendHabit}>
                    <BoxHabits>
                        <BoxHabitsTop>
                            <input
                                type="text"
                                placeholder="nome do hábito"
                            />
                            <DayHabits>
                                <p onClick={() => console.log("Clicado")}>D</p>
                                <p onClick={() => console.log("Clicado")}>S</p>
                                <p onClick={() => console.log("Clicado")}>T</p>
                                <p onClick={() => console.log("Clicado")}>Q</p>
                                <p onClick={() => console.log("Clicado")}>Q</p>
                                <p onClick={() => console.log("Clicado")}>S</p>
                                <p onClick={() => console.log("Clicado")}>S</p>
                            </DayHabits>
                        </BoxHabitsTop>

                        <BoxHabitsBottom>
                            <p onClick={() => setShowAddHabit(false)}>
                                Cancelar
                            </p>
                            <button type="submit" >Salvar</button>
                        </BoxHabitsBottom>
                    </BoxHabits>
                </form>
            )}

            {habits === null && (
                <div>
                    <ThreeDots
                        visible={true}
                        height="40"
                        width="40"
                        color="#126BA5"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )}

            {habits && habits.length === 0 && (
                <MessageEmpty>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </MessageEmpty>
            )}

            {habits && habits.length > 0 && (
                <>
                    {habits.map(habit => {
                        return (
                            <HabitsDisplayed>
                            <span key={habit.id}>
                            <h2>{habit.name}</h2>
                        </span>
                        <DayHabits>
                            <p>D</p>
                            <p>S</p>
                            <p>T</p>
                            <p>Q</p>
                            <p>Q</p>
                            <p>S</p>
                            <p>S</p>
                        </DayHabits>
                            </HabitsDisplayed>
                        )
                    })}
                </>
            )}

        </div>
    )
}

const MessageEmpty = styled.div`
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    padding: 0 30px;
    text-align: left;
    margin-top: 20px;
 `

const BoxHabits = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 18px;
    width: 340px;
    height: 180px;
    background-color: #FFF;
    border-radius: 5px;

    input {
        width: 303px;
    height: 45px;
    color: #D4D4D4;
    margin-bottom: 6px;
    border: 1px solid;
    border-radius: 5px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 400;
    padding-left: 6px;
    box-sizing: border-box;

    &::placeholder {
        width: 100%;
    color: #DBDBDB;
}

    &:hover {
        border-color: #D4D4D4;
}

    &:focus {
        border-color: #666666;
    outline: none;
    color: #666666;
}
}
`

const BoxHabitsTop = styled.div`
    display: flex;
    flex-direction: column;
`

const DayHabits = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 303px;
    height: 30px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #D4D4D4;

    p {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D4D4D4;
    height: 100%;
    width: 30px;
    border-radius: 5px;
    margin-right: 4px;
    margin-top: 8px;
}
`

const BoxHabitsBottom = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 303px;
    height: 35px;
    margin-top: 45px;

    p {
        font-family: "Lexend Deca", sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #52B6FF;
        margin-right: 23px;
    }

    button {
        background-color: #52B6FF;
        color: #FFF;
        border: none;
        width: 84px;
        height: 35px;
        border-radius: 5px;
        font-family: "Lexend Deca", sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
`

const HabitsDisplayed = styled.div`
    width: 340px;
    height: 91px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    margin-top: 10px;
    border-radius: 5px;

    span {
        width: 340px;
        margin-left: 40px;
        display: flex;
        justify-content: start;
        margin-bottom: 10px;
    }

    h2 {
        font-family: "Lexend Deca", sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #666666;
    }


`