import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function Habits() {
    
    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        if (!token) {
            navigate("/");
            return;
        } else {
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            axios.get(URL, config)
                .then(res => console.log(res.data))
                .catch(err => setHabits(err))
        }
    }, []);

    return (
        <span>Página de hoje</span>
    )
}