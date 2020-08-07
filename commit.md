# A base de tudo, o **commit**

## O que é um **commit**?

Um **commit** é como uma FOTO. Mas nela só vemos as diferenças 
entre a última foto e o momento atual dos arquivos RASTREADOS pelo git.

Cada **commit** tem um id único representado por um hash, seus commits pais, 
um autor, a data de criação, um título, uma mensagem e também todas as 
modificações em relação ao seu commit pai.

Um **commit** é de longe a parte mais importante de se entender, porque todo
o resto que iremos ver deriva de como esse commit é estruturado.

Aqui podemos ver o output do comando `git log` e as informações mais básicas
do commit.

```
commit a96f41474c500941801add83f99b5acb92d0c506
Author: Marcelo Lopes Lotufo <marcelo.lotufo@lotuz.dev>
Date:   Mon Jul 6 12:03:40 2020 -0300

    Criar README.md
    
    Criar arquivo inicial de README do projeto
```

Logo abaixo podemos ver a saída do comando `git log d579691e8285296f3aa0a1c6d1608cfbb7202473 -1 -c` e podemos ver
tanto as informações básicas como 2 chunks de códigos modificados.

Não se preocupe com as flags do comando log no momento, só se atente à saída abaixo.

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

O comando commit cria uma foto das modificações que estão nesse momento
em stage. Quando usamos esse comando automaticamente, é aberto o editor
configurado globalmente. No meu caso, é aberto o Vim.

### `git log`

O comando log mostra o histórico de commits e as informações deles.
Como é impresso o log e quanto de informação mostrar podem ser configurados
através de diversas opções.

## Boas práticas ao criar um **commit**

De forma geral, a ideia é qun um **commit** agrupe modificações que façam
sentido juntas, mas no dia a dia, quando estamos modificando nossos arquivos,
nem sempre mexemos em somente um contexto. Vamos criar um formulário de login,
mas também editamos a cor do botão.

O ideal é que separemos essas modificações pelo menos em 2 partes:
1. As mudanças do formulário
2. As mudanças de estilo do botão

Para isso, o git nos permite manipular as modificações de forma a serem adicionadas
ou removidas do stage de forma interativa com as flags --patch ou --interactive
sobre os comandos add e reset.

No momento, iremos focar no --patch, mas fica como curiosidade a flag --interactive.

O comando add/remove --patch (ou -p) nos faz passar por todos os chunks de modificações
do diretório de trabalho onde podemos cirurgicamente adicionar só as partes que nos interessam.

Dessa forma, conseguimos criar um commit para cada ideia.

Na hora de dar nome aos commits, tome o cuidado necessário para descrever o que foi feito. 
É costume escrever as mensagens de commit de forma imperativa e não no passado:

```
commit 881de6754e9f031a70cc9d06b06a32ad256d7133
Author: marceloll <marcelo.lopes.lotufo@gmail.com>
Date:   Tue Aug 4 15:19:13 2020 -0300

    Melhore a estapa `stage` do curso
    
    Detalhe os comandos e explique que o git salva modificações e não
    arquivos.
```

Note que além do título da mensagem também temos o corpo da mensagem para detalhar o que foi feito.

É muito importante escrever mensagens descritivas para posteriormente, se necessário, navegarmos pelo
histórico do repositório e sabermos o que e quando fizemos certas modificações.

## Padrões de commit

Existem times que adotam padrões específicos para a escrita de seus commits, o que foge
do escopo deste curso, mas fica aqui a referência para alguns desses padrões:

- [Convetional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

---
  Faça você mesmo:

```
git commit
```
```
Crie novo arquivo README.me

Iniciando o nosso curso com um commit descritivo
```
---

[Anterior](stage.md)
[Próximo](branch.md)
