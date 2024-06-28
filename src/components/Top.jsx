import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import logo from "../assets/logo.jpg"

export default function Top() {

    const { token, user } = useContext(UserContext);
    const [faceImg, setFaceImg] = useState(logo);

    useEffect(() => {
        if(token && user !== null) {
            setFaceImg(user.image);
        } else {
            setFaceImg(logo);
        }
    }, [])

    return (
        <HeadStyled>
            <div>
                <h1>TrackIt</h1>
                <img src={faceImg} />
            </div>
        </HeadStyled>
    )
}

const HeadStyled = styled.div`
    height: 70px;
    width: 100%;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Playball", "cursive", sans-serif;
    font-size: 39px;
    font-weight: 400;
    color: #FFF;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;

    div {
    width: 375px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    }

    img {
        border-radius: 50%;
        height: 51px;
    }
`