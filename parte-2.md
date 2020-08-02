# Quais são os principais elementos e termos do git

## Configurando o git

O git possui diversas configurações que podem ser encontradas em `~/.gitconfig`

Nesse arquivo podem estar configurados diversas opções do seu git, como aliases
para comandos, qual editor usar para escrever commits, o email e nome de usuário
padrão, etc.

```
; isso é um comentário
[alias]
	st = status
	br = branch
	co = checkout
	last = log -1
	staged = diff --staged
	;graph = log --graph --oneline --decorate --author-date-order
	amend = commit --amend
	graph = log --all --graph --abbrev-commit --author-date-order --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(auto)%d%C(reset)'

[core]
	editor = vim

[user]
	email = marcelo.lopes.lotufo@gmail.com
	name = marceloll
```

## Diretório de trabalho

A pasta raiz na qual estão todos os arquivos de um projeto.

```
.:
parte-1.md
parte-2.md
README.md
```

## Repositório

```
          o-o-o 
         /     \
o-o-o-o-o-o-o-o-o-o-o (main)
         \         
          o-o-o-o-o 
```


Um repisório git é uma árvore de arquivos rastreadas pelo git a partir de uma 
pasta raiz. Dentro dessa pasta raiz o git usa a pasta `.git/` para armazenar
os dados que ele necessita para rastrear seus arquivos e mudanças. 

Note que não é porque um arquivo está dentro da pasta de trabalho que ele será 
automaticamente rastreado, somente os arquivos adicionados ao repositório são 
rastreadas.

## Stage

O `Stage` é um ambiente intermediário entre os arquivos presentes na pasta de
trabalho e os arquivos que o git já está ativamente rastreando.

O fluxo comum do git é adicionar uma modificação ao staging e posteriormente
armazenar essa mudança no git.

**Pasta de trabalho** --`git add`--> **Stage** --`git commit`--> **Repositorio**

## Arquivos

Um arquivo do próprio sistema de arquivos

## Chunks

Um `Chunk` é um pedaço de um arquivo que representa uma modificação, normalmente
é representado pelas linhas de código que nele foram modificados.

```
index e88cbe0..0ac7c5c 100644
--- a/README.md
+++ b/README.md
@@ -1,7 +1,9 @@
 # Curso git
 
-A ideia desse curso é auxiliar o aprendizado de git com uma mistura de teoria e prática.
-O curso consiste de uma série de etapas. As estapas iniciais são puramente de fundamentação e depois mistura teoria e prática para fixação dos conceitos.
+A ideia desse curso é auxiliar o aprendizado de git seguindo as seguintes etapas:
+- motivação : O por que de aprender algo
+- teoria    : O que é isso
+- prática   : Como usar e exercícios de fixação

```

## Commit

Um `Commit` é como uma FOTO daquele momento dos arquivos RASTREADOS pelo git.

Cada commit tem um id único representado por um hash, seus commits pais, 
um autor, a data de criação, um título, uma mensagem e também todas as 
modificações em relação ao seu commit pai.

```
commit a96f41474c500941801add83f99b5acb92d0c506
Author: Marcelo Lopes Lotufo <marcelo.lotufo@lotuz.dev>
Date:   Mon Jul 6 12:03:40 2020 -0300

    Criar README.md
    
    Criar arquivo inicial de README do projeto
```

```
commit d579691e8285296f3aa0a1c6d1608cfbb7202473
Author: marceloll <marcelo.lopes.lotufo@gmail.com>
Date:   Sun Aug 2 14:33:26 2020 -0300

    Adicione links ao README do curso

diff --git a/README.md b/README.md
index e88cbe0..0ac7c5c 100644
--- a/README.md
+++ b/README.md
@@ -1,7 +1,9 @@
 # Curso git
 
-A ideia desse curso é auxiliar o aprendizado de git com uma mistura de teoria e prática.
-O curso consiste de uma série de etapas. As estapas iniciais são puramente de fundamentação e depois mistura teoria e prática para fixação dos conceitos.
+A ideia desse curso é auxiliar o aprendizado de git seguindo as seguintes etapas:
+- motivação : O por que de aprender algo
+- teoria    : O que é isso
+- prática   : Como usar e exercícios de fixação
 
 O curso tem como intenção exigir o mínimo de outras tecnologias que não o próprio git, dessa forma são evitadas 
 qualquer linguagem de programação específica e são utilizados arquivos de texto .txt genéricos para exemplificação.
@@ -15,11 +17,11 @@ O curso está organizado nas seguintes lições:
 
 ## Motivação e fundamentação teórica
 
-1. Motivação para se usar um software de controle de versão
-1. O que é um VCS e quais são as principais diferenças entre git, hg e svn
-1. Quais são os principais elementos e termos do git
+1. [Motivação para se usar um software de controle de versão](parte-1.md)
+1. [Quais são os principais elementos e termos do git](parte-2.md)
     - Repositório
     - Arquivos
+    - Chunks
     - Stage
     - Commit
     - Branch
```

Observe no texto anterior que estão indicados por "+" as linhas adicionadas e 
por "-" as linhas removidas

## Branch

```
      o (feature-1)
     /
    o-o (dev)
   /
o-o (main)
```

Como descrito acima, um commit tem commits pais dessa forma toda a estrutura
do histórico do git pode ser representada por uma árvore. Uma sequência de 
commits a partir de um commit pode ser chamada de galho, ou `Branch`.

Um Branch é utilizado para criar mais de uma modificação a partir de um mesmo
ponto do histórico do projeto. 

Imagine que você quer desenvolver duas funcionalidades paralelamente sem que uma
atrapalhe o desenvolvimento de outra, para isso você criaria duas branches a 
partir de uma mesmo commit.

Todo repositório tem um branch principal que era normalmente chamado de 
`master`, mas devido a alguns acontecimentos recentes algumas ferramentas estão
mudando o branch principal para `main`.

## Merge

```
          o-o-o 
         /     \
o-o-o-o-o-o-o-o-o (main)
```

Um `Merge` é o nome dado quando criamos um commit com mais de um commit pai.
Ou seja juntamos todas as modificações que existem em um commit com um segundo
commit.

Normalmente o que você escutará é merge entre dois branchs, que nada mais são
que uma sequência de pequenas modificações.


## Local / Remotes

O `Local` nada mais é que o seu repositório git na sua máquina, ou seja
uma pasta com `.git/` 

Um `Remote` é um repositório git, mas em uma outra máquina como um servidor.
São muito utilizados serviços como [github](https://github.com/), 
[gitlab](https://gitlab.com/) e [bitbucket](https://bitbucket.org/) como 
servidores de git para armazenar seus repositórios remotamente, mas caso
tenha interesse também é possível instalar e gerenciar o seu próprio servidor
de git.

Um repositório local pode estar conectado a vários remotes, mas é comum que o
remote principal seja chamado de `origin`

