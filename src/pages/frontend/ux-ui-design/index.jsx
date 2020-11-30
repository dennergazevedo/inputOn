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
    Text
} from './styles.js'

// ICONS
import {
    FaLightbulb,
    FaStopwatch,
    FaClock,
    FaLocationArrow,
    FaTimes,
    FaExclamation,
    FaHandHoldingHeart
} from 'react-icons/fa';

export default function UXUI() {

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - UX e UI design</title>
                <link rel="canonical" href="https://www.inputon.com.br/ux-ui-design" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <Imagem src='https://i.imgur.com/xyorwuR.png' alt="UX/UI Design" />
                    <div className="titleRight">
                        <TitleText>UX e UI design: entenda finalmente.</TitleText>
                        <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
                            <span>por <b>Denner Azevedo</b></span>
                        </CreatedBy>
                        <MenuIcon>
                            <span>FRONTEND</span>
                        </MenuIcon>
                    </div>
                </Title>
                <Text>
                    <div>
                        <FaLightbulb className="icon"/>
                        <h2>INTRODUÇÃO</h2>
                    </div>
                    <p>
                        <span>O design desempenha um papel essencial para o sucesso de qualquer estratégia de Marketing, seja digital ou não.</span>
                    </p>

                    <p>
                        <span>A questão é que nem todos conseguem notar esta necessidade e muitas vezes não sabem como usar tal ferramenta na estratégia digital
                            da empresa.
                        </span>
                    </p>

                    <p>
                        <span>Mas quando bem usado, ferramentas como essas podem ser poderosas para que sua empresa, mesmo que pequena seja notada. Não é atoa 
                            que empresas gigantes no mundo inteiro se preocupam tanto com os mínimos detalhes de seu marketing, isso inclui a construção 
                            com uma interface agradável para seus clientes.
                        </span>
                    </p>

                    <p>
                        <span>Mas o maior problema é, como usar isso nos meus projetos? Vamos explicar detalhes que irão clarear suas ideias sobre &nbsp;
                            <b>UI e UX design</b>.
                        </span>
                    </p>
                    
                    <p>
                        <FaStopwatch className="icon"/>
                        <span className="time">TEMPO MÉDIO DE LEITURA: 3 MINUTOS.</span>
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaClock className="icon"/>
                        <h2>O que é UX Design?</h2>
                    </div>
                    <p>
                        <span>O termo <b>UX</b> vem de <b>User eXperience</b> <i>(Experiência do Usuário)</i>. Se trata, basicamente, de como será a 
                        experiência de um usuário antes, durante e depois de consumir algum serviço digital que sua empresa oferece, mesmo que 
                        o seu negócio não seja 100% digital.
                        </span>
                    </p>
                    
                    <h3>
                        Qual o papel do UX design no Marketing Digital?
                    </h3>

                    <p>Garantir uma boa experiência do seu usuário, um passo fundamental é que ele continue interessado até que consuma o seu produto. 
                        Dado o fato de que ele acessou o seu conteúdo digital, é importante também que ele siga interessado. Ai que entra o UX design.
                    </p>

                    <p>Imagine que você possui um e-commerce e seu cliente precisa de entrar em contato com um vendedor, ele procura uma maneira de 
                        entrar em contato por 10 minutos, quando encontra o formulário é por e-mail e pode demorar até 2 dias para ter um retorno, isso 
                        quando o formulário encontra-se defeituoso.
                    </p>

                    <p>Na verdade é que em um caso destes, mesmo ele tendo conseguido o contato após muita procura, a sua disposição de continuar já não é mais 
                        a mesma, pode acabar se frustrando ou desistindo do processo antes mesmo do contato.
                    </p>

                    <p>Em outras palavras, <b>UX design</b> é responsável por gerar uma boa experiência ao usuário, fazendo com que 
                        encontre o que precisa rápido, fácil e com uma aparência e funcionamento agradável.
                    </p>
                </Text>
                <Text>
                    <div>
                        <FaLocationArrow className="icon"/>
                        <h2>O que é UI Design?</h2>
                    </div>
                    <p>
                        <span><b>UI design</b> é uma expressão derivada de <b>User Interface</b> <i>(Interface do Usuário)</i> e é responsável por 
                        guiar o usuário pela sua aplicação durante o tempo que se manter online.
                        </span>
                    </p>

                    <p>
                        <span>Vamos usar um exemplo para simplificar o entendimento.</span>
                    </p>

                    <p>
                        <span>Assim que o usuário entra em seu site, sua aplicação deve levar ele onde ele quer baseado no link que ele acessou. Se 
                            você fez um anuncio sobre um produto <b>Y</b> a página deve facilitar para que o cliente conheça o produto e consiga um contato 
                            de forma rápida sobre o produto que ele clicou.
                        </span>
                    </p>

                    <h3>
                        Qual o papel do UI design no Marketing Digital?
                    </h3>

                    <p>
                        <span>Se o seu site não guiar o usuário da forma correta, ou até mesmo dificultar as ações do usuário, este canal de vendas torna-se 
                            inútil, pois seu cliente dificilmente irá pelo caminho certo sem ajuda e isso o fará frustrado.
                        </span>
                    </p>

                    <p>
                        <span>Você já visitou sites onde não encontravam informações importantes como propostas de valores ou até mesmo o botão de contato?
                            Isso é um exemplo de <b>UI</b> mal construído. E isso pode levar seu cliente a procurar um concorrente no&nbsp;
                            <a href="https://www.google.com" target="_blank" rel="noreferrer">Google</a> e encontrando o que precisa.
                        </span>
                    </p>

                    <p>
                        <span>Então <b>UI</b> e <b>UX</b> são a mesma coisa? Errado! São ligados, pois uma navegação ruim torna difícil tornar a experiência 
                        do usuário em uma boa experiência.
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <FaTimes className="icon"/>
                        <h2>3 dicas fundamentais de UX e UI design</h2>
                    </div>
                    <p>
                        <span>Essas 3 dicas vão deixar mais claras a diferença dos dois e entender bem cada um deles.
                        </span>
                    </p>
                    <h3>
                        <b>1</b> - UI só existe no FRONTEND.
                    </h3>
                    <p>
                        <span>
                            Como o próprio nome diz, a <b>Interface do Usuário</b> tem a ver com as construção visual do seu site ou aplicativo.
                            <b>Sem uma tela, o UI não existe.</b> Já o <b>UX design</b>, em alguns casos não tem haver diretamente com a tela e sim com o 
                            funcionamento do seu site/aplicativo.
                        </span>
                    </p>
                    <h3>
                        <b>2</b> - UI são as pernas, UX o coração.
                    </h3>
                    <p>
                        <span>
                            Enquanto o <b>UI</b> guia seu usuário ára que ele saiba o que fazer, o papel do UX é tornar agradável a navegação do usuário.
                        </span>
                    </p>
                    <p>
                        <span>
                            Tome muito cuidado, o site mais lindo do mundo não vai tornar a experiência do usuário agradável se ele não encontrar o que 
                            procura e da maneira que espera.
                        </span>
                    </p>

                    <h3>
                        <b>3</b> - Conheça seu público alvo.
                    </h3>
                    <p>
                        <span>
                            Vamos novamente com um exemplo para entender melhor esta terceira dica:
                        </span>
                    </p>
                    <p>
                        <span>
                            Você tem um e-commerce que vende produtos para cegos, como bengalas, coleiras para cachorros guia e etc. Se você fizer o site pensando 
                            em pessoas com uma boa visão, você estará ignorando tudo que conversamos acima. O site precisa ser agradável a todos, mas principalmente 
                            ao seu público alvo.
                        </span>
                    </p>
                </Text>

                <Text>
                    <div>
                        <FaExclamation className="icon"/>
                        <h2>Porque devo usar UI e UX design em conjunto?</h2>
                    </div>
                    <p>
                        <span>Você já deve ter notado o valor de ambas partes para o sucesso de uma estratégia digital, mas qual devo usar? Qual a melhor 
                            opção, <b>UX design</b> ou <b>UI design</b>?
                        </span>
                    </p>
                    <p>
                        <span>A responsta é simples, os dois! Cada um tem uma função importante e o conjunto pode ser uma ferramenta fundamental para o sucesso 
                            de sua marca na internet.
                        </span>
                    </p>
                    <p>
                        <span>A interface bem projetada e conhecimento sobre seu público alvo e como ele se comporta pode fazer com que você converta muito 
                            mais clientes, mesmo que não seja de imediato, se o trabalho de <b>UI</b> e <b>UX</b> for bem feito, a chance de seu cliente voltar 
                            é grande.
                        </span>
                    </p>

                    <p>
                        <span>Preocupar com seus clientes e com a experiência que ele vai ter na sua plataforma fortalece sua marca em relação aos seus 
                            concorrentes. Digitalmente falando, a concorrência é sempre ampla, você não pode dar a opção de seu cliente procurar outros locais 
                            pois ele vai encontrar o que precisa. Seja direto, dê atenção e lembre-se, menos é mais! ;)
                        </span>
                    </p>
                </Text>

                <Text>
                    <h3>
                        E ai, gostou desse post?
                    </h3>
                    <h3>
                        Espero que tenha levado este conhecimento consigo hoje e não se esqueça da gente. <FaHandHoldingHeart className="icon"/>
                    </h3>
                </Text>

                <CardDenner />
                
            </Body>
            <Footer />
        </Container>
    )
}
