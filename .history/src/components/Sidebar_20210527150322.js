import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'


function Sidebar() {
    return (
        <div>
            <SibebarContainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>BANCHI </h2>
                        <h3>
                            <FiberManualRecordIcon />

                        </h3>
                    </SidebarInfo>
                </SidebarHeader>
            </SibebarContainer>
        </div>
    )
}

export default Sidebar

const SidebarContainer = styled.div``

const SidebarHeader= styled.div``

const SidebarInfo = styled.div``
