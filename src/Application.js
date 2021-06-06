import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import { NavItemsContainer } from './common/styles'
import { Header } from './Nav/Header/Header'
import { NavItem } from './Nav/Sidebar/NavItem'
import { Sidebar } from './Nav/Sidebar/Sidebar'
import { Pages } from './Pages'
import BrandIcon from './samples/BrandIcon'

const AppContainer = styled.section`
--transition-settings-1: 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
--box-shadow-6dp: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);
--box-shadow-9dp: 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20);

--light-primary-color: #BBDEFB;
--on-light-primary-color: #000;
--primary-accent: #009688;
--on-primary-accent: #FFF;
--primary-color: #2196F3;
--on-primary-color: #FFF;
--primary-surface: #FFF;
--on-primary-surface: #000;


`

export function Application() {
    return (
        <AppContainer>
            <BrowserRouter>
                <Header logo={<BrandIcon width='1rem' />} logoText='Brand' />
                <Sidebar>
                    <NavItemsContainer>
                        <NavItem to='/' label='Home' exact />
                        <NavItem to='/explore' label='Explore' exact />
                        <NavItem label='Playlists'>
                            <NavItem to='/subscription-1' label='Playlist-1' exact />
                            <NavItem to='/subscription-2' label='Playlist-2' exact />
                            <NavItem label='Group'>
                                <NavItem to='/subscription-3' label='Playlist-3' exact />
                            </NavItem>
                        </NavItem>
                    </NavItemsContainer>
                </Sidebar>
                <main>
                    <Pages />
                </main>
            </BrowserRouter>
        </AppContainer>
    )
}