/* eslint-disable no-restricted-globals */
import React, { useState } from 'react'
import { navigate } from 'gatsby';

// STYLED COMPONENTS
import {
    Container,
    Logo,
    Menu,
    Main,
    MenuBar
} from './styles';

// ICONS
import {
    FaBars
} from 'react-icons/fa';

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <Main>
            <Container>
                <Logo onClick={() => navigate('/')}>
                    Input<b>On</b>
                </Logo>
            </Container>
            <Container>
                {
                    screen.width > 800?
                    <Menu>
                        <span>HOME</span>
                        <span>FRONTEND</span>
                        <span>BACKEND</span>
                        <span>MOBILE</span>
                    </Menu>
                    :
                    <Menu menuOpened={menuOpen}>
                        <FaBars className="icon" onClick={toggleMenu}/>
                        {
                            menuOpen &&
                            <MenuBar
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ ease: 'easeOut', duration: 0.8 }}>
                                <span>HOME</span>
                                <span>FRONTEND</span>
                                <span>BACKEND</span>
                                <span>MOBILE</span>
                            </MenuBar>
                        }
                    </Menu>
                }
            </Container>
        </Main>
    )
}
