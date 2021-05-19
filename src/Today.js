import styled from 'styled-components';
import Habits from "./Habits";
import React, { useContext, useState } from 'react';
import UserContext from './UserContext';
import axios from 'axios';

export default function Today () {

    return (
        
        <TodayPage>
            <h1>
                Dia, 00/00
            </h1>
            <h2>
                Nenhum hábito concluído ainda
            </h2>
            <Habit />
        </TodayPage>
        )
}

function Habit () {
    return (
        <>
            <HabitDiv>
                <HabitData>
                <h1>Nome do hábito</h1>
                <p>Sequência atual: X dias</p>
                <p>Seu recorde: X dias</p>
                </HabitData>
                <button>
                    <img src="img/check.png" />
                </button>
            </HabitDiv>
            <HabitDiv>
                <HabitData>
                <h1>Nome do hábito</h1>
                <p>Sequência atual: X dias</p>
                <p>Seu recorde: X dias</p>
                </HabitData>
                <button>
                    <img src="img/check.png" />
                </button>
            </HabitDiv>
        </>
    )
}

//styled components
const TodayPage = styled.div `
    height: 100vh;
    margin-top: 68px;
    width:100%;
    background: #f2f2f2;
    padding: 0 17px;

    > h1{
        padding-top: 30px;
        font-size: 23px;
        color:#126BA5;
        line-height: 28.72px;
        font-weight: 400;
    }
    h2 {
        font-size: 18px;
        color: #BABABA;
        font-weight: 400;
        margin-bottom: 28px;
    }
`
const HabitDiv = styled.div `
    width: 340px;
    height: 94px;
    background:#fff;
    border-radius: 5px;
    padding: 13px 13px 8px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 10px 0;
    
    button {
        width: 69px;
        height: 69px;
        border-radius: 5px;
        border: 1px solid #E7E7E7;
        background: #EBEBEB;
    }
` 
const HabitData = styled.div `
    display: flex;
    flex-direction:column;

    h1 {
        color: #666666;
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 7px;
    }
    p{
        font-weight: 400;
        font-size: 13px;
        color: #666666;
        margin-bottom: 4px;
    }

`