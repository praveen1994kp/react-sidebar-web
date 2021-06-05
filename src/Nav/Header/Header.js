import React from 'react'
import styled from 'styled-components'
import BurgerIcon from './BurgerIcon'

const StyledHeader = styled.header`
background: var(--primary-surface);
color: var(--on-primary-surface);
min-height: 5rem;
padding: 0.5rem 1rem;
display: grid;
grid-template-columns: 3rem 25% 1fr;
box-shadow: var(--box-shadow-9dp);
z-index: 500;
position: relative;

& > picture {
    display: grid;
    place-items: center;
}
`

const LogoContainer = styled.div`
display: grid;
grid-template-columns: 2rem 1fr;

picture {
    display: grid;
    place-items: center;
}
`

export function Header({ logo, logoText, children }) {
    return (
        <StyledHeader>
            <picture>
                <BurgerIcon width='1rem' />
            </picture>
            <LogoContainer>
                <picture>
                    {logo}
                </picture>
                <h4>{logoText}</h4>
            </LogoContainer>
            <div>
                {children}
            </div>
        </StyledHeader>
    )
}