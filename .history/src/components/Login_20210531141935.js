import { Button } from '@material-ui/core'
import React from 'react'
import  styled  from 'styled-components'

function Login() {
    const signIn = (e) =>{
        e.preventDefault();
    }

    return (
        <LoginContainer>
            <LoginInnercontainer>
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"/>
                <h1>Sign in to Banchi</h1>
                <span>banchi.slack.com</span>
                <Button type="submit" onClick = {signIn}>
                    Sign in with Google
                </Button>
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
    /* border: 1px solid green; */
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 10px;

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    > button {
        margin-top: 50px;
        text-transform: inherit;
        background-color: #0a8d48;
        color: white;
        border: 1px solid green;
    }

`