import React from 'react'

// COMPONENTS
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CardPedro from '../../../components/CardPedro'

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
} from './styles.js'

// ICONS
import {
  FaLightbulb,
  FaStopwatch,
  FaBookmark,
  FaServer,
  FaQuestion,
  FaCheck,
} from 'react-icons/fa'

export default function UXUI() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>InputOn - APIs, REST e RESTful.</title>
        <link rel="canonical" href="https://www.inputon.com.br/ux-ui-design" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Body>
        <Title>
          <Imagem src="https://i.imgur.com/1ORqPM9.png" alt="API REST" />
          <div className="titleRight">
            <TitleText>Um pouco sobre APIs, REST e RESTful.</TitleText>
            <CreatedBy onClick={() => navigate(`/author/pedro-vasconcellos`)}>
              <span>
                por <b>Pedro Vasconcellos</b>
              </span>
            </CreatedBy>
            <Date>
              <FaBookmark className="icon" /> POSTADO EM 1/12/2020
            </Date>
            <MenuIcon>
              <span>BACKEND</span>
            </MenuIcon>
          </div>
        </Title>
        <Text>
          <div>
            <FaLightbulb className="icon" />
            <h2>INTRODUÇÃO</h2>
          </div>
          <p>
            <span>
              Foi com a criação da <b>World Wide Web</b>, por Roy Fielding, e os
              posteriores protocolos de comunicação HTTP, que se descobriu o
              verdadeiro potencial da internet.
            </span>
          </p>

          <p>
            <span>
              A <b>World Wide Web</b> é praticamente toda a internet como
              conhecemos hoje, mas não foi sempre assim. A internet foi
              desenvolvida primeiramente apenas como uma rede global de
              computadores interligados utilizando de um conjunto próprio de
              protocolos. <i>(é um papo pra se aprofundar em outro post xD)</i>.
              Já o <b>HTTP</b>{' '}
              <i>
                (Hypertext Transfer Protocol, ou Protocolo de Trasferência de
                Hipertexto)
              </i>
              , como o nome sugere, é um protocolo de transferência de dados que
              define as <b>regras/principios</b> para troca de informações entre
              aplicações e clientes, através de requisições e respostas. Dentro
              do HTTP temos os chamados "verbos", que são os métodos servidos
              por esse protocolo. Temos, entre eles, o{' '}
              <b>GET, POST, PUT, PATCH e DELETE</b>. Estes são os mais usados,
              mas não são os únicos. Em breve teremos um post falando mais sobre
              o HTTP.
            </span>
          </p>

          <p>
            <span>
              A partir daí, tornou-se problemático para os desenvolvedores
              conseguirem, de forma eficaz, permitir essa comunicação (podendo
              ser entre 2 aplicações, por exemplo). Sendo assim, foram surgindo
              ao longos dos anos diversas alternativas e formas de se realizar
              essa comunicação, que posteriormente foram denominadas <b>API</b>
              's. Essas APIs tinham um funcionamento básico: fornecer um ponto
              de acesso entre o sistema (aplicação) e seu cliente
              (usuário/aplicação).
            </span>
          </p>

          <p>
            <FaStopwatch className="icon" />
            <span className="time">TEMPO MÉDIO DE LEITURA: 5 MINUTOS.</span>
          </p>
        </Text>
        <Text>
          <div>
            <FaServer className="icon" />
            <h2>O que é uma API?</h2>
          </div>
          <p>
            <span>
              De forma simples: Uma API utiliza dos verbos HTTP para realizar{' '}
              <b>requisições</b> e enviar <b>respostas</b>, afim de permitir o
              consumo de dados de uma certa aplicação.
            </span>
          </p>

          <p>
            <span>
              Significa <b>Application Programming Interface</b>, ou{' '}
              <b>Interface de Programação de Aplicações</b> e nada mais é que um
              software regido de um conjunto de <b>padrões</b> e{' '}
              <b>instruções</b> para servir dados à um cliente. É uma forma de
              conseguir utilizar informações de uma dada aplicação, sem conhecer
              a fundo seus detalhes de implementação.
            </span>
          </p>

          <p>
            Existem diversos tipos e classificações de APIs, como públicas,
            privadas, web, locais, entre outras. O nosso foco hoje é nas Web
            APIs, utilizando o padrão REST que já vai ser falado.
          </p>

          <p>
            <span>
              Aqui vão os "significados" dos verbos HTTP citados na introdução,
              e que são utilizados pelas Web APIs:
            </span>
          </p>

          <p>
            <span>
              <li>
                <b>GET</b>: obtém dados do servidor em questão;
              </li>
              <li>
                <b>POST</b>: cria novos dados no servidor;
              </li>
              <li>
                <b>PUT</b>: atualiza (de forma completa) dados já existentes;
              </li>
              <li>
                <b>PATCH</b>: atualiza (de forma parcial) dados já existentes;
              </li>
              <li>
                <b>DELETE</b>: remove dados no servidor;
              </li>
            </span>
          </p>

          <br />
          <br />

          <div>
            <FaQuestion className="icon" />
            <h2>E o que seria esse padrão REST?</h2>
          </div>

          <p>
            <b>REST</b> é uma arquitetura de desenvolvimento de APIs que dita um
            conjunto de restrições para o uso dos protocolos de requisição e
            resposta do HTTP.
          </p>

          <p>
            Significa <b>Representational State Transfer</b>, ou{' '}
            <b>Transferência de Estado Representacional</b> e não é, como muitos
            acham, um protocolo de comunicação, mas sim um conjunto de
            princípios arquiteturais. E pra já retirar a dúvida de muitos: A
            única diferença entre os termos REST e <b>RESTful</b> é que REST é o
            conjunto de regras, enquanto <b>RESTful</b> é aquele serviço que
            consegue aplicar essas regras.
          </p>

          <p>Deixo abaixo as restrições dadas pela arquitetura REST:</p>

          <p>
            <li>
              <b>client-server (cliente-servidor)</b>: é a restrição mais
              básica. O objetivo geral é separar as responsabilidades de uma
              aplicação, deixando a preocupação de regras de negócio, acesso ao
              banco de dadose etc. com o backend (servidor), enquanto a parte de
              interface, UI e UX (e tem um post do Denner falando sobre isso
              aqui.) com o frontend (cliente). Basicamente, o cliente envia uma
              requisição ao servidor (request), ele trata essa requisição e
              retorna uma resposta ao cliente (response).
            </li>
            <br />
            <li>
              <b>stateless (sem estado)</b>: ressalta a importância da
              indepedência das requisições. O servidor não deve guardar nenhum
              estado, tornando cada requisição http única e suficientemente
              completa. O estado deve ser guardado no lado do cliente
              (frontend).
            </li>
            <br />
            <li>
              <b>cacheable ("cacheável")</b>: uma resposta (response) deve
              dizer, mesmo que implicitamente, se a informação pode ou não ser
              guardada em cache. Esse cache deverá ser salvo e mantido pelo
              cliente.
            </li>
            <br />
            <li>
              <b>interface uniforme</b>: este, por sua vez, é um principio
              definido por algumas restrições (com o objetivo de deixar o
              componente mais simples e mais fácil de, posteriormente, ser
              refatorado):
            </li>
            <div style={{ flexDirection: 'column', marginLeft: '80px' }}>
              <ul>
                <li>
                  <b>Identificar os recursos</b>: URI única, que permite a
                  identificação do recurso acessado;
                </li>
                <li>
                  <b>Representação dos recursos</b>: Forma com que a resposta
                  será devolvida ao cliente (podendo ser um HTML, XML, JSON,
                  entre muitas outras);
                </li>
                <li>
                  <b>Resposta auto-descritivas</b>: a necessidade de metadados
                  nas requisições e respostas, afim de melhor identificar o
                  recurso;
                </li>
                <li>
                  <b>Hypermedia</b>: muito pouco utilizado, dita a necessidade
                  de uma resposta possuir também um hiperlink, que permite a
                  quem está consumindo a API navegar pelos recursos;
                </li>
                <li>
                  <b>Sistema de camadas</b>: diz que a aplicação deve ser
                  construida em camadas, garantindo a escalabilidade da
                  aplicação;
                </li>
              </ul>
            </div>
            <li>
              <b>Code-On-Demand</b>: é um principio opcional, então vou deixar
              passar este;
            </li>
          </p>

          <p>
            Existe também uma escala chamada <b>Richardson Maturity Model</b>,
            que define níveis de maturidade para APIs serem consideradas
            RESTful, além de seguir estritamente os principios acima. Não
            entrarei em muitos detalhes para o post não virar um livro, mas essa
            escala é definida em níveis, sendo que para atingir um nível de
            maturidade acima é necessário ter passado pelos níveis anteriores.
            Você pode ler mais sobre essa escala{' '}
            <a href="https://martinfowler.com/articles/richardsonMaturityModel.html">
              aqui
            </a>
            .
          </p>
        </Text>

        <Text>
          <div>
            <FaCheck className="icon" />
            <h2>Conclusão</h2>
          </div>
          <p>
            Vimos que o padrão REST para desenvolver Web APIs é escalável,
            organizado e fácil. E o que separa uma API REST de se tornar RESTful
            são apenas alguns princípios não tão complexos de serem aplicados.
            Em breve falaremos sobre o formato JSON, utilizado nas respostas
            enviadas pela aplicação, e como é uma ótima (e leve) forma de
            entregar dados.
          </p>

          <p>Até a próxima!</p>
        </Text>

        <CardPedro />
      </Body>
      <Footer />
    </Container>
  )
}
