import styled from 'styled-components';

export default function Historic () {
    return (
        <HistoricPage>
        <H1>Histórico</H1>
        <P>Em breve você poderá ver o histórico dos seus hábitos aqui</P>
        </HistoricPage>
    )
}

const HistoricPage = styled.div `
    margin-top: 70px;
`
const H1 = styled.div `
    font-size: 23px;
    font-weight: 400;
    color: #126BA5;
    padding: 28px 0 17px 17px;`

const P = styled.div `
    font-size: 18px;
    font-weight:  400;
    color: #666666;
    padding: 0 17px;`