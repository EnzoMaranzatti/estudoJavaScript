/*
  5 - Considere um array de números inteiros.

   const numeros = [6, 9, 12, 15, 18, 21];

   Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
*/


const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(num => {
  console.log(num * 3);
});

// const indice18 = numeros.findIndex(num => num === 18);
const indice18 = numeros.findIndex(function(num) {
   return num === 18;
})

console.log('Índice do número 18:', indice18);









