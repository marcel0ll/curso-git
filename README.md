# Curso git

A ideia desse curso é auxiliar o aprendizado de git seguindo as seguintes etapas:
- motivação : O por que de aprender algo
- teoria    : O que é isso
- prática   : Como usar e exercícios de fixação

O curso tem como intenção exigir o mínimo de outras tecnologias que não o próprio git, dessa forma são evitadas 
qualquer linguagem de programação específica e são utilizados arquivos de texto .txt genéricos para exemplificação.

Alguns comandos ou argumentos que facilitam o trabalho do dia a dia serão intencionalmente ignorados até que
sejam apresentadas boas práticas ao utilizar a ferramenta git.

# Organização

O curso está organizado nas seguintes lições:

## Motivação e fundamentação teórica

1. [Motivação para se usar um software de controle de versão](parte-1.md)
1. [Quais são os principais elementos e termos do git](parte-2.md)
    - Repositório
    - Arquivos
    - Chunks
    - Stage
    - Commit
    - Branch
    - Merge
    - Remote
    - Arquivo de configuração (.gitconfig)
  
## Lições teóricas e práticas

4. Trabalhando com o stage:
    - O que é o *stage*?
    - `git add`
    - `git reset`
    - `git diff`
    
5. Trabalhando com um commit:
    - O que é um *commit*?
    - `git commit`
    - `git commit --amend`
    - `git log`
    - Boas práticas ao fazer um *commit*
    
6. Trabalhando com branchs:
    - O que é um *branch*?
    - O que é o *HEAD*?
    - `git branch`
    - `git branch <new branch name>`
    - `git checkout`
    - `git checkout <branch name> -- <file> [...<file>]`
    
7. Trabalhando com remotos:
    - O que é exatamente um *remote*?
    - `git clone`
    - `git push`
    - `git pull`

8. Manipulando branches:
    - `git merge`
    - `git rebase`
    - O que é um conflito?
    - Resolvendo conflitos
    
9. Outros comandos / conceitos:
    - `git help -a`
    - O que é o *reflog*?
    - `git reflog`
    - O que é o *stash*?
    - `git stash`
    - `git stash pop`
    - O que é *cherry-pick*?
    - `git cherry-pick <hash>`
    - O que é *bisect*?
    - `git bisect`
    - O que é uma *tag*?
    - `git tag`
    
10. Fluxos de trabalho para git
    - gitflow
    - Baseado em *merge*
    - Baseado em *rebase*

    
