import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'


function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>BANCHI TEAMWORK</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Iván Espinoza
                    </h3>
                </SidebarInfo>
            </SidebarHeader>
            <SidebarItems> Rocio </SidebarItems>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarItems = styled.div`
    background-color: white;
    margin-left: 10%;
    margin-right: auto;
    width: 80%;
`
const SidebarContainer = styled.div`
    background-color: var(--slack-color);
`

const SidebarHeader= styled.div``

const SidebarInfo = styled.div``
