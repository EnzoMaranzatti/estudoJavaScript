/*
   1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
*/

function combinarArrays(...array) {
   return [...array];
}

const notas = [20, 30, 40];
const numeros = [10, 20, 30];
const nomes = ['João', 'Maria', 'Pedro'];

console.log(combinarArrays(notas, numeros, nomes));