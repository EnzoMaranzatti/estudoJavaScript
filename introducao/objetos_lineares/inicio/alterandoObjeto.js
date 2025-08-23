const estudante = {
   nome: 'Jose Silva',
   idade: 32,
   cpf: '12312312312',
   turma: 'JavaScript'
}

estudante.telefone = '1234567890';
estudante.endereco = 'Rua ABC, 123';
console.log(estudante);

estudante.nome = 'Maria Vitoria';
console.log(estudante);

const estudante2 = {};

estudante2.nome = 'Enzo Vinicius';
estudante2.idade = 25;
estudante2.cpf = '98765432109';
estudante2.turma = 'Python';
console.log(estudante2);

// Para remover uma propriedade usamos 'delete'
delete estudante2.turma; // ou estudante2['turma'];
console.log(estudante2);

/*
   O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:
*/

console.log(delete estudante2.nome); // true, porque não existe