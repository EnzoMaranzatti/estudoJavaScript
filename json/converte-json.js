const dados = require('./estudante.json');
const stringEstudante = JSON.stringify(dados); // Converter JSON para string, para fazer requisição entre o servidor e o cliente

// console.log(stringEstudante);
// console.log(typeof stringEstudante);

// console.log(stringEstudante.nome); - Retorna undefined, porque não é mais um objeto

const objEstudante = JSON.parse(stringEstudante); // Retorna para objeto, não sendo mais uma string
console.log(objEstudante);
console.log(typeof objEstudante);