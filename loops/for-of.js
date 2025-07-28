/*

   O for... of é uma estrutura de repetição em JavaScript que permite percorrer elementos de uma coleção, como arrays, strings, mapas, entre outros. A principal vantagem do for... of é a sua simplicidade, pois ele não requer o controle de índices, tornando o código mais limpo e fácil de entender.

   Sintaxe:

   for (let elemento of colecao) {
      // código a ser executado para cada elemento
   }

   Aqui, "elemento" é uma variável que irá armazenar o valor atual da iteração, e colecao é o array ou objeto que você deseja percorrer. Neste caso, a variavel elemento irá assumir o valor de cada índice do array colecao a cada interação.

*/

const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for(let nota of notas) {
   somaNotas += nota;
}

const media = somaNotas / notas.length;

console.log(media)