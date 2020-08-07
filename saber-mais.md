# Saiba mais

Sempre que tiver uma dúvida sobre um comando, lembre-se de olhar a documentação usando:

```
git help <comando>
```

A documentação é sempre a melhor forma de aprender a usar a ferramenta.

## Padrões de commit

Existem times que adotam padrões específicos para a escrita de seus commits, o que foge
do escopo deste curso, mas fica aqui a referência para alguns desses padrões:

- [Convetional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

## Nomeando versões

Existem padrões de como você deve nomear a versão do seu software. Cada projeto
pode adotar o seu próprio e seguem aqui alguns deles:

- [Semantic Versioning](https://semver.org/)

## O que são **hooks**?

Hooks são gatilhos que o git executa antes ou depois de certos eventos, por exemplo, o evento PRE-COMMIT
é executado um pouco antes de cada `git commit` que você executar. Dessa forma, você pode adicionar funcionalidades
customizadas no seu processo de versionamento. Um uso muito comum disso é usar os hooks para automaticamente reformatar
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

Em algum momento você vai querer saber quem raios escreveu essa porcaria de código e o git rapidamente refrescará a
sua memória e mostrará que foi você mesmo quem escreveu isso... no mês passado.

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

Comando que lista modificações nas suas referências

`git reflog -10`

```
3ee69bc HEAD@{0}: commit: Preencha seção saber-mais.md
ca790df HEAD@{1}: commit: Mude ordem de tag e branch
cb014ca HEAD@{2}: reset: moving to HEAD
cb014ca HEAD@{3}: commit: Mude nome do arquivo para exercicio-1
abcc793 HEAD@{4}: commit: Atualize fluxos de trabalho com git
3b1a7fa HEAD@{5}: reset: moving to HEAD
3b1a7fa HEAD@{6}: commit: Adicione passo para mudança de diretório do projeto clonado
e4b31b9 HEAD@{7}: commit: Remova arquivo chunks.md
7593f38 HEAD@{8}: commit: Mude exercicio de lista ordenada para lista de pontos
a23a48b HEAD@{9}: commit: Simplifique visao geral
```

##  O que é o **stash**?

O stash é um salva-vidas para quando você tem algumas modificações no seu repositório e quer trocar de branchs sem ter
que criar um novo commit. Então você as joga para o stash, faz o que precisa fazer sem maiores
conflitos e depois você as desempilha do seu stash.

Tome cuidado ao usá-lo. Às vezes colocamos modificações no stash para nunca mais lembrarmos delas.

### `git stash`

Empilha modificações no `stash`

### `git stash pop`

Desempilha modificações do `stash`

## O que é **cherry-pick**?

Cherry-pick é um comando muito pontual. Ele é como se fosse um rebase de um commit só para qualquer lugar do seu
histórico. Você literalmente copia um commit de um lugar e o encaixa em outro commit.

### `git cherry-pick`

Recria commit em outra posição do histórico

## O que é **bisect**?

O bisect auxilia você a pesquisar de forma binária uma linha de trabalho entre 2 commits. O git dá um checkout para
certos commits intermediários perguntando se era essa a versão que você estava procurando até que você o encontre.

### `git bisect`

Executa uma busca binária interativa à procura de algum commit específico.

---

[Anterior](local-remote.md)
[Próximo](fluxos.md)
