# Trabalhando com o stage:

## O que é o **stage**?

O **stage** é um ambiente intermediário entre os arquivos presentes na pasta de
trabalho e os arquivos que o git já está ativamente rastreando.

O fluxo comum do git é adicionar uma modificação ao staging e posteriormente
armazenar essa mudança no git.

**Pasta de trabalho** --`git add`--> **Stage** --`git commit`--> **Repositorio**

## O que é uma modificação?

### Arquivos

Um arquivo do próprio sistema de arquivos

### Chunks

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

## Comandos

### `git add`

### `git reset`

### `git diff`
