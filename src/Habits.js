import styled from 'styled-components';

export default function Habits () {
    return (
        <Habit />
    )
}

function Habit () {
    return (
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
    )
}

const HabitDiv = styled.div `
    width: 340px;
    height: 94px;
    background:#fff;
    border-radius: 5px;
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    
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
    }

    `

