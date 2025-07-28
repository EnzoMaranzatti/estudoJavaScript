/*

   Problema: Remover nomes repetidos de uma lista de chamada.

   Solução com Set:
      Criamos um novo Set a partir do array original, o que automaticamente remove duplicatas, já que Set armazena apenas valores únicos.
      Convertemos o Set de volta para um array utilizando o operador de espalhamento (...) para que possamos continuar utilizando os métodos de array normalmente.
      Código:

   Set: Um tipo de dado que armazena valores únicos
   Operador de espalhamento (...): Utilizado para converter o Set de volta para um array.
   
*/

const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'Joao', 'Joao', 'Joao', 'Joao', 'Joao', 'Joao'];

// Set = conjunto que armazena valores unicos
// const nomesAtualizados = new Set(nomes);

// Transformando nomesAtualizados para um array novamente
const listaNomesAtualizados = [...new Set(nomes)];

console.log(listaNomesAtualizados);