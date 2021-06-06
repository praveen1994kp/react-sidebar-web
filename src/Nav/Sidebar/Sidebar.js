import React from 'react'
import styled from 'styled-components'
import { NavItemsContainer } from '../../common/styles'
import { IconContainer, NavItemContainer } from './NavItem'

const Container = styled.section`
position: fixed;
padding-top: 8rem;
top: 0rem;
bottom: 0;
left: 0;
min-width: 3rem;
max-width: 3rem;
background: var(--primary-surface);
color: var(--on-primary-surface);
transition: all var(--transition-settings-1);
z-index: 400;
width: max-content;
overflow-x: hidden;
box-shadow: var(--box-shadow-6dp);

nav {
    max-height: 80vh;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

&:hover {
    min-width: 15rem;   
    background: var(--primary-color);
    color: var(--on-primary-color);

    ${NavItemContainer} a:hover {
        background: var(--primary-accent);
        color: var(--on-primary-accent);
    }
    ${NavItemContainer} a.active {
        background: var(--light-primary-color);
        color: var(--on-light-primary-color);
    }

    a ${IconContainer},
    a.active ${IconContainer} {
        background: inherit;
        border-radius: 0%;
    }

    ${NavItemsContainer} {
        padding: 1.5rem .5rem .5rem 1rem;
    }
}

& + * {
    margin-left: 3rem;
}
`

export function Sidebar ({children}) {
    return (
        <Container>
            <nav>
                {children}
            </nav>
        </Container>
    )
}