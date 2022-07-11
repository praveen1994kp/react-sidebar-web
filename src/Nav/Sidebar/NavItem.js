import React, { Children, cloneElement, createRef, useEffect, useState } from 'react';
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
transition: padding var(----transition-settings-1, 0.2s ease);
`

export const IconContainer = styled.picture`
display: inline-grid;
place-items: center;
width: var(--icon-container-size, 1.75rem);
height: var(--icon-container-size, 1.75rem);
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
    align-items: center;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    span {
        opacity: 0;
        transition: opacity var(--transition-settings-1, 0.2s ease);
    }
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
transition: height var(--transition-settings-1, 0.2s ease);

&.overflow {
    overflow-y: visible;
    animation: ${delayOverflow} 0.5s;
}
`

export function ExpandableNavItem({ children, label, expand }) {
    const [height, setHeight] = useState(0)
    const content = createRef()

    const isCollapsed = height === 0

    const expandGroup = () => {
        setHeight(content.current.clientHeight)
        typeof expand === 'function' && expand()
    }

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
            <ExpandableContainer className={!isCollapsed && 'overflow'} style={{ height }}>
                <NavItemsContainer ref={content}>
                    {Children.map(children, child => {
                        const { props } = child

                        return cloneElement(child, { ...props, expand: expandGroup })
                    })}
                </NavItemsContainer>
            </ExpandableContainer>
        </ NavItemContainer>
    )
}

const scrollElementIntoViewAfterDelay = (element, delay = 300) => {
    setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth'})
    }, delay)
}

export function NavItem({ children, to, label, icon = <DefaultNavIcon width='0.75rem' />, expand, ...props }) {

    const item = createRef()

    useEffect(() => {
        try {
            if (!children && window.location.pathname === to) {
                typeof expand === 'function' && expand()
                scrollElementIntoViewAfterDelay(item.current)
            }
        } catch (ex) {
            console.error('Cannot expand and scroll to nav link', ex)
        }
    }, [])

    if (children) return <ExpandableNavItem expand={expand} label={label}>{children}</ExpandableNavItem>

    return (
        <NavItemContainer>
            <NavLink ref={item} to={to} activeClassName='active' {...props}>
                <IconContainer>
                    {icon}
                </IconContainer>
                <span>{label}</span>
            </NavLink>
        </NavItemContainer>
    )
}
