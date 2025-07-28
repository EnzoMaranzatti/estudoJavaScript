/*
   Crie uma função operacao que recebe dois números e um callback que define qual operação executar (soma, subtração, multiplicação, etc.).

   Teste passando uma função de soma.

   Teste passando uma função de multiplicação.

*/

function operacao(num1, num2, callback) {
  return callback(num1, num2);
}

const soma = (a,b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

console.log(operacao(70, 20, soma));
console.log(operacao(70, 20, subtracao));
console.log(operacao(70, 20, multiplicacao));
console.log(operacao(70, 20, divisao));



