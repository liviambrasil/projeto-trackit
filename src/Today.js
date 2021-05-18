import styled from 'styled-components';
import Habits from "./Habits"

export default function Today (props) {
    return (
        <TodayPage>
            <h1>
                Dia, 00/00
            </h1>
            <h2>
                Nenhum hábito concluído ainda
            </h2>
            <Habits />
        </TodayPage>
        )

}

const TodayPage = styled.div `
    height: 100vh;
    margin-top: 68px;
    width:100%;
    background: #f2f2f2;
    padding-left: 17px;

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