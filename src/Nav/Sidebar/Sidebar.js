import React from 'react'
import styled from 'styled-components'
import { IconContainer, NavItemContainer, NavItemsContainer } from './NavItem'

const Container = styled.section`
position: fixed;
padding-top: 8rem;
top: 0rem;
bottom: 0;
left: 0;
min-width: 3rem;
max-width: 3rem;
background: var(--primary-surface, #FFF);
color: var(--on-primary-surface, #000);
transition: all var(--transition-settings-1, 0.25s cubic-bezier(0.075, 0.82, 0.165, 1));
z-index: 400;
width: max-content;
overflow-x: hidden;
box-shadow: var(--box-shadow-6dp, 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20));

* {
    overscroll-behavior: contain;
}

*::-webkit-scrollbar {
    width: 0rem;
}

*::-webkit-scrollbar-track {
    display: none;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--primary-accent, #009688);
  border-radius: 30%;
}

nav {
    max-height: 80vh;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

&:hover {
    min-width: 15rem;
    max-width: max-content;  
    background: var(--primary-color, #2196F3);
    color: var(--on-primary-color, #FFF);

    ${NavItemContainer} a:hover {
        background: var(--primary-accent, #009688);
        color: var(--on-primary-accent, #FFF);
    }
    ${NavItemContainer} a.active {
        background: var(--light-primary-color, #BBDEFB);
        color: var(--on-light-primary-color, #000);
    }

    a ${IconContainer},
    a.active ${IconContainer} {
        background: inherit;
        color: inherit;
        border-radius: 0%;
    }

    ${NavItemsContainer} {
        padding: 0.5rem .5rem .5rem 1rem;
    }

    *::-webkit-scrollbar {
        width: 0.35rem;
    }
}

& + * {
    margin-left: 3rem;
}
`

export function Sidebar({ children }) {
    return (
        <Container>
            <nav>
                {children}
            </nav>
        </Container>
    )
}