import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function TodayInformation() {

    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState([]);

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then(res => {
                const updatedHabits = res.data.map(habit => ({ ...habit, clicked: false }));
                setHabits(updatedHabits);
            })
            .catch(err => console.log(err.response.data));

    }, [token]);



    function IconClicked(id) {

        setHabits(habits.map(habit => 
            habit.id === id ? { ...habit, clicked : !habit.clicked } : habit
        ));

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
            .then(res => {
                console.log(res);
                setHabits(habits.map(habit =>
                    habit.id === id ? { ...habit, done: true } : habit
                ));    
            })
            .catch(err => console.log(err.response.data));

        if(habits === false) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
            .then(res => {
                console.log(res);
                setHabits(habits.map(habit =>
                    habit.id === id ? { ...habit, done: true } : habit
                ));    
            })
            .catch(err => console.log(err.response.data));
        }

    };
        


    return (
        <ContentToday>
            {habits.map(habit => {
                return (
                    <BoxHabitToday key={habit.id}>
                        <InformationsToday>
                            <h3>{habit.name}</h3>
                            <TodaysData>
                                <p>Sequência atual: {habit.currentSequence} dia(s)</p>
                                <p>Seu recorde: {habit.highestSequence} dia(s)</p>
                            </TodaysData>
                        </InformationsToday>
                        <CheckButton
                            onClick={() => IconClicked(habit.id)}
                            $clicked={habit.clicked}
                        >
                            <CheckBoxIcon sx={{ fontSize: 95, color: habit.clicked ? "#4CAF50" : "#EBEBEB" }} />
                        </CheckButton>
                    </BoxHabitToday>
                )
            })}
        </ContentToday>
    )
}

const ContentToday = styled.div`
    font-family: "Lexend Deca", sans-serif;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    width: 340px;
`

const BoxHabitToday = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    height: 94px;
    background-color: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
`

const InformationsToday = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #666666;
    padding-left: 15px;
`

const TodaysData = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
`

const CheckButton = styled.div`
    display: flex;
    color: #EBEBEB;
    cursor: pointer;
        ${({ $clicked }) => $clicked && `
            color: #4CAF50;
    `}
`
