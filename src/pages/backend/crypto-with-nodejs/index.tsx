import React from 'react'

// COMPONENTS
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CardDenner from '../../../components/CardDenner'

// SERVICES
import { navigate } from 'gatsby'

// STYLES GLOBAL
import { GlobalStyle } from '../../../styles/global'
import { Helmet } from 'react-helmet'

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
  Repo,
} from './styles'

// ICONS
import {
  FaCode,
  FaBookmark,
  FaLock,
  FaDownload,
  FaPalette,
} from 'react-icons/fa'
import {
    AiFillGithub,
} from 'react-icons/ai'
import {
    VscSymbolVariable
} from 'react-icons/vsc';

const CryptoNodeJS: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>InputOn - Crypto no NodeJS.</title>
        <link rel="canonical" href="https://www.inputon.com.br/backend/crypto-with-nodejs" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Body>
        <Title>
          <Imagem src="https://i.imgur.com/v6lOdcO.png" alt="CRYPTO NO NODEJS" />
          <div className="titleRight">
            <TitleText>Criptografia no NodeJS com Crypto.</TitleText>
            <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
              <span>
                por <b>Denner Azevedo</b>
              </span>
            </CreatedBy>
            <Date>
              <FaBookmark className="icon" /> POSTADO EM 13/12/2020
            </Date>
            <MenuIcon>
              <span>BACKEND</span>
            </MenuIcon>
          </div>
        </Title>

        <Text>
          <p>
              <span>
                Esse é um assunto que chama a atenção da maioria das pessoas que tem algum interesse em tecnologia. A criptografia está cada vez mais 
                popular devido a necessidade de ter <b>segurança</b> nos dados que trafegam pela rede. Parece ser um assunto surreal e algo que está longe de ser 
                compreendido por você jovem instalador(a) de Windows 7.
              </span>
          </p>

          <p>
              <span>
                  Porém não é bem assim, o conceito de criptografia é bem básico e consiste apenas em uma técnica de comunicação segura, que pode ser feita 
                  na presença de terceiros sem o entendimento do mesmo, em outras palavras, falar em código com alguém que saiba o código.
              </span>
          </p>

          <p>
              <span>
                  Se você como eu, já foi um adolescente que falava a lingua do P, que basicamente colocava uma letra <b>P</b> na frente de todas as sílabas 
                  para que alguém que não soubesse não conseguisse entendesse nada? Então, essa era uma forma simples<i>(BEM SIMPLES)</i> de criptografia.
                  <br/>
                  <b>p</b>Tá <b>p</b>co<b>p</b>me<b>p</b>çan<b>p</b>do <b>p</b>a <b>p</b>en<b>p</b>ten<b>p</b>der?
              </span>
          </p>

          <p>
              <span>
                  Claro que não é esse tipo de criptografia que é usada na internet, existem várias ferramentas e vários algoritmos usados atualmente para 
                  realizar essas criptografias e no post de hoje vamos falar da ferramenta do <b>NodeJS</b> o <b>Crypto</b>.
              </span>
          </p>
        </Text>

        <Text>
          <div>
            <FaLock className="icon" />
            <h2>Crypto</h2>
          </div>
          <p>
            <span>
              Com esse módulo de <b>NodeJS</b> conseguimos selecionar um tipo de algoritmo de encriptação e criptografar algum dado<i>(ou vários)</i> de nossa 
              aplicação de forma fácil e rápida e descriptografar com a mesma facilidade, se você souber a senha que foi usada para gerar o <b>Hash</b>.
            </span>
          </p>

          <p>
            <span>
              Hash é o nome que normalmente é dado para a string criptografada. A sua aparência pode variar bastante de acordo com o algoritmo que foi usado 
              para gerar ela o a senha que foi usada para descriptografar.
            </span>
          </p>
          </Text>

          <Text>
            <div>
                <FaCode className="icon" />
                <h2>Como gerar um Hash com o Crypto?</h2>
            </div>
            <p>
                <span>
                    A primeira coisa é decidir qual será o algoritmo que será usado para encriptar, existem vários e podem ser encontradas junto com a 
                    <a href="https://nodejs.org/api/crypto.html" target="_blank" rel="noreferrer"> Documentação do Crypto</a>. Neste exemplo iremos usar o 
                    algoritmo <b>AES</b><i>(Advanced Encryption Standard)</i> que possuem 3 tamanhos de chaves, iremos usar a de <b>128bits</b>, mas existem 
                    de <b>192bits</b> e <b>256bits</b> que geram um <b>hash</b> ainda maior.
                </span>
            </p>
            <p>
                <span>
                    O <b>Crypto</b> é um pacote do <b>NodeJS</b>, então caso seja um projeto NodeJS como nossa API que iremos usar de exemplo, não é necessário 
                    instalar nada além do próprio <b>NodeJS</b>.
                </span>
            </p>

            <p>
                <span>
                    Caso você não sabe o que é uma <b>API</b> ou não tem uma de fácil acesso para testar nosso código, recomendo que leia nosso post: 
                    <a href="https://inputon.com.br/backend/sucrase-with-nodejs" target="_blank" rel="noreferrer"> Usando Sucrase no NodeJS. </a>
                    <br />No fim do post tem o link para o repositório contendo a API pronta.
                </span>
            </p>

            <p>
                <span>
                    Então vamos ao que interessa, o primeiro passo é importar a lib do <b>Crypto</b> para o arquivo que será usada. Neste caso iremos importar 
                    para o arquivo <b>src/routes/index.js</b> e para importar basta inserir o código abaixo logo após a importação do <b>Router()</b>:
                </span>
            </p>
            <Code>
                <span>import crypto from 'crypto';</span>
            </Code>
            <p>
                <span>
                    O <b>Crypto</b> possui várias ferramentas de criptografia mas não iremos nos aprofundar, todas ferramentas estão disponíveis na documentação 
                    da lib em seu site oficial: <a href="https://nodejs.org/api/crypto.html" target="_blank" rel="noreferrer">NodeJS - Crypto</a>.
                </span>
            </p>
            <p>
                <span>
                    Iremos usar apenas o <b>createCipher</b> e o <b>createDecipher</b> para criptografar e descriptografar respectivamente.
                </span>
            </p>
            <p>
                <span>
                    O código para criptografar é bem simples, mas antes precisamos ter 3 coisas:
                </span>
            </p>

            <p>
                <span>
                    <b>• SecretKey:</b> Sua senha que será usada para criptografar e descriptografar futuramente, recomendo que você salve essa senha no arquivo 
                    <b>.env</b> que ensinamos a usar no post anterior.
                </span>
            </p>

            <p>
                <span>
                    <b>• Algoritm:</b> Qual algoritmo que será usado para gerar o seu <b>HASH</b>, como disse existem vários, mas vamos usar o <b>aes-128-cbc</b>
                </span>
            </p>

            <p>
                <span>
                    <b>• Texto:</b> Texto que será criptografado.
                </span>
            </p>

            <p>
                <span>
                    Exemplo:
                </span>
            </p>

            <img src="https://i.imgur.com/RMVzcPC.png" alt="secret" className="medium"/>

            <p>
                <span>
                    Para criptografar basta usar a função <b>createCipher</b>, como o exemplo abaixo:
                </span>
            </p>

            <img src="https://i.imgur.com/qi5ed8H.png" alt="cipher" className="medium"/>

            <p>
                <span>
                    Na primeira linha do código, criamos uma instância do <b>createCipher</b> com sua secretKey e qual algoritmo ele irá usar, na segunda linha 
                    temos a função <b>update</b> da instância que criamos, essa função retorna um <b>BUFFER</b>, passamos para ela qual será a string, 
                    qual formato está essa string atualmente e qual será o formato do BUFFER retornado, por fim na última linha do código, transformamos o 
                    <b> Buffer</b> gerado em um código HEX.
                </span>
            </p>

            <p>
                <span>
                    Se você der um <b>console.log</b> na variável <b>stringcrypto</b> você irá receber algo como:
                </span>
            </p>

            <Code>
                <span>7e2b668b3ddb5ef784eeb46b6e78b78ec498e805a8d495b938588e56eee73c25</span>
            </Code>

            <p>
                <span>
                    Pronto, sua string está criptografada e pode ser passada na presença de terceiros, como por exemplo no parâmetro de uma rota no navegador 
                    do usuário, e sim, aquelas rotas gigantescas que você vê completamente aleatória podem ser apenas um <b>ID = 2</b>.
                </span>
            </p>

            <img src="https://media1.tenor.com/images/73aa230512a68a4ec48b3a9d690666e2/tenor.gif?itemid=17213218" alt="tapeado" className="small" />

        </Text>

        <Text>
            <div>
                <FaCode className="icon" />
                <h2>Como descriptografar um Hash?</h2>
            </div>

            <p>
                <span>
                    A ideia para descriptografar é a mesma da do <b>createCipher</b>, porém criaremos uma instância do <b>createDecipher</b> no lugar, esse 
                    exemplo é fácil de entender apenas olhando:
                </span>
            </p>

            <img src="https://i.imgur.com/tnByV4k.png" alt="decipher" className="medium" />

            <p>
                <span>
                    Espertinho que você é, você percebeu que na segunda linha passamos a string que criptografamos anteriormente e passamos que está no formato 
                    <b> HEX</b> no segundo parâmetro e no fim queremos voltar ela para <b>UTF-8</b>. Pronto, sua string já está descriptografada.
                </span>
            </p>

            <p>
                <span>
                    Se der um <b>console.log</b> na variável <b>decriptstr</b> irá retornar a sua variável <b>text</b> que foi usada para gerar o hash da 
                    instância do <b>createCipher</b>.
                </span>
            </p>

            <p>
                <span>
                    Essa é uma lib muito poderosa do <b>NodeJS</b> e merece que você leia ela com bastante carinho futuramente para ficar ainda mais por dentro 
                    da criptografia no <b>NodeJS</b>.
                </span>
            </p>

            <p>
                <span>
                    Agora, pra ver se seu código está <b>decriptando</b> com sucesso, vai um <b>Hash</b> para teste:
                </span>
            </p>

            <Code>
                <span>
                    475106ef7cef01ba83e3621afdd9759d74d2b8aeb54fc3b2ee5d6acdda4989222222bf588ee2aafbdb66c7355c404b5b5fe10293f55300992f6330dec6e27eaa
                </span>
            </Code>

            <p>
                <span>
                    Não conta pra ninguem que a senha é <b>inputon</b> em!!
                </span>
            </p>
        </Text>

        <Text>
            <span>
                <b>Da hora esse tema né? Abre um monte de possibilidades para seus projetos.</b>
            </span>            
            <span>
                <b>Espero ver muitos hashs por ai agora, até a próxima.</b>
            </span>            
        </Text>

        <Text>
            <img src="https://miro.medium.com/max/3200/1*L_QoAG863l8QvqxpNyBiqw.gif" alt="GIF" className="medium"/>
        </Text>


        <CardDenner />
      </Body>
      <Footer />
    </Container>
  )
}

export default CryptoNodeJS;