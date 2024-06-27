import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function Habits(){

    const {token} = useContext(UserContext);
    const navigate = useNavigate();
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    axios.get(URL, config)
        .then(res => setHabits(res))
        .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        if(!token) {
            navigate("/");
        }
    }, []);

    return (
        <span>Página de hoje</span>
    )
}