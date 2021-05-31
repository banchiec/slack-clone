import React from 'react'
import styled from "styled-components"
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime"

export default function Header() {
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar

                />
                <AccessTimeIcon/>

            </HeaderLeft>
            {/* Header Middle*/}
            {/* Header Right*/}
           <h1>Test</h1> 
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    `
const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-block-end: 20px;
    `
const HeaderAvatar = styled(Avatar)`
    `