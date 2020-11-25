/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby';

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

    useEffect(()=>{
        if(theme === 'light'){
            setIsDark(false);
        }else if(theme === 'dark'){
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
                    window !== undefined && window.screen.width > 800?
                    <Menu>
                        <Switch 
                            onChange={toggleTheme} 
                            checked={isDark}
                            offColor="#333"
                            onHandleColor="#333"
                            offHandleColor="#FFF"
                            onColor="#FFF"
                            uncheckedIcon={<FaSun className="iconSwitchOff"/>}
                            checkedIcon={<FaMoon className="iconSwitchOn"/>}
                            height={20}
                            width={45}/>
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
                                    <Switch 
                                        onChange={toggleTheme} 
                                        checked={isDark}
                                        offColor="#333"
                                        onHandleColor="#333"
                                        offHandleColor="#FFF"
                                        onColor="#FFF"
                                        uncheckedIcon={<FaSun className="iconSwitchOff"/>}
                                        checkedIcon={<FaMoon className="iconSwitchOn"/>}
                                        height={20}
                                        width={45}/>
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
