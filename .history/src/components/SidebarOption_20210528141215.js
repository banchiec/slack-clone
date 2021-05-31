import React from 'react'
import styled from "styled-components"

function SidebarOption( {Icon ,title, addChannelOption}) {

    const addChannel = () => {
        alert("Hola")

    }


    const selectChannel = () => {
        alert("Add Channel")

    }

    return (
        <SidebarOptionContainer 
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon FontSize ='small' style ={{padding: 10}}/>}
            {Icon ? (
                 <h3>{title}</h3>
                 )
                :(
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
const SidebarOptionChanel= styled.div``





