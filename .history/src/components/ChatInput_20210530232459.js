import { Button } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import {db} from '../firebase'
import firebase from 'firebase'

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const sendMessage = (e) =>{
        e.preventDefault();  //prevent refresh
        if( channelId ) {
            return false
        }
        db.collection('rooms').doc(channelId).collection("messages").add({
            message: inputj,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    return (
    <ChatInputContainer>
        <form>
            <input value={input}
             onChange = { e => setInput(e.target.value)}
             placeholder={`Message #ROOM`}/>
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
        border-radius: 3px;
        outline: none;
        padding: 20px;

    }
    > form > button {
        display: none;
    }
`