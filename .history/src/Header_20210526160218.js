import React from 'react'
import styled from "styled-components"

export default function Header() {
    return (
        <HeaderContainer>
            {/* Header Left */}
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