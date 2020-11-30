import React from 'react';

// STYLED COMPONENTS
import {
  Container,
  Body,
  ImageProfile,
  Author,
  Social,
  Subtitle,
  Tech,
} from './styles.js';

// ASSETS
import pedroVasconcellos from '../../../assets/img/author-pedro-vasconcellos.jpg';

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { GlobalStyle } from '../../../styles/global';
import { Helmet } from 'react-helmet';

// ICONS
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function index() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>InputOn - Pedro Vasconcellos</title>
        <link
          rel="canonical"
          href="https://www.inputon.com.br/author/pedro-vasconcellos"
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Body>
        <ImageProfile src={pedroVasconcellos} alt="Pedro Vasconcellos" />
        <Author>Pedro Vasconcellos</Author>
        <Social>
          <FaGithub
            className="icon"
            onClick={() => window.open('https://github.com/pedrovasalmeida')}
          />
          <FaLinkedinIn
            className="icon"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/pedro-vasconcellos-a272851a0/',
              )
            }
          />
          <FaInstagram
            className="icon"
            onClick={() => window.open('https://instagram.com/pedroohva')}
          />
        </Social>
        <Subtitle>
          Entusiasta do desenvolvimento web! <br />
          JavaScript e TypeScript 🤘🏽 <br />
          'Nunca deixe o medo te afetar.'
        </Subtitle>
        <Tech>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />
          </a>

          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />
          </a>

          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />
          </a>

          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />
          </a>

          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg"
              alt="express"
              width="40"
              height="40"
            />
          </a>

          <a href="https://heroku.com" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="heroku"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
              alt="netlify"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.mysql.com" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
              alt="mysql"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg"
              alt="gatsby"
              width="40"
              height="40"
            />
          </a>

          <a
            href="https://www.framer.com/api/motion/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
              alt="framer-motion"
              width="40"
              height="40"
            />
          </a>

          <a href="https://expo.io" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg"
              alt="expo"
              width="40"
              height="40"
            />
          </a>

          <a href="https://git-scm.com" target="_blank" rel="noreferrer">
            <img
              src="https://devicon.dev/devicon.git/icons/git/git-plain.svg"
              alt="git"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
            <img
              src="https://devicon.dev/devicon.git/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width="40"
              height="40"
            />
          </a>
        </Tech>
      </Body>
      <Footer />
    </Container>
  );
}
