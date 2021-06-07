import React, { createRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import CollapseIcon from './CollapseIcon';
import DefaultNavIcon from './DefaultNavIcon';
import ExpandIcon from './ExpandIcon';


export const NavItemsContainer = styled.ul`
display: grid;
grid-auto-flow: row;
gap: 0.15rem;
list-style-type: none;
padding: 0.5rem .5rem .5rem 0rem;
transition: padding var(----transition-settings-1, 0.25s cubic-bezier(0.075, 0.82, 0.165, 1));
`

export const IconContainer = styled.picture`
display: inline-grid;
place-items: center;
width: 1.75rem;
height: 1.75rem;
margin-left: 0.5rem;
margin-right: 1rem;
`

export const NavItemContainer = styled.li`
span {
white-space: nowrap;
overflow: hidden;
}

a {
    padding: 0.15rem 1rem 0.15rem 0rem;
    margin-top: 0.25rem;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: nowrap;
    color: inherit;
    text-decoration: none;
    transition: all var(--transition-settings-1, 0.25s cubic-bezier(0.075, 0.82, 0.165, 1));
    cursor: pointer;
}
a.active {
    ${IconContainer} {
        background: var(--primary-accent, #009688);
        color: var(--on-primary-accent, #FFF);
        border-radius: 50%;
    }
}
`

const delayOverflow = keyframes`
from {
    overflow-y: auto;
}
`

const ExpandableContainer = styled.div`
overflow-y: auto;
transition: height var(--transition-settings-1, 0.25s cubic-bezier(0.075, 0.82, 0.165, 1));

&.overflow {
    overflow-y: visible;
    animation: ${delayOverflow} 0.5s;
}
`

export function ExpandableNavItem({ children, label }) {
    const [height, setHeight] = useState(0)
    const content = createRef()

    const isCollapsed = height === 0

    const toggleExpand = () => {
        setHeight(prevHeight => {
            if (prevHeight === 0) return content.current.clientHeight

            return 0
        })
    }

    return (
        <NavItemContainer>
            <a onClick={toggleExpand}>
                <IconContainer>
                    {isCollapsed ? <ExpandIcon width='0.75rem' /> : <CollapseIcon width='0.75rem' />}
                </IconContainer>
                <span>{label}</span>
            </a>
            <ExpandableContainer className={!isCollapsed && 'overflow'} style={{height}}>
                <NavItemsContainer ref={content}>
                    {children}
                </NavItemsContainer>
            </ExpandableContainer>
        </ NavItemContainer>
    )
}

export function NavItem({ children, to, label, icon = <DefaultNavIcon width='0.75rem' />, ...props }) {

    if (children) return <ExpandableNavItem label={label}>{children}</ExpandableNavItem>

    return (
        <NavItemContainer>
            <NavLink to={to} activeClassName='active' {...props}>
                <IconContainer>
                    {icon}
                </IconContainer>
                <span>{label}</span>
            </NavLink>
        </NavItemContainer>
    )
}