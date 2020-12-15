import React from 'react'

// COMPONENTS
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CardDenner from '../../../components/CardDenner';
import Comments from '../../../components/Comments';

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
    Repo
} from './styles'

// ICONS
import {
    FaBookmark,
    FaHandPaper,
    FaNodeJs,
    FaWindows,
    FaLinux,
    FaApple,
    FaFolderOpen,
    FaBoxOpen,
    FaYarn,
    FaNpm,
    FaJsSquare,
    FaRegLaughSquint,
    FaCheck,
    FaCodeBranch,
    FaGithub
} from 'react-icons/fa';

const ExpressNodeJs: React.FC = () => {
    
    const config = {
        url: 'https://www.inputon.com.br/backend/api-rest-express-nodejs',
        identifier: 'api-rest-express-nodejs',
        title: 'InputOn - API REST com NodeJS Express'
    }

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - API REST com NodeJS Express</title>
                <link rel="canonical" href="https://www.inputon.com.br/backend/api-rest-express-nodejs" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <Imagem src='https://i.imgur.com/KC5lYEY.png' alt="APIREST" />
                    <div className="titleRight">
                        <TitleText>Criando uma API REST com NodeJS Express.</TitleText>
                        <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
                            <span>por <b>Denner Azevedo</b></span>
                        </CreatedBy>
                        <Date><FaBookmark className="icon"/> POSTADO EM 01/12/2020</Date>
                        <MenuIcon>
                            <span>BACKEND</span>
                        </MenuIcon>
                    </div>
                </Title>
                <Text>
                    <p>
                        <span>Fala seus formatador de PC, tudo tranquilo? <FaHandPaper className="icon" /> O que seria de um Blog de programação se não 
                        tivesse um post falando sobre como criar uma API REST não é mesmo? Mas não se sinta mal se você não sabe como fazer isso ou 
                        até mesmo esqueceu, to aqui pra isso afinal. Então já abre seu editor de texto favorito e bora codar!
                        </span>
                    </p>
                    <p>
                        <i>Caso você tenha caído aqui de paraquedas e não sabe o que é uma API REST ou RESTful, recomendo que você dê uma lida no nosso post 
                            <a href="/backend/api-rest-restful" target="_blank" rel="noreferrer"> Um pouco sobre APIs, REST e RESTful.</a>.
                        </i>
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaNodeJs className="icon"/>
                        <h2>NodeJS</h2>
                    </div>
                    <p>O primeiro passo é ter o NodeJS instalado na sua máquina, caso você seja como eu e sofre de amnésia e não sabe se tem o NodeJS 
                        instalado, basta abrir o terminal <i>(eu uso o Hyper)</i> de sua preferência e rodar o comando:
                    </p>
                    <Code>
                        <span><i>$</i> node -v</span>
                    </Code>
                    <p>
                        <span>Outra ferramenta muito importante que vamos usar é um instalador de pacote, tem vários no mercado, mas os mais conhecidos são 
                            NPM e YARN e hoje iremos usar o YARN, para saber se você já tem instalado basta rodar o comando abaixo no seu terminal:
                        </span>
                    </p>
                    <Code>
                        <span><i>$</i> yarn -v</span>
                    </Code>
                    <p>
                        <span>Caso você já tenha instalado o YARN e o NodeJS, os códigos acima devem retornar a versão atual instalado na sua máquina. Caso 
                        você ainda não tenha instalado irá retornar algo como:
                        </span>
                    </p>
                    <Code>
                        <span className="error">'node' não é reconhecido como um comando interno ou externo.</span>
                    </Code>
                    <p>
                        <span>Mas paciência jovem peregrino, para instalar tudo é bem simples, siga o tutorial abaixo baseado em seu sistema operacional.</span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <FaWindows className="icon"/>
                        <h2>Windows</h2>
                    </div>

                    <p>
                        <span>Acesse o site do <a href="https://nodejs.org/pt-br/download/" target="_blank" rel="noreferrer">NodeJS</a> e na aba <b>LTS</b> você 
                        clica em <b>Instalador Windows</b> como na imagem abaixo
                        </span>
                    </p>

                    <img src="https://i.imgur.com/UzjsKRP.png" alt="DOWNLOADNODEJS"/>

                    <p>
                        <span>
                            Mas porque usar <b>LTS</b> e não <b>Atual</b>? Já que a versão atual é mais atualizada e tem upgrades interessantes?
                        </span>
                    </p>

                    <p>
                        <span>
                        A versão <b>LTS</b> é a versão estável e é recomendado para a maioria dos usuários, mas caso você seja um estudante assíduo e 
                        encontrou na documentação do <b>NodeJS</b> alguma feature interessante para um projeto específico, nada te impede de usar outra versão.
                        </span>
                    </p>

                    <p>
                        <span>
                        Assim que acabar o download do instalador não tem mais segredos, é só "ler e aceitar" os termos e avançar até que o instalador 
                        comece a instalar aguarde o final da instalação.
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <FaLinux className="icon"/>
                        <h2>Linux</h2>
                    </div>

                    <p>
                        <span>No <b>Linux</b> é um pouco diferente, porém nada assustador, irei mostrar como instalar em um <b>Linux Ubuntu</b> pois é 
                        o que atualmente tenho instalado, esse tutorial pode variar um pouco de acordo com o seu <b>Linux</b> ou até mesmo a versão dele. 
                        Neste caso, basta seguir o tutorial da documentação do <b>NodeJS</b>: 
                        <a href="https://nodejs.org/pt-br/download/package-manager/" target="_blank" rel="noreferrer"> Como instalar NodeJS</a>
                        </span>
                    </p>

                    <p>
                        <span>O primeiro passo é atualizar o cache do <b>APT</b>, para isso rode no terminal de sua preferência o comando:</span>
                    </p>
                    
                    <Code>
                        <span><i>$</i> sudo apt update</span>
                    </Code>

                    <p>
                        <span>
                            Assim que acabar a atualização você está pronto para rodar o comando de instalação do <b>NodeJS</b> no seu Ubuntu:
                        </span>
                    </p>

                    <Code>
                        <span><i>$</i> sudo apt install nodejs</span>
                    </Code>

                    <p>
                        <span>
                            Após inserir a sua senha, o processo de instalação deve iniciar e após finalizar, basta rodar o comando abaixo para ter 
                            certeza que correu tudo bem, o comando deve retornar a versão do <b>NodeJS</b>:
                        </span>
                    </p>

                    <Code>
                        <span><i>$</i>node -v</span>
                        <span className="return">v14.15.1</span>
                    </Code>
                </Text>

                <Text>
                    <div>
                        <FaApple className="icon"/>
                        <h2>macOS</h2>
                    </div>

                    <p>
                        <span>Não sei, não tenho macOs.</span>
                    </p>

                    <img className="small" src="https://thumbs.gfycat.com/RightSoupyAtlanticbluetang-size_restricted.gif" alt="CREDITOS" />

                    <p>
                        <span>Brincadeira, não precisa fechar a página, basta seguir o tutorial da documentação do <b>NodeJS</b> que está bem fácil 
                        de entender e executar: <a href="https://nodejs.org/pt-br/download/package-manager/#macos" target="_blank" rel="noreferrer">
                            Instalando NodeJS no macOS</a>
                        </span>
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaBoxOpen className="icon" />
                        <h2>YARN || NPM</h2>
                    </div>
                    <p>
                        <span>
                        Gerenciadores de pacotes servem para instalar algumas dependências, como o <b>Express</b> por exemplo. Neste POST iremos usar o 
                        <b> YARN</b> mas não é obrigatório, existem outros gerenciadores de pacotes que fazem a mesma função como por exemplo o 
                        <b> NPM</b>, por isso vou deixar a documentação oficial de instalação para vocês instalarem o gerenciador de sua preferência:
                        </span>
                    </p>
                    <div>
                        <a href="https://classic.yarnpkg.com/pt-BR/docs/install" target="_blank" rel="noreferrer"><FaYarn className="iconLink"/> 
                            <span hidden>YARN</span>
                        </a>
                        <a href="https://www.npmjs.com/get-npm" target="_blank" rel="noreferrer"><FaNpm className="iconLink"/>
                            <span hidden>NPM</span>
                        </a>
                    </div>
                </Text>
                <Text>
                    <div>
                        <FaFolderOpen className="icon"/>
                        <h2>Estrutura de Pastas da API</h2>
                    </div>
                    <p>
                        <span>Me perdoa por fazer você esperar até aqui, mas era fundamental que você tivesse o NodeJS e um gerenciador de pacotes instalados! 
                            Mas agora começa de verdade a criação da API.
                        </span>
                    </p>

                    <p>
                        <span>O primeiro passo para iniciar o nosso projeto é criar o <b>package.json</b> que é responsável por armazenar várias informações 
                        importantes do nosso projeto, como engines, scripts de ambientes, dependências e outras coisas...
                        </span>
                        <span> Para criar o <b>package.json</b> basta ir até o diretório que irá criar o seu projeto usando o seu terminal
                         e executar o comando:</span>
                    </p>

                    <Code>
                        <span><i>$</i>yarn init -y</span>
                    </Code>

                    <span>ou</span>

                    <Code>
                        <span><i>$</i>npm init -y</span>
                    </Code>

                    <p>
                        <span>Se tudo deu certo, dentro da pasta escolhida será criado o arquivo <b>package.json. </b></span>
                        <span><b>Obs.:</b> Se criar outro arquivo como <b>yarn-error.log</b> por exemplo, pode ficar tranquilo pois é normal, é apenas um arquivo de log 
                        que podemos ignorar por enquanto.</span>
                    </p>

                    <p>
                        <span>Agora criamos a estrutura de pastas, como abaixo:</span>
                    </p>

                    <Code>
                        <span><i>/</i>src</span>
                        <span className="subpasta"><i>/</i>routes</span>
                        <span className="subpasta"><i>•</i>server.js</span>
                        <span style={{marginBottom:'20px'}}className="subpasta"><i>•</i>app.js</span>
                        <span><i>•</i>package.json</span>
                    </Code>

                    <p>
                        <span>Antes de começar vamos instalar duas dependências bastante úteis para nosso projeto, <b>EXPRESS</b> e <b>NODEMON</b>.</span>
                    </p>
                    <p>
                        <span><b>ExpressJS:</b> Framework para aplicações web para NodeJS, que será responsável por criar nosso server.</span>
                    </p>
                    <p>
                        <span><b>Nodemon:</b> Ferramenta para ajudar no desenvolvimento, ela faz a aplicação reiniciar automaticamente após uma 
                        alteração.</span>
                    </p>

                    <Code>
                        <span><i>$</i>yarn add express</span>
                    </Code>
                    <Code>
                        <span><i>$</i>yarn add nodemon</span>
                    </Code>
                    <span>ou</span>
                    <Code>
                        <span><i>$</i>npm install express && npm install nodemon</span>
                    </Code>

                    <p>
                        <span>O <b>Nodemon</b> necessita uma configuração extra, você irá precisar ir até o <b>package.json</b> e adicionar uma chave 
                        "<b>scripts</b>":</span>
                    </p>

                    <Code>
                        <span>{`"scripts": {
                                    "dev": "nodemon src/server.js"
                                },`}</span>
                    </Code>

                    <p>
                        <span>Este comando serve para que seu servidor seja inicializado com o <b>Nodemon</b> pelo comando <b>yarn dev</b> ou <b>npm dev</b>.</span>
                    </p>

                    <p>
                        <span>Se você fez tudo certinho, seu <b>package.json</b> deve estar assim:</span>
                    </p>

                    <img className="medium" src="https://i.imgur.com/iiA1Ahj.png" alt="PACKAGE" />
                </Text>
                <Text>
                    <div>
                        <FaJsSquare className="icon"/>
                        <h2>Criando o app.js</h2>
                    </div>
                    <p>
                        <span>
                            O arquivo <b>app.js</b> nada mais é do que nossa aplicação web, é aqui que instanciaremos o <b>Express</b> e configuramos algumas 
                            coisas mais.
                        </span>
                    </p>

                    <Code>
                        <span>const express = require('express');</span>
                        <span>const routes = require('./routes');</span>
                        <br/>
                        <span>class App {`{`}</span>
                        <span>&emsp;constructor() {`{`}</span>
                        <span>&emsp;&emsp;this.server = express();</span>
                        <span>&emsp;&emsp;this.middlewares();</span>
                        <span>&emsp;&emsp;this.routes();</span>
                        <br/>
                        <span>&emsp;middlewares() {`{`}</span>
                        <span>&emsp;&emsp;this.server.use(express.json());</span>
                        <span>&emsp;{`}`}</span>
                        <br/>
                        <span>&emsp;routes() {`{`}</span>
                        <span>&emsp;&emsp;this.server.use(routes);</span>
                        <span>&emsp;{`}`}</span>
                        <span>{`}`}</span>
                        <br/>
                        <span>module.exports = new App().server;</span>
                    </Code>

                    <p><span>Vamos entender melhor este arquivo.</span></p>

                    <Code>
                        <span>const express = require('express');</span>
                        <span>const routes = require('./routes');</span>
                    </Code>

                    <span>Essas são importanções para instanciar em nosso <b>app.js</b> o <b>Express</b> que é nosso servidor e 
                    a pasta <b>routes</b> será responsável por controlar as rotas da nossa API.</span>

                    <Code>
                        <span>class App {`{`}</span>
                        <span>&emsp;constructor() {`{`}</span>
                        <span>&emsp;&emsp;this.server = express();</span>
                        <span>&emsp;&emsp;this.middlewares();</span>
                        <span>&emsp;&emsp;this.routes();</span>
                    </Code>

                    <span>Aqui declaramos nossa classe e nosso construtor. Dentro do construtor vamos ter 3 funções essenciais: Nosso <b>Server</b> nossas 
                    <b> Middlewares</b> e nossas <b> Routes</b></span>

                    <Code>
                        <span>&emsp;middlewares() {`{`}</span>
                        <span>&emsp;&emsp;this.server.use(express.json());</span>
                        <span>&emsp;{`}`}</span>
                    </Code>

                    <span>A função <b>middlewares()</b> nesse exemplo, é responsável por configurar o <b>Express</b> para usarmos o formato <b>JSON</b> em 
                    nossa aplicação.</span>

                    <Code>
                        <span>&emsp;routes() {`{`}</span>
                        <span>&emsp;&emsp;this.server.use(routes);</span>
                        <span>&emsp;{`}`}</span>
                        <br/>
                        <span>module.exports = new App().server;</span>
                    </Code>

                    <span>Por fim, a função <b>routes()</b> mostra ao express onde estão as nossas rotas e exporta nosso <b>Servidor Express</b>.</span>
                </Text>
                <Text>
                    <div>
                        <FaJsSquare className="icon"/>
                        <h2>Criando o server.js</h2>
                    </div>
                    <p>
                        <span>
                            O <b>server.js</b> é responsável várias funções, como configurações de certificações SSL, Headers, dentre outras várias funções, 
                            mas no post de hoje, iremos ver apenas como setar uma <b>PORT</b> para conseguir visualizar nossa <b>API</b> online.
                        </span>
                    </p>
                    <p>
                        <span>
                            Para isso, precisamos adicionar o código abaixo no arquivo <b>server.js</b>.
                        </span>
                    </p>
                    <Code>
                        <span>const app = require('./app');</span>
                        <br />
                        <span>app.listen(3333, () {`=>`} {`{`}</span>
                        <span>&emsp;console.log(`Servindo na porta 3333`);</span>
                        <span>{`});`}</span>
                    </Code>
                    <p>
                        <span>Se você já se acostumou com importações, percebeu que importamos o nosso <b>app.js</b> para o <b>server.js</b> e 
                        com a função <b>listen()</b> escolhemos a porta em qual o server ficará online (3333).
                        </span>
                    </p>
                    <p>
                        <span>A função <b>listen()</b> recebe dois parâmetros, o primeiro é a porta da <b>API</b> e o segundo é uma <b>Arrow Function </b> 
                        que usei apenas para mostrar no console, qual é a porta que o servidor está servindo.
                        </span>
                    </p>

                    <p>
                        <span>Eu sei que você está ansioso, mas calma, estamos quase lá, eu juro! <FaRegLaughSquint className="icon"/></span>
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaJsSquare className="icon"/>
                        <h2>Configurando nossas Rotas</h2>
                    </div>

                    <p>
                        <span>Agora vamos configurar nossas rotas, ou seja, para isso criarei uma rota raiz (/) do tipo <b>GET</b> para 
                        visualizar ela no nosso navegador, para isso, precisamos criar um arquivo <b>index.js</b> dentro da pasta 
                        <b> routes</b> que está dentro de <b>src</b></span> e colocar o código abaixo:
                    </p>

                    <Code>
                        <span>const express = require('express');</span>
                        <span>const router = express.Router();</span>
                        <br />
                        <span>router.get('/', (req, res) {`=>`} {`}`}</span>
                        <span>&emsp;res.status(200).send({`{`}</span>
                        <span>&emsp;&emsp;title: 'InputOnAPI',</span>
                        <span>&emsp;&emsp;version: '1.0.0'</span>
                        <span>&emsp;{`});`}</span>
                        <span>{`});`}</span>
                        <br/>
                        <span>module.exports = router;</span>
                    </Code>
                    <p>
                        <span>Vamos entender este código acima.</span>
                    </p>
                    <Code>
                        <span>const express = require('express');</span>
                        <span>const router = express.Router();</span>
                        <br />
                    </Code>
                    <span>Como está familizarizando, essas são nossas importações, primeiro o <b>Express</b> e depois a função <b>Router()</b> do <b> 
                        Express.</b>
                    </span>
                    <Code>
                        <span>router.get('/', (req, res) {`=>`} {`}`}</span>
                        <span>&emsp;res.status(200).send({`{`}</span>
                        <span>&emsp;&emsp;title: 'InputOnAPI',</span>
                        <span>&emsp;&emsp;version: '1.0.0'</span>
                        <span>&emsp;{`});`}</span>
                        <span>{`});`}</span>
                        <br/>
                        <span>module.exports = router;</span>
                    </Code>
                    <span>
                        Após isso, usaremos o <b>router</b> que carrega a função <b>Router()</b> do <b>Express</b> para criar uma <b>Requisição </b> 
                        do tipo <b>GET</b>, essa requisição recebe dois parâmetros, o primeiro parâmetro é a <b>ROTA</b>, que neste caso é a 
                        rota raiz '/'. O segundo parâmetro é uma <b>Arrow Function</b> que no nosso exemplo recebem 2 parâmetros (<b>req, res</b>), que 
                        são a <b>REQUISIÇÃO</b> e <b>RESPOSTA</b>, que não irei me aprofundar muito nesses dois agora, pois é assunto para um outro 
                        POST.
                    </span>
                    <br/>
                    <span>Usamos a função <b>status()</b> da <b>RESPOSTA</b> para indicar o código 200, que representa o código <b>OK</b> de uma 
                        requisição <b>HTTP</b> que também é assunto para outro POST rsrs. Mas só para dar um gostinho de 'quero mais', existem códigos HTTP 
                        para determinar se a <b>REQUISIÇÃO</b> foi bem-sucedida(200), mal-formada(400), não autorizada(401), não encontrada(404) 
                        dentre outros.
                    </span>
                    <br/>
                    <span>E para finalizar, usamos a função <b>send() </b> que serve para enviar uma resposta para nosso navegador, que neste caso é um 
                    <b> JSON </b> com o <b>título</b> e <b>versão</b> da API.
                    </span>
                </Text>
                <Text>
                    <div>
                        <FaCheck className="icon" />
                        <h2>Vamos testar?</h2>
                    </div>
                    <p>
                        <span>Para testar a nossa nova <b>API</b> basta acessar a pasta raiz do projeto criado no terminal e rodar o comando:</span>
                    </p>
                    <Code>
                        <span><i>$</i> yarn dev</span>
                        <span className="return">Servindo na porta 3333</span>
                    </Code>
                    <span>
                        ou
                    </span>
                    <Code>
                        <span><i>$</i> npm dev</span>
                        <span className="return">Servindo na porta 3333</span>
                    </Code>
                    <span>Sua resposta deve ser o que você colocou no console.log no arquivo <b>server.js</b></span>
                    <p>
                        <span>
                            Para finalizar o teste, acessar o link abaixo no navegador, trocando 3333 pela porta escolhida no arquivo <b>server.js</b>:
                        </span>
                    </p>
                    <Code>
                        <span>http://localhost:3333/</span>
                        <span className="return">{`{"title":"InputOnAPI","version":"1.0.0"}`}</span>
                    </Code>
                    <span>O seu retorno deve ser o <b>JSON</b> que está na função <b>send()</b>.</span>

                    <p>
                        <span>Sua API com <b>EXPRESS</b> está pronta e já pode usar da maneira que bem entender, porém esta API é basica demais. 
                        Mas não se desespere, darei algumas dicas de como continuar seu estudo.</span>
                    </p>
                </Text>

                <Repo onClick={() => window.open('https://github.com/dennergazevedo/apiexpress')}>
                    <FaGithub className="icon" />
                    <div>
                        <span className="font">BAIXE AQUI</span>
                        <span>CÓDIGO FONTE DA API REST</span>
                    </div>
                </Repo>

                <Text>
                    <div>
                        <FaCodeBranch className="icon" />
                        <h2>Dicas de Estudo</h2>
                    </div>

                    <p>
                        <span>
                            Abaixo deixarei algumas palavras chaves que servirão como parâmetro para que continue aprofundando seus estudos 
                            no <b>NodeJS </b>.
                        </span>
                    </p>
                    <br />
                    <br />

                    <span>• Métodos GET, PUT, POST, DELETE;</span>
                    <span>• Controllers;</span>
                    <span>• ORM's (Sequelize, Mongoose, KnexJS e etc.);</span>
                    <span>• Migrations;</span>
                    <span>• Autenticação;</span>
                    <span>• CORS;</span>
                    <span>• Multer.</span>
                </Text>

                <Text>
                    <p>
                        <span>E ai, conseguiu entender um pouco mais sobre <b>API's</b> e <b>NodeJS</b>?</span>
                    </p>
                    <p>
                        <span>Espero que sim! Mas lembre-se, todo conhecimento é pouco, até a próxima!</span>
                    </p>
                </Text>
                <CardDenner />
                <Comments config={config} />
            </Body>
            <Footer />
        </Container>
    )
}

export default ExpressNodeJs;