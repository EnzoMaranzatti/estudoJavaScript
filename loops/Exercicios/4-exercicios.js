/*

   Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

*/

function menorMaiorValor(array) {
   let maiorNum = -Infinity;
   let menorNum = Infinity;
   
   for (let i = 0; i < array.length; i++) {
      if (maiorNum < array[i]) {
         maiorNum = array[i];
      }

      if (menorNum > array[i]) {
         menorNum = array[i];
      }
   }

   console.log(`O menor número é: ${menorNum} e o maior número é: ${maiorNum}`);
}

const numeros = [1000, 100, 200, 300, 2500, 400, 500, 600];

menorMaiorValor(numeros);
