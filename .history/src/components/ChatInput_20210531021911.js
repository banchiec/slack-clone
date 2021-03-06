import { Button } from '@material-ui/core'
import React, {  useState } from 'react'
import styled from 'styled-components'
import {db} from '../firebase'
import firebase from 'firebase'

function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState('')

    const sendMessage = (e) =>{

        e.preventDefault();  //prevent refresh

        // console.log(channelId)

        if( channelId ) {
            return false
        }
        db.collection('rooms').doc(channelId).collection("messages").add({
            message: input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user : "banchi",
            userImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3BYVOu2Uu9oroHbPnRQP_C0bWZ4ss8oLDg&usqp=CAU',
        })
        setInput("")
    }
    return (
    <ChatInputContainer>
        <form>
            <input value={input}
             onChange = { (e) => setInput(e.target.value)}
             placeholder={`message #${ channelName }`}/>
            <Button hidden type='submit' onClick={sendMessage}>
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