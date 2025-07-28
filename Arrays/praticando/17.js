/*

  const palavras = ["A", "B", "C"];

  Junte em uma só string: “A B C”

*/

const palavras = ["A", "B", "C"];

const juntarPalavras = palavras.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, "");

console.log(juntarPalavras);