# Saiba mais

Lembre de sempre que tiver uma dúvida sobre um comando olhara a documentação usando:

```
git help <comando>
```

A documentação é sempre a melhor forma de aprender a usar a ferramenta.

## Padrões de commit

Existem times que adotam padrões específicos para a escrita de seus commits, o que foge
do escopo deste curso, mas fica aqui a referência para alguns desses padrões:

- [Convetional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

## Nomeando versões

Existem padrões de como você deve nomear a versão do seu software, cada projeto
pode adotar o seu próprio e segue aqui alguns destes:

- [Semantic Versioning](https://semver.org/)

## O que são **hooks**?

Hooks são gatilhos que o git executa antes ou após certos eventos, por exemplo, o evento PRE-COMMIT
é executado um pouco antes de cada `git commit` que você executar. Dessa forma você pode adicionar funcionalidades
customizadas no seu processo de versionamento. Um uso muito comum disso é usar os hooks para automaticamente re formatar
seu código antes de todo commit. 

Os hooks na verdade são arquivos de script que são encontrados em `.git/hooks`

```
.git/hooks/
  applypatch-msg.sample
  commit-msg.sample
  fsmonitor-watchman.sample
  post-update.sample
  pre-applypatch.sample
  pre-commit.sample
  prepare-commit-msg.sample
  pre-push.sample
  pre-rebase.sample
  pre-receive.sample
  update.sample
```

## Quem foi que fez isso?!?

Em algum momento você querer saber quem raios escreveu essa porcaria de código e o git rapidamente irá refrescar a
sua memória e mostrar que foi você mesmo que escreveu isso... mês passado.

### `git blame`

Comando para ver quem, quando e em qual commit foram feitas alterações.

`git blame visao-geral.md`

```
2379cc16 (marceloll 2020-08-05 14:20:43 -0300  1) # Visão geral do git
2379cc16 (marceloll 2020-08-05 14:20:43 -0300  2) 
c732a318 (marceloll 2020-08-05 15:04:39 -0300  3) 1. Configurar git (user.name, user.email)
a23a48b2 (marcel0ll 2020-08-05 16:23:39 -0300  4) 1. Clonar repositório git@github.com:marcel0ll/curso-git.git
a23a48b2 (marcel0ll 2020-08-05 16:23:39 -0300  5) 1. Modificar arquivo README.md
a23a48b2 (marcel0ll 2020-08-05 16:23:39 -0300  6) 1. Adicionar README ao stage
a23a48b2 (marcel0ll 2020-08-05 16:23:39 -0300  7) 1. Criar commit 
a23a48b2 (marcel0ll 2020-08-05 16:23:39 -0300  8) 1. Enviar modificação ao github
2379cc16 (marceloll 2020-08-05 14:20:43 -0300  9) 
2379cc16 (marceloll 2020-08-05 14:20:43 -0300 10) ---
2379cc16 (marceloll 2020-08-05 14:20:43 -0300 11) 
2379cc16 (marceloll 2020-08-05 14:20:43 -0300 12) [Anterior](motivacao.md)
2379cc16 (marceloll 2020-08-05 14:20:43 -0300 13) [Pŕoximo](configurando-o-git.md)
```

## O que é o **reflog**?

O reflog é similar ao log, mas em vez de listar commits ele lista as mudanças feitas nas suas referências.

### `git reflog`

##  O que é o **stash**?

O stash é um salva vidas para quando você tem algumas modificações no seu repositório e quer trocar de branchs sem ter
que criar um novo commit. Então você joga essas modificações para o stash, faz o que você precisa fazer sem maiores
conflitos e depois você desempilha do seu stash aquelas modificações.

Tome cuidado ao usá-lo, as vezes colocamos modificações no stash para nunca mais lembrarmos delas.

### `git stash`

Empilha modificações no `stash`

### `git stash pop`

Desempilha modificações do `stash`

## O que é **cherry-pick**?

Cherry-pick é um comando muito pontual, ele é como se fosse um rebase de um commit só para qualquer lugar do seu
histórico. Literalmente você copia um commit de um lugar e encaixa ele em um outro commit.

### `git cherry-pick`

Re cria commit em outra posição do histórico

## O que é **bisect**?

O bisect auxilia você a pesquisar de forma binária uma linha de trabalho entre 2 commits, o git da um checkout para
certos commits intermediários perguntando se era essa a versão que você estava procurando até que você o encontre.

### `git bisect`

Executa uma busca binária interativa em busca de algum commit específico.

---

[Anterior](local-remote.md)
[Pŕoximo](fluxos.md)
