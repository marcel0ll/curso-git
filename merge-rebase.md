# Juntando o trabalho:

Da mesma forma que antes queriamos dividir nosso trabalho em diversas linhas, 
agora queremos juntar ou manipular essas linhas com suas diversas modificações.

Para isso, temos dois comandos principais: o `git merge` e o `git rebase`.

O git é muito bom para automaticamente saber como juntar as modificações, mas,
em alguns casos em que ele não consegue resolver isso sozinho, são gerados conflitos que devem
ser resolvidos manualmente.

## O que é um **merge**?

```
          o-o-o 
         /     \
o-o-o-o-o-o-o-o-o (main)
```

Imagine o caso em que dois editores estão revisando um arquivo de texto em seções
diferentes: um está editando o cabeçalho e outro o rodapé. Cada um deles passou
horas editando sua parte e agora temos que juntar essas modificações.

Para isso, o git nos dá a opção de fundir duas ou mais linhas de trabalho em uma só.

Isso é um merge e normalmente o executamos sobre dois branchs diferentes.

No nosso exemplo, executaríamos algo como:

```sh
git merge principal cabecalho
git merge principal rodape
```

E teríamos no final um único arquivo contendo todas as modificações.


## O que é um **rebase** 

Imagine o caso em que um desenvolvedor criou uma nova função para um sistema,
mas devido a certas urgências o branch dessa nova funcionalidade ficou abandonado
por meses. Então um gestor resolveu que era a hora de juntar aquela função,
mas antes disso era preciso terminar o desenvolvimento dela.

Em vez de continuar desenvolvendo em um ambiente que não reflete mais a situação
do sistema, o desenvolvedor corta o seu galho da árvore e o recoloca no ponto
mais atual do projeto.

Árvore do git após desenvolvimento de nova funcionalidade

```
          o-o-o-o (nova_funcionalidade) 
         /     
o-o-o-o-o-o (main)

```

Árvore do git após mais desenvolvimento no ramo principal

```
          o-o-o-o (nova_funcionalidade) 
         /     
o-o-o-o-o-o-o-o-o (main)

```

Árvore do git após rebase


```
                  o-o-o-o (nova_funcionalidade) 
                 /     
o-o-o-o-o-o-o-o-o (main)

```

## Comandos

### `git merge`

O git merge junta duas ou mais linhas de trabalho e suas modificações em um único ponto.

### `git rebase`

O git rebase modifica o histórico dos commits, modificando qual o commit inicial
daquela linha de trabalho.

## O que é um conflito?

Um conflito é criado quando o git não sabe juntar as modificações de forma apropriada.
Dessa forma, ele cria certos separados nos arquivos de texto para que manualmente seja
resolvido como os arquivos devem ficar.

```
<<<<<<< HEAD
# Tarefa 1 do curso
=======
# Exercício 1 do curso git
>>>>>>> dev

Escreva um texto abaixo do título como desejar
Editção do corpo do texto
```

## Resolvendo conflitos

Para resolver o conflito, basta editar os arquivos da forma que deseja que fiquem, adicioná-los
ao stage e continuar o comando que estava sendo executado.

```
# Exercício 1 do curso git

Escreva um texto abaixo do título como desejar
Editção do corpo do texto
```

---
  Faça você mesmo:

```
git checkout master
git merge dev
git log
```

---

[Anterior](branch.md)
[Pŕoximo](local-remote.md)
