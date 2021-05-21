import styled from 'styled-components';
import axios from "axios"
import { useContext } from 'react';
import UserContext from './context/UserContext';

export default function Check ({done, key, id, config}) {

    console.log(config)
    console.log(id)

    const { setTodayHabits, todayHabits } = useContext(UserContext)

    return (
        <Button done={done} onClick={CheckHabit}>
            <img src="img/check.png" />
        </Button>
        )

    function CheckHabit () {
        console.log("foi")
        console.log(done)

        if(done) {
        console.log("rodou if")
        const request = axios.post (`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
        request.then(() => attHabitsList())
        }

        else {
                console.log("rodou else")
                const request = axios.post (`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
                request.then(() => attHabitsList())
            }
        }
        
        function attHabitsList () {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then((response) => setTodayHabits(response.data))

        }
    }


const Button = styled.div `
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    background: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    display: flex;
    justify-content: center;
    align-items: center;
    `