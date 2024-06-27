import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function Habits(){

    const {token} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            navigate("/");
        }
    }, []);

    return (
        <span>Página de hoje</span>
    )
}