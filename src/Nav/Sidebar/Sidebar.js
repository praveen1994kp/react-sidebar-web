import React, { useState } from 'react'
import styled from 'styled-components'
import DoubleArrowRightIcon from './DoubleArrowRightIcon'
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
transition: all var(--transition-settings-1, 0.2s ease);
z-index: var(--sidebar-z-index, 400);
width: var(--sidebar-max-width, 20vw);
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
    height: 84%;
    overflow-y: auto;
    overflow-x: hidden;
}

&:hover,
&.expand-mode {
    min-width: 15rem;
    max-width: var(--sidebar-max-width, 20vw);
    background: var(--primary-color, #2196F3);
    color: var(--on-primary-color, #FFF);

    ${NavItemContainer} a span {
        opacity: 1;
    }

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
    transition: margin-left var(--transition-settings-1, 0.2s ease);
    margin-left: 3rem;
}
&.expand-mode + * {
    margin-left: calc(var(--sidebar-max-width, 20vw) + 0.75rem);
}

.expand-mode-toggle {
    transition: transform var(--transition-settings-1, 0.2s ease);
}

&.expand-mode .expand-mode-toggle {
    transform: rotate(180deg);
}
`


export function Sidebar({ children, defaultExpanded = false }) {
    const [expandedMode, setExpandedMode] = useState(defaultExpanded)

    const toggleExpandMode = () => {
        setExpandedMode(prevMode => !prevMode)
    }

    const toggleText = expandedMode ? 'Collapse Sidebar' : 'Keep Expanded'

    return (
        <Container className={expandedMode ? 'expand-mode' : ''}>
            <nav>
                {children}
            </nav>
            <footer>
                <NavItemsContainer>
                    <NavItemContainer onClick={toggleExpandMode}>
                        <a>
                            <IconContainer><DoubleArrowRightIcon className='expand-mode-toggle' width='0.75rem' /></IconContainer>
                            <span>{toggleText}</span>
                        </a>
                    </NavItemContainer>
                </NavItemsContainer>
            </footer>
        </Container>
    )
}