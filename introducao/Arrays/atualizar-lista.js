/*
   splice() em JavaScript é uma ferramenta poderosa para manipulação de arrays. Ele permite que você adicione, remova ou substitua elementos em um array, alterando o próprio array original. Vamos entender como ele funciona.

   - início: O índice a partir do qual você deseja começar a modificar o array. Lembre-se de que os índices começam em 0.

   - quantidadeDeRemoções: O número de elementos que você deseja remover a partir do índice especificado. Se você não quiser remover nenhum elemento, pode passar 0.

   - item1, item2, ...: Os elementos que você deseja adicionar ao array a partir do índice especificado. Você pode adicionar quantos elementos quiser.

   O método splice() altera o array original, então tenha cuidado ao usá-lo, pois você pode perder dados se não fizer um backup do array original.

   Você pode usar splice() para realizar múltiplas operações em uma única chamada, como remover e adicionar elementos ao mesmo tempo.
*/

const listaEstudantes = ['Joao', 'Ana', 'Clara', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo', 'Teste');

console.log(listaEstudantes);