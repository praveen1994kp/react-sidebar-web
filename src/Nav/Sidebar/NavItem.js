import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DefaultNavIcon from './DefaultNavIcon';

export const IconContainer = styled.picture`
display: inline-grid;
place-items: center;
width: 1.75rem;
margin-left: 0.5rem;
padding: 0.25rem;
margin-right: 1rem;
`

export const NavItemContainer = styled.li`
span {
white-space: nowrap;
overflow: hidden;
}

a {
    padding: 0.5rem 1rem 0.5rem 0rem;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: nowrap;
    color: inherit;
    text-decoration: none;
    transition: all var(--transition-settings-1);
}
a.active {
    ${IconContainer} {
        background: var(--primary-accent);
        border-radius: 50%;
    }
}
`

export function NavItem({ children, to, label, icon = <DefaultNavIcon width='0.75rem' />, ...props }) {

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