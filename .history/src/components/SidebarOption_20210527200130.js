import React from 'react'
import styled from "styled-components"

function SidebarOption( {Icon ,title}) {
    return (
        <SidebarOptionContainer >
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
    font-size: 12px;

`
const SidebarOptionChanel= styled.div``