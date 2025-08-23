/*

  const valores = [2, 4, 6, 8];

  Multiplique todos os valores (valor inicial 1).

*/

const valores = [2, 4, 6, 8];

const valoresMultiplicados = valores.reduce(function(acumulador, valorAtual) {
   return acumulador * valorAtual;
});

// const valoresMultiplicados = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(valoresMultiplicados);