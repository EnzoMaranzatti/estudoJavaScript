const estudante = {
   nome: 'João',
   idade: 20,
   cpf: '12345678901',
   turma: 'JavaScript',
   bolsista: true,
   telefone: ['5517991372203', '551199999999'],
   enderecos: [{
      rua: 'Rua do João',
      numero: 123,
      cidade: 'São Paulo',
      estado: 'SP',
      complemento: 'Apto 101',
      cep: '01234-567'
   }, {
      rua: 'Rua da Maria',
      numero: 456,
      cidade: 'São Paulo',
   }]
}

function exibirTelefones(telefone1, telefone2) {
   console.log(`Ligar para ${telefone1}`);
   console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefone[0], estudante.telefone[1]);
exibirTelefones(...estudante.telefone);

const dadosEnvio = {
   destinario: estudante.nome,
   ...estudante.enderecos[0]
}

console.log(dadosEnvio);