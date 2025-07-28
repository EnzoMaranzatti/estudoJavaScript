/*
   3 - Considere duas listas de cores:

   const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

   const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

   Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
*/


const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

function unirListas(array1, array2) {
   const unirArray = array1.concat(array2);
   const removerDuplicados = [...new Set(unirArray)];
   return removerDuplicados;
}

console.log(unirListas(coresLista1, coresLista2));