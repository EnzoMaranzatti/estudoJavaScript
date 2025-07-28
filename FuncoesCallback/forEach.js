/* FUNÇÃO CALLBACK
   Uma função callback é uma função que é passada como argumento para outra função e é executada após a ocorrência de um evento ou a conclusão de uma operação assíncrona.

   Em outras palavras, uma função callback é uma função que é "chamada de volta" depois que alguma outra função termina de executar.
*/

/*
   O forEach() é um método de array em JavaScript que permite iterar sobre cada elemento de um array e executar uma função de callback para cada um deles. Vamos entender melhor como ele funciona:

   array.forEach(function(item) {
      código a ser executado para cada item
   });

   Nessa sintaxe, array é o array sobre o qual você deseja iterar, e a função de callback é passada como argumento. Essa função de callback é chamada para cada elemento do array, e o elemento atual é passado como parâmetro para essa função.

   VANTAGENS:

   Sintaxe mais concisa e legível do que um loop for tradicional.
   Não é necessário gerenciar índices ou condições de parada, pois o forEach() cuida disso automaticamente.
   Permite uma abordagem mais funcional e declarativa para iterar sobre arrays.

*/

const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

// notas.forEach(function(nota) {
//    somaNotas += nota;
// });

// notas.forEach(somaDasNotas);

// function somaDasNotas (nota) {
//    somaNotas += nota;
// }

notas.forEach(nota => {
   somaNotas += nota
})

const media = somaNotas / notas.length;

console.log(`As medias das notas é ${media}`);