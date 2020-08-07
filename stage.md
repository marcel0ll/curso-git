# Trabalhando com o stage:

## O que é o **stage**?

Como dito antes, é necessário ordenar de forma explícita para o Git quais
arquivos ele deve rastrear dentro da sua pasta de trabalho e isso acontece
basicamente como se fôssemos tirar uma foto para recordação: preparamos o
cenário com as pessoas ou objetos e tiramos uma foto desse palco.

Dentro do Git o palco é o **stage** e a foto é um **commit**.

O **stage** é um ambiente intermediário entre os arquivos presentes na pasta de
trabalho e os arquivos que o Git já está ativamente rastreando.

O fluxo comum do Git é adicionar uma modificação ao stage e posteriormente
armazenar essa mudança no Git em um commit.

**Pasta de trabalho** --`git add`--> **Stage** --`git commit`--> **Repositorio**

## O que o Git salva? O que é uma modificação?

Um conceito importante é que o Git não salva ARQUIVOS de fato, ele salva
MODIFICAÇÔES em arquivos. Os arquivos e pastas são representados e inferidos a
partir dessas modificações feitas.

Essas modificações podem ser representadas por chunks de diff. Temos um
exemplo deles mais abaixo.

Esse é o motivo pelo qual o Git não armazena diretórios vazios. Dado que eles
não possuem conteúdo para ser modificado, o Git não tem o que armazenar. Logo,
se você adicionar uma pasta ao seu projeto e ela não tiver pelo menos um arquivo
dentro, essa pasta não estará dentro do seu repositório.

### Arquivos

Um arquivo do próprio sistema de arquivos

### Chunks

Um `Chunk` é um pedaço de um arquivo que representa uma modificação. É
representado pelas linhas que foram modificadas no arquivo.

```
index e88cbe0..0ac7c5c 100644
--- a/README.md
+++ b/README.md
@@ -1,7 +1,9 @@
 # Curso Git

-A ideia desse curso é auxiliar o aprendizado de Git com uma mistura de teoria e prática.
-O curso consiste de uma série de etapas. As estapas iniciais são puramente de fundamentação e depois mistura teoria e prática para fixação dos conceitos.
+A ideia desse curso é auxiliar o aprendizado de Git seguindo as seguintes etapas:
+- motivação : O por que de aprender algo
+- teoria    : O que é isso
+- prática   : Como usar e exercícios de fixação

```

## Comandos

### `git add <arquivos>`

O `git add` adiciona modificações ao stage

### `git reset <arquivos>`

O `git reset` remove modificações do stage

### `git diff`

O `git diff` mostra as modificações que foram feitas no diretório de trabalho
desde o último commit. Ou a diferença entre dois commits.

---

  Faca você Mesmo:

- Crie um novo arquivo
- E adicione no stage

---

[Anterior](repositorio.md)
[Próximo](commit.md)
