/*
  Você recebeu um array com nomes repetidos:

   const nomes = ['Ana', 'Carlos', 'Ana', 'Pedro', 'Carlos', 'João'];

   Crie um novo array que contenha apenas os nomes únicos, sem repetições. Dica: use Set para isso. Imprima o resultado.

*/

const nomes = ['Ana', 'Carlos', 'Ana', 'Pedro', 'Carlos', 'João'];

// Usando Set para remover duplicatas e depois transformando de volta em array
const nomesUnicos = [...new Set(nomes)];

console.log(nomesUnicos);
