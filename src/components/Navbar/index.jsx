/* eslint-disable no-restricted-globals */
/* eslint-disabled jsx-a11y/click-events-have-key-events */
/* eslint-disabled  jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby';
import { window } from 'browser-monads';

// COMPONENTS
import Switch from "react-switch";

// STYLED COMPONENTS
import {
    Container,
    Logo,
    Menu,
    Main,
    MenuBar
} from './styles';

// THEME
import { useTheme } from '../../contexts/theme';

// ICONS
import {
    FaBars,
    FaSun,
    FaMoon,
} from 'react-icons/fa';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        if (theme === 'light') {
            setIsDark(false);
        } else if (theme === 'dark') {
            setIsDark(true);
        };
    }, [theme])


    return (
        <Main>
            <Container>
                <Logo onClick={() => navigate('/')}>
                    Input<b>On</b>
                </Logo>
            </Container>
            <Container>
                {
                    window.screen.width > 800 ?
                        <Menu>
                            <Switch
                                onChange={toggleTheme}
                                checked={isDark}
                                offColor="#333"
                                onHandleColor="#333"
                                offHandleColor="#FFF"
                                onColor="#FFF"
                                uncheckedIcon={<FaSun className="iconSwitchOff" />}
                                checkedIcon={<FaMoon className="iconSwitchOn" />}
                                height={20}
                                width={45} />
                            <button onClick={() => navigate('/')}>HOME</button>
                            <button onClick={() => navigate('/frontend')}>FRONTEND</button>
                            <button onClick={() => navigate('/backend')}>BACKEND</button>
                            <button onClick={() => navigate('/mobile')}>MOBILE</button>
                        </Menu>
                        :
                        <Menu menuOpened={menuOpen}>
                            <FaBars className="icon" onClick={toggleMenu} />
                            {
                                menuOpen &&
                                <MenuBar
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ ease: 'easeOut', duration: 0.8 }}>
                                    <Switch
                                        onChange={toggleTheme}
                                        checked={isDark}
                                        offColor="#333"
                                        onHandleColor="#333"
                                        offHandleColor="#FFF"
                                        onColor="#FFF"
                                        uncheckedIcon={<FaSun className="iconSwitchOff" />}
                                        checkedIcon={<FaMoon className="iconSwitchOn" />}
                                        height={20}
                                        width={45} />
                                    <button onClick={() => navigate('/')}>HOME</button>
                                    <button onClick={() => navigate('/frontend')}>FRONTEND</button>
                                    <button onClick={() => navigate('/backend')}>BACKEND</button>
                                    <button onClick={() => navigate('/mobile')}>MOBILE</button>
                                </MenuBar>
                            }
                        </Menu>
                }
            </Container>
        </Main>
    )
}
