# Git: Aprendendo na prática

[Meetup](https://www.meetup.com/opensanca/events/272092986/)

```
          o-o-o (branch-1)
         /     \
o-o-o-o-o-o-o-o-o-o-o (main)
         \         /
          o-o-o-o-o (branch-2)
```


A ideia desse curso é auxiliar o aprendizado de git seguindo as seguintes etapas:
- motivação : O por que de aprender algo
- teoria    : O que é isso
- prática   : Como usar e exercícios de fixação

O curso tem como intenção exigir o mínimo de outras tecnologias que não o próprio git, dessa forma são evitadas 
qualquer linguagem de programação específica e são utilizados arquivos de texto .md para teoria e práticas.

Alguns comandos ou argumentos que facilitam o trabalho do dia a dia serão intencionalmente ignorados até que
sejam apresentadas boas práticas ao utilizar a ferramenta git.

# Organização do curso

O curso está organizado nas seguintes lições:

1. [O que é o git e por que eu deveria me importar?](motivacao.md)

1. [Configurando o git](configurando-o-git.md)

1. [Diretório de trabalho](diretorio-de-trabalho.md)

1. [O repositório git](repositorio.md)

1. [Trabalhando com o stage](stage.md)
    - O que é o **stage**?
    - O que é uma modificação?
      - Arquivos
      - Chunks
    - Comandos
      - `git add`
      - `git reset`
      - `git diff`
    
1. [Trabalhando com um commit:](commit.md)
    - O que é um **commit**?
    - Comandos
      - `git commit`
      - `git log`
    - Boas práticas ao criar um **commit**
    
1. [Dividir para conquistar:](branch.md)
    - O que é um **ref**?
    - O que é um **branch**?
    - O que é uma **tag**?
    - O que é o **HEAD**?
    - Comandos
      - `git branch`
      - `git tag`
      - `git checkout`

1. [Juntando o trabalho:](merge-rebase.md) 
    - O que é um **merge**?
    - O que é um **rebase**?
    - Comandos
      - `git merge`
      - `git rebase`
    - O que é um conflito?
    - Resolvendo conflitos
    
1. [Local e remotes:](remote.md)
    - O que é o **local**?
    - O que é um **remote**?
    - Comandos:
      - `git clone`
      - `git remote`
      - `git fetch`
      - `git push`
      - `git pull`
    
1. [Saiba mais](saber-main.md)
    - `git help -a`
    - O que é o **reflog**?
    - `git reflog`
    - O que é o **stash**?
    - `git stash`
    - `git stash pop`
    - O que é **cherry-pick**?
    - `git cherry-pick <hash>`
    - O que é **bisect**?
    - `git bisect`
    
1. [Fluxos de trabalho para git](fluxos.md)
    - gitflow
    - Baseado em **merge**
    - Baseado em **rebase**

    
