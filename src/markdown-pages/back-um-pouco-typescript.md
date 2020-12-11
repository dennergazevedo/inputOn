# Um pouco sobre TypeScript.

## Introdução
Salve! Hoje vamos trocar uma ideia sobre esse **superset** (que vem sendo considerado como linguagem) maravilhoso, que são 2 mãos na roda ao se desenvolver com _JavaScript_.

Essa [_ferramenta_](https://www.typescriptlang.org/) foi desenvolvida por [**Anders Hejlsberg**](https://github.com/ahejlsberg), um engenheiro de software que atualmente trabalha pra Microsoft (e ele também desenvolveu outras linguagens (como o _C#, Delphi e Turbo Pascal_). [Considere segui-lo no Twitter](https://twitter.com/ahejlsberg)😄.


## Começando do começo...

Podemos dizer que se você sabe JavaScript, você quase sabe TypeScript. Ele foi desenvolvido em cima do JS e apenas acrescenta algumas (relembrando, muito boas) regras ao desenvolver.   

Existe um debate pela consideração ou não do TypeScript como linguagem. Com o surgimento do [**Deno**](https://deno.land/) (um runtime que aceita TS de forma nativa), essa discussão se tornou um pouco mais forte. Lembra o Node.js (e foi feito pelo mesmo criador), é similar mas diferente 😂. Em outro post falaremos sobre...  
   

## Tipos
   

Primeiramente, devemos começar falando sobre os Tipos presentes (tanto no JS quanto no TS). 
Conhecemos o JS por ter tipagem dinâmica, ou seja, suas variáveis e funções podem ter diferentes tipos durante sua execução. Já no TypeScript, esses tipos são definidos previamente, impedindo tal funcionamento.  
Olha só alguns dos tipos que estão presentes (além dos tradicionais **string**, **number**, **boolean**, **Array**, **Object**...): 
- **Tuple** | é um array com um número fixo de posições, podendo não ser do mesmo tipo (**[string, number]**)
- **Enum** | um tipo diferenciado de objeto, logo abaixo você vai entender melhor
- **Any** | permite que uma variável receba qualquer tipo sem retornar erro algum
- **Unknown** | parecido com any, mas só pode ser atribuido à **any**s e **unknown**s 😬
- **void** | usado para indicar que não há retorno em uma dada função
- **never** | usado para indicar quando uma função nunca retornará


### Inferência de Tipos

A mais básica regra do TypeScript impõe a chamada **Inferência de Tipos**. 
Ao se declarar uma variável com um valor inicial (sendo de algum tipo primitivo), a variável _receberá o tipo_ desse valor.

![Piece of Code](https://i.imgur.com/1IrdgjL.png)

### Tipagem

Como já estamos cansados de ler, o forte do TS é a tipagem. E tipamos quase tudo (quando a inferência não é invocada, claro).   
Colocamos tipos em variáveis, parâmetros e retornos de funções, objetos, arrays...
 Veja alguns exemplos abaixo:
 
![Piece of Code](https://i.imgur.com/zvApk88.png)

Uma vantagem que já gostaria de citar é ao acessar as propriedades do objeto **jogador**. No VSCode por exemplo, ao digitar _jogador e o ponto " . "_,._ você tem acesso à todas as propriedades que o jogador possui, o que não ocorria no javascript. O intelisensrface nos ajuda nisso.

![Piece of Code](https://i.imgur.com/wmeuexn.png)

### Types e Interfaces

Com o TS, recebemos o poder do _**type**_ e _**interface**_.
Com o **Type**, podemos dizer quais valores e qual o tipo uma variável pode obter.
![Piece of Code](https://i.imgur.com/GGYxGlG.png)
Lembre-se que isso não se limita a string, podendo ter valores numéricos, booleanos, ou qualquer tipo primitivo...
O pipe que separa os valores _"moba"_ **|** _"fps"_ é chamado de **Union** e é usado justamente para permitir combinações de tipos.

Na imagem acima, passamos um valor não permitido para a variável. Logo, receberemos um erro:
![Piece of Code](https://i.imgur.com/Tyo36As.png)

Já com a **interface**, conseguimos dizer quais propriedades e tipos um objeto terá.

![Piece of Code](https://i.imgur.com/7KFoIlD.png)

Repare que usamos _ponto e vírgula (;)_, ao contrário de um objeto que usa só a _vírgula (,)_.  
Repare também na declaração do tipo da propriedade jogos. Nas duas formas, dizemos que _jogos_ será um vetor de strings. 
Existe uma pequena diferença, sendo a segunda forma chamada de _Generics_. Na prática, funciona da mesma forma 😁.
E lembrando, a forma de se atribuir um formato (usando a interface) à um objeto é da forma que foi declarado o objeto Jogador, logo acima, passando _**: NomeDaInterface**_ logo após a declaração da variável.

![Piece of Code](https://i.imgur.com/steqR9Z.png)

Também podemos usar o _Generics_ para atribuir outros tipos à interfaces, dessa forma:

![Piece of Code](https://i.imgur.com/YAWyr2T.png)

É possível que uma interface extenda as propriedades/métodos de outra, como é conhecido lá do **POO**.

![Piece of Code](https://i.imgur.com/cx5Shzx.png)

Assim, um objeto do tipo _DadosPessoaisJogador_ terá todas as propriedades descritas em _Jogador_, acrescentando as novas, descritas na última interface declarada.   


## Alguns comentários à mais


**Tuple** é um tipo de array com um número de posições fixo. Se conhece tanto a quantidade de elementos, quanto seus tipos. 

![Piece of Code](https://i.imgur.com/TwR7Qgo.png)

-----
 **Enum** é um tipo de objeto que suas propriedades recebem valores iniciais, também podendo ser entendidas como _constantes nomeadas_, e são auto-incrementais quando se referem à números, iniciando em 0.

![Piece of Code](https://i.imgur.com/PrlSfId.png)

A primeira declaração terá valor inicial 0, indo até 3.   
Já na segunda, inicializará em 1 e também irá até 3.   
A terceira não possui o auto-incremento pelos valores serem strings.

--------------
_**Generics**_ também podem ser usados para receber tipos de parâmetros e retornos posteriormente. Ou seja, você indica que a sua função receberá um tipo T (que pode ser uma string, por exemplo) ao ser chamada. Um exemplo para ficar mais claro:

![Piece of Code](https://i.imgur.com/Rkx8nvu.png)

----------
O **void** indica a ausência de algum outro tipo. É comumente usado para indicar que funções não possuem retorno.
![Piece of Code](https://i.imgur.com/SXdxH6J.png)

------
O **any** indica que o dado pode ser, literalmente, de qualquer tipo. 
Ou seja, funções com retorno atribuído como **any** podem retornar qualquer tipo de dado, assim como variáveis **any** podem receber qualquer tipo de dado.

![Piece of Code](https://i.imgur.com/P0uuATd.png)

----
Já o **unknown** é similar ao any, mas é chamado de **type safe**. Ele aceita qualquer um dos tipos sem problemas.

![Piece of Code](https://i.imgur.com/klRnFTF.png)

O que o difere do **any** é que o **unknown** só permite ser assinalável em variáveis **any** e o próprio **unknown**. Veja: 

![Piece of Code](https://i.imgur.com/OUB2cVl.png)

É retornado o erro _"Type 'unknown' is not assignable to type 'number/string/etc'_.

-----
O **never** é usado para funções que nunca devem retornar nada. Um exemplo são funções que lançam uma exceção/erro. Muitas vezes não é necessário indicar o retorno como **never**, já que elas, implicitamente, o recebem.

![Piece of Code](https://i.imgur.com/a2pKIsE.png)

---------
### Classes 

Temos algumas pequenas adições quando usamos classes no TypeScript, como as palavras **set** e **get** para definir, respectivamente, os setters e getters. A forma de acesso à eles também é um pouco diferente. Veja:

![Piece of Code](https://i.imgur.com/MPPdbIp.png)


----
## Conclusão
Ainda falta muito a se falar, como os **Decorators**, algumas formas de uso dos **Unions** e ir mais a fundo nas classes, por exemplo. Mas vamos deixar pra uma outra conversa, pra não ficar cansativo 🤭.

Recomendo fortemente a leitura da [**documentação da linguagem**](https://www.typescriptlang.org/), é tranquilo de entender e bem completa. Se você não manja do inglês, nada que uma [**extensão do Google Tradutor**](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=pt) não ajude 😬, né?


**Espero que esse post tenha esclarecido um pouco sobre como funciona o TypeScript.**    

Um forte abraço, só agradece a atenção! 🙏🏾


![Final Gif](https://media.giphy.com/media/MdA16VIoXKKxNE8Stk/giphy.gif)