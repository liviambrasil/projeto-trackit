import styled from 'styled-components';
import Habits from "./Habits";
import React, { useEffect, useContext, useState } from 'react';
import UserContext from './context/UserContext';
import axios from 'axios';
import * as dayjs from 'dayjs'
import Check from "./Check"




export default function Today () {

    require('dayjs/locale/pt-br')
    const date = dayjs().locale('pt-br').format('dddd[,] DD/MM')
    console.log(date)
    const { user, setTodayHabits, todayHabits } = useContext(UserContext);
    const { token } = user;

    
    const config = {headers: {"Authorization": `Bearer ${token}`}}

    useEffect (() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then(response => {setTodayHabits(response.data)
            console.log(response.data)
        })
    }
    , []);
    
    return (
        <TodayPage>
            <h1>
                {date}
            </h1>
            <VerifyHabitsList todayHabits={todayHabits}/>
            <Habit todayHabits={todayHabits} config={config}/>
        </TodayPage>
        )
}

function Habit (props) {
    const { todayHabits, config, setTodayHabits } = props
    const [selected, setSelected] = useState(false)
    console.log(todayHabits)

    if(todayHabits.length>0) {
        return (
            <>
            {todayHabits.map((atualHabit) => {
                const status = []
                const { name, done, id, currentSequence, highestSequence } = atualHabit

                return (
                <HabitDiv>
                    <HabitData>
                        <h1>{name}</h1>
                        <p>Sequência atual: {currentSequence} dias</p>
                        <p>Seu recorde: {highestSequence} dias</p>
                    </HabitData>
                    <Check key = {atualHabit.id} id={atualHabit.id} done={atualHabit.done} config={config} setTodayHabits={setTodayHabits} />
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

function attHabitsList (setTodayHabits, config) {
    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    request.then(response => setTodayHabits(response))
}

function CheckHabit (id, config, done, selected, setSelected, setTodayHabits) {
    const request = axios.post (`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
    request.then(() => attHabitsList(setTodayHabits, config))
    request.catch(UncheckHabit)
    //if (selected) {setSelected(false)}
    //else {setSelected (true)}

    function UncheckHabit () {
        const request = axios.post (`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
        request.then(() => attHabitsList(setTodayHabits, config))
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