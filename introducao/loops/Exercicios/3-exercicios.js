/*

   Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

*/

function somaElementos(array) {
   let soma = 0;
   for(let i = 0; i < array.length; i++) {
      soma += array[i];
   }
   console.log(`A soma dos elementos é: ${soma}`);
} 

const num = [100, 200, 300, 400];

somaElementos(num);