import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import Brand from './samples/Brand'
import ExploreIcon from './samples/ExploreIcon'
import HomeIcon from './samples/HomeIcon'
import { NavItem } from './sidebar/NavItem'
import { NavItemsContainer } from './sidebar/NavItemsContainer'
import { SidebarContainer } from './sidebar/SidebarContainer'

const Container = styled.div`
--background: hsl(0deg, 0%, 90%);
--surface-1: hsl(0deg, 0%, 100%);
--on-surface-1: hsl(0deg, 0%, 0%);
`

const ContentContainer = styled.main`
margin-left: 5rem;
transition: margin-left 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);

.fix & {
    margin-left: 17rem;
}
`

export function Application() {
    const [isFloatingNav, setFloatingNav] = useState(true)

    const toggleNavMode = () => {
        setFloatingNav(prev => !prev)
    }
    return (
        <BrowserRouter>
            <Container {...(!isFloatingNav && { className: 'fix' })}>
                <SidebarContainer onNavModeToggle={toggleNavMode} brandText='Brand' brandLogo={<Brand width='1em' height='1em' />}>
                    <NavItemsContainer>
                        <NavItem to='/' label='Home' icon={<HomeIcon width='1rem' />} />
                        <NavItem to='/' label='Explore' icon={<ExploreIcon width='1rem' />} />
                        <NavItem to='/' label='Subscriptions' />
                        <NavItem label='Library'>
                            <NavItem to='/' label='History' />
                            <NavItem to='/' label='Uploads' />
                            <NavItem to='/' label='Watch Later' />
                        </NavItem>
                    </NavItemsContainer>
                </SidebarContainer>
                <ContentContainer>
                    <Switch>
                        <Route path='/'>
                            <div>
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sed?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatibus cumque enim unde ea nulla! Fugit dolor recusandae ratione quidem id enim vero, suscipit neque accusantium laborum dolorum quis, voluptates necessitatibus quasi non ea officia illum nulla! Alias iure optio nisi voluptate necessitatibus fuga ad reprehenderit blanditiis dolor numquam dignissimos vitae nihil possimus, quam quos aliquam placeat. Aut ea recusandae reiciendis, itaque sequi vero quae nihil, illo repellat nisi veniam porro quaerat natus odio tempore dolor! Dicta nulla veniam ut eos amet repellendus eius vero qui distinctio autem tempore consequatur eligendi corporis nostrum obcaecati quia voluptate, incidunt quasi hic, possimus consectetur odit laboriosam. Voluptatem ullam eum modi eius. Beatae quisquam similique iste, dicta, aliquam facere totam eos voluptatibus praesentium at repellat assumenda eum. Dolor, molestiae? Consectetur repellendus ipsam voluptatem quidem, corrupti aperiam, necessitatibus veniam, pariatur fugit velit officiis. Tenetur nobis aut fuga debitis quasi, architecto aliquam facilis dicta doloribus unde eaque iusto esse, aperiam voluptatem! Iure ipsa molestias odit aliquam! Laborum dolorum quisquam eos expedita temporibus quas, fugit ullam deserunt a tempore id eum libero. Itaque nostrum id neque rem numquam facere esse quisquam a, explicabo maiores distinctio est soluta minus minima ipsam impedit ea, nobis vel perspiciatis aliquam consequuntur! Ducimus error porro veritatis consequatur doloremque velit vel corrupti obcaecati sapiente ipsam, fuga quam neque eos dolores sed expedita aspernatur modi qui ipsa praesentium quidem debitis. Asperiores quis vitae minima iure perspiciatis ullam, autem alias natus nisi dolorem sit officia ad ea omnis obcaecati quos debitis consequatur dolor dolore expedita, tempore corrupti voluptatum id! At officia atque cupiditate est deserunt numquam quibusdam assumenda dolores autem quod inventore, excepturi consequuntur deleniti asperiores, corporis repellat officiis laboriosam aliquam similique! Totam, eligendi numquam! Nulla quas necessitatibus nam exercitationem, suscipit aliquid sit accusamus eum voluptas expedita obcaecati veniam recusandae et pariatur consectetur consequuntur sed reprehenderit voluptatibus assumenda sunt possimus deleniti cupiditate adipisci? Aperiam eveniet aspernatur placeat incidunt libero ea maiores illo dignissimos eligendi dolorem accusantium nihil aliquam totam ad molestiae non, odit dolorum a commodi minima ut fugit. Commodi, consectetur fugiat esse exercitationem perspiciatis qui voluptate fugit dolores! Nihil incidunt corrupti ut atque ab minus tenetur assumenda quo minima molestiae enim impedit voluptas, non maiores, voluptatum quibusdam labore provident officia? Eaque, ad velit debitis officiis, cum, saepe assumenda at eos dolor odio veritatis quae facere nobis suscipit iusto. Eius ipsa porro accusamus aliquam harum cupiditate laudantium soluta inventore. Beatae, autem nesciunt nam molestias atque aut repellat quia, eius expedita magnam natus explicabo quibusdam facilis quod molestiae. Alias distinctio amet reiciendis? Nemo repudiandae repellat vitae explicabo omnis, magnam nesciunt, odio repellendus quos similique maiores perferendis commodi perspiciatis illum, deleniti officiis voluptate ex. Totam quaerat, voluptatibus maiores eligendi eos quo hic. Optio deserunt tenetur eaque saepe ea! Expedita, cupiditate consequuntur quia ad perferendis assumenda, tempore id dolore consectetur aut voluptates saepe similique harum culpa ut blanditiis enim veniam optio quod dignissimos commodi iste autem? Possimus nisi minima, officiis dolores eius ex illum accusantium debitis veritatis, voluptatibus commodi nostrum culpa optio pariatur? Repellat incidunt temporibus consequuntur sit.
            </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt, vitae esse quidem nisi debitis quod aut quae beatae ut nesciunt velit pariatur id, eaque in praesentium, rerum minus nihil doloremque molestiae. Itaque, quod! Blanditiis voluptas sit, quibusdam reprehenderit, vero architecto inventore commodi pariatur quasi rem, minus eligendi distinctio tenetur quae sequi ipsa enim nulla debitis? Culpa amet ab dolore quam porro, voluptatem nostrum, corrupti laudantium id eveniet in nobis distinctio, numquam neque! Aspernatur beatae, voluptatibus necessitatibus mollitia voluptates veniam eligendi sed magnam aperiam repudiandae nam eum. Asperiores ut accusamus illo, repellendus quisquam iure impedit voluptate. Corrupti, eos quidem qui praesentium expedita ex dolorum magni nesciunt aliquam! Dolore, rerum autem facere minima tenetur veritatis iusto quaerat nulla, tempore, fuga officiis maxime itaque ipsam deleniti soluta. Dolore omnis ad autem deserunt, quibusdam fugit necessitatibus consequatur sint iusto deleniti corrupti vel itaque cumque est. Possimus, laborum odio. Sequi nihil odit, vero incidunt commodi officiis in! Beatae magni tenetur eos in adipisci modi quod delectus qui dolores ducimus commodi temporibus non at, odit molestiae alias architecto sit corporis voluptatem quidem nulla aspernatur quis officia. Reiciendis, id harum voluptas officiis nisi adipisci consectetur distinctio! Nobis, ex dolorem perferendis cupiditate eveniet voluptate obcaecati harum iste!
            </p>
                            </div>
                        </Route>
                    </Switch>
                </ContentContainer>
            </Container>
        </BrowserRouter>
    )
}