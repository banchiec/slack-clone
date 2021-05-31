import React from 'react'
import styled from "styled-components"
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons"

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
    color : green;
    `
const HeaderLeft = styled.div`
    `
const HeaderAvatar = styled(Avatar)`
    `