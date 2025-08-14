const user = {
   nome: 'Juliana',
   email: 'juliana@gmail.com',
   nascimento: '1990-01-01',
   role: 'estudante',
   ativo: true,
   exibirInfo: function() {
      console.log(this.nome, this.email);
   }
}

// user.exibirInfo(); - Retorna nome e email

const exibir = user.exibirInfo;
exibir(); // retorna undefined. -> está sem contexto

/*

   O método bind() é uma função essencial em JavaScript quando se trata de controlar o contexto de execução de uma função, especialmente em relação ao this. Em termos mais simples, bind() permite que você defina explicitamente qual será o valor de this quando uma função for chamada.

   Como funciona:

   Cria uma nova função: bind() não modifica a função original. Em vez disso, ele retorna uma nova função "ligada".
   Define o valor de this: A nova função tem o valor de this pré-definido para o objeto que você passa como argumento para bind().
   Argumentos opcionais: Você também pode passar argumentos para bind(), que serão pré-definidos e passados para a função quando ela for chamada.

*/

const exibirNome = exibir.bind(user);
exibirNome();

