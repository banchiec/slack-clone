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

const ChatInputContainer = styled.div``