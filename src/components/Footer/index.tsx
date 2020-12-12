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
    FaInstagram
} from 'react-icons/fa';

const Footer:React.FC = () => {

    return (
        <Main>
            <Top>
                <div>
                    <span onClick={() => navigate('/')}>HOME</span>
                    <span onClick={() => navigate('/frontend')}>FRONTEND</span>
                    <span onClick={() => navigate('/backend')}>BACKEND</span>
                    <span onClick={() => navigate('/tech')}>TECH</span>
                </div>
                <div>
                    <span className="social"><FaInstagram onClick={() => window.open('https://www.instagram.com/bloginputon/')}/></span>
                </div>
            </Top>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} <b onClick={() => navigate('/')}>Blog InputOn</b> - Criado por &nbsp;
                    <a href={`/author/denner-azevedo`}>
                        Denner Azevedo
                    </a>
                    &nbsp;
                    |
                    &nbsp;
                    <a href={`/author/pedro-vasconcellos`}>
                        Pedro Vasconcellos
                    </a>
                </span>
            </Bottom>
        </Main>
    )
}

export default Footer;