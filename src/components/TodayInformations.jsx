import React from "react";
import styled from "styled-components";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function TodayInformation() {

    

    return (
            <ContentToday>
                <BoxHabitToday>
                    <InformationsToday>
                        <h3>Malhar</h3>
                        <TodaysData>
                            <p>Sequência atual: 3 dias</p>
                            <p>Seu recorde: 5 dias</p>
                        </TodaysData>
                    </InformationsToday>
                    <CheckButton>
                        <CheckBoxIcon />
                    </CheckButton>
                </BoxHabitToday>
            </ContentToday>
    )
}

const ContentToday = styled.div`
    font-family: "Lexend Deca", sans-serif;
    font-size: 15px;
    font-weight: 400;
    display: flex;
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
    color: #EBEBEB;
    
`