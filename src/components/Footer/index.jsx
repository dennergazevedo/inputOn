/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { navigate } from 'gatsby';

// STYLED COMPONENTS
import {
    Main,
    Top,
    Bottom
} from './styles';

// ICONS
import {
    FaFacebookSquare,
    FaInstagram
} from 'react-icons/fa';

export default function Footer() {

    const handleHome = () => navigate('/');

    return (
        <Main>
            <Top>
                <div>
                    <span>HOME</span>
                    <span>FRONTEND</span>
                    <span>BACKEND</span>
                    <span>MOBILE</span>
                </div>
                <div>
                    <span className="social"><FaFacebookSquare /></span>
                    <span className="social"><FaInstagram /></span>
                </div>
            </Top>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} <b onClick={handleHome}>Blog InputOn</b> - Criado por &nbsp;
                    <a href={`/author/denner-azevedo`}>
                        Denner Azevedo
                    </a>
                    &nbsp;
                    |
                    &nbsp;
                    <a href={`https://github.com/pedrovasalmeida`} target="_blank" rel="noreferrer">
                        Pedro Vasconcellos
                    </a>
                </span>
            </Bottom>
        </Main>
    )
}
