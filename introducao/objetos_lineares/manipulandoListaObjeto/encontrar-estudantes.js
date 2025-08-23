const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
   return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '58996279799');
console.log(telefoneEstudante);