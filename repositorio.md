## Repositório

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


### Iniciando um repositório

Para iniciarmos um repositório precisamos nos movimentar para uma pasta que
desejamos versionar com o git e executar o comando:

```
git init
```

E pronto, o git já criou a sua pasta `.git/` e nós já podemos começar a 
adicionar arquivos a este repositório.

