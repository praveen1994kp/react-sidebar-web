import styled from "styled-components";

export const PageContainer = styled.section`
margin: 1rem;
padding: 2rem;
`

export const NavItemsContainer = styled.ul`
display: grid;
grid-auto-flow: row;
gap: 0.15rem;
list-style-type: none;
padding: 0.5rem .5rem .5rem 0rem;
transition: padding var(----transition-settings-1, 0.25s cubic-bezier(0.075, 0.82, 0.165, 1));
`