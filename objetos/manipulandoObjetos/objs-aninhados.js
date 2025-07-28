const estudante = {
   nome: 'João',
   idade: 20,
   cpf: '12345678901',
   turma: 'JavaScript',
   bolsista: true,
   telefone: ['5517991372203', '551199999999'],
}

estudante.endereco = {
   rua: 'Rua do João',
   numero: 123,
   cidade: 'São Paulo',
   estado: 'SP',
   complemento: 'Apto 101',
   cep: '01234-567'
}

console.log(estudante);

console.log(estudante.endereco.rua)