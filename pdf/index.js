var markdownpdf = require("markdown-pdf");
var split = require("split");
var through = require("through");
var duplexer = require("duplexer");

const toRemove = [
  /\[Meetup\]\(https:\/\/www.meetup.com\/opensanca\/events\/272092986\/\)/,
  /\[Anterior\]\(.*?\)/,
  /\[Próximo\]\(.*?\)/,
  /\[Indice\]\(README.md\)/,
];

const mdDocs = [
  "../capa.md",
  "../preface.md",
  "../index.md",
  "../motivacao.md",
  "../visao-geral.md",
  "../configurando-o-git.md",
  "../diretorio-de-trabalho.md",
  "../repositorio.md",
  "../stage.md",
  "../commit.md",
  "../branch.md",
  "../merge-rebase.md",
  "../local-remote.md",
  "../saber-mais.md",
  "../fluxos.md",
  "../exercicio-1.md",
];

const bookPath = "./curso.pdf";

function replaceReducer(data) {
  return toRemove.reduce((acc, pattern) => {
    return acc.replace(pattern, "");
  }, data);
}

function preProcessMd() {
  // Split the input stream by lines
  var splitter = split();

  // Replace occurences of "foo" with "bar"
  var replacer = through(function (data) {
    this.queue(replaceReducer(data) + "\n");
  });

  splitter.pipe(replacer);
  return duplexer(splitter, replacer);
}

markdownpdf({ preProcessMd: preProcessMd })
  .concat.from(mdDocs)
  .to(bookPath, function () {
    console.log("Created", bookPath);
  });
