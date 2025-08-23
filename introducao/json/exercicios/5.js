/*

   Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

   id (number): identificador da pessoa.
   nome (string): nome da pessoa.
   idade (number): idade da pessoa

   Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

   Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

   Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.

*/
const pessoa = {
   id: 1,
   nome: 'João',
   idade: 30,
   peso: 70.5,
   altura: 1.80,
   telefone: '1234567890',
}


const copiarPessoa = JSON.parse(JSON.stringify(pessoa));
copiarPessoa.nome = 'Rafael'
console.log(copiarPessoa);
console.log(pessoa);