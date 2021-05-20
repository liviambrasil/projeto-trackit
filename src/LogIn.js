import styled from 'styled-components';
import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import axios from "axios";
import UserContext from './UserContext';




export default function LogIn () {

    const {user, setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [boolean, setBoolean] = useState(false)
    const history = useHistory()
    
    
    function tryLogin () {
        setBoolean(true)

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", 
        {email:email, password: password})

        request.then(loginSucess)

        request.catch(loginFailed)
    }

    function loginSucess (response) {
        setUser(response.data)
        history.push("/hoje")
        
    }

    function loginFailed () {
        alert("Login ou senha inválido");
        setBoolean(false);
    }

    return (
        <Page>
            <img src="img/logo.png" />
            <Form>
                <input  onChange={(event) => setEmail(event.target.value)} 
                        type="text" 
                        placeholder="email" 
                        disabled={boolean}/>

                <input  onChange={(event) => setPassword(event.target.value)} 
                        type="password" 
                        placeholder="senha" 
                        disabled={boolean}/>

                <button onClick={tryLogin}>Entrar</button>
            </Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Page>
    )
}

const Page = styled.div `
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top: 68px;

    p{
        font-size: 13px;
        color: #52B6FF;
    }
`
const Form = styled.div `
    width: 303px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 32px 0 25px 0;

    input {
        width:100%;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        padding-left: 11px;
        font-size: 20px;
    }
    ::placeholder {
        color: #DBDBDB;
    }
    
    button {
        width:100%;
        height: 45px;
        background:#52B6FF;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        color: #fff;
    }
`
