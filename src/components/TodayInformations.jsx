import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function TodayInformation() {

    const BASEURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState([]);


    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(`${BASEURL}/today`, config)
            .then(res => {
                setHabits(res.data);
            })
            .catch(err => console.log(err.response.data));

    }, []);

    function IconClickedWhenDoneIsFalse(id) {

        setHabits(habits.map(habit =>
            habit.id === id ? { ...habit, done: !habit.done } : habit
        ));

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };


        axios.post(`${BASEURL}/${id}/check`, {}, config)
            .then(() => {
                setHabits(habits.map(habit =>
                    habit.id === id ? { ...habit, done: true } : habit
                ));
            })
            .catch(err => {
                alert(err.response.data.message);
            });
    };

    function IconClickedWhenDoneIsTrue(id) {

        setHabits(habits.map(habit =>
            habit.id === id ? { ...habit, done: !habit.done } : habit
        ));

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };


        axios.post(`${BASEURL}/${id}/uncheck`, {}, config)
            .then(() => {
                setHabits(habits.map(habit =>
                    habit.id === id ? { ...habit, done: false } : habit
                ));
            })
            .catch(err => {
                alert(err.response.data.message);
            });
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
                            onClick={() => habit.done ? IconClickedWhenDoneIsTrue(habit.id) : IconClickedWhenDoneIsFalse(habit.id)}
                        >
                            <IconCheck done={habit.done} sx={{ fontSize: 95 }} />
                        </CheckButton>
                    </BoxHabitToday>
                )
            })}
        </ContentToday>
    )
}

const IconCheck = styled(CheckBoxIcon)`
    color: ${props => props.done ? "#8fc549" : "#EBEBEB"}; 
`

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
`
