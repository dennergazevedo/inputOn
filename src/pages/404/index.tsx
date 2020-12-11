import React from "react"

// STYLED COMPONENTS
import {
  Container,
  Body,
  Oops,
  Logo,
  Button,
  Logomarca,
  BodyLogo,
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";

// ASSETS
import logo from '../../assets/img/logo.png';

// STYLES GLOBAL
import { GlobalStyle } from '../../styles/global';

const NotFound: React.FC = () => {

  return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - Oops!</title>
                <link rel="canonical" href="https://www.inputon.com.br" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Logo>
                    <Logomarca src={logo} alt="Logo" />
                    <BodyLogo>
                        <span>404 NOT FOUND</span>
                        <span className="title">
                        Oops
                        <b>!</b>
                        </span>
                    </BodyLogo>
                </Logo>
                <Oops>
                    Página não encontrada!
                </Oops>
                <Button onClick={() => window.location.href="/"}>
                    Ir para Página Inicial
                </Button>
            </Body>
            <Footer />
        </Container>
  )
}

export default NotFound;