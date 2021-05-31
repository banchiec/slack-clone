import React from 'react'
import  styled  from 'styled-components'

function Login() {
    return (
        <LoginContainer>
            <LoginInnercontainer>
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"/>
            </LoginInnercontainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    display: grid;
    background-color: #f8f8f8;
    height: 100vh;
    place-items: center;
`

const LoginInnercontainer = styled.div`
    padding:  100px;
    text-align: center;
    border: 1px solid green;
    background-color: white;

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
`