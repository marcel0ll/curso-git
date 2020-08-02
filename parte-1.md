# O que é o git e por que eu deveria me importar?

Existem duas ferramentas que desenvolvedores usam diariamente, na maioria de 
seus projetos: um editor de texto e um software de controle de versão.

O git é um desses softwares de controle de versão, existem outros menos usados
como [mercurial](https://www.mercurial-scm.org/) e 
[subversion](https://subversion.apache.org/).

Um software de controle de versões ajuda a você criar um histórico de todas as 
modificações que foram feitas em um ou mais arquivos, normalmente usado em um 
diretório que representa um projeto.

O git também é uma ótima forma de trabalhar em equipes em um mesmo projeto.

Se você alguma vez teve um arquivo chamado entrega_final_3b.docx, você teria
se beneficiado usando o git.

Esse curso tem a intenção de explicar as vantagens de usar git em seus projetos
e incentivar que você busque por si saber mais sobre essa ferramenta incrível.
Por mais que eu quisesse seria impossível passar por todos os comandos e suas
opções em poucas horas.

O fluxo padrão de uso do git consiste em adicionar quais arquivos o git deve 
manter versionado, adicionar as modificações, salvar estágios do software e 
compartilhar com colegas esses estágios. Para executar essas tarefas básicas
são usados os seguintes comandos:
- git add
- git commit
- git push

Abaixo segue a saída do comando `git help -a`, com todos os comandos que a 
ferramenta possui. No dia a dia são usadas algumas poucas, mas é importante 
saber que a ferramenta tem muito a oferecer.

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
