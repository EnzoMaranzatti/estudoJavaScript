const estudantes = require('./estudantes.json');

function filtrarPropriedade(lista, propriedade) {
   return lista.filter(estudante => {
      return !estudante.endereco.hasOwnProperty(propriedade);
   });
}

/*
   O método hasOwnProperty() é uma função que pertence ao objeto em JavaScript e é utilizada para verificar se um objeto possui uma propriedade específica como sua própria propriedade, ou seja, não herdada de seu protótipo.

   Como funciona?
   
   Quando você chama objeto.hasOwnProperty('propriedade'), ele retorna true se o objeto tiver a propriedade especificada e false caso contrário. Isso é útil para evitar confusões com propriedades que podem ser herdadas de objetos pai.

   Por que usar hasOwnProperty()?
   
   Evitar Propriedades Herdadas: Se você estiver trabalhando com herança de objetos, pode haver propriedades que não pertencem diretamente ao objeto, mas sim ao seu protótipo. Usar hasOwnProperty() garante que você está verificando apenas as propriedades que pertencem ao objeto em si.

   Segurança: Em situações onde você não tem controle sobre a estrutura do objeto, usar hasOwnProperty() pode ajudar a evitar erros ao acessar propriedades que podem não existir.

   Conclusão
   O hasOwnProperty() é uma ferramenta valiosa para garantir que você está lidando com as propriedades corretas de um objeto, especialmente em contextos onde a herança pode complicar as coisas. Se precisar de mais exemplos ou exercícios sobre o uso desse método, é só avisar!
*/

const listaEnderecos  = filtrarPropriedade(estudantes, 'cep');

console.log(listaEnderecos);