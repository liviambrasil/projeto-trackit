import { useState } from "react"
import styled from 'styled-components';


export default function Days ({days, habitDays, setHabitDays}) {

    console.log(days)
    const arrDays = [{name: 'D', id: 0, status: false}, {name: 'S', id: 2, status: false},{name: 'T', id: 3, status: false},{name: 'Q', id: 4, status: false},{name: 'Q', id: 5, status: false},{name: 'S', id: 6, status: false}, {name: 'S', id: 7, status: false}]
    const [selected, setSelected] = useState(false)

    if(habitDays === null && setHabitDays === null) {
        arrDays.forEach(element => {
            if(days.includes(element.id)) {
                element.status = true
            }
        })
    }

    function SelectDay (atualId) {
        const index = habitDays.findIndex(element => element===atualId ? true : false)

        if (index === -1) {
            setHabitDays([...habitDays, atualId])
            setSelected(true)
        }
        else {
            let arr = habitDays
            arr.splice(index, 1)
            setHabitDays(arr)
            setSelected(false)
        }
    }

    if(habitDays === null && setHabitDays === null) {
        return (
            <>
                {arrDays.map (atualDay => (
                                <Day key={atualDay.id} selected={atualDay.status}>{atualDay.name}</Day>
                                ))
                }
            </>
        )
    }

    else {
        return (
            <Day onClick={()=> SelectDay(days.id)} key={days.id} selected={selected}>{days.name}</Day>
        )
    }
}

const Day = styled.div `
    display: flex;
    width: 30px;
    height: 30px;
    background: ${props => props.selected ? "#CFCFCF" : "#fff"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 400;
    color: ${props => props.selected ? "#fff" : "#dbdbdb"};
    margin-right: 4px;
    justify-content: center;
    align-items: center;
`