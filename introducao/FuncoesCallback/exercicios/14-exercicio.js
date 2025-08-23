/*
   4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
*/

function receberArray(array) {
   return array.filter((numeros) => numeros % 2 === 0);
}

const numeros = [40, 342, 1203, 410, 10, 40, 231, 34, 53, 9123, 4, 2, 1, 3, 5, 7, 9];

console.log(receberArray(numeros));