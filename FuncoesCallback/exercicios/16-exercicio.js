/*
   6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
*/

function somarArray(array) {
   return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

const numeros = [32, 45, 78, 90, 12];

console.log(somarArray(numeros));