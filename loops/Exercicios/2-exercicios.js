/*

   Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

*/

function exibirArray(array) {
   for(let i = 0; i < array.length; i++) {
      console.log(`${i} - ${array[i]}`);
   }
}

/* // Função de trás para frente
function exibirArray(array) {
   for(let i = array.length - 1; i >= 0; i--) {
      console.log(`${i} - ${array[i]}`);
   }
}
*/
const nome = ['Enzo', 'Eduardo', 'Maria', 'Fabio', 'Leandro', 'Katia', 'Edenilson', 'Daiane', 'Fernanda'];

exibirArray(nome);