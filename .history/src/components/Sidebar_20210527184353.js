import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'


function Sidebar() {
    return (
        <div>
            <SidebarContainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>BANCHI </h2>
                        <h3>
                            <FiberManualRecordIcon />

                        </h3>
                    </SidebarInfo>
                </SidebarHeader>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
`

const SidebarHeader= styled.div``

const SidebarInfo = styled.div``
