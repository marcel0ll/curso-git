# Dividir para conquistar:

```
            o (feature-1)
           /
          o-o (dev)
         /
o-o-o-o-o-o (main)
     \
      o       o-o-o
       \     /
        o-o-o
           \
            o
```

Durante nosso trabalho não queremos ficar presos a só uma possibilidade, 
queremos poder explorar novos caminhos sem o risco de perder o nosso
precioso trabalho. 

Para isso o git nos permite dividir nosso histórico em quantas partes quisermos
e depois juntarmos essas diferenças. No fundo o que o git permite é que N commits
tenha o mesmo commit como pai, efetivamente dividindo o histórico em N ramos.

Mas quando temos o histórico dividido começa a ficar difícil navegar pelos commits
através dos seus hashes e ai entra as **refs** que são referências à um commit.

Existem vários tipos de referências como, a referência a um ramo, referência a uma tag
e referências aos ramos remotos.

## O que é de fato uma **ref**?

Uma **ref** no fundo é um mapeamento de um nome para uma hash de algum commit,
o git armazena isso em arquivos onde o nome é o nome do arquivo e a hash é 
armazenada dentro.

Podemos ver isso dentro da pasta `.git/refs/`, como por exemplo o arquivo
`.git/refs/heads/master`


```
ed6dcbdb79e2c3867f9f52f42bfcbd432c3ef86e
```

## O que é um **branch**?

Um branch é um ramo da árvore do git, em outras palavras, é uma linha de trabalho
dentro do nosso repositório, como podemos ver no desenho do topo desta página.

Usamos esse ramo para separar uma linha de trabalho de outra, basicamente um 
branch é um nome que damos a uma linha que queremos que seja atualizado a cada
novo commit.

Olhar pasta `.git/refs/heads`

## O que é uma **tag**?

Uma tag é uma referência a um commit que não esperamos alterar, diferente do branch
que esperamos que a cada novo commit a referência seja atualizada, uma tag é feito
para nomear um commit específico e não uma linha de trabalho.

Olhar pasta `.git/refs/tags`

## O que é o **HEAD**?

O HEAD é uma referência padrão do git que serve para sabermos qual commit estamos 
olhando e o que o git deve nos mostrar de conteúdo dentro da pasta de trabalho.

Olhar arquivo `.git/HEAD`

## Manipulando as refs

Dado que as refs são arquivos podemos se quisermos, manipular essas referências
manualmente com um editor de textos simples. Por exemplo, se formos à pasta 
`.git/refs/heads` e criamos um novo arquivo, com um hash de um commit qualquer 
de nosso repositório efetivamente estaremos criando um novo ramo.

No entando não é recomendado fazer esse processo manualmente e o git nos da uma 
interface melhor que ficar editando arquivos na mão para criar e manipuplar 
essas referências separadamente com os comandos abaixo.


## Trocando o **HEAD**

Para mudarmos o que estamos vendo na nossa pasta de trabalho, precisamos 
pedir ao git trocar o commit que estamos olhando, em outras palavras
precisamos trocar a referência do nosso **HEAD**, para tal usamos o
comando `git checkout`.

## Comandos

### `git branch <nome-do-ramo>`

O comando branch cria uma nova referência do tipo branch apontando
para o commit atual, ou seja para o mesmo commit que o nosso **HEAD**
está apontando no momento de sua execução.

### `git tag`

O comando branch cria uma nova referência do tipo tag apontando
para o commit atual, ou seja para o mesmo commit que o nosso **HEAD**
está apontando no momento de sua execução.

### `git checkout`

O comando checkout muda o valor da referência do **HEAD**, efetivamente
mudando o contexto da nossa pasta de trabalho.
