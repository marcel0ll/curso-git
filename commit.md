# Trabalhando com um commit

## O que é um **commit**?

Um **commit** é como uma FOTO daquele momento dos arquivos RASTREADOS pelo git.

Cada **commit** tem um id único representado por um hash, seus commits pais, 
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

## Comandos

### `git commit`

### `git log`

## Boas práticas ao criar um **commit**

TODO: Escrever boas práticas 
