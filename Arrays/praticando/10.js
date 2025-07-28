/*
   Dado o array de preços abaixo:

   const numeros = [5, 10, 15, 20];

   Calcule a soma total usando reduce.

*/

const numeros = [5, 10, 15, 20];

// const somaTotal = numeros.reduce(function(acumulador, itemAtual) {
//    return acumulador + itemAtual;
// }, 0);

const somaTotal = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual, 0);

console.log(somaTotal);