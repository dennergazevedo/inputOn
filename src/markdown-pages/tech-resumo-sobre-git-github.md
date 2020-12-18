---
slug: '/tech/resumo-git-github'
date: '2020-12-13'
title: 'Git & GitHub - Resumo'
---

E aí, jovem! Suavidade nessa vida de programador?

Deixa eu te perguntar, você conhece o Git?

Git é um sistema desenvolvido para auxiliar no controle de versão de códigos.  
Imagine que você trabalha numa empresa com outros 13 desenvolvedores e, por algum motivo, todos vocês precisam mexer no exato mesmo arquivo. Já da pra pensar na bagunça que seria pra cada um conseguir implementar as próprias mudanças junto com as demais, não? 😫

O mais legal é quando se une o poder do git com plataformas pra gerenciar esse controle,  como o [**GitHub**](https://github.com/), [**GitLab**](https://gitlab.com/gitlab-org/gitlab), [**BitBucket**](https://bitbucket.org/) e muitas outras. Fica muito prático manter seus projetos online!

---

<hr>

<br />

# Entendendo o GIT

<br />

O principal recurso do git (pra mim) é o que permite a cópia total (espelhada) da versão original de um repositório X. Esse recurso é a ramificação, ou criação de uma nova _**branch**_. A branch principal e padrão de todo projeto é, normalmente, chamada **main**.(Antigamente era **master**, mas [**devido à algumas discussões**](https://sempreupdate.com.br/github-substituira-master-por-main-a-partir-do-proximo-mes/#:~:text=A%20partir%20do%20pr%C3%B3ximo%20m%C3%AAs%2C%20todos%20os%20novos%20reposit%C3%B3rios%20de,%E2%80%9Cmaster%20(mestre)%E2%80%9D.&text=%E2%80%9CEm%201%C2%BA%20de%20outubro%20de,master%E2%80%9D%2C%20disse%20a%20empresa.), decidiu-se trocar para main).

O fluxo de um projeto usando git possui 3 áreas principais:

- Seu repositório local (_**working directory**_):
  - Aqui é onde ficam todos os arquivos e qualquer mudança local feita no projeto;
- O **stage**, onde permanecem os arquivos aguardando confirmação (**git add \<arquivo>**);
  - Aqui ficam todas as mudanças adicionadas que você deseja enviar para a branch desejada (como uma área temporária);
- O **HEAD** que aponta para a última confirmação (**git commit -m "comentário"**);
  - Aqui você confirma o envio dos arquivos adicionados (com o **git add**) à _branch_;

Nesse ponto, você adicionou e confirmou que deseja enviar as mudanças para o repositório remoto, mas ainda não o fez. Este é feito pelo **git push**.

---

## Do zero

Vamos, do zero, iniciar um projeto usando git pra entender melhor.  
Primeiramente, temos que configurar nosso usuário. Para isso, abra o terminal e digite:

```git
git config --global user.name "Seu Nome"
git config --global user.email "email_do_github"
```

A flag _**--global**_ indica que o arquivo .gitconfig será editado globalmente, sendo aplicado à todos os repositórios.  

Agora, acessamos a pasta desejada e abrimos o terminal ali. Então, para criarmos um repositório, usamos o comando

```git
git init
```

Para adicionarmos um arquivo, usamos

```git
git add <arquivo>
```

ou, para adicionar todos os arquivos

```git
git add *
```

Agora, com nossos arquivos no **stage**, devemos confirmar o envio deles através do **commit**

```git
git commit -m "comentário sobre o commit"
```

A flag _**-m**_ indica que a mensagem será passada diretamente através do comando. Sem ela, fica um pouquinho mais chato de informar a mensagem do commit (é necessário abrir um editor, etc e tal hehehe).  

Pronto. Nossos arquivos já estão no **HEAD**, prontos para serem enviados.  
Você pode dar quantos _commits_ quiser.

Com os commits feitos, é hora de finalmente enviá-los para a **branch**. Vamos dizer ao git que queremos que nossa branch principal seja a main e que vamos enviar as alterações pra ela

```git
git branch -M main
```

Como você -talvez- bem sabe, ainda não linkamos nosso repositório local com nenhum repositório remoto no GitHub. Faremos isso agora, usando

```git
git remote add origin  
https://github.com/usuario/repositorio.git
```

E, agora sim, damos o push

```git
git push origin main
```

Pronto. Alterações enviadas!  
Agora, imagine que você quer desenvolver uma nova feature e precisa uma branch nova. Para criá-la, use o comando

```git
git checkout -b nome_da_branch
```

Para voltar a branch principal (main), use

```git
git checkout main
```

E se precisar remover a branch criada

```git
git branch -d nome_da_branch
```

Sua branch não estará disponível no GitHub a não ser que você a envie, da mesma forma que foi feita com os commits.

```git
git push origin nome_da_branch
```

Eu recomendo, num primeiro momento, que optemos por fazer o merge através da plataforma, pois podem haver conflitos nos arquivos e, assim, evitamos quaisquer problemas.  
Assim que enviar a branch ao GitHub, você verá essa opção

![Piece of Code](https://i.imgur.com/QcoEMT3.png)

E, clicando nela, será direcionado à essa tela

![Piece of Code](https://i.imgur.com/iBuIPLO.png)

Aqui você cria o **pull request**, onde seu código será comparado com o da outra branch e, se não houver conflitos, permitirá o **merge** das branchs.  
Você pode deixar comentários sobre o pull request, dar um nome à ele e ver a lista de commits relacionados à branch.  

Clicando em **Create pull request**, este estará criado e pronto para o merge. Então, você verá essa tela:

![Piece of Code](https://i.imgur.com/nO4nVDC.png)

A seta indica que os arquivos foram verificados e não há nenhum conflito entre eles. Então, está apto ao merge e é só clicar em **Merge pull request**. Se houve algum problema ou você desistiu de realizar o merge, é só clicar em **Close pull request**.

![Piece of Code](https://i.imgur.com/wMT6IIQ.png)

Com o merge feito, será exibida a mensagem de sucesso e será possível excluir a branch, se assim for desejado.

---

# Conclusão  

Agora você aprendeu como funciona o Git, como iniciar um repositório, enviar seu projeto, criar novas branchs e dar merge entre branchs. Só cuidado pra não quebrar o sistema em produção, viu? hahahaha. 🤭 
Também viu como funciona a plataforma do GitHub. Tem muuuuitas funcionalidades, seria ótimo fuçar e mexer nelas, afinal, o gato não morreu de curiosidade. 🤸🏽‍♂️  

É hora de colocar todos os seus projetos lá, tendo em vista que o GitHub serve praticamente como um "curriculo", já que é um histórico do que você está estudando/praticando/trabalhando.  

Espero que esse post tenha deixado mais claro a ideia do versionamento através do git. [**Nesse outro post eu mostro**](inputon.com.br/tech/atalhos-git) como utilizo o **git config** pra acelerar ainda mais esse processo, usando os chamados **alias**, ou atalhos pros comandos padrão do git. Vale a pena ver! 🤖  

<div>

### Só agradece a atenção! 🙏🏽

![Final Gif](https://media.giphy.com/media/cnhpl4IeYgU7MCBdV2/giphy.gif)

</div>