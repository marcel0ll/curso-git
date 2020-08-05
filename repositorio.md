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

## O diretório .git/

```
.git/
  branches
  COMMIT_EDITMSG
  config
  description
  FETCH_HEAD
  HEAD
  hooks
  index
  info
  logs
  objects
  ORIG_HEAD
  packed-refs
  refs
```

Normalmente não olhamos para dentro da pasta `.git/`, pois ela é um diretório 
escondido e que serve de base de dados para o seu repositório e não queremos 
quebrar nada mexendo em algo que devemos, mas para entender de fato como o
git funciona é necessário se aventurar um pouco e abrir os arquivos desse
diretório.

No momento deixo aqui explícito os arquivos e pastas para posteriormente 
mencioná-los novamente.

## Comandos

### `git init`

Comando que inicializa estrutura para o git dentro da pasta `.git/`

### `git status`

Comando para checar o estado atual de nosso repositório

---

Siga junto:

```
mkdir curso-git
cd curso-git
git init
git status
```

---

[Anterior](diretorio-de-trabalho.md)
[Pŕoximo](stage.md)
