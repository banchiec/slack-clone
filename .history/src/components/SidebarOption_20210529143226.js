import React from 'react'
import styled from "styled-components"
import { enterRoom } from '../features/appSlice'
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from '../firebase'

function SidebarOption( {Icon ,title, addChannelOption, id}) {
    const dispatch = useDispatch()

    // const [channels, loading, error] = useCollection(db.collection('roms'))

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    console.log(db)

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom)

        }

    }

    return (
        <SidebarOptionContainer 
            onClick={ addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon FontSize ='small' style ={{padding: 10}}/>}
            {Icon ? (
                 <h3>{title}</h3>
                ):(
                <SidebarOptionChanel>
                    <span>#</span>{title}
                </SidebarOptionChanel>
                )
            }
            
        </SidebarOptionContainer>
    )
}

export default SidebarOption


const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2px;
    font-size: 12px;
    cursor: pointer;
    
    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }
    
    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;

    }



`
const SidebarOptionChanel= styled.h3`
    padding: 10px 0;
    font-weight: 300;

`





