import styled from 'styled-components';
import React, { useContext, useState, useEffect } from 'react';
import UserContext from './context/UserContext';
import axios from 'axios'
import Days from "./Days"

export default function Habits () {

    const { user, habits } = useContext(UserContext);
    const { token } = user;
    const [boolean, setBoolean] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)


    const config = {headers: {"Authorization": `Bearer ${token}`}}

    return (
        <HabitPage>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button onClick={() => setDisplayForm(true)}>+</button>
            </MyHabits>
            <AddHabit   displayForm={displayForm} setDisplayForm={setDisplayForm}
                        boolean={boolean} setBoolean={setBoolean}
                        config={config}
                        />
            <Habit config={config}/>
            <NoHabit habits={habits}/>
        </HabitPage>
    )
}

function AddHabit (props) {

    const { habits, setHabits,
            newHabit, setNewHabit,
            habitDays, setHabitDays } = useContext(UserContext)

    const { displayForm, setDisplayForm, 
            boolean, setBoolean, 
            config } = props

    const weekdays = [{name: 'D', id: 0}, {name: 'S', id: 1},{name: 'T', id: 2},{name: 'Q', id: 3},{name: 'Q', id: 4},{name: 'S', id: 5}, {name: 'S', id: 6}]

    setBoolean(false)

    function SaveHabit () {

        setBoolean(true)
        setDisplayForm(false)
        const body = { name: newHabit, days: habitDays}
    
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        request.then((response) => {setDisplayForm(false)
                                    setNewHabit("")
                                    setHabitDays([])
                                    setHabits([...habits, response.data])
                                    setBoolean(true)
                                    }
                        )
        request.catch(()=> {setBoolean(false)
                            alert("Preencha os campos corretamente")})
    }

    if (displayForm){
        return (
            <AddHabitsDiv>
                <input  onChange={(event) => setNewHabit(event.target.value)}
                        type="text" 
                        placeholder="nome do hábito" 
                        disabled={boolean} 
                        value={newHabit}/>
                <WeekDays>
                    {weekdays.map(atualDay => {
                        return (
                            <Days habitDays={habitDays} setHabitDays={setHabitDays} days={atualDay}/>
                        )
                        }
                        )}
                </WeekDays>
                <Commands>
                    <p onClick={()=>{setDisplayForm(false) 
                                    setNewHabit(newHabit)}}>Cancelar</p>
                    <button onClick={SaveHabit}>
                        Salvar
                    </button>
                </Commands>
            </AddHabitsDiv>
        )
    }
    else { return (<> </>)}
}       


function NoHabit (props) {
    const { habits } = props
    if(habits.length === 0 || habits === undefined) {
        return (
            <NoHabits>
                <h1>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </h1>
            </NoHabits>
        )
    }
    else {
        return (<> </>)
    }
}
function Habit (props) {

    const {config} = props
    const {habits, setHabits} = useContext(UserContext)

    useEffect (() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        request.then(response => {setHabits(response.data)
        })
    }
    , []); // eslint-disable-next-line react-hooks/exhaustive-deps

    if(habits.length === 0 || habits === undefined) {
        return (<> </>)
    }
    else {
    return (
            habits.map((atualHabit, index) => {
                const { name, days, id } = atualHabit
                return (
                    <HabitDiv>
                        <h1>{name}</h1>
                        <div>
                            <Days habitDays={null} setHabitDays={null} days={days}/>
                        </div>
                        <img onClick={()=> DeleteHabit(id, config, habits, setHabits)} src="img/trash.png" alt="trash icon"/> 
                    </HabitDiv>
                )
            })
    )}
}
function DeleteHabit (id, config, habits, setHabits) {
    if (window.confirm("Você realmente deseja apagar esse hábito?")) {
        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        request.then(() => {
                        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)
                        request.then((response) => setHabits(response.data))})
}
}

//styled component
const HabitPage = styled.div `
    width: 100%;
    height: auto;
    background: #f2f2f2;
    margin: 68px 0 70px 0;
    padding: 28px 0 45px 0;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const HabitDiv = styled.div `
    width: 341px;
    height: 91px;
    background: #fff;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 15px;
    color: #666666;
    margin-bottom: 10px;

    &>div {
        display:flex;
    }
    h1 {
        font-size: 20px;
        margin-bottom: 8px;
    }
    img {
        position: absolute;
        top: 11px;
        right: 10px;
    }
`

const WeekDays = styled.div `
    display:flex;
`

const MyHabits = styled.div `
    width: 335px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

        h1 {
            font-size: 23px;
            font-weight: 400;
            color: #126BA5;
        }
        button {
            width: 40px;
            height: 35px;
            background:#52B6FF;
            border-radius: 4.5px;
            color: #fff;
            font-size: 27px;
            border:none;
        }
`
const NoHabits = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        width: 90%;
        color:#666666;
        font-size: 17.98px;
        line-height:22.47px;
        font-weight: 400;
        margin-top: 20px;
    }
`
const AddHabitsDiv = styled.div `
    width: 341px;
    height: 180px;
    background: #fff;
    border-radius: 5px;
    padding: 18px 18px 90px 18px;
    margin-bottom: 10px;
    position: relative;
        input {
            width:303px;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            margin-bottom: 8px;
            padding-left: 11px;
            font-size: 20px;
            color:#666666;
        }
        ::placeholder {
        color: #DBDBDB;
    }
`
const Commands = styled.div `
    display:flex;
    align-items: center;
    position: absolute;
    bottom: 15px;
    right: 15px;

    p {
        color: #52B6FF;
        font-size: 16px;
        font-weight: 400;
        margin-right: 23px;
    }
    button {
        width:84px;
        height: 35px;
        background:#52B6FF;
        border-radius: 4.5px;
        border: none;
        font-size: 16px;
        color: #fff;  
    }
`