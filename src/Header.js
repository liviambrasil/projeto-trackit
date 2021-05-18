import styled from 'styled-components';

export default function Header () {
    return (
        <Top>
            <h1>
                TrackIt
            </h1>
            <img src="img/profilePic" />
        </Top>
    )
}

const Top = styled.div`
    width: 100%;
    height: 70px;
    color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 10px 0 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    
    h1 {
        font-family: 'Playball', cursive;
        font-size: 38.98px;
        font-weight: 400;
        color: #fff;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 100%;
        object-fit: cover;
    }
`;


