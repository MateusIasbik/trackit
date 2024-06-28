import React from "react";
import styled from "styled-components";

export default function Add() {

    function AddHabit() {
        alert("Cliquei")
    }

    return (
        <PlusButton onClick={AddHabit}>+</PlusButton>
    )
}


const PlusButton = styled.div`
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
    margin-right: 5px;
`