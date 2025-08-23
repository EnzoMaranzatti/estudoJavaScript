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

for(let chave in estudante) {
   const tipo = typeof estudante[chave];

   if(tipo !== 'object' && tipo !== 'function') {
      const texto = `a chave ${chave} tem o valor ${estudante[chave]}`;
      console.log(texto); 
   }
   // Neste caso ele vai transformar cada valor em string, porém valores tipo object e function são valores complexos sendo assim, ele não é convertido em string. (O interpretador, não da erro, mas o retorno não é como esperado).
   //const texto = `a chave ${chave} tem o valor ${estudante[chave]}`;
}