/*

   Use o mesmo array e calcule o produto (multiplicação) de todos os elementos usando reduce.

*/

const numeros = [5, 10, 15, 20];

// const somaTotal = numeros.reduce(function(acumulador, itemAtual) {
//    return acumulador * itemAtual;
// }, 1);

const somaTotal = numeros.reduce((acumulador, itemAtual) => acumulador * itemAtual, 1);

console.log(somaTotal);