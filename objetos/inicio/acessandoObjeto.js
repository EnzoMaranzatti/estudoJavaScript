const estudante = {
   nome: 'Jose Silva',
   idade: 32,
   cpf: '12312312312',
   turma: 'JavaScript'
}

console.log(estudante[0]);

console.log(estudante['nome']); // Outra maneira de chamar a propriedade de um obj.
console.log(estudante['cpf']);

function exibeInfoEstudante(objEstudante, infoEstudante) {
   return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));

console.log(estudante.pet); // mesmo que a propriedade não exista é retornando undefined
console.log(estudante['pet']); // mesmo que a propriedade não exista é retornando undefined