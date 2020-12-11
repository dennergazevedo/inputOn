import React from 'react'

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CardDenner from '../../../components/CardDenner';

// SERVICES
import { navigate } from 'gatsby';

// STYLES GLOBAL
import { GlobalStyle } from '../../../styles/global';
import { Helmet } from "react-helmet";

// STYLED COMPONENTS
import {
    Container,
    Body,
    Title,
    Imagem,
    CreatedBy,
    MenuIcon,
    TitleText,
    Text,
    Date,
    Repo,
    Logo,
    Logomarca,
    BodyLogo
} from './styles'

// ICONS
import {
    FaPalette,
    FaBookmark,
    FaRegGrinHearts
} from 'react-icons/fa';
import {
    BiDownload
} from 'react-icons/bi';

// ASSETS
import logo from '../../../assets/img/logo.png'

const DarkTheme: React.FC = () => {

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - VSCode Dark Theme</title>
                <link rel="canonical" href="https://www.inputon.com.br/ux-ui-design" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <Imagem src='https://i.imgur.com/UEHnoWn.png' alt="HooksPropsState" />
                    <div className="titleRight">
                        <TitleText>ReactJS - VSCode Dark Theme</TitleText>
                        <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
                            <span>por <b>Denner Azevedo</b></span>
                        </CreatedBy>
                        <Date><FaBookmark className="icon"/> POSTADO EM 11/11/2020</Date>
                        <MenuIcon>
                            <span>TECH</span>
                        </MenuIcon>
                    </div>
                </Title>
                <Text>
                    <p>
                        <span>
                            Fala Deeeeeeeev brabo(a)! Tudo nos conformes?
                        </span>
                    </p>
                    <p>
                        <span>
                            Não sei pra vocês, mas o <b>Visual Studio Code</b> é o meu editor favorito atualmente, além da cara de editor de texto ele não 
                            deixa à desejar nas funcionalidades de uma IDE.
                        </span>
                    </p>
                    <p>
                        <span>
                            Pensando nisso hoje venho trazer um "presente" para vocês, criamos um tema com a cara do tema dark do nosso blog, ele está já está 
                            disponível na &nbsp;
                            <a href="https://marketplace.visualstudio.com/items?itemName=DennerAzevedo.inputon-dark-theme" target="_blank" rel="noreferrer">
                                 Marketing Place do VSCode
                            </a>, caso preferir é só pesquisar por <b>InputOn</b> na aba de <b>Extensões</b> do <b>VSCode</b>.
                        </span>
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaPalette className="icon"/>
                        <h2>Demonstração do Tema</h2>
                    </div>
                    <img src="https://i.imgur.com/tFdCpqL.png" alt="EXEMPLO" className="large"/>
                    <img src="https://i.imgur.com/BzmM5Xu.png" alt="EXEMPLOCSS" className="large" />
                </Text>

                <Repo onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=DennerAzevedo.inputon-dark-theme')}>
                    <BiDownload className="icon" />
                    <div>
                        <span className="font">BAIXE AQUI</span>
                        <span>DARK INPUTON</span>
                    </div>
                </Repo>

                <Logo>
                <Logomarca src={logo} alt="Logo" />
                <BodyLogo>
                    <span>POWERED BY</span>
                    <span className="title">
                    Input
                    <b>On</b>
                    </span>
                </BodyLogo>
                </Logo>

                <Text>
                    <p>
                        <b>E ai, Vai dar essa tunada no seu VSCode? <FaRegGrinHearts className="icon"/></b>
                    </p>
                </Text>

                <Text>
                    <img src="https://media1.tenor.com/images/ee3625b7ce5f27e2fcdef7a8e236cf4f/tenor.gif?itemid=4398895" alt="GIF" className="small" />
                </Text>

                <CardDenner />
                
            </Body>
            <Footer />
        </Container>
    )
}

export default DarkTheme;