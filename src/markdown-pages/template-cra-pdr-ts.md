---
slug: '/frontend/template-cra-pdr-typescript'
date: '2020-12-08'
title: 'CRA - Template na medida - Versão TypeScript'
---

# 💡Introdução

E ai deeev. Comé que cê tá? Tudo de boas???  
Seguindo a ideia do camara [**Denner Azevedo**](https://inputon.com.br/author/denner-azevedo) de criar um template CRA, também criei a minha versão para **TypeScript**. A intenção é facilitar a inicialização de projetos evitando configurar algumas coisas mais básicas, como _EditorConfig_, _ESLint_ e _Prettier_, entre outros...
<br />
<br />

Se você tá meio perdido e não sabe bulhufas do que estou falando, corre [no post do Denner](https://inputon.com.br/frontend/template-cra-dnr), é coisa de 2 minutos e vai te deixar mais por dentro do assunto xD.
<br />
<br />

## ⚙️ Configurações

Nesse template, deixei configurado algumas coisinhas:

- [**_ESLint_**](https://eslint.org/) e [**_Prettier_**](https://prettier.io/) _(padrão Airbnb)_: Um combo de um linter ("organizador"/padronizador) com um formatador que, juntos, vão agilizar muito seu desenvolvimento.

- **_EditorConfig_**: pra manter o código padronizado entre diferentes IDEs.

- **_React Hooks_**: Tá prontinho, no jeito de você usar os hooks do React da melhor forma!

- **_Router_**: Rotas já configuradas com o React Router Dom. Basta criar sua página e adicioná-la nas rotas!

- **_History_**: Gerenciador de histórico do react router dom.

- **_Netlify_**: já tá configurado pronto pro deploy no Netlify

- **_Home_** & **_Error_** pages: Páginas de exemplo já configuradinhas, inclusive uma página de erro (not-found) :D.

- **_React Icons_**: Pacote de ícones muito bom para React.

- **_Styled Components_**: _Chega de arquivos **.css**_. Tem esse facilitador ai que ajuda demaaaaaaais a estilizar as páginas. É um arquivo .ts, então permite uso de JypeScript puro. Ou seja, você tem todo o poder do JavaScript dentro da parte de estilizações, da pra personalizar todos os seus componentes. É um absurdo de bom!!!
  E se por algum motivo você desejar muito usar o css puro, é só fazer da forma tradicional!

- **_Roboto Slab_**: Uma fonte que eu gosto de usar e a deixei no projeto. :D

## 🔥 Utilização do template

O template foi [_publicado no NPM_](https://www.npmjs.com/package/cra-template-pdr-ts-inputon) pra facilitar sua utilização.
Pra utilizá-lo, vá até algum diretório desejado. E para criar seu projeto, use o comando abaixo:

```
  npx create-react-app seu-projeto --template pdr-ts-inputon
```

ou, caso utilize o **Yarn** _(que eu recomendo)_:

```
  yarn create react-app seu-projeto --template pdr-ts-inputon
```

Acesse a pasta do projeto e, para inicializá-lo, utilize o script _Start_ padrão:

```
  cd seu-projeto
  npm start
```

ou

```
  cd seu-projeto
  yarn start
```

Nos próximos capítulos, vamos falar um pouquinho mais afundo sobre nosso querido _TypeScript_...

**Que o template seja útil e ajude no seu desenvolvimento!** 🙏🏽

<div>

  ![TYPING GIF](https://media0.giphy.com/media/1C8bHHJturSx2/giphy.gif?cid=ecf05e47127h5hbe6wqj47l5ub8dodf56cmripy0rh24r9g5&rid=giphy.gif)
</div>
