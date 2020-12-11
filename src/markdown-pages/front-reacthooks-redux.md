---
slug: '/frontend/reacthooks-redux'
date: '2020-12-10'
title: 'React Hooks - Redux + Redux-Saga + Persist'
---

  
Fala cabuloso(a), já formatou o dual core da sua tia? Se sim ta liberado pra ler esse post quase tão bom quanto uma sexta-feira, o assunto à primeira vista pode parecer um pouco complexo, mas esse post está na medida pra você que ta iniciando!

# 💡INTRODUÇÃO

Vamos falar hoje do **REDUX** + **REDUX-SAGA** + **PERSIST**  no React Hooks, mas antes de começar precisamos definir o que são essas ferramentas e quando vamos usar elas.

Se você não sabe do React Hooks, recomendo que dê uma olhada no post [ReactJS - Hooks, Props e States](https://inputon.com.br/frontend/react-hooks-props-state), pois nesse post não vamos falar sobre Hooks.
  

## 🔑 REDUX
**Redux** nada mais é que uma biblioteca para armazenamento de estados para aplicação. Bom mas porque usar o Redux, se você já aprendeu a usar o **useState** do React? Na verdade o Redux mantém o "todos estados" da aplicação centralizados em um único lugar, isso facilita bastante a leitura do código e saber da onde estão vindos os estados, pois faz com que não precisamos ficar passando **props** para componentes muitos níveis abaixo, tornando mais complicado de saber a origem real de algumas **props*, além de deixar o código muito mais verboso. Mas quando digo "todos estados", não são realmente todos, são aqueles que serão utilizados na árvore de componentes, ou seja, em vários componentes.

## 🔑 REDUX-SAGA
  Aqui as coisas começam a ficar ainda mais interessantes no **REDUX**, pois o Redux Saga permite executar funções quando uma **action** *(Calma, vou explicar)* é disparada, com essa ferramenta, além dos **estados** da aplicação, podemos centralizar toda regra de negócio da arvore de componentes dentro de um só local. Por exemplo, podemos ter um módulo de autenticação com todas regras de negócio dentro, como chamadas à **API**, armazenamento de informações do login *(Evite dados sensíveis)*, carrinho de compras e etc.

Abrindo a porta para o uso de **DDD** *(Domain-Driven Design)*, uma filosofia de desenvolvimento que separa a aplicação por **funcionalidades** e não apenas por **componentes**.

## 🔑 PERSIST
Agora sim a ferramenta está completa, o **PERSIST** permite que nossos estados fiquem salvos no **Local Storage** do navegador, fazendo com que você possa compartilhar as informações do **Redux** entre rotas diferentes, um exemplo básico é o carrinho de compras, navegando entre páginas ou atualizando a página não podemos perder informações do carrinho, o Persist está aqui para resolver este problema.

## 🧾 NOMENCLATURAS E SIGNIFICADO
<br/>

## ACTIONS

Objetos que são usados para realizar uma ação dentro do **REDUX**, Actions podem ser disparadas pela própria aplicação *(Como no fim de uma execução de um vídeo no Youtube)* ou pelo usuário *(No ato de fazer login por exemplo)*.

A Action possui sempre uma propriedade  `type`  **única** que é utilizada pelo Redux para distinguir qual ação foi disparada, além do `type`, podemos mandar outros itens dentro do objeto, é uma boa prática manter essas informações dentro de uma propriedade com o nome de `payload`.

Ainda pensando na Action podemos usar uma situação de autenticação em uma aplicação para exemplificar, podemos separa a autenticação em **3 Actions**: `AUTH_REQUEST`, `AUTH_SUCCESS`, `AUTH_FAILED`.
	- `AUTH_REQUEST` seria disparada pelo usuário quando clicou no botão de **login**, enviando um objeto com nome de `payload` com `email` e `password`.
	- `AUTH_SUCCESS` seria disparada pelo sistema caso os dados do usuário estivessem corretos.
	- `AUTH_FAILED` seria disparada pelo sistema caso os dados estivessem errados ou inexistentes.

**OBS.:** Com o redux-saga podemos executar funções em durante este processo, por exemplo, disparar um **Toast** de logado com sucesso ou falha no login, ou até mesmo enviar um e-mail avisando ao usuário dono da conta que sua conta tentou ser acessada em caso de `AUTH_FAILED`.
  
## REDUCER

Responsável por criar um `INITIAL_STATE` do redux e modificar esse estado durante a execução da aplicação, geralmente usamos o **switch** para localizar a `action-type` disparada.

`DRAFT` - "Instância" do estado redux, por aqui iremos modificar o estado global durante a execução da aplicação.
`INITIAL_STATE` - Estado inicial do estado global.

## 🤤 QUANDO USAR?
Achei o Redux incrível e vou usar ele em todas as minhas aplicações, estados globais hoje, estados globais amanhã, estados globais sempre. Calma meu amigo(a), não é bem assim, a centralização de estados parece algo bem interessante, mas nem sempre é necessário o uso do Redux, pois a configuração inicial do Redux é um pouco chata, principalmente se você quer apenas centralizar os estados globais, pois pode ser feito com um **CONTEXTO**, uma opção para isso é a **ContextAPI** que é muito mais simples de configurar.

O Redux também pode ser utilizado apenas em parte da aplicação, então estude um pouco mais sobre a utilização do Redux para não usar ele sem necessidade, afinal não precisamos de um trator para matar uma barata né? Ou precisamos? 🚜
  

## 🔥 BORA CODAR
Se você chegou até aqui sem pular nada, você está bem próximo de entender o funcionamento do **REDUX**, para você entender de vez só precisa ver o código funcionando, então vamos lá!

Para facilitar o entendimento, estou deixando um repositório completamente comentado e configurado com o **REDUX** + **REDUX-SAGA** + **PERSIST**, então o primeiro passo é fazer o download do repositório para ter a aplicação em mãos.

<div>
<h3>
<a href="https://github.com/dennergazevedo/reacthooks-redux" target="_blank" rel="noreferrer">

[REPOSITÓRIO] REACTHOOKS + REDUX
</a>
</h3>
</div>

O primeiro passo é a criação de uma **STORE**, essa pasta é onde fica todas as configurações do **REDUX**, incluindo nosso `ESTADO GLOBAL`, `SAGAS`, `REDUCER`.

A a pasta `store` deve ter essa estrutura:
<div>

![TYPING GIF](https://i.imgur.com/31N1TAH.png)
</div>

## ./index.js

O código começa com algumas importações, começando com o **persist**:
```
import storage from  'redux-persist/lib/storage';
import { persistStore, persistReducer } from  'redux-persist';
```
Depois importamos o **react-saga**
```
import createSagaMiddleware from  'redux-saga';
import createStore from  './createStore';
```
Note que a importação do **createStore** vem de um arquivo que está na raiz. Vamos ignorar por enquanto, mas daqui a pouco explico o motivo.

Agora chegamos nos imports dos **Roots**
```
import rootReducer from  './modules/rootReducer';
import rootSaga from  './modules/rootSaga';
```
**Roots** nos permite ter mais de um módulo na aplicação, por exemplo, ter 3 módulos: `AUTH`, `USER`, `MAIL`. Basicamente ter um **Reducer** e uma **Saga** para cada um dos módulos, a importação do módulo e a chamada do módulo estão nos arquivos que usei para importar acima, não vou me aprofundar muito aqui, mas acessando estes arquivos estão comentados e de fácil entendimento.


Agora precisamos configurar o **REDUX**, a primeira configuração são das **middlewares**, podem ter várias, mas neste exemplos usaremos apenas a **sagaMiddleware**
```
const  sagaMiddleware  =  createSagaMiddleware();
const  middlewares=[sagaMiddleware];
```
A função **createSagaMiddleware()** é responsável por criar uma "instância" da **SAGA**

O próximo passo é configurar o **STORAGE** do **PERSIST**, aqui vamos configurar o nome *(key)* do nosso storage e também qual **storage** será utilizado, neste caso usaremos o **storage** importado do `redux-persist/lib/storage`, que nada mais é que o **Local Storage** do navegador.

Fica assim a configuração:
```
const  persistConfig  = {
	key:  'inputOn',
	storage,
}
```
Seguindo no código temos:
```
const  persistedReducer  =  persistReducer (persistConfig, rootReducer);
```
A função **persistReducer** recebem dois parâmetros, o de configuração e o **combineReducers** do nosso **rootReducer** que como mencionado anteriormente, permite usar mais de um reducer. Essa função retorna um **REDUCER ENHANCER**, que usaremos para criar nossa Store.

Criando a Store:
```
const  store  =  createStore (persistedReducer, middlewares);
```
Chegou a hora de entender o que tem dentro do arquivo que importamos para o **createStore**. 

Abrindo o arquivo **createStore.js** dentro da pasta **store** você irá ver o seguinte código:

```
import { createStore, applyMiddleware } from  'redux';
export  default (reducers, middlewares) => {
	const  enhancer  =  applyMiddleware (...middlewares);
	return  createStore(reducers, enhancer);
};
```
O arquivo tem o nome da função do **redux**, mas se criássemos diretamente, não iriamos conseguir adicionar as **middlewares** que configuramos *(que no caso foi apenas as SAGAS)*.

No arquivo exportamos uma **arrow function** por default que recebem dois parâmetros, o primeiro são os reducers, que no caso são os **RootReducers**, pois a ideia é trabalhar com mais de um. O segundo parâmetro são justamente as **middlewares** *(nossa "instância" da SAGA)*.

Após isso usamos a função **applyMiddleware** para retornar um **ENHANCER** com nossas middlewares, feito isso, criamos nossa Store com os reducers e o enhancer gerado.

De volta ao **store/index.js** notamos que a chamada dele passou exatamente os parâmetros mencionados acima:

```
const  store  =  createStore (persistedReducer, middlewares);
```

Agora vamos mostrar qual **store** o **PERSIST** deve armazenar no local storage e executar nosso **rootSaga** com a "intância" do **sagaMiddleware** que criamos:
```
const  persistor  =  persistStore(store); 
sagaMiddleware.run (rootSaga);
```

Por fim exportamos um objeto contendo dois itens, nosso **store** e o **persistor**.
```
export { store , persistor };
```

Bom, já foi bastante coisa até aqui, se você ainda continua lendo o post é merecedor, depois te mando um depo no Orkut. ✌🏽
<br />

Agora para dar sequência nós precisamos configurar nossos **PROVIDERS** que serão responsáveis de passar os **estados** por toda aplicação.

Vamos acessar o arquivo **App.js** na raiz do projeto e fazer os seguintes imports logo após os *ROUTES*, se você baixou o repositório acima já está configurado:

```
import { PersistGate } from  'redux-persist /integration/react';
import { Provider } from  'react-redux';
import { store, persistor } from  './store';
```
**PersistGate** é o provider do *redux-persist* e o **Provider** é o provider do *react-redux*, por fim nossos dois carinhas importados anteriormente.

Para finalizar a configuração no **App.js** basta colocar o PersistGate por fora de tudo, e o Provider por fora do PersistGate, pro PersistGate passo a **props** `persistor={persistor}` e para o Provider `store={store}`. O código final deve estar assim:

```
<Provider  store={store}>
	<PersistGate  persistor={persistor}>
		<GlobalStyles  />
		<Router  history={history}>
			<Routes  />
		</Router>
	</PersistGate>
</Provider>
```


## CONFIGURANDO UM MÓDULO

Nosso módulo vai se chamar **post** e caso você tenha baixado o repositório, essa parte também já estará configurada.

## 📌 ACTIONS
Actions nada mais são do que funções que retornam um **TYPE ÚNICO NA APLICAÇÃO** e um **payload** que é um objeto contendo as informações que você precisa, no nosso caso o título do post. Exemplo:

```
export function addPostRequest(title){
	return{
		type: '@post/ ADD_POST_REQUEST',
		payload:{ title },
	};
}
```
Note que usei o nome da type como: *@post/ADD_POST_REQUEST*, me acostumei a colocar o @nomedomódulo antes de todas minhas actions, pois facilita a leitura do código, apesar de que separo os módulos por pastas.

É importante saber que uma action que será disparada para gerar todo fluxo de alterações dentro do *redux*, essa action que será importada no nosso *FRONTEND* posteriormente.

Se você baixou o repositório, deixei criada além dessa action, mais quatro actions para fazer um fluxo na nossa aplicação.

## 📌 SAGAS
Sagas nada mais são do que uma *generator function* por isso usamos o * após a palavra **function**, mas porque usar function*? Pois a function* é uma ferramenta muito poderosa quando combinado com programação assíncrona e além disso, não é executada imediatamente, ao invés disso, o objeto iterador é retornado, o **yield**.

Se eu ainda não te convenci a baixar o repositório, anda logo.

Vamos ignorar por enquanto as importações das actions e vamos direto para o fim do arquivo onde temos um **export default** com um array, contendo o seguinte código:
```
takeLatest('@post /ADD_POST_REQUEST', adicionarNewPostTitle),
takeLatest('@post /CLEAN_POST_REQUEST', cleanPost),
```
O **takeLatest** é responsável por executar a função do segundo parâmetro, quando o **type** é igual ao da action disparada.

Estamos quase no fim do funcionamento do **REDUX**, mas não se preocupe, no fim do post irei simular uma chamada e rastrear o passo a passo, isso irá clarear a sua mente bastante. (*funcionou comigo*)

## 📌 REDUCER
O Reducer é uma função que recebem dois parâmetros, o estado inicial (ou atual) e a action disparada e retorna uma função contendo dois parâmetros: **state** e **draft**.

O **state** é o estado atual ou inicial do Redux e o **draft** é a "instância" do estado, por onde conseguimos modificar o estado atual.

Usamos o **SWITCH** para percorrer as actions e verificar o **type** de cada uma delas, em caso de **true** em algum dos **case**, é executado o código dentro do bloco do mesmo, usamos esse bloco para editar o state, como o exemplo abaixo:
```
case  "@post/ ADD_POST_SUCCESS":{
	draft.data  = [...state.data, action.payload.title];
	break;
}
```
**Obs.:** usei [...state.data, action.payload.title] pois quero manter todo estado atual + o título dentro do payload.

E FINALMEEEEEENTE.
## 📌 USANDO O REDUX NO FRONTEND
Deixei um exemplo prontinho no arquivo **src/views/Homepage/index.jsx**, mas vamos ver quais foram os passos, o primeiro, claro, precisamos fazer algumas importações:

```
import { useSelector, useDispatch } from  'react-redux';
```
<br />

**useSelector** é usado para buscar o estado do redux, como no exemplo abaixo:
```
const  posts  =  useSelector(state  =>  state.post.data);
```
Onde buscamos o estado **data** do meu módulo **post**.
<br />

**useDispatch** é usado disparar uma action, mas antes precisamos importar elas:
```
import { addPostRequest, cleanPostRequest } from  '../../store/ modules/post/actions';
```
Quando for necessário, disparamos uma action assim:
```
dispatch (addPostRequest (postAdd));
```
Perceba que não passamos para o dispatch o **type** e sim o nome da função referente à action desejada.

<br/>
<br/>

**DICA LEGAL**
Tenho o costume de separar o conteúdo de uma **ACTION**/**SAGA** em três actions, uma *REQUEST*, uma *SUCCESS* e uma *FAILED*, sendo a *REQUEST* na maioria das vezes disparado pelo usuário, mas ela também pode ser disparada pela aplicação, como por exemplo no caso de um player de vídeo acabar de finalizar na página. Já o *SUCCESS* e o *FAILED* são disparados sempre pela aplicação, imitando o funcionamento do **try/catch** e **then/catch**.
<br/>
<br/>

Basicamente assim que funciona o **REDUX + SAGAS + PERSIST**, caso queira ver o funcionamento, deixei a aplicação configurada para um exemplo, bastar abrir a pasta do repositório no seu terminal e rodar:

```
yarn && yarn start
```
ou
```
npm install && npm start
```
<br/>

## 🚩 RASTREANDO O FUNCIONAMENTO DO REDUX
Para usar o Redux o primeiro passo é disparar uma **ACTION**, considerando que você tem todo código do repositório configurado, a action é disparada pelo botão **ADICIONAR POST** enviando o texto do *Input* para a action.

A Action é disparada dentro da função **handleAddPost** pelo dispatch:
```
dispatch (addPostRequest (postAdd));
```

No arquivo **store/modules/post/actions.js** temos a função **addPostRequest** que possui o **type** *@post/ADD_POST_REQUEST* e recebe o payload { title }.

Todas as vezes que uma action for disparada a função **all** no export default da **SAGA** será disparado, o **takeLatest** irá ver qual **type** foi disparado e executará a função do segundo parâmetro, neste caso a função **adicionarNewPostTitle**.

Essa função usa o **yield** e a função **put** para disparar outra **ACTION** antes da função executar, neste exemplo a função disparada foi a **addPost**.

No nosso arquivo **actions** temos a função **addPost** que possui a **type** *@post/ADD_POST_SUCCESS*, voltando na **SAGA** você percebe que não temos um **takeLatest** referente à essa **type** e você está certo, pois dessa vez a action não foi para uma saga e sim para um **reducer**.

Um de nossos **case** do **reducer.js** possui a **type** *@post/ADD_POST_SUCCESS* com isso executa o bloco de comando deste **case**, dentro do bloco temos o **draft.data** que é nosso state que pode ser modificado.

Com o código:
```
draft.data  = [...state.data, action.payload.title];
```
Eu salvo **todo estado antigo** + **payload.title**.

Pronto, nenhuma action mais foi disparada, editamos nosso estado e agora na tela está exibindo o conteúdo do módulo **post** usando o **useSelector** para armazenar o estado em uma variável.

Esse foi um baita conteúdo mas tenho certeza que será bem útil para você, por falar nisso, ta dormindo ai não né?

<div>

![TYPING GIF](https://64.media.tumblr.com/d4b2c666fbe19ee35377f7e495b1cbcb/tumblr_o0qp3wUgA91ujc8y9o1_250.gif)
</div>

**Não pare por aqui, leia documentações, treine o inglês e me segue nas redes sociais, é nois.**