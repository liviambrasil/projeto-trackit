import styled from 'styled-components';
import Habits from "./Habits";
import React, { useEffect, useContext, useState } from 'react';
import UserContext from './UserContext';
import axios from 'axios';
import * as dayjs from 'dayjs'



export default function Today () {

    console.log("rodou Today")
    //entender lib de data
    //dayjs.locale('pt - br')
    //var now = dayjs()
    //const infoDate = dayjs(now)
    //console.log(infoDate)

    const { user } = useContext(UserContext);
    console.log(user)
    const { token } = user;
    const [todayHabits, setTodayHabits] = useState()

    const config = {headers: {"Authorization": `Bearer ${token}`}}

    useEffect (() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then(response => {setTodayHabits(response.data)
        })
    }
    , []);
    
    return (
        <TodayPage>
            <h1>
                Dia, 00/00
            </h1>
            <VerifyHabitsList todayHabits={todayHabits}/>
            <Habit todayHabits={todayHabits}/>
        </TodayPage>
        )
}

function Habit (props) {
    console.log("rodou habit")
    const { todayHabits } = props
    if(todayHabits !== undefined) {
        return (
            <>
            {todayHabits.map((atualHabit) => {
                console.log(atualHabit)
                const { name, done, id, currentSequence, highestSequence } = atualHabit
                return (
                <HabitDiv>
                    <HabitData>
                        <h1>{name}</h1>
                        <p>Sequência atual: {currentSequence} dias</p>
                        <p>Seu recorde: {highestSequence} dias</p>
                    </HabitData>
                    <button>
                        <img src="img/check.png" />
                    </button>
                </HabitDiv> 
                )
            })}
            </>
        )
    }

    else {
        return (<> </>)
    }
}

function VerifyHabitsList (props) {

    const { todayHabits } = props
    if(todayHabits !== undefined) {
        if (todayHabits.length === 0) {
            return (
                <h2>
                    Nenhum hábito concluído ainda
                </h2>
            )
        }
        else {
            return (
                <h2>
                    X% dos hábitos concluídos
                </h2>
            )
        }
    }
    else { 
        return ( <> </> )
    }
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