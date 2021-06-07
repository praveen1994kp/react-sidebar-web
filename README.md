# react-sidebar-web

 

Simple gmail-like, themable sidebar using react, with support for react router.
Targetted only for desktop viewports and modern browsers(chrome). Optimization for smaller viewports to be done on future release.

Sample Application deployed at https://react-sidebar-sigma.vercel.app/

### Getting Started
Installing the package:
~~~
npm install --save react-sidebar-web
~~~
Or
~~~
yarn add react-sidebar-web
~~~
**Important:** [styled-components](https://styled-components.com/) (>= 5.0.0) needs to be installed and enabled in project in order to get react-sidebar-web running.


Components styles can be customized by setting the following css-custom variables:
~~~
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
--icon-container-size: 2rem;
~~~

The **z-index** of sidebar is **400**. UI elements that need to show on top needs to have a z-index greater than this.

#### Rendering the Sidebar:

Sample sidebar
~~~
import {Sidebar, NavItemsContainer, NavItem} from 'react-sidebar'

...

<Sidebar>
    <NavItemsContainer>
        <NavItem to='/' label='Home' exact />
        <NavItem to='/explore' label='Explore' exact />
        <NavItem label='Playlists'>
            <NavItem to='/subscription-1' label='Playlist-1' exact />
            <NavItem to='/subscription-2' label='Playlist-2' exact />
        </NavItem>
    </NavItemsContainer>
</Sidebar>
~~~

- **Sidebar** is the root container component for rendering the sidebar
- **NavItemsContainer** is the container for all the nav items and must be used as the parent component for the nav items
- **NavItem** is a wrapper to React Router's NavLink component

**NavItem** can be used in 2 ways:

- When NavItem is not passed any children, it acts as a link to a route and following props are required:
	- **to** - Passed down to NavLink: Link to route
	- **label** - Text to be displayed on Nav item
	- **icon** - Icon to be displayed before the nav item label
- When NavItem is passed with children, it acts as expandable tab group, with NavItems as children. Any react component passed as children will be rendered within the group, and is collapsed by default. When NavItem is used as group, only **label** prop is required to be passed.

#### Header
To add the header component:
```js
import {Header} from  'react-sidebar'
...
<Header logo={<BrandIcon width='1rem' />} logoText='Brand'>
...React Components to be rendered on Header
</Header>
```
##### Customizable Styles on Header: 
Background surface and text color can be customized by setting the following css custom variables:
~~~
--primary-surface: #FFF;
--on-primary-surface: #000;
~~~  
##### Props:
- **logo**: Pass logo icon to be displayed as react component
- **logoText**: Logo text - Will be displayed in h4
- **children**: Pass any links/searchbar that needs to displayed in header as react component

