/*
   O objeto é sempre composto de conjunto de chave e valor
*/
const estudante = {
// chave / valor
   nome: 'Jose Silva',
   idade: 32,
   cpf: '12312312312',
   turma: 'JavaScript'
}

console.log(estudante.nome)
console.log(`O nome de estudante e ${estudante.nome}`);
console.log(`Os três primeiros números do CPF são: ${estudante.cpf.substring(0, 3)}...`);