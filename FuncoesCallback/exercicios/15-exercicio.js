/*
   5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
*/

function filtro(array) {
   return array.filter(num => num % 3 === 0 && num > 5);
}

const numeros = [20, 34, 32, 33, 55, 43, 24, 11, 9, 44, 22, 35, 67, 89, 99];

console.log(filtro(numeros)); 