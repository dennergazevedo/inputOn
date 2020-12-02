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
    Repo
} from './styles.js'

// ICONS
import {
    FaBookmark,
    FaGrinStars,
    FaNodeJs,
    FaPlay,
    FaDownload,
    FaGrinBeamSweat,
    FaGithub,
    FaHeart
} from 'react-icons/fa';

export default function SucraseNodeJS() {

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - Sucrase NodeJS</title>
                <link rel="canonical" href="https://www.inputon.com.br/sucrase-with-nodejs" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <Imagem src='https://i.imgur.com/q1en1Pd.png' alt="APIREST" />
                    <div className="titleRight">
                        <TitleText>Usando Sucrase no NodeJS.</TitleText>
                        <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
                            <span>por <b>Denner Azevedo</b></span>
                        </CreatedBy>
                        <Date><FaBookmark className="icon"/> POSTADO EM 02/12/2020</Date>
                        <MenuIcon>
                            <span>BACKEND</span>
                        </MenuIcon>
                    </div>
                </Title>
                <Text>
                    <p>
                        <span>E ai "Carinha do TI" tudo na paz? Espero que sim, porque hoje é dia de largar a mão um pouco das raízes e aprender um pouco sobre ES6 
                            no NodeJS. <FaGrinStars className="icon" />
                        </span>
                    </p>
                    <p>
                        <i>Para esse post iremos usar uma API criada no post <a href="/backend/api-rest-express-nodejs" target="_blank" rel="noreferrer"> 
                        API REST com NodeJS Express</a>, então recomendo ler e criar essa API antes de dar seguimento aqui.
                        </i>
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaNodeJs className="icon"/>
                        <h2>Sucrase</h2>
                    </div>
                    <p>
                        <span>
                            O <b>Sucrase</b> é responsável por fazer a transpilação do código, em outras palavras, ele "traduz" o código mais recente do 
                            <b> JavaScript</b>, para um padrão já suportado no <b>NodeJS</b>. Essa ferramenta é muito usada em ambiente de desenvolvimento e é uma ótima 
                            alternativa para substituir o <b>Babel</b>.
                        </span>
                    </p>

                    <p>
                        <span>
                            Mas o que ele "traduz" afinal? A resposta é bem ampla, mas basicamente algumas features que ainda não estão disponíveis nativamente 
                            no <b> NodeJS</b>, como por exemplo <b>import / export</b>, <b>async await</b>, declaração de variáveis por <b>let</b> e etc.
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <FaPlay className="icon"/>
                        <h2>Porque usar?</h2>
                    </div>

                    <p>
                        <span>
                            O Sucrase torna compátivel a sintaxe do <b>BACKEND</b> com a do <b>FRONTEND</b> e facilita o trabalho dos desenvolvedores 
                            <b> FULLSTACK</b> além de ser mais rápido para transpilar o código do que o <b>Babel</b>.
                        </span>
                    </p>

                    <img className="medium" src="https://www.memenews.com.br/wp-content/uploads/2019/11/meme-2-14-11-19.gif" alt="AQUICONHECE"/>
                </Text>

                <Text>
                    <div>
                        <FaDownload className="icon"/>
                        <h2>Como usar o Sucrase</h2>
                    </div>

                    <p>
                        <span>
                            Então vamos ao que interessa! Para começar, vamos abrir a API que criamos no post 
                            <a href="/backend/api-rest-express-nodejs" target="_blank" rel="noreferrer"> API REST com NodeJS Express</a> no editor de texto 
                            de sua preferência, eu estou usando o <b>Visual Studio Code</b> porque gosto da facilidade do terminal integrado dele.
                        </span>
                    </p>

                    <p>
                        <span>
                            O próximo passo é instalar o <b>Sucrase</b> como uma dependencia de desenvolvimento, para isso, basta abrir o terminal na 
                            pasta do seu projeto e rodar o código: 
                        </span>
                    </p>
                    
                    <Code>
                        <span><i>$</i> yarn add sucrase -D</span>
                    </Code>

                    <span>ou</span>

                    <Code>
                        <span><i>$</i> npm install sucrase --dev</span>
                    </Code>

                    <p>
                        <span>
                            Após executar o comando ele irá instalar o sucrase como uma dependência de desenvolvimento no seu projeto, se nenhum erro ocorrer 
                            durante a instalação o seu <b>package.json</b> deverá aparecer as <b>devDependencies</b>, como no código abaixo.
                        </span>
                    </p>

                    <Code>
                        <span>"devDependencies": {`{`}</span>
                        <span>&emsp;"sucrase": "^3.16.0"</span>
                        <span>{`{`}</span>
                    </Code>
                    <span>
                        O texto "^3.16.0" é referente à versão de instalação, mas não se apegue ao número que está no seu <b>package.json</b> pois a dependencia 
                        pode ter atualizado várias até o dia que você está lendo este post.
                    </span>

                    <p>
                        <span>
                            Agora você precisa fazer uma última configuração antes de começar a usar o sucrase no seu projeto. Você precisa ir até a raiz do seu 
                            projeto e criar um arquivo <b>nodemon.json</b>. Este arquivo será responsável por configurar o <b>Sucrase</b> no <b>Nodemon</b> que 
                            é uma dependencia que foi instalada nem nossa API para reiniciar automaticamente nosso servidor assim que alguma atualização seja 
                            salva.
                        </span>
                    </p>

                    <p>
                        <span>
                            Com o arquivo criado, é necessário adicionar o seguinte código dentro do arquivo:
                        </span>
                    </p>

                    <Code>
                        <span>{`{`}</span>
                        <span>&emsp;"execMap":{`{`}</span>
                        <span>&emsp;&emsp;"js": "sucrase-node"</span>
                        <span>&emsp;{`}`}</span>
                        <span>{`}`}</span>
                    </Code>

                    <p>
                        <span>
                            O <b>execMap</b> é uma opção que substitui a flag --exec e permite que você especifique os binários em um arquivo <b>JSON </b> 
                            para determinadas extensões de arquivos, no exemplo usaremos o <b>sucrase-node</b> em todas extesões <b>.js</b>.
                        </span>
                    </p>

                    <p>
                        <span>
                            Feito isso você está pronto para usar o <b>ES6</b> em nossa API, ou seja, poderá usar <b>import from</b> no lugar do <b>require</b> 
                            ,<b> export</b> no lugar de <b>module.exports</b>, <b>let</b> no lugar de <b>var</b>, <b>async / await</b> no lugar das 
                            <b> funções de callback</b>, <b> desestruturação</b> e outras várias funcionalidades do ES6.
                        </span>
                    </p>
                </Text>

                <Text>
                    <p>
                        <span>Para vocês visualizem como é a aplicação do ES6 em algo já pronto, o repositório abaixo contém a API modificada 
                            para o ES6 <FaGrinBeamSweat className="icon"/>
                        </span>
                    </p>
                </Text>

                <Repo onClick={() => window.open('https://github.com/dennergazevedo/api-with-sucrase-nodejs')}>
                    <FaGithub className="icon" />
                    <div>
                        <span className="font">BAIXE AQUI</span>
                        <span>CÓDIGO FONTE DA API USANDO SUCRASE</span>
                    </div>
                </Repo>

                <Text>
                    <p>
                        <span>E ai, ainda prefere o modo raiz? Eu não. hahaha</span>
                    </p>
                    <p>
                        <span>Espero que se adapte a este novo código, pois teremos vários posts seguindo este padrão em breve.</span>
                    </p>
                    <span>Aí uma dica: 'Seja como uma esponja e absorva tudo que puder.'</span>
                    <p>
                        <span><b>Até breve! </b> <FaHeart className="icon" /></span>
                    </p>

                    <img className="small" src='https://media.tenor.com/images/2ec83aeeb2e9244a2131dab14fdb910e/tenor.gif' alt="BOBESPONJA" />
                </Text>
                <CardDenner />
            </Body>
            <Footer />
        </Container>
    )
}
