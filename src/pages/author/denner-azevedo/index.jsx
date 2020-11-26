import React from 'react'

// STYLED COMPONENTS
import {
    Container,
    Body,
    ImageProfile,
    Author,
    Social,
    Subtitle,
    Tech
} from './styles.js';

// ASSETS
import dennerAzevedo from '../../../assets/img/author-denner-azevedo.jpg';

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { GlobalStyle } from '../../../styles/global';

// ICONS
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn
} from 'react-icons/fa';

export default function index() {
    return (
        <Container>
            <GlobalStyle />
            <Navbar />
            <Body>
                <ImageProfile src={dennerAzevedo} alt="Denner Azevedo"/>
                <Author>Denner Azevedo</Author>
                <Social>
                    <FaGithub className="icon" onClick={() => window.open('https://github.com/dennergazevedo')}/>
                    <FaLinkedinIn className="icon" onClick={() => window.open('https://linkedin.com/in/denner-azevedo-6b7b97199/')}/>
                    <FaInstagram className="icon" onClick={() => window.open('https://instagram.com/dennergazevedo')}/>
                </Social>
                <Subtitle>
                    Entusiasta de JavaScript & Tecnologia! <br/>'Sempre há um próximo passo'.
                </Subtitle>
                <Tech>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
                    </a>

                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
                    </a>
                    
                    <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
                    </a>
                    
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
                    </a>
                    
                    <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
                    </a>
                    
                    <a href="https://heroku.com" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/>
                    </a>
                    
                    <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="netlify" width="40" height="40"/>
                    </a>
                    
                    <a href="https://www.mysql.com" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="mysql" width="40" height="40"/>
                    </a>
                    
                    <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg" alt="gatsby" width="40" height="40"/>
                    </a>
                    
                    <a href="https://www.framer.com/api/motion/" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="framer-motion" width="40" height="40"/>
                    </a>
                    
                    <a href="https://expo.io" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg" alt="expo" width="40" height="40"/>
                    </a>
                </Tech>
            </Body>
            <Footer />
        </Container>
    )
}
