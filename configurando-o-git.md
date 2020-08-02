## Configurando o git

O git possui diversas configurações que podem ser encontradas em `~/.gitconfig`

Nesse arquivo podem estar configurados diversas opções do seu git, como aliases
para comandos, qual editor usar para escrever commits, o email e nome de usuário
padrão, etc.

```Git Config
; isso é um comentário
[alias]
	st = status
	br = branch
	co = checkout
	last = log -1
	staged = diff --staged
	;graph = log --graph --oneline --decorate --author-date-order
	amend = commit --amend
	graph = log --all --graph --abbrev-commit --author-date-order --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(auto)%d%C(reset)'

[core]
	editor = vim

[user]
	email = marcelo.lopes.lotufo@gmail.com
	name = marceloll
```

