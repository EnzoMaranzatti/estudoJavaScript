/*
   4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

   Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

   a) Leia o conteúdo do arquivo animais.json.

   b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

   c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

   d) Modifique o habitat de um animal existente no array de animais.

   e) Remova um animal do array de animais.

   f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

   g) Imprima no console o objeto JavaScript resultante das operações.
*/

const dados = require('./animais.json');
const animais = dados.animais;

// c) adicionar
const novoAnimal = {
   id: 4,
   nome: "Canguru",
   tipo: "Mamífero",
   habitat: "Planícies Australianas"
};
animais.push(novoAnimal);

// d) modificar
const animalParaAlterar = animais.find(a => a.id === 2);
if (animalParaAlterar) {
   animalParaAlterar.habitat = "Recifes de Coral";
}

// e) remover
const indiceRemover = animais.findIndex(a => a.id === 1);
if (indiceRemover !== -1) {
   animais.splice(indiceRemover, 1);
}

// f) converter para string JSON
const jsonFinal = JSON.stringify({ animais }, null, 2);

// g) imprimir
console.log(animais);
