import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const data = {
        email: email,
        name: name,
        image: image,
        password: password
    }

    function sendData () {
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", data);

        request.then(console.log(request))
    }

    return (
        <Page>
            <img src="img/logo.png" />
            <Form>
                <input onChange={(event) => setEmail(event.target.value)} type="text" placeholder="email" />
                <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="senha" />
                <input onChange={(event) => setName(event.target.value)} type="text" placeholder="nome" />
                <input onChange={(event) => setImage(event.target.value)} type="text" placeholder="foto" />
                <button onClick={sendData}>Cadastrar</button>
            </Form>

            <Link to="/" exact>
                <p>Já tem uma conta? Faça login!</p>
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
