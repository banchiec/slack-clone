import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function ChatInput({channelName, roomId}) {
    const sendMessage = (e) =>{
        e.preventDefault();  //prevent refresh
    }
    return (
    <ChatInputContainer>
        <form>
            <input placeholder={`Message #ROOM`}/>
            <Button hidden type='submit' onclick={sendMessage}>
                SEND
            </Button>
        </form>
     </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form >input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 20px;
    }
`