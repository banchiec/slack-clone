import  InfoOutlinedIcon  from '@material-ui/icons/InfoOutlined'
import  StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined'
import React from 'react'
import styled from 'styled-components'

function Chat() {
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room-name</strong></h4>
                    <StarBorderOutlinedIcon/>
                </HeaderLeft>
        

                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>

            </Header>

        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
` 
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgrey;
    `
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 >.MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`
const HeaderRight= styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
`







