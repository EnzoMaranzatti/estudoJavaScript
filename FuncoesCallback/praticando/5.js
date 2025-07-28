/*
   Faça uma função chamada aplicarOperacaoEmArray que receba:

   um array de números

   um callback (função de operação)

   e retorne um novo array com a operação aplicada em todos os itens.

   Exemplo de uso:

*/

function aplicarOperacaoEmArray(array, callback) {
   return array.map(callback);
}

// agora o callback só recebe um elemento
const somar = (num) => num + num;
const subtrair = (num) => num - num;
const multiplicar = (num) => num * num;
const dividir = (num) => num / num;

const numeros = [30, 40, 10, 50, 90];

console.log(aplicarOperacaoEmArray(numeros, dividir));




