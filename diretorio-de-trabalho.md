## Diretório de trabalho

Parece até inútil ter essa seção dentro do curso, mas a realidade que
é importante deixar explícito todas as partes e o diretório de trabalho
não é diferente.

O diretório de trabalho nada mais é a pasta raiz do repositório, onde se 
encontram a árvore de arquivos e pastas. O git irá da sua própria forma 
espelhar a estrutura de arquivos da pasta de trabalho através das diversas
modificações que forem feitas nesses aquivos.

A pasta desse curso no momento que eu estou escrevendo está dessa forma:

```
arquivos.md
branch.md
chunks.md
commit.md
configurando-o-git.md
diretorio-de-trabalho.md
fluxos.md
local-remote.md
merge-rebase.md
motivacao.md
README.md
repositorio.md
saber-mais.md
stage.md

.git/
  branches
  COMMIT_EDITMSG
  config
  description
  HEAD
  hooks
  index
  info
  logs
  objects
  packed-refs
  refs
```

## O diretório .git/

Normalmente não olhamos para dentro da pasta `.git/`, pois ela é um diretório 
escondido e que serve de base de dados para o seu repositório e não queremos 
quebrar nada mexendo em algo que devemos, mas para entender de fato como o
git funciona é necessário se aventurar um pouco e fuçar nos arquivos desse
diretório.

No momento deixo aqui explícito os arquivos e pastas para posteriormente 
mencioná-los novamente.

---

[Anterior](configurando-o-git.md)
[Pŕoximo](repositorio.md)
