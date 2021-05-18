import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Menu () {
    return (
        <BottomBar>
            <Link to="/habitos">
                <h1> Habitos </h1>
            </Link>
            <Link to="/hoje">
                <CircularProgressbar    value={66}
                                        text={'Hoje'}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                            backgroundColor: "#3e98c7",
                                            textColor: "#fff",
                                            pathColor: "#fff",
                                            trailColor: "transparent"})}/>
            </Link>
            <Link to="/historico">
                <h1> Histórico </h1>
            </Link>
        </BottomBar>
    )
}

const BottomBar = styled.div `
    width: 100%;
    height: 70px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    h1 {
        font-size: 18px;
        color: #52B6FF;
    };

    .CircularProgressbar {
        width: 91px;
        height: 91px;
        margin-bottom: 70px;
        text: {
            fontSize: '18px'
        }
    }
    `
