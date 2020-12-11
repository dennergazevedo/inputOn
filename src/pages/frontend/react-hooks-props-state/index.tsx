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

const TemplateDnr: React.FC = () => {

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - ReactHooks, Props e States</title>
                <link rel="canonical" href="https://www.inputon.com.br/ux-ui-design" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <Imagem src='https://i.imgur.com/mclcMEJ.png' alt="HooksPropsState" />
                    <div className="titleRight">
                        <TitleText>ReactJS - Hooks, Props e States</TitleText>
                        <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
                            <span>por <b>Denner Azevedo</b></span>
                        </CreatedBy>
                        <Date><FaBookmark className="icon"/> POSTADO EM 07/11/2020</Date>
                        <MenuIcon>
                            <span>FRONTEND</span>
                        </MenuIcon>
                    </div>
                </Title>
                <Text>
                    <p>
                        <span>
                            Hoje vamos desvendar 3 coisas que são fundamentais para desenvolvimento em <b>React</b>:
                            <b> Hooks, estados e propriedades.</b>
                        </span>
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaReact className="icon"/>
                        <h2>ReactHooks</h2>
                    </div>
                    <p>
                        <span>
                            Desde a introdução de classes à sintaxe do <b>JavaScript</b>, o React fez das classes a principal forma de 
                            se criar um <b>Componente</b> com estado e ciclo de vida. Apesar de cumprir o propósito o uso de classes 
                            possui algumas desvantagens, como por exemplo o funcionamento do <b>this</b> que é muito pouco intuitivo. Além 
                            do acesso aos ciclos de vida de componentes serem bem restritos à métodos especiais, como <b>componentDidMount </b>
                            por exemplo.
                        </span>
                    </p>

                    <p>
                        <span>
                            Com a chegada da versão <b>16.8</b> o React adotou os <b>Hooks</b> que é uma alternativa para criação de componentes 
                            em formato de uma função, com estados internos e com acesso próprio ao ciclo de vida de uma forma mais direta e limpa.
                        </span>
                    </p>
                    
                    <h3>
                        Exemplo de componente com <b>Classe:</b>
                    </h3>

                    <img src="https://i.imgur.com/0mmfsxM.png" alt="classExample" className="medium"/>

                    <h3>Exemplo de componente com <b>Hooks:</b></h3>

                    <img id="hooksExample" src="https://i.imgur.com/sRjb11D.png" alt="classExample" className="medium"/>

                    <p>
                        <span>
                            Os dois códigos acima fazem a "mesma coisa" e como vocês podem ver, o código com <b>Hooks</b> é muito menor 
                            e direto do que a criação de uma classe para renderizar tudo. Mas além do componente acima, usamos um outro 
                            <b> Hook</b> que é o <b>useState</b> que é o hook responsável por controlar os estados da aplicação.
                        </span>
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaFileSignature className="icon"/>
                        <h2>Estados</h2>
                    </div>
                    <p>
                        <span>
                            De forma simples o <b>'estado'</b> é um dado que varia durante o tempo de execução da aplicação. Essa mudança 
                            de valor pode, ou não, ser feita pelo usuário. Pode ser óbvio mas um exemplo seria um e-mail que o usuário 
                            preenche em um formulário, ou até mesmo uma resposta de uma requisição <b>http</b> para ser renderizado na tela.
                        </span>
                    </p>

                    <p>
                        <span>
                            Na imagem do <a href="#hooksExample">Hooks</a> acima, usamos o <b>Estado</b> para controlar a quantidade de vezes 
                            que o usuário clicou no botão 'Adicionar' por exemplo. Os estados no <b>ReactHooks</b> são controlados pelo 
                            <b> Hook </b> do próprio <b>React</b>, o <b>useState</b> que é feito de dois itens no exemplo acima, 
                            <b> count</b> e <b>setCount </b> onde <b>count</b> é o seu estado e o <b>setCount</b> a função responsável por 
                            alterar o estado. A declaração é feita como no código abaixo:
                        </span>
                    </p>

                    <Code>
                        <span>const [exemplo, setExemplo] = useState();</span>
                    </Code>
                </Text>

                <Text>
                    <div>
                        <FaTelegramPlane className="icon"/>
                        <h2>Propriedades (props)</h2>
                    </div>
                    <p>
                        <span>
                            As <b>props</b> são propriedades que são passadas de um componente para outro, do 'Pai' para o 'Filho', essas 
                            props podem ser um estados do componente pai que serão compartilhados com filho, porém ela não é um estado, 
                            pois ela é utilizada apenas para tráfego de informação entre componentes.
                        </span>
                    </p>

                    <p>
                        <span>
                            Uma props é passada de um componente pai para o filho da seguinte forma:
                        </span>
                    </p>

                    <img src="https://i.imgur.com/ghYZRfo.png" alt="propspai" className="medium" />

                    <span>E é usada pelo componente filho da seguinte forma:</span>
                    <img src="https://i.imgur.com/3cEbEhK.png" alt="propspai" className="medium" />

                    <span>Neste caso o componente filho renderizaria em um <b>span</b> a string <b>inputOn.</b></span>
                </Text>

                <Text>
                    <div>
                        <GrUpdate className="icon"/>
                        <h2>useEffect (extra)</h2>
                    </div>
                    <p>
                        <span>
                            Esse é um <b>Hook</b> do <b>React</b> que também é muito útil, pois ele substitui os métodos especias como
                            <b> componentDidMount, componentDidUpdate, componentWillUnmount </b> por exemplo.
                        </span>
                    </p>

                    <p>
                        <span>
                            O useEffect é uma função que recebe dois parâmetros, o primeiro é uma <b>Arrow Function</b> que pode 
                            modificar alguma coisa na aplicação, como por exemplo executar uma função, ou alterar um estado, o segundo 
                            parâmetro é um array que mostra para o <b>useEffect</b> quem ele deve 'vigiar' para que execute 
                            quando esse item for atualizado, por exemplo:
                        </span>
                    </p>

                    <img src="https://i.imgur.com/MPq3r4t.png" alt="useEffectMount" className="medium" />
                    <span>
                        Dessa forma o <b>console.log</b> é executado assim que a pagina é montada, note que o segundo parâmetro que 
                        é um array vazio.
                    </span>

                    <img src="https://i.imgur.com/bn49BWG.png" alt="useEffectCount" className="medium" />
                    <span>
                        Aqui o <b>console.log</b> é executado assim que o estado <b>count</b> for modificado, note que o segundo parâmetro 
                        é um array contendo o estado count, para que todas as vezes que o count seja atualizado, o console.log seja 
                        executado. <b>Obs.:</b> Neste caso o <b>useEffect</b> também é executado na primeira atribuição de valor do <b>count.</b>
                    </span>

                    <img src="https://i.imgur.com/4UkoUON.png" alt="useEffectProps" className="medium" />
                    <span>
                        Este é um exemplo apenas para mostrar que as <b>props</b> também podem ser observadas pelo <b>useEffect</b> e a 
                        utilização de um objeto.
                    </span>
                </Text>

                <Text>
                    <p>
                        <span>
                            Cada um dos temas abordados no post é de extrema importância para o desenvolvimento em <b>React</b>, dessa forma
                            sugiro que você dê uma lida aprofundada em cada um deles e use sua criatividade para solucionar os problemas 
                            que enfrentamos no dia a dia do desenvolvimento.
                        </span>
                    </p>
                </Text>

                <Text>
                    <h3>
                        Deu para entender um pouco mais sobre os Hooks, estados, props e como são usados?
                    </h3>
                    <h3>
                        Espero ter clareado um pouco o início da sua caminhada, até a próxima!
                    </h3>
                </Text>

                <Text>
                    <img src="https://i.imgur.com/H7PioG6.gif" alt="HOMER" className="small"/>
                </Text>

                <CardDenner />
                
            </Body>
            <Footer />
        </Container>
    )
}

export default TemplateDnr;