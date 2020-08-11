# O que é o Git e por que eu deveria me importar?

## As duas ferramentas mais importantes

Existem duas ferramentas que desenvolvedores usam diariamente, na maioria de
seus projetos: um editor de texto e um software de controle de versão.

Sendo assim, é muito importante que se tenha domínio dessas ferramentas.

## Sistema de controle de versões (vcs)

O Git é um desses softwares de controle de versão. Existem outros atualmente
menos usados como [mercurial](https://www.mercurial-scm.org/) e
[subversion](https://subversion.apache.org/).

Se você alguma vez teve um arquivo chamado entrega_final_3b.docx, você teria
tido benefícios usando o Git, ou qualquer outro software de versionamento.

Um software de controle de versões ajuda você a criar um histórico de todas as
modificações que foram feitas em um ou mais arquivos, a partir de um diretório
raiz, o diretório de trabalho.

Softwares de controle de versão também são um ótimo instrumento para colaboração
no desenvolvimento de projetos, uma vez que cada um pode trabalhar no seu
próprio conjunto de modificações e posteriormente usar o software de controle de
versão para unificar essas mudanças.

Este curso tem a intenção de explicar as vantagens de usar Git em seus projetos,
explicar quais são as partes mais básicas do Git e incentivar que você busque
por si saber mais sobre essa ferramenta incrível.

Por mais que eu quisesse, seria impossível passar por todos os comandos e suas
opções em poucas horas. Além disso, muitos desses comandos são específicos à
maneira como você irá usar a ferramenta. Alguns desses comandos eu nunca cheguei
a usar.

## O dia a dia

O fluxo padrão de uso do Git consiste em adicionar quais arquivos o Git deve
manter versionados, adicionar as modificações, salvar estágios do software e
compartilhar com colegas esses estágios. Para executar essas tarefas básicas,
são usados os seguintes comandos:

- git add
- git commit
- git push
- git pull

Mas saber cegamente executar alguns comandos não faz com que você entenda como a
ferramenta funciona e, no primeiro momento que ela não responder como desejado,
ficaremos perdidos porque não sabemos de fato os fundamentos da ferramenta.

Por essas razões, este curso tem a intenção de ir mais a fundo do que só
pincelar o modo de uso de alguns comandos.

Abaixo segue a saída do comando `git help -a`, com todos os comandos que a
ferramenta possui. No dia a dia, são usados alguns poucos, mas é importante
saber que a ferramenta tem muito mais a oferecer e o help é o melhor lugar
para procurar saber mais.

```sh
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

available git commands in '/usr/lib/git-core'

  add                       merge-ours
  add--interactive          merge-recursive
  am                        merge-resolve
  annotate                  merge-subtree
  apply                     merge-tree
  archive                   mergetool
  bisect                    mktag
  bisect--helper            mktree
  blame                     mv
  branch                    name-rev
  bundle                    notes
  cat-file                  pack-objects
  check-attr                pack-redundant
  check-ignore              pack-refs
  check-mailmap             patch-id
  check-ref-format          prune
  checkout                  prune-packed
  checkout-index            pull
  cherry                    push
  cherry-pick               quiltimport
  clean                     read-tree
  clone                     rebase
  column                    rebase--helper
  commit                    receive-pack
  commit-tree               reflog
  config                    remote
  count-objects             remote-ext
  credential                remote-fd
  credential-cache          remote-ftp
  credential-cache--daemon  remote-ftps
  credential-store          remote-http
  daemon                    remote-https
  describe                  remote-testsvn
  diff                      repack
  diff-files                replace
  diff-index                request-pull
  diff-tree                 rerere
  difftool                  reset
  difftool--helper          rev-list
  fast-export               rev-parse
  fast-import               revert
  fetch                     rm
  fetch-pack                send-pack
  filter-branch             sh-i18n--envsubst
  fmt-merge-msg             shell
  for-each-ref              shortlog
  format-patch              show
  fsck                      show-branch
  fsck-objects              show-index
  gc                        show-ref
  get-tar-commit-id         stage
  grep                      stash
  hash-object               status
  help                      stripspace
  http-backend              submodule
  http-fetch                submodule--helper
  http-push                 subtree
  imap-send                 symbolic-ref
  index-pack                tag
  init                      unpack-file
  init-db                   unpack-objects
  instaweb                  update-index
  interpret-trailers        update-ref
  log                       update-server-info
  ls-files                  upload-archive
  ls-remote                 upload-pack
  ls-tree                   var
  mailinfo                  verify-commit
  mailsplit                 verify-pack
  merge                     verify-tag
  merge-base                web--browse
  merge-file                whatchanged
  merge-index               worktree
  merge-octopus             write-tree
  merge-one-file

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
```

## Comandos

### `git help`

O seu melhor amigo na hora de usar o Git. Esta ferramenta contém toda
a documentação mais atualizada para a sua versão do Git. Não se assuste com a
interface do terminal.

É sempre possível utilizar o `git help <command>` para conseguir obter um
descritivo básico.
---

[Anterior](README.md)
[Próximo](visao-geral.md)
