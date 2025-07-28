const estudante = {
   nome: 'João',
   idade: 20,
   cpf: '12345678901',
   turma: 'JavaScript',
   bolsista: true,
   telefone: ['5517991372203', '551199999999'],
   endereco: [{
      rua: 'Rua do João',
      numero: 123,
      cidade: 'São Paulo',
      estado: 'SP',
      complemento: 'Apto 101',
      cep: '01234-567'
   }]
}


estudante.endereco.push({
   rua: 'Rua Tigrao',
   numero: 412,
   cidade: 'Sao Jose do Rio Preto',
   estado: 'SP',
   complemento: '',
   cep: '32131-321'
})

const exibirEndereco = estudante.endereco.forEach(function(endereco) {
   console.log(endereco.rua, endereco.numero);
})

const listaEnderecoCompleto = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecoCompleto)