import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NavItemsContainer } from './NavItemsContainer'

const ExpandControlLink = styled.a`
display: block;
`

const Expandable = styled.div`
overflow-y: hidden;
transition: height 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const IconContainer = styled.picture`
display: inline-grid;
place-items: center;
width: 2.5rem;
margin-right: 1rem;
`

function ExpandableNavItem({ children, label }) {
    const [height, setHeight] = useState(0)
    const content = createRef(null)

    const handleExpandToggle = () => {
        setHeight(prevHeight => {
            if (prevHeight === 0) {
                return content.current.clientHeight
            }

            return 0
        })
    }

    return (
        <>
            <ExpandControlLink onClick={handleExpandToggle} href='#'><span>{label}</span></ExpandControlLink>
            <Expandable style={{height: `${height}px`}}>
                <NavItemsContainer ref={content}>
                    {children}
                </NavItemsContainer>
            </Expandable>
        </>
    )
}

export function NavItem({ children, to, label, icon }) {
    if (children) {
        return (
            <li>
                <ExpandableNavItem label={label}>
                    {children}
                </ExpandableNavItem>
            </li>
        )
    }

    return (
        <li>
            <Link to={to}>
                <IconContainer>
                    {icon}
                </IconContainer>
                <span>{label}</span>
            </Link>
        </li>
    )
}