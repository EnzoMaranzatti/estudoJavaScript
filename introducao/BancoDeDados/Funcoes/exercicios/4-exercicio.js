/*
   Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
*/

function compararNumero(num1,num2,num3) {
   let resultado;
   if(num1 > num2 && num1 > num3) {
      resultado = `Numero 1 = ${num1} \nNumero 2 = ${num2} \nNumero 3 = ${num3} \nNumero 1 é maior que todos os outros.`;
   }
   else if(num2 > num1 && num2 > num3) {
      resultado = `Numero 1 = ${num1} \nNumero 2 = ${num2} \nNumero 3 = ${num3} \nNumero 2 é maior que todos os outros.`;
   }
   else if(num3 > num1 && num3 > num2) {
      resultado = `Numero 1 = ${num1} \nNumero 2 = ${num2} \nNumero 3 = ${num3} \nNumero 3 é maior que todos os outros.`;
   }
   return resultado;
}

console.log(compararNumero(15,11,5) + '\n\n');
console.log(compararNumero(10,11,5) + '\n\n');
console.log(compararNumero(10,11,30));
