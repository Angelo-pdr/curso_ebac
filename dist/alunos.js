"use strict";

var alunos = [{
  nome: "Angelo",
  nota: 10
}, {
  nome: "Gabriel",
  nota: 7
}, {
  nome: "Crislayne",
  nota: 5.6
}, {
  nome: "Bruna",
  nota: 0.1
}, {
  nome: "Rosimere",
  nota: 6.1
}, {
  nome: "Nelson",
  nota: 6
}, {
  nome: "Jeremias",
  nota: 5.9
}, {
  nome: "Antonia",
  nota: -10.9
}];
function verificadoAlunoProvado(aluno) {
  return aluno.nota >= 6;
}
var alunosAprovados = alunos.filter(function (aluno) {
  return verificadoAlunoProvado(aluno);
});
console.log(alunosAprovados);