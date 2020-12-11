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
    BodyItem,
    Version,
    Repo
} from './styles'

// ICONS
import {
    FaShareSquare,
    FaBookmark,
    FaExchangeAlt,
    FaPlay,
    FaGithub
} from 'react-icons/fa';

// ASSETS
import logomarca from '../../../assets/img/logo.png'

const ConsumeApi:React.FC = () => {

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - Consumindo API REST com Axios</title>
                <link rel="canonical" href="https://www.inputon.com.br/ux-ui-design" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <Imagem src='https://i.imgur.com/51TdMvu.png' alt="HooksPropsState" />
                    <div className="titleRight">
                        <TitleText>ReactJS - Consumindo API REST com Axios</TitleText>
                        <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
                            <span>por <b>Denner Azevedo</b></span>
                        </CreatedBy>
                        <Date><FaBookmark className="icon"/> POSTADO EM 08/11/2020</Date>
                        <MenuIcon>
                            <span>FRONTEND</span>
                        </MenuIcon>
                    </div>
                </Title>
                <Text>
                    <p>
                        <span>
                            Criamos a <b>API Rest</b> e temos um template do <b>ReactJS</b>, mas como faço para consumir a <b>API</b>? Esse é o tema do post de 
                            hoje, vamos aprender como fazer <b>requisições</b>, usar <b>async function</b> e exibir o resultado na tela usando um <b>state</b>.
                        </span>
                    </p>

                    <p>
                        <span>
                            Para isso precisamos fazer algumas alterações, tanto na <b>API</b> quanto no nosso <b>template</b>. Vamos começar autorizando 
                            que nossa API receba requisições externas, para isso precisamos configurar o <b>CORS</b> da aplicação.
                        </span>
                    </p>

                    <p>
                        <span>
                            Caso você esteja perdido e não tem a <b>API</b> e nem o <b>Template</b> que serão usado nesse post, aqui estão os dois posts para 
                            que você consiga terminar este tutorial de uma forma mais rápida:
                        </span>
                    </p>
                    <br/>

                    <b>
                        <a href="https://inputon.com.br/backend/api-rest-express-nodejs" target="_blank" rel="noreferrer">• Criando uma API REST com NodeJS Express</a>
                    </b>
                    <b>
                        <a href="https://inputon.com.br/frontend/template-cra-dnr" target="_blank" rel="noreferrer">• Create React App - Template na medida</a>
                    </b>
                </Text>
                <Text>
                    <div>
                        <FaShareSquare className="icon"/>
                        <h2>CORS</h2>
                    </div>
                    <p>
                        <span>
                            Cross-Origin Resource Sharing ou CORS é um mecanismo que permite que recursos restritos em uma página da web sejam recuperados por 
                            outro domínio fora do domínio ao qual pertence o recurso que será recuperado, em outras palavras, ele controla quais são os domínios 
                            que irão poder acessar o conteúdo da sua <b>API</b>.
                        </span>
                    </p>

                    <p>
                        <span>
                            A configuração do cors é bem simples, mas antes de configurar, precisamos instalar o <b>CORS</b> na nossa aplicação, para isso basta 
                            abrir o diretório da <b>API</b> no terminal e executar o comando:
                        </span>
                    </p>

                    <Code>
                        <span>yarn add cors</span>
                    </Code>

                    <span>ou</span>

                    <Code>
                        <span>npm install cors</span>
                    </Code>
                    
                    <p>
                        <span>
                            O processo de instalação é rápido e assim que finalizar, você pode abrir a API no editor de código de sua preferência, pois 
                            precisamos configurar o <b>CORS</b> na aplicação.
                        </span>
                    </p>

                    <h3>Configurando o CORS</h3>

                    <p>
                        <span>
                            O primeiro passo é abrir o arquivo <b>app.js</b> e logo abaixo da importação do <b>express</b> você importa o <b>CORS</b> dessa maneira:
                        </span>
                    </p>

                    <Code>
                        <span>import cors from 'cors';</span>
                    </Code>

                    <span>Para finalizar o cors basta que você adicione na função <b>middlewares</b> o código:</span>

                    <Code>
                        <span>this.server.use(cors());</span>
                    </Code>

                    <span>
                        Com essa configuração você está configurando sua <b>API</b> para receber requisições de qualquer domínio que será o suficiente para 
                        que você entenda como fazer requisições pelo <b>FRONTEND</b>, mas caso você queira <b>bloquear</b> sua API apenas para um domínio 
                        específico, basta configurar a <b>origin</b> dentro da função desse jeito:
                    </span>

                    <img src="https://i.imgur.com/rNy2iD0.png" alt="imagem" className="medium" />

                    <span>
                        Se você seguiu nosso passo a passo, seu arquivo <b>app.js</b> está desse jeito:
                    </span>

                    <img src="https://i.imgur.com/OlvQwpz.png" alt="imagem" className="medium" />

                    <p>
                        <span>
                            Nossa <b>API</b> está configurada e pronta para receber nossa primeira requisição.
                        </span>
                    </p>

                </Text>
                <Text>
                    <div>
                        <FaExchangeAlt className="icon"/>
                        <h2>Axios</h2>
                    </div>
                    <p>
                        <span>
                            Cliente HTTP baseado em <b>Promises</b> para fazer requisições que pode ser usado tanto no navegador <b>FRONTEND</b> quanto no 
                            <b> NodeJS</b> no <b>BACKEND</b>.
                        </span>
                    </p>

                    <p>
                        <span>
                            Como já deve estar se acostumando, o <b>AXIOS</b> é uma dependência e precisa ser instalado, para instalar é bem simples, basta 
                            abrir sua pasta raiz do projeto <b>FRONTEND</b> no seu terminal e rodar o comando: 
                        </span>
                    </p>
                    

                    <Code>
                        <span>yarn add axios</span>
                    </Code>
                    <span>ou</span>
                    <Code>
                        <span>npm install axios</span>
                    </Code>

                    <p>
                        <span>
                            Finalizando a instalação do <b>AXIOS</b> é necessário que você configure ele, mas é bem simples também! Abra seu editor de código 
                            na pasta raiz do template que criamos no post mencionado acima.
                        </span>
                    </p>

                    <p>
                        <span>
                            Para manter organizado e facilitar o uso, iremos criar um arquivo na pasta <b>src/services</b> com o nome de <b>api.js</b>, esse 
                            arquivo será importado por outros componentes e para fazer a requisição, o arquivo deve conter o conteúdo:
                        </span>
                    </p>

                    <img src="https://i.imgur.com/yfqOcsm.png" alt="imagem" className="medium" />

                    <span>
                        <b>Obs.:</b> o número <b>3333</b> deve ser substituido pela porta que sua aplicação esteja rodando, ou se você já está mais avançado 
                        a baseURL deve ser o domínio de sua <b>API.</b>
                    </span>
                </Text>

                <Text>
                    <div>
                        <FaPlay className="icon"/>
                        <h2>Como usar</h2>
                    </div>
                    <p>
                        <span>
                            Chegou a hora tão esperada, para utilizar é simples, basta fazer a importação desse arquivo criado no componente que quer fazer 
                            a requisição. Neste exemplo iremos usar o arquivo <b>src/views/Homepage/index.jsx</b> pois o arquivo já está criado em nosso template.
                        </span>
                    </p>

                    <p>
                        <span>
                            Para importar a <b>API</b> basta inserir o código abaixo logo abaixo da importação do <b>REACT</b>:
                        </span>
                    </p>

                    <img src="https://i.imgur.com/YAQkOpF.png" alt="imagem" className="medium" />

                    <span>
                        <b>Obs.:</b> o endereço <b>'../../services/api'</b> deve ser substituído pelo endereço do seu arquivo <b>api.js</b> caso você tenha 
                        mudado o local do arquivo dentro da aplicação.
                    </span>

                    <p>
                        <span>
                            Para fazer uma requisição com o <b>AXIOS</b> você precisa ter criado uma rota na sua <b>API</b>, mas como somos previnidos, já 
                            deixamos criado uma rota do tipo <b>GET</b> ou seja, uma requisição que busca dados na <b>API</b> e usaremos ela para o exemplo.
                        </span>
                    </p>

                    <p>
                        <span>
                            Caso você não saiba quais são os tipos de requisição básicas que podemos fazer em uma <b>API Rest</b>, recomendo que 
                            leia o post <a href="https://inputon.com.br/backend/api-rest-restful" target="_blank" rel="noreferrer">Um pouco sobre API's, REST e 
                            RESTful.</a>
                        </span>
                    </p>

                    <p>
                        <span>
                            Antes de fazer a requisição, precisamos importar dois <b>Hooks</b> do ReactJS o <b>useState</b> para controlar os estados da aplicação 
                            e o <b>useEffect</b> para controlar os ciclos de vida. A importação é feita junto com o react da seguinte forma:
                        </span>
                    </p>

                    <img src="https://i.imgur.com/sevdOwi.png" alt="imagem" className="medium" />

                    <p>
                        <span>
                            No próximo passo iremos criar dois <b>estados</b>, um para armazenar o título da nossa <b>API</b> e outro para armazenar 
                            a <b>Versão</b>, esses dois dados são retornados da nossa <b>API</b> na rota do tipo <b>GET</b> que criamos. Código da criação 
                            dos estados:
                        </span>
                    </p>

                    <img src="https://i.imgur.com/z8C0uAo.png" alt="imagem" className="medium" />

                    <p>
                        <span>
                            Agora criaremos a função que faremos de fato a requisição em nossa <b>API</b>, a função precisa ser <b>assíncrona</b>, ou seja, 
                            quando ela for chamada ela irá retornar uma <b>Promise</b> e usaremos o <b>await</b> para que a execução da função seja pausada 
                            até que a <b>Promise</b> seja resolvida e assim armazenar a resposta da <b>API</b> em uma variável e assim fica nossa função:
                        </span>
                    </p>

                    <img src="https://i.imgur.com/kTyAJso.png" alt="imagem" className="medium" />
                    
                    <span>
                        Note que salvei nos estados o item <b>title</b> e <b>version</b> do <b>response.data</b> e não do <b>response</b>, o motivo de ter 
                        feito isso é que a resposta da requisição possuem outros retornos além do que você retornou em sua <b>API</b>, como por exemplo os
                        <b> headers</b>, <b>status</b>, <b>config</b> que podem ser usados para tratar excessões da sua <b>API</b>. Neste caso usaremos 
                        o <b>data</b> que é onde está o retorno da nossa <b>API</b>.
                    </span>

                    <p>
                        <span>
                            Agora para executar a função assim que nosso componente for renderizado, é necessário usar o <b>useEffect</b>. Para chamar 
                            a função basta adicionar o código após a sua função:
                        </span>
                    </p>

                    <img src="https://i.imgur.com/VC5ZqcB.png" alt="imagem" className="medium" />

                    <p>
                        <span>
                            Para finalizar, basta exibir esses dados recuperados da <b>API</b> no nosso <b>FRONT</b>, para isso iremos adicionar o seguinte 
                            código no nosso componente, logo abaixo do nosso <b>BODY</b>, dessa forma:
                        </span>
                    </p>

                    <img src="https://i.imgur.com/suTmkKO.png" alt="imagem" className="medium" />

                    <span>
                        <b>Version</b> é um componente do <b>styled-components</b> que está no arquivo <b>./styles.js</b> com o <b>CSS</b> abaixo:
                    </span>

                    <img src="https://i.imgur.com/cvQ8v61.png" alt="imagem" className="medium" />

                    <span>
                        Não se esqueça de importar o <b>Version</b> junto com os seus componentes vindo do <b>./styles.js.</b>
                    </span>

                    <p>
                        <span>
                            Se você seguiu todos os passos direitinho, você pode iniciar o servidor da <b>API</b> e o servidor do <b>ReactJS</b> que terá 
                            um resultado próximo à este no seu <b>FRONTEND</b>:
                        </span>
                    </p>

                </Text>

                <Logomarca src={logomarca} alt="Logo" />
                <BodyItem>
                    <span>POWERED BY</span>
                    <span className="title">
                    Input
                    <b>On</b>
                    </span>
                </BodyItem>
                <Version>
                    <span><b>Title:</b> InputOnAPI</span>
                    <span><b>Version:</b> 1.0.0</span>
                </Version>

                <Text>
                    <p>
                        <span>
                            Caso você tenha ficado com dúvida à respeito de alguns termos usados no post, recomendo que dê uma lida nos seguintes posts:
                        </span>
                    </p>

                    <b>
                        <a href="https://inputon.com.br/backend/api-rest-express-nodejs" target="_blank" rel="noreferrer">• Criando uma API REST com NodeJS Express</a>
                    </b>

                    <b>
                        <a href="https://inputon.com.br/backend/api-rest-restful" target="_blank" rel="noreferrer">• Um pouco sobre APIs, REST e RESTful</a>
                    </b>

                    <b>
                        <a href="https://inputon.com.br/frontend/react-hooks-props-state" target="_blank" rel="noreferrer">• ReactJS - Hooks, Props e States</a>
                    </b>
                </Text>

                <Text>
                    <p>
                        <span>Repositório completo com <b>FRONTEND</b> e <b>BACKEND</b> desenvolvido neste post:</span>
                    </p>
                </Text>

                <Repo onClick={() => window.open('https://github.com/dennergazevedo/reqwithaxios')}>
                    <FaGithub className="icon" />
                    <div>
                        <span className="font">BAIXE AQUI</span>
                        <span>CÓDIGO FONTE</span>
                    </div>
                </Repo>

                <Text>
                    <h3>Espero que depois desse post sua cabeça esteja fervendo de ideias de como usar a API.</h3>
                    <h3>Espero também que de alguma forma eu tenha te passado algum conhecimento, até a próxima!</h3>
                </Text>

                <Text>
                    <img src="https://media.tenor.com/images/cfbee9be70d9814eb41aeb9e7422231b/tenor.gif" alt="GIF" className="small"/>
                </Text>

                <CardDenner />
                
            </Body>
            <Footer />
        </Container>
    )
}
export default ConsumeApi;