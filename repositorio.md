# O repositório git

```
          o-o-o 
         /     \
o-o-o-o-o-o-o-o-o-o-o (main)
         \         
          o-o-o-o-o 
```


Um repisório git é uma árvore de arquivos rastreadas pelo git a partir de uma 
pasta raiz(diretório de trabalho). Dentro dessa pasta raiz o git usa a pasta 
`.git/` para armazenar os dados que ele necessita para rastrear os arquivos
e mudanças. 

Note que não é porque um arquivo está dentro da pasta de trabalho que ele será 
automaticamente rastreado, somente os arquivos adicionados ao repositório são 
rastreadas.


## Iniciando um repositório

Para iniciarmos um repositório precisamos nos movimentar para uma pasta que
desejamos versionar com o git e executar o comando:

```
git init
```

## Checando o repositório

Para verificarmos se o repositório está tudo certo o git nos da o comando 
`status` que nos diz como está o estado atual do repositório e de
nossas modificações, como no exemplo abaixo:

```
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   repositorio.md
```

E pronto, o git já criou a sua pasta `.git/` e nós já podemos começar a 
adicionar arquivos a este repositório.

## Comandos

### `git init`

Comando que inicializa estrutura para o git dentro da pasta `.git/`

### `git status`

Comando para checar o estado atual de nosso repositório

---

[Anterior](diretorio-de-trabalho.md)
[Pŕoximo](stage.md)
