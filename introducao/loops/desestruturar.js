/*
   A desestruturação/destructuring em JavaScript é uma sintaxe que permite extrair valores de arrays ou propriedades de objetos e atribuí-los a variáveis de forma mais concisa e legível. É uma maneira de "desmontar" uma estrutura complexa em partes mais simples.
*/

const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
   if(lista[0].includes(aluno)) {
      const [alunos, medias] = lista;
      const indice = alunos.indexOf(aluno);
      const mediaAluno = medias[indice];
      console.log(`${aluno} tem a média ${mediaAluno}`);
   } else console.log('Estudante não existe na lista');
}

exibeNomeENota('Juliana');
exibeNomeENota('Enzo');