/*

   includes(): Verifica se um elemento está presente em um array.
   indexOf(): Retorna o índice da primeira ocorrência de um elemento em um array.

*/

const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

/*
   - A primeira linha dentro da função é um if que verifica se o nome do aluno está presente na lista de alunos. Isso é feito usando o método includes
   - lista[0] representa o primeiro array dentro da lista, que contém os nomes dos alunos. Se o nome do aluno passado como argumento estiver nesse array, a condição é verdadeira.
   - Se o aluno existe na lista, a função usa o método indexOf para encontrar o índice do aluno:
   - O indexOf retorna a posição do aluno dentro do array. Por exemplo, se 'Juliana' estiver na posição 0, indice será 0.
*/
function exibeNomeENota(aluno) {
   if(lista[0].includes(aluno)) {
      const indice = lista[0].indexOf(aluno);
      const mediaAluno = lista[1][indice];
      console.log(`${aluno} tem a média ${mediaAluno}`);
   } 
   else console.log('Estudante não existe na lista');

}

exibeNomeENota('Juliana');
exibeNomeENota('Enzo');