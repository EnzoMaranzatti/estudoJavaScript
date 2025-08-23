/*
   4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

   soma: uma função que aceita dois parâmetros e retorna a soma deles.
   subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
   multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
   divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
   a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

   b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

   c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
*/

const calculadora = {
   soma: (a, b) => a + b,
   subtracao: (a, b) => a - b,
   multiplicacao: (a, b) => a * b,
   divisao: (a, b) => b === 0 ? "Não é possível dividir por zero" : a / b,
   calcularMedia: (array) => array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / array.length
}

console.log(calculadora.soma(10, 10));
console.log(calculadora.subtracao(56, 22));
console.log(calculadora.multiplicacao(5, 10));
console.log(calculadora.divisao(20, 10));
console.log(calculadora.divisao(20, 0));
console.log(calculadora.divisao(0, 20));

const numeros = [30, 20, 10, 40, 50, 60, 70, 80, 90, 100];

console.log(calculadora.calcularMedia(numeros));