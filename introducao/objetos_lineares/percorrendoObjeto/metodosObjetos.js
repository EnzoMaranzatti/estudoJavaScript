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

const chavesObjeto = Object.keys(estudante);
// Retorna um array com uma lista das propriedade(chaves) do objeto
console.log(chavesObjeto);

if(!chavesObjeto.includes('rg')) {
   console.error('é necessario ter um endereço cadastrado');
}

const valoresObjeto = Object.values(estudante);
// Retorna os valores das propriedades
console.log(valoresObjeto);

const entriesObjeto = Object.entries(estudante);
// Ele retorna um array dos proprios pares chave valor
console.log(entriesObjeto);

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }