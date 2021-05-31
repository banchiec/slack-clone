import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function ChatInput({channelName, roomId}) {
    return
    (
    <ChatInputContainer>
        <form>
            <input placeholder={`Message #ROOM`}
            <Button>
                SEND
            </Button>
        </form>
     </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div``