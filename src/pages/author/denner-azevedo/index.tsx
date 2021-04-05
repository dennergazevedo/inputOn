import React from 'react'

// STYLED COMPONENTS
import {
    Container,
    Body,
    ImageProfile,
    Author,
    Social,
    Subtitle,
    Tech,
    Posts
} from './styles';

// ASSETS
import dennerAzevedo from '../../../assets/img/author-denner-azevedo.jpg';

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { GlobalStyle } from '../../../styles/global';
import { Helmet } from "react-helmet";

// ICONS
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaBookmark
} from 'react-icons/fa';

import api, { IItem } from '../../../menu/api';

const DennerAzevedo: React.FC = () => {

    let apiDnr: Array<IItem> = [];

    function handleApiFront(){
        for(let i=0; i < api.length; i++){
            if(api[i].createdBy === "Denner Azevedo"){
                apiDnr.push(api[i]);
            }
        }
    }

    handleApiFront();


    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - Denner Azevedo</title>
                <link rel="canonical" href="https://www.inputon.com.br/author/denner-azevedo" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <ImageProfile src={dennerAzevedo} alt="Denner Azevedo"/>
                <Author>Denner Azevedo</Author>
                <Posts>
                    <FaBookmark className="icon"/>
                    <span onClick={() => window.open('/author/denner-azevedo/posts')}>{apiDnr.length} POSTS</span>
                </Posts>
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
                        <img src="https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg" alt="javascript" width="40" height="40"/>
                    </a>

                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40"/>
                    </a>
                    
                    <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" width="40" height="40"/>
                    </a>
                    
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" width="40" height="40"/>
                    </a>

                    <a href="https://sequelize.org" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg" alt="sequelize" width="40" height="40"/>
                    </a>
                    
                    <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="express" width="40" height="40"/>
                    </a>

                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="html" width="40" height="40"/>
                    </a>

                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/color/72/css3.png" alt="css" width="40" height="40"/>
                    </a>

                    <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg" alt="gatsby" width="40" height="40"/>
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

                    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="npm" width="40" height="40"/>
                    </a>
                    
                    <a href="https://www.framer.com/api/motion/" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="framer-motion" width="40" height="40"/>
                    </a>
                    
                    <a href="https://expo.io" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg" alt="expo" width="40" height="40"/>
                    </a>

                    <a href="https://www.docker.com" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="docker" width="40" height="40"/>
                    </a>

                    <a href="https://www.npmjs.com" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg" alt="npm" width="40" height="40"/>
                    </a>

                    <a href="https://yarnpkg.com" target="_blank" rel="noreferrer">
                        <img src="https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg" alt="yarn" width="40" height="40"/>
                    </a>
                </Tech>
            </Body>
            <Footer />
        </Container>
    )
}

export default DennerAzevedo;