import styled from 'styled-components';
import { Link } from 'react-router-dom'


export default function LogIn () {
    return (
        <Page>
            <img src="img/logo.png" />
            <Form>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button>Entrar</button>
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
        color: #DBDBDB;
        border-radius: 5px;
        margin-bottom: 6px;
        padding-left: 11px;
        font-size: 20px;
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
