# Local e remote

## O que é o **local**? 

O `Local` nada mais é que o seu repositório git na sua máquina, ou seja
uma pasta de trabalho com a pasta `.git/`.

## O que é um **remote**? 

Um `remote` é um repositório git, mas em uma outra máquina como um servidor.

São muito utilizados serviços como [github](https://github.com/), 
[gitlab](https://gitlab.com/) e [bitbucket](https://bitbucket.org/) como 
servidores de git para armazenar seus repositórios remotamente, mas caso
tenha interesse também é possível instalar e gerenciar o seu próprio servidor
de git.

Um repositório local pode estar conectado a vários remotes, mas é comum que o
remote principal seja chamado de `origin`.

Um repositório remoto é usado de espaço para sincronizar o trabalho entre diversos
autores uma vez que todos podem mandar e baixar modificações desse repositório.

## Comandos

### `git remote`

Esse comando lista os seus remotes e através de certas opções também é possivel
criar novos remotos ou mudar as urls dos remotos já existentes. O comando lembra
muito o `git branch`

### `git clone`

O clone como o próprio nome diz, clona um outro repositório para o seu computador, dessa
forma você não tem que configurar uma nova pasta, um repositório local, linkar com
o seu remote. Tudo isso já é feito com um único comando.

### `git fetch`

O fetch busca todas as modificações e referências que estão registradas no remote
e as tras para o seu repositório local. Permitindo dessa forma atualizar o seu local
em relação ao seu remote.

### `git push`

O git push envia os commits no branch atual para o remoto 

### `git pull`

O git pull pega os commits novos do seu remoto para o seu branch local
No fundo um pull executa um fetch e um merge do branch remoto com o branch local.

---

[Anterior](merge-rebase.md)
[Pŕoximo](saber-mais.md)
