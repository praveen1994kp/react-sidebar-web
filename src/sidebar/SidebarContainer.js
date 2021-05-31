import React from 'react'
import styled from 'styled-components'
import BurgerIcon from './BurgerIcon'

const Container = styled.section`
display: grid;
grid-template-rows: 1fr;
padding: 1rem 0.5rem;
margin-right: 1rem;

& > nav {
    overflow-y: auto;
    overflow-x: hidden;
}
`

const LogoContainer = styled.header`
display: grid;
grid-template-columns: 2rem minmax(3rem, 25%) 1fr;
gap: 2px;

& > * {
    color: var(--on-surface-1);
    display: grid;
    place-items: center;
}
`

const PositionContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
width: 3rem;
transition: width 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
background: var(--surface-1);
z-index: 100;
width: 3rem;
overflow-x: hidden;
box-shadow: 0 0 0.5rem rgb(0 0 0 / 50%);

&:hover {
    width: clamp(5rem, 25%, 15rem);
}

.fix & {
    width: clamp(5rem, 25%, 15rem);
}
`

const LogoIconContainer = styled.picture`
&:focus-within {
    div.${PositionContainer} {
        width: 3rem !important;
    }
}
`

export function SidebarContainer({ brandLogo, brandText, onNavModeToggle, children }) {
    return (
        <PositionContainer>
            <Container>
                <LogoContainer>
                    <div>
                        <LogoIconContainer onClick={onNavModeToggle} >
                            <BurgerIcon width='1rem' />
                        </LogoIconContainer>
                    </div>
                    <div>
                        <picture>{brandLogo}</picture>
                    </div>
                    <div>
                        <h4>{brandText}</h4>
                    </div>
                </LogoContainer>
                <nav>
                    {children}
                </nav>
            </Container>
        </PositionContainer>
    )
}