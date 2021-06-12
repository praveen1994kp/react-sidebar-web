import React from 'react'
import styled from 'styled-components'
import BurgerIcon from './BurgerIcon'

const StyledHeader = styled.header`
background: var(--primary-surface, #FFF);
color: var(--on-primary-surface, #000);
min-height: 5rem;
padding: 0.5rem 1rem;
display: grid;
grid-template-columns: 25% 1fr;
box-shadow: var(--box-shadow-9dp, 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20));
z-index: var(--header-z-index, 500);
position: relative;

& > picture {
    display: grid;
    place-items: center;
}

.burger-icon {
    display: none;
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
            <picture className='burger-icon'>
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