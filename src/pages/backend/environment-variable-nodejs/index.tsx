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
  FaLightbulb,
  FaBookmark,
  FaHandPeace,
  FaDownload,
  FaPalette,
} from 'react-icons/fa'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineInstagram,
} from 'react-icons/ai'
import {
    VscSymbolVariable
} from 'react-icons/vsc';

const EnvVariable: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>InputOn - .ENV no NodeJS.</title>
        <link rel="canonical" href="https://www.inputon.com.br/ux-ui-design" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Body>
        <Title>
          <Imagem src="https://i.imgur.com/3OWpAB5.png" alt="API REST" />
          <div className="titleRight">
            <TitleText>Como gerenciar Variáveis de Ambiente no NodeJS.</TitleText>
            <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
              <span>
                por <b>Denner Azevedo</b>
              </span>
            </CreatedBy>
            <Date>
              <FaBookmark className="icon" /> POSTADO EM 12/12/2020
            </Date>
            <MenuIcon>
              <span>BACKEND</span>
            </MenuIcon>
          </div>
        </Title>
        <Text>
          <p>
            <span>
             Buenos díaas hermanos(as)! Hoje vamos aprender a gerenciar as variáveis de ambiente em uma aplicação NodeJS.
            </span>
          </p>

          <p>
            <span>
             Mas antes de começar precisamos saber de 3 coisas <b>MUITO</b> importantes. A primeira é que você precisa interagir comigo nas redes sociais, 
             prometo mandar um depoimento no <b>Orkut</b> pra vocês que <i>"Conheço a poouco teempo, mas consideero pakáas! <FaHandPeace className="icon"/>".</i>
            </span>
          </p>

          <p style={{alignSelf:'center'}}>
            <AiFillGithub className="social" onClick={() => window.open('https://github.com/dennergazevedo')} />
            <AiFillLinkedin className="social" onClick={() => window.open('https://www.linkedin.com/in/denner-azevedo-6b7b97199/')} />
            <AiOutlineInstagram className="social" onClick={() => window.open('https://www.instagram.com/dennergazevedo/')} />
          </p>

          <p>
              <span>
                  A segunda coisa é saber o que é uma <b>Variável de Ambiente</b> e a terceira e não menos importante <i>(Talvez a mais importante, tirando 
                      a rede social, claro)</i>, como usar essas variáveis em nossa aplicação.
              </span>
          </p>
        </Text>

        <Text>
          <div>
            <FaLightbulb className="icon" />
            <h2>Introdução</h2>
          </div>
          <p>
            <span>
              Uma <b>Variável de Ambiente</b> é um "atalho" visível pelo NodeJS que irá buscar por ela quando precisar dessa informação. Essa variável é útil 
              para salvar várias coisas importantes como por exemplo informações de acesso do Banco de Dados, chaves de API's, Secret Keys dentre outras 
              informações de configurações necessárias.
            </span>
          </p>

          <p>
            <span>
              Como você ja deve ter percebido, essas informações ficam soltas na sua aplicação, cada uma dessas informações precisam estar em um arquivo 
              diferente e se você usa o GitHub por exemplo, essa informação ficará de fácil acesso para todos que acessarem os seus repositórios <i>(a menos 
              que deixe seus repositórios privados, o que não recomendo).</i> Além disso algumas chaves de acesso são extremamente grandes e aleatórias, imagina 
              ter que procurar por elas todas as vezes que for precisar usa-lás, é inviável e vai atrasar o seu desenvolvimento.
            </span>
          </p>

          <p>
            <span>
              As <b>Variáveis de Ambiente</b> vieram para resolver problemas como estes citados, hoje vamos aprender como controlar essas variáveis no <b>NodeJS </b>
              usando o pacote <b>dotenv</b>.
            </span>
          </p>
          </Text>

          <Text id="keys">
            <div>
                <VscSymbolVariable className="icon" />
                <h2>dotenv</h2>
            </div>
            <p>
                Ferramenta utilizada para gerenciar as <b>Variáveis de Ambiente</b> de um projeto. O nome deste pacote é bem sugestivo, já que no inglês a palavra 
                "dot" significa "ponto" e o nome do arquivo que iremos criar para armazenar essas variáveis é <b>.env</b> e ele é composto de chaves e valores, 
                como o exemplo abaixo:
            </p>
            <Code>
                <span>API_VERSION:1.0.0</span>
                <span>API_URL=http://api.inputon.com.br/</span>
                <br/>
                <span><i># CONFIG MYSQL</i></span>
                <span>DB_NAME=inputon</span>
                <span>DB_PASS=$%123#@456()</span>
            </Code>
            <p>
                <span>
                Sobre o arquivo <b>.env</b>:
                </span>
            </p>
            <span className="spanItem">&emsp;&emsp;• Normalmente as chaves são usas em <b>CAIXA ALTA</b>, mas não é regra;</span>
            <span className="spanItem">&emsp;&emsp;• Os valores sempre serão retornados no formato de uma <b>STRING</b>;</span>
            <span className="spanItem">&emsp;&emsp;• Não é possível usar espaços;</span>
            <span className="spanItem">&emsp;&emsp;• É possível ter uma chave sem valor, retornando uma string vazia;</span>
            <span className="spanItem">&emsp;&emsp;• Essas chaves podem ser acessadas pelo NodeJS, logo também podem ser acessadas por Hackers.<i>Mas você pode criptografar, vlw flw</i></span>
            <p>
                <span>
                    Agora, antes de aprender como usar essa ferramenta, precisamos ter uma aplicação para implementar ela, como exemplo irei usar uma API que usamos em 
                    um post anterior já usando a sintaxe do <b>ES6</b> com o <b>Sucrase</b>, se você ainda não tem essa API aqui está o link para o repositório 
                    com todo código dela:
                </span>
            </p>
        </Text>

        <Repo onClick={() => window.open('https://github.com/dennergazevedo/api-with-sucrase-nodejs')}>
            <AiFillGithub className="icon" />
            <div>
                <span className="font">BAIXE AQUI</span>
                <span>CÓDIGO FONTE DA API REST</span>
            </div>
        </Repo>

        <Text>
            <p>
                <span>
                    Mas se você não sabe o que é uma <b>API REST</b> ou nem sabe como criar uma, recomendo que leia este post antes de continuar:
                    <a href="https://inputon.com.br/backend/api-rest-express-nodejs/" target="_blank" rel="inputOn">Criando uma API REST com NodeJS Express.</a>
                </span>
            </p>
        </Text>

        <Text>
            <div>
                <FaDownload className="icon" />
                <h2>Instalação + Inicialização</h2>
            </div>
            <p>
                <span>
                    A instalação do <b>DOTENV</b> pode ser feita pelo <b>NPM</b> ou <b>YARN</b>, para isso, basta abrir a pasta raiz da sua aplicação no 
                    seu terminal e executar o comando abaixo:
                </span>
            </p>
            <Code>
                <span>yarn add dotenv</span>
            </Code>
            <span>ou</span>
            <Code>
                <span>npm install dotenv</span>
            </Code>
            <p>
                <span>O gerenciador de pacotes irá cuidar do restante.</span>
            </p>

            <p>
                <span>
                    Agora vamos abrir a nossa aplicação no editor de sua preferência, no meu caso estou usando o <b>VisualStudio Code</b>, que à propósito agora 
                    temos um tema com a cara do nosso blog disponível para download no <b>Marketing Place</b> do VSCode.
                </span>
            </p>
        </Text>

        <Repo onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=DennerAzevedo.inputon-dark-theme')}>
            <FaPalette className="icon" />
            <div>
                <span className="font">BAIXE AQUI</span>
                <span>TEMA DARK INPUTON</span>
            </div>
        </Repo>

        <Text>
            <p>
                <span>
                    A configuração do <b>DOTENV</b> é bem simples, você só precisa fazer duas coisas, a primeira é importar o <b>"dotenv/config"</b> dentro 
                    de seu arquivo <b>server.js</b> que está na raiz da aplicação, para isso inserir abaixo da importação do <b>app</b> o seguinte código:
                </span>
            </p>
            <Code>
                <span>import 'dotenv/config';</span>
            </Code>
            <p>
                <span>Se você fez tudo certo, seu arquivo <b>server.js</b> agora deve estar assim:</span>
            </p>
            <img src="https://i.imgur.com/Y4Ld6sf.png" alt="SERVERJS" className="medium" />
            <p>
                <span>
                    O segundo e último passo é criar o arquivo <b>.env</b> dentro da pasta raiz da sua aplicação e inserir as chaves que você deseja dentro 
                    do arquivo usando a sintaxe como exemplificado <a href="#keys">acima</a>.
                </span>
            </p>
            <p>
                <span>
                    Para acessar o arquivo <b>.env</b> e pegar o valor armazenado na chave cadastrada é bem simples, existe uma variável global <b>process.env </b> 
                    que irá fazer o trabalho pra gente, vamos acessar a chave com a versão da API por exemplo.
                </span>
            </p>
            <p>
                <span>
                    Primeiro preciso cadastrar a chave <b>API_VERSION</b> no meu arquivo <b>.env</b> dessa forma:
                </span>
            </p>
            <Code>
                <span>API_VERSION=1.0.0</span>
            </Code>
            <p>
                <span>Agora é só acessar ela em qualquer lugar da aplicação usando o código abaixo:</span>
            </p>
            <Code>
                <span>process.env.API_VERSION</span>
            </Code>
            <p>
                <span>
                    Agora, espertinho que é, você pode usar o <b>.gitignore</b> para não enviar este arquivo para seu github e não deixar suas chaves expostas 
                    para quem acessar o seu repositório, sem precisar deixar seus projetos privados.
                </span>
            </p>
        </Text>
        <Text>
            <div>
                <FaDownload className="icon" />
                <h2>Dica</h2>
            </div>
            <p>
                <span>
                    Com o tempo você pode precisar limpar a sua máquina e perder o seu arquivo .env e com isso perder todas as suas chaves, então recomendo você 
                    fazer duas coisas para manter a integridade de seus projetos e não perder essas informações valiosas.
                </span>
            </p>
            <p>
                <span>
                    A primeira é criar um arquivo <b>.env.json</b> que irá para seu <b>Github</b> contendo um exemplo do seu arquivo <b>.env</b>, porém sem as suas 
                    chaves, apenas para que você saiba quais são as suas <b>Variáveis de Ambiente</b> do projeto. Como por exemplo:
                </span>
            </p>
            <img src="https://i.imgur.com/MT3r05m.png" alt="EXEMPLO" className="small" />
            <p>
                <span>
                    A segunda dica é salvar o arquivo <b>.env</b> em algum servidor de armazenamento, como por exemplo o <b>GoogleDrive</b> com um nome bem sugestivo 
                    e de fácil acesso. Eu por exemplo tenho uma pasta <b>.env</b> e dentro tenho os arquivos .env dos projetos, cada arquivo está nomeado com 
                    o nome do repositório a qual ele pertence, isso vai salvar você ainda!
                </span>
            </p>
            <p>
                <span>
                    Então é isso, o conteúdo é pequeno mas de enorme valor para sua aplicação e <b>GitHub</b>. Espero que este conteúdo seja útil para você 
                    nos seus próximos projetos <i>(Ou que use em projetos atuais)</i>.
                </span>
            </p>
            <p>
                <span>
                    Caso queira o código fonte da aplicação após a implementação do <b>dotenv</b>, está ai o repositório:
                </span>
            </p>
        </Text>
        <Repo onClick={() => window.open('https://github.com/dennergazevedo/apirest-exemple-dotenv')}>
            <AiFillGithub className="icon" />
            <div>
                <span className="font">BAIXE AQUI</span>
                <span>CÓDIGO DA APLICAÇÃO</span>
            </div>
        </Repo>

        <Text>
            <span>
                <b>Não esquece de interagir comigo nas redes sociais, ta valendo um DEPO!</b>
            </span>            
            <span>
                <b>Esse post me fez pensar no próximo conteúdo, qual será?</b>
            </span>            
        </Text>

        <Text>
            <img src="https://i.imgur.com/OiUlrDW.gif?1" alt="GIF" className="small"/>
        </Text>


        <CardDenner />
      </Body>
      <Footer />
    </Container>
  )
}

export default EnvVariable;