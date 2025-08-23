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
   }],
   media: 7.5,
   estaAprovado: function() {
      const mediaBase = 7;
      return this.media >= mediaBase ? true : false;
   }
   //estaAprovado: (mediaBase) => this.media >= mediaBase ? true : false
   // this (isso): referencia o objeto atual, no caso o estudante. Arrow funcion não consegue usar o this
}

console.log(estudante.estaAprovado());

