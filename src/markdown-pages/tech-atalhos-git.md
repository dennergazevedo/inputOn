---
slug: '/tech/atalhos-git'
date: '2020-12-14'
title: 'Git - Atalhos (Alias)'
---

Aí dev, hoje a dica é rápida! Abaixo você aprenderá como configurar seus _alias_, também conhecidos como atalhos do git.  
Basicamente, eles nos permitem configurar atalhos tanto de subcódigos do git, quanto de códigos externos à ele.  

---

## 🤏🏽 Command-line  

<br />

Inicialmente, podemos configurar um alias da seguinte forma:

```git
git config --global alias.atalho comando
```

```git
git config --global alias.cm commit
```

A partir de agora, se você usar **git cm -m "mensagem"** será equivalente ao **git commit -m "mensagem"**.

Para códigos externos, é só adicionar uma exclamação na frente do código, entre aspas:

```git
git config --global alias.ls '! ls'
```

Essas configurações serão aplicada ao arquivo **.gitconfig**. Esse arquivo fica geralmente localizado em **C:\Users\\$USER**, no Windows, e em **~/.gitconfig** no Linux.

Por ser menos visual, vou ensinar a realizar a configuração através de um editor de texto, ao invés de usar o terminal. É muito mais prático e organizado.

[Se você viu nosso post sobre Git e GitHub, você já configurou, pelo menos, seu usuário padrão no git. Se não, da uma olhadinha lá!](https://inputon.com.br/tech/resumo-git-github)

---

## ✍🏽 Editor  

<br />

Para começarmos, vá até o terminal e digite:

```git
git config --global --edit
```

A flag _**--global**_ indica que vamos editar o arquivo global. Ou seja, será aplicado à todos os repositórios.  
Já a flag (_**--edit**_) indica que queremos abrir o arquivo _**.gitconfig**_ no editor de texto padrão.  

![Piece of Code](https://i.imgur.com/a5WlVKw.png)

Aberto o arquivo, você verá algo similar (como ainda não foi configurado quase nada, algumas opções podem não aparecer pra você).

- **[core]**: Algumas configurações do git. Na imagem está configurado, como padrão, o editor Visual Studio Code;
- **[user]**: Configurações de usuário. Eu deixo configurado o email (github), name (o nome que aparecerá nos commits) e username do github (apesar de não ser necessário);
- **[alias]**: Provavelmente você não terá esse campo. É aqui que ficam os atalhos do git;  

Se não tiver, basta acrescentar o campo **[alias]**, como na imagem. Todos os seus atalhos ficarão ali.

[**Clicando aqui, você encontrará meus alias (como os da imagem)**](https://gist.github.com/pedrovasalmeida/fb8225078d853cafdfe83958590c01e0). Você será redirecionado ao _Gist_, uma ferramenta do GitHub que permite armazenar trechos de código de forma pública ou privada. É uma ótima dica pra guardar códigos importantes!  

Usando o comando
```git
git config --list
```
você consegue visualizar todo o arquivo **.gitconfig**.

É possível configurar bastaaaante coisa ai. Se você se interessar, pode encontrar configurações interessantes na [**documentação do git**](https://git-scm.com/docs/git-config).

---

<br />

Para configurar seu editor padrão, basta usar o comando:

```git
git config --global core.editor EDITOR
```

VSCode:

```git
git config --global core.editor \"C:\\Users\\User\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\" --wait
```

Sublime:

```git
git config --global core.editor "\"c:\Program Files\Sublime Text 3\sublimetext.exe\"" --wait
```

Notepad++:

```git
git config --global core.editor "\"c:\Program Files\Notepad++\notepad++.exe\"" --wait
```

Vim:

```git
git config --global core.editor vim
```

Emacs:

```git
git config --global core.editor emacs
```

ou fazer como na imagem, adicionando o campo **editor** seguido do caminho.

---

<br />

Pode ter certeza que esses atalhos vão ajudar muito na sua produtividade.  



<div>

Um forte abraço, e **só agradece a atenção**! 🙏🏽  

![Final Gif](https://media1.tenor.com/images/ed3bc2e831bd666a436b779640358b32/tenor.gif?itemid=17808977)

</div>