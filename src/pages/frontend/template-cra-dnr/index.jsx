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
    Code,
    Logomarca,
    BodyLogo,
    Logo,
    Repo,
    Cards
} from './styles.js'

// ICONS
import {
    FaLightbulb,
    FaMapSigns,
    FaHandHoldingHeart,
    FaBookmark,
    FaHistory,
    FaTimes,
    FaCloudDownloadAlt,
    FaGithub,
    FaNpm
} from 'react-icons/fa';
import {
    SiEslint,
    SiStyledComponents,
    SiNetlify,
} from 'react-icons/si';

// ASSETS
import logo from '../../../assets/img/logo.png';

export default function TemplateDnr() {

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - Template CRA</title>
                <link rel="canonical" href="https://www.inputon.com.br/ux-ui-design" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <Imagem src='https://i.imgur.com/JGPqGRR.png' alt="Template CRA" />
                    <div className="titleRight">
                        <TitleText>Create React App - Template na medida.</TitleText>
                        <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
                            <span>por <b>Denner Azevedo</b></span>
                        </CreatedBy>
                        <Date><FaBookmark className="icon"/> POSTADO EM 04/11/2020</Date>
                        <MenuIcon>
                            <span>FRONTEND</span>
                        </MenuIcon>
                    </div>
                </Title>
                <Text>
                    <p>
                        <span>Fala Dev! Tudo tranquilo? Por aqui tudo tranquilo! Hoje você vai conhecer algo que vai facilitar <i>(e muito)</i> o 
                        processo para criação de uma aplicação web com um template fera do 
                        <a href="https://pt-br.reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noreferrer"> CRA </a> <i>(create-react-app) </i>
                        que nós preparamos para vocês!!
                        </span>
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaLightbulb className="icon"/>
                        <h2>Introdução</h2>
                    </div>
                    <p>
                        <span>Pra início de conversa, <a href="https://create-react-app.dev/docs/getting-started/" target="_blank" rel="noreferrer">CRA </a> 
                        <i>(create-react-app) </i>é uma ferramenta para criação do <b>FRONTEND</b> de aplicações web em <b>ReactJS</b>. Porém ela vem configurada 
                        com pouquissimas funcionalidades, ou seja, funcionalidades como <b>rotas</b> por exemplo tem que ser configurado antes de realmente 
                        começar seu projeto <i> (a menos que seja um SPA, ai não vai precisar de rotas)</i>.
                        </span>
                    </p>
                    
                    <h3>
                        Quais as vantagens do Template?
                    </h3>

                    <p>
                        <span>&emsp;&emsp;- Projeto desenvolvido em React Hooks;</span>
                    </p>
                    <span style={{marginTop:'10px'}}>&emsp;&emsp;- Desenvolvido e criado com <b>styled-components</b>;</span>
                    <span style={{marginTop:'10px'}}>&emsp;&emsp;- Rotas pré configuradas com <b>React Router Dom</b>;</span>
                    <span style={{marginTop:'10px'}}>&emsp;&emsp;- Configuração de <b>"PÁGINA NÃO ENCONTRADA";</b></span>
                    <span style={{marginTop:'10px'}}>&emsp;&emsp;- <b>HISTORY</b> configurado para funções de navegação;</span>
                    <span style={{marginTop:'10px'}}>&emsp;&emsp;- Configurado para <b>ESlint</b>;</span>
                    <span style={{marginTop:'10px'}}>&emsp;&emsp;- Configurado para o <b>Netlify</b>;</span>
                    <span style={{marginTop:'10px'}}>&emsp;&emsp;- Pastas organizadas.</span>
                </Text>
                <Text>
                    <div>
                        <SiEslint className="icon"/>
                        <h2>ESlint</h2>
                    </div>
                    <p>
                        <span>
                            <a href="https://eslint.org" target="_blank" rel="noreferrer">ESlint</a> é uma ferramenta para <b>padronização</b> e correção de <b>
                                sintaxe</b> do seu código, fazendo com que seu código fique legível para outras pessoas e ajudando você a localizar alguns erros 
                                que passam despercebidos às vezes.
                        </span>
                    </p>

                    <p>
                        <span>Essa ferramenta exige uma instalação e configuração prévia, este template trás ela pronta para o uso, seguindo os padrões 
                            recomendados pela comunidade de <b>ReactJS</b>.
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <SiStyledComponents className="icon"/>
                        <h2>styled-components</h2>
                    </div>
                    <p>
                        <span>
                            Essa é uma ferramenta de estilização do <b>ReactJS</b>. Com ela você cria componentes de estilização utilizando a sintaxe do 
                            <b> CSS</b>. A vantagem dele é que você cria o componente com o nome que você quiser, com isso você pode criar um código muito mais 
                            legível e com muito menos <b>"className"</b>, <b>"class"</b> e etc.
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <FaMapSigns className="icon"/>
                        <h2>React Router Dom</h2>
                    </div>
                    <p>
                        <span>Dentre suas várias funcionalidades, o 
                            <a href="https://reactrouter.com/web/guides/quick-start" target="_blank" rel="noreferrer">React Router Dom</a> é responsável por 
                            criar as rotas da aplicação, com ele fica muito mais fácil de controlar quais são as suas rotas e quais componentes serão renderizados 
                            quando esta rota for acessada. Além disso tem componentes muito úteis, como por exemplo o <b>LINK</b>, que funciona parecido com a 
                            tag <b>a</b> do <b>HTML5</b>, porém muito mais rápida a navegação pois o <b>LINK</b> não tem <b>refresh</b>.
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <FaHistory className="icon"/>
                        <h2>History</h2>
                    </div>
                    <p>
                        <span>Ferramenta que possibilita rotas através de uma função, possibilitando que você seja direcionado para alguma página, assim que 
                            alguma de suas regras de negócio seja cumprida. Além disso ele carrega consigo várias funcionalidades de histórico de navegação.
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <FaTimes className="icon"/>
                        <h2>Página não encontrada</h2>
                    </div>
                    <p>
                        <span>Página vem pré configurada, apenas modificar o código font para o de sua preferência. Essa opção é importante para o caso de acesso 
                            à rotas que não existem na aplicação, neste caso será direcionado para a página criada por você! <i>Mas lembre-se: a rota 
                                do 404 deve ser a última, para que ela não renderize em cima de outra rota cadastrada.
                            </i>
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <SiNetlify className="icon"/>
                        <h2>Netlify</h2>
                    </div>
                    <p>
                        <span>
                            Se você tem o costume de desenvolver aplicações web em <b>ReactJS</b> e ainda não sabe o que é <b>Netlify</b>, recomendo que minimize 
                            agora a sua leitura e vai saber um pouco mais sobre agora mesmo! <b>Netlify</b> é uma plataforma para <b>deploy</b> de aplicações 
                            através do repositório do <b>GitHub</b>, por ela você pode configurar domínios, certificados SSL e tudo isso de graça, além de 
                            refazer o build da sua aplicação de forma automática, toda vez que você alterar o seu repositório.
                        </span>
                    </p>

                    <p>
                        <span>
                            Esse template vem com uma configuração na página <b>PUBLIC</b> do projeto para que você consiga trabalhar com o 
                            <b> React Router Dom </b> sem erros de rota, mas para que isso fique funcionando o arquivo <b>_redirects</b> não pode ser 
                            modificado ou apagado.
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <FaCloudDownloadAlt className="icon"/>
                        <h2>Como faço para baixar o template?</h2>
                    </div>
                    <p>
                        <span>
                            Para facilitar a criação do projeto criamos um template no 
                            <a href="https://www.npmjs.com/package/cra-template-dnr-inputon" target="_blank" rel="noreferrer">NPM </a>.
                        </span>
                    </p>

                    <p>
                        <span>
                            Para começar a usar o template basta navegar até o local de preferência e executar o seguinte comando no seu terminado:
                        </span>
                    </p>

                    <Code>
                        <span>npx create-react-app project-name --template dnr-inputon</span>
                    </Code>
                    <span>Basta trocar <b>"project-name"</b> pelo nome do seu projeto.</span>

                    <p>
                        <span>Feito isso o template será baixado e instalará de forma automática todas as dependencias necessárias para o funcionamento 
                            correto da aplicação. <i> Este processo pode demorar alguns minutos dependendo da sua internet.</i>
                        </span>
                    </p>
                    
                    <p>
                        <span>Assim que a instalação acabar, para inicializar o projeto basta você abrir a pasta do projeto digitando em seu terminal: </span>
                    </p>

                    <Code>
                        <span>cd project-name</span>
                    </Code>
                    <span>Trocando novamente <b>"project-name"</b> pelo nome do seu projeto.</span>

                    <p>
                        <span>E em seguida o comando:</span>
                    </p>

                    <Code>
                        <span>yarn start</span>
                    </Code>
                    <span>ou</span>
                    <Code>
                        <span>npm start</span>
                    </Code>
                    <span>Para inicializar a aplicação.</span>
                </Text>

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

                <Cards>
                    <Repo onClick={() => window.open('https://github.com/dennergazevedo/template-inputon')}>
                        <FaGithub className="icon" />
                        <div>
                            <span className="font">BAIXE AQUI</span>
                            <span>CÓDIGO FONTE</span>
                        </div>
                    </Repo>

                    <Repo onClick={() => window.open('https://www.npmjs.com/package/cra-template-dnr-inputon')}>
                        <FaNpm className="icon" />
                        <div>
                            <span className="font">VEJA AQUI</span>
                            <span>PACOTE NPM</span>
                        </div>
                    </Repo>
                </Cards>


                <Text>
                    <h3>
                        E ai, o que achou?
                    </h3>
                    <h3>
                        Espero que este template seja útil para seus projetos daqui para frente. <FaHandHoldingHeart className="icon"/>
                    </h3>
                </Text>

                <Text>
                    <img src="https://i.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.webp" alt="HOMER" className="small"/>
                </Text>

                <CardDenner />
                
            </Body>
            <Footer />
        </Container>
    )
}
