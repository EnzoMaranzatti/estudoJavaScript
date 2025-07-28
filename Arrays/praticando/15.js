/*

  const valores = [2, 4, 6, 8];

  Some todos os valores (valor inicial 0).

*/

const valores = [2, 4, 6, 8];

const valoresSomados = valores.reduce(function(acumulador, valorAtual) {
   return acumulador + valorAtual;
}, 0);

// const valoresSomados = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(valoresSomados);