import styled from 'styled-components';
import React, { useEffect, useContext } from 'react';
import UserContext from './context/UserContext';
import axios from 'axios';
import * as dayjs from 'dayjs'
import Check from "./Check"


export default function Today () {
    require('dayjs/locale/pt-br')
    const date = dayjs().locale('pt-br').format('dddd[,] DD/MM')
    const { setTodayHabits, todayHabits, porcentage, config } = useContext(UserContext);


    useEffect (() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then(response => {setTodayHabits(response.data)
        })
    }
    , []); // eslint-disable-next-line react-hooks/exhaustive-deps
    
    return (
        <TodayPage>
            <h1>
                {date}
            </h1>
            <VerifyHabitsList todayHabits={todayHabits} porcentage={porcentage} />
            <Habit todayHabits={todayHabits} config={config}/>
        </TodayPage>
        )
}

function Habit (props) {
    
    const { todayHabits, config, setTodayHabits } = props

    if(todayHabits.length>0) {
        return (
            <>
            {todayHabits.map((atualHabit) => {

                const { name, done, currentSequence, highestSequence } = atualHabit

                return (
                <HabitDiv>
                    <HabitData>
                        <h1>{name}</h1>
                        <p>Sequência atual: <Current done={done}>{currentSequence}</Current> dias</p>
                        <p>Seu recorde: <Highest done={done} record={() => highestSequence === currentSequence ? true : false}>{highestSequence}</Highest> dias</p>
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

    const { todayHabits, porcentage} = props
    if(todayHabits !== undefined) {
        if (porcentage === 0) {
            return (
                <H2 porcentage={porcentage}>
                    Nenhum hábito concluído ainda
                </H2>
            )
        }
        else {
            return (
                <H2 porcentage={porcentage}>
                    {Math.round(porcentage)}% dos hábitos concluídos
                </H2>
            )
        }
    }
    else {
        return ( <> </> )
    }
}

//styled components

const Current = styled.span `
    font-size: 13px;
    color: ${props => props.done ? "#8fc549" : "#bababa"}
`

const Highest = styled.span `
    font-size: 13px;
    color: ${props => props.done && props.record ? "#8fc549" : "#bababa"}
`

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
const H2 = styled.div `
    font-size: 18px;
    color: ${props => props.porcentage>0 ? "#8FC549" : "#BABABA"};
    font-weight: 400;
    margin-bottom: 28px;`