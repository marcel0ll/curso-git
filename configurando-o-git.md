## Configurando o git

O git possui diversas configurações globais que podem ser encontradas em `~/.gitconfig`
e também diversas configurações locais que se encontram dentro da pasta `.git/` de cada
repositório.


### Configurações Globais

Para começarmos a usar o git é necessário configurar o seu usuário globalmente para que
o git possa registrar a cada etapa QUEM foi o AUTOR das modificações.

Para isso precisamos configurar o seu `email` e seu nome(`name`) de usuário:

```sh
git config --global user.email "<seu.endereço.de@email.com>"
git config --global user.name "<seu_nome_de_usuario>"
```

Como dito acima, as configurações globais vão parar em um arquivo na sua pasta de usuário,
no arquivo `.gitconfig`.

Nesse arquivo podem estar configurados diversas opções do seu git, como aliases
para comandos, qual editor usar para escrever commits, o email e nome de usuário
padrão, etc.

Segue abaixo o meu arquivo de configuração que uso normalmente, no momento só se atente
que o que configuramos nos comandos acima agora estão registrados aqui.

```Git Config
[user]
	email = marcelo.lopes.lotufo@gmail.com
	name = marceloll

[core]
	editor = vim

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
```

### Configurações Locais (em cada repositório)

No momento não cabe entrar em muitos detalhes do que é possível configurar
no arquivo `.git/config` e nos outros arquivos da pasta `.git`, mas é importante
saber que elas existem. Em outras partes do curso, iremos voltar a comentar sobre
essas configurações locais.

---

[Anterior](visao-geral.md)
[Pŕoximo](diretorio-de-trabalho.md)
