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
} from './styles'

// ICONS
import {
    FaReact,
    FaBookmark,
    FaFileSignature,
    FaTelegramPlane,
} from 'react-icons/fa';
import {
    GrUpdate
} from 'react-icons/gr';

// LOTTIE
import * as codeIcon from '../../../assets/json/mobile';
import * as installIcon from '../../../assets/json/install';
import * as usingIcon from '../../../assets/json/using';
import * as natalIcon from '../../../assets/json/natal';
import Lottie from 'react-lottie';

const TemplateDnr: React.FC = () => {

    const config = {
        url: 'https://www.inputon.com.br/frontend/react-lottie',
        identifier: 'react-lottie',
        title: 'Animações no ReactJS com React-Lottie'
    }

    const code = {
        loop: true,
        autoplay: true,
        animationData: codeIcon.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const natal = {
        loop: true,
        autoplay: true,
        animationData: natalIcon.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const using = {
        loop: true,
        autoplay: true,
        animationData: usingIcon.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const install = {
        loop: true,
        autoplay: true,
        animationData: installIcon.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Animações no ReactJS com React-Lottie</title>
                <link rel="canonical" href="https://www.inputon.com.br/frontend/react-lottie" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <Imagem src='https://i.imgur.com/XnJhlVJ.png' alt="HooksPropsState" />
                    <div className="titleRight">
                        <TitleText>Animações no ReactJS com React-Lottie</TitleText>
                        <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
                            <span>por <b>Denner Azevedo</b></span>
                        </CreatedBy>
                        <Date><FaBookmark className="icon"/> POSTADO EM 18/12/2020</Date>
                        <MenuIcon>
                            <span>FRONTEND</span>
                        </MenuIcon>
                    </div>
                </Title>
                <Text>
                    <p>
                        <span>
                            Fala dev bravo(a), tudo na paz? Hoje vamos conhecer o <b>React-Lottie</b>, uma ferramenta 
                            incrível para quem quer aprender a adicionar animações do <b>AfterEffects</b> no seu 
                            projeto <b>ReactJS</b>.
                        </span>
                    </p>

                    <p>
                        <span>
                            Se você não sabe usar o <b>AfterEffects</b> pode ficar tranquilo, além da ferramenta 
                            vou passar uma biblioteca com milhares de animações grátis para que você use sem nem 
                            precisar ter o <b>AfterEffects</b> instalado na sua máquina.
                        </span>
                    </p>
                </Text>
                <Text>
                    <div>
                        <Lottie options={code} width="50px" />
                        <h2>React Lottie</h2>
                    </div>
                    <p>
                        <span>
                            O <b>Lottie</b> foi criado pelo <b>Airbnb</b> e é uma biblioteca nativa do iOS, Android 
                            e React que renderiza animações em tempo real em aplicações nativas com a mesma facilidade 
                            de usar imagem estática.
                        </span>
                    </p>

                    <p>
                        <span>
                            Com uma instalação e implementação simples, se torna uma ótima opção para você que quer 
                            mudar a cara da sua aplicação e torná-la mais profissional e interativa.
                        </span>
                    </p>
                </Text>
                <Text>
                    <div>
                        <Lottie options={install} width="100px" />
                        <h2>Instalação</h2>
                    </div>
                    <p>
                        <span>
                            O processo de instalação é bem simples, essa solução foi publicada no <b>NPM</b> e 
                            para realizar a instalação basta você instalar o pacote em seu projeto. Para isso 
                            basta abrir a raiz do seu projeto no seu terminal e executar o seguinte comando:
                        </span>
                    </p>

                    <Code>
                        <span>yarn add react-lottie</span>
                    </Code>
                    <span>ou</span>
                    <Code>
                        <span>npm install react-lottie</span>
                    </Code>
                </Text>

                <Text>
                    <div>
                        <Lottie options={using} width="80px" />
                        <h2>Como usar</h2>
                    </div>
                    <p>
                        <span>
                            Por padrão o <b>Lottie</b> aceita arquivos de animação exportados em <b>JSON</b>, ou seja, 
                            se você for usar uma animação criada por você, no <b>AfterEffects</b> existe uma opção para 
                            salvar no formato JSON e é ela que iremos usar.
                        </span>
                    </p>

                    <p>
                        <span>
                            Mas como prometido, vou compartilhar com vocês o site 
                            <a href="lottiefiles.com/" target="_blank" rel="noreferrer"> LottieFiles</a> onde você pode
                            encontrar várias animações grátis para usar em seus projetos.
                        </span>
                    </p>

                    <p>
                        <span>
                            No <a href="lottiefiles.com/" target="_blank" rel="noreferrer">LottieFiles</a> você pode fazer 
                            download no formato JSON somente criando um cadastro <i>(Que pode ser pelo facebook)</i>. 
                            Abaixo um exemplo do botão de download:
                        </span>
                    </p>
                    
                    <img src="https://i.imgur.com/nyTkMdc.png" alt="LOTTIE DONWLOAD" className="small"/>

                    <p>
                        <span>
                            Após realizar o download o seu arquivo <b>JSON</b> você precisa salvar ele em uma pasta 
                            em seu projeto onde você terá acesso, eu tenho o costume de criar uma pasta 
                            <b> src/assets/json</b> e colocar os arquivos do <b>Lottie</b> nessa pasta.
                        </span>
                    </p>

                    <p>
                        <span>
                            Para usar precisamos importar o <b>ReactLottie</b> e o arquivo <b>JSON</b> baixados 
                            dentro do componente que iremos usar.
                        </span>
                    </p>
                    
                    <p>
                        <span>
                            A importação do <b>Lottie</b> é padrão como estamos acostumados a importar pacotes do NPM:
                        </span>
                    </p>

                    <Code>
                        <span>import Lottie from 'react-lottie';</span>
                    </Code>

                    <p>
                        <span>
                            Já o arquivo <b>JSON</b> é um pouquinho diferente, pois precisamos 
                            <b> importar tudo do JSON</b> que baixamos, ou seja, tudo que está como export 
                            dentro do nosso arquivo JSON será importado para variável desejada, para isso usamos 
                            o código:
                        </span>
                    </p>

                    <Code>
                        <span>import * as animation from '../assets/json/animation.json';</span>
                    </Code>
                    <span>Considerando o nome do arquivo como animation.json.</span>

                    <p>
                        <span>
                            O próximo passo é criar a variável de configuração para o <b>Lottie</b>, para isso 
                            iremos criar uma variável que irá armazenar um objeto com os seguintes atributos:
                        </span>
                    </p>
                    <Code>
                        <span>const animationConfig = {`{`} </span>
                        <span>&emsp;loop: true, </span>
                        <span>&emsp;autoplay: true,</span>
                        <span>&emsp;animationData: animation.default,</span>
                        <span>&emsp;rendererSettings: {`{`}</span>
                        <span>&emsp;&emsp;preserveAspectRatio: 'xMidYMid slice'</span>
                        <span>&emsp;{`}`}</span>
                        <span>{`}`}</span>
                    </Code>
                    <span>
                        <b>loop:</b> Variável responsável por definir se a animação irá repetir quando acabar.
                    </span>
                    <span>
                        <b>autoplay:</b> Irá definir se animação irá começar de forma automática, ou à partir de um 
                        evento, podendo ser um click ou execução de uma função.
                    </span>
                    <span>
                        <b>animationData:</b> Irá receber o <b>default</b> do <b>JSON</b> de animação que salvamos.
                    </span>
                    <span>
                        <b>rendererSettings:</b> Configurações extras de renderização, não irei entrar a fundo nesse 
                        tema pois é assunto para um outro post falando um pouco sobre imagens, svgs e etc. Usaremos 
                        <b> preserveAspectRatio: 'xMidYMid slice'</b> por padrão para manter a proporção da animação.
                    </span>
                    <p>
                        <span>
                            O último passo é usar o <b>Lottie</b> como um componente <b>React</b> para isso basta ir 
                            até onde você deseja colocar a sua animação e inserir o componente da seguinte forma:
                        </span>
                    </p>
                    <Code>
                        <span>{`<Lottie options={animationConfig} width="300px" />`}</span>
                    </Code>
                    <span><b>options:</b> Recebe nossa variável de configurações que criamos anteriormente.</span>
                    <span><b>width:</b> Recebe o tamanho horizontal que nossa animação irá ter. Note que não passamos 
                    o <b>height</b> isso pois em nossas configurações está para que a animação mantenha a proporção.
                    </span>
                    <span><b>height:</b> Recebe o tamanho vertical que nossa animação irá ter.</span>

                    <p>
                        <span>Se você seguiu todos os passos até aqui, sua animação será renderizada na tela:
                        </span>
                    </p>

                    <Lottie options={natal} width="300px" />
                </Text>

                <Text>
                    <h3>
                        Fala que essa dica não vai mudar a cara das suas aplicações?!
                    </h3>
                    <h3>
                        Não esquece de deixar um comentário e compartilhar com o amiguinho(a) dev, até a próxima!
                    </h3>
                </Text>

                <Text>
                    <img src="https://imgur.com/MHqVAvN.gif" alt="TOMBO" className="small"/>
                </Text>

                <CardDenner />
                <Comments config={config} />
            </Body>
            <Footer />
        </Container>
    )
}

export default TemplateDnr;