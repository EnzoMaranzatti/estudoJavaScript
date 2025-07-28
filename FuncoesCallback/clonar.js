/*

   Atribuição por Valor:
      Quando atribuímos um tipo primitivo a uma nova variável, o JavaScript cria uma cópia do valor.
      Alterar o valor da nova variável não afeta a variável original.
      O mesmo ocorre quando passamos tipos primitivos como parâmetros para funções: uma cópia do valor é passada, e a alteração do parâmetro dentro da função não modifica a variável original.

   Atribuição por Referência:
      Arrays não são tipos primitivos, então, ao atribuir um array a uma nova variável, o JavaScript cria uma referência, não uma cópia.
      Ambas as variáveis apontam para o mesmo local na memória.
      Modificar o array através de qualquer uma das variáveis afeta ambas.
      O mesmo acontece quando passamos arrays como parâmetros para funções: a referência do array é passada, e as alterações dentro da função afetam o array original.
      Para evitar a modificação do array original ao passá-lo para uma função, podemos usar o spread operator (...) para criar uma cópia do array.

*/


const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10];

let num = 9.75;
let novoNum = num;   
num = 10;

// spread operator
//novaListaNotas.push(10);

console.log(notas);
console.log(novaListaNotas);