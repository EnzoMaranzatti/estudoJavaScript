/*
   5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

   titular: uma string representando o titular da conta.
   saldo: um número representando o saldo da conta.
   depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
   sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
   Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

   nome: uma string representando o nome do cliente.
   conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
   Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

   Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
*/

const contaBancaria = {
	titular: "Joao",
	saldo: 1000.00,
	depositar: function(valor) {
      this.saldo += valor;
   },
	sacar: function(valor) { 
      valor > this.saldo ? console.log("Saldo insuficiente") : this.saldo -= valor;
   }
}

const cliente = {
   nome: "Joao",
   conta: contaBancaria
}

function mostrarSaldo(cliente) {
   console.log(`O nome do cliente é ${cliente.nome} e seu saldo é R$ ${cliente.conta.saldo.toFixed(2)}`);
}

contaBancaria.depositar(2000); // 3000
contaBancaria.sacar(2500); // 500
mostrarSaldo(cliente);

contaBancaria.sacar(600); // Saldo insuficiente
contaBancaria.depositar(800);
contaBancaria.sacar(600);
mostrarSaldo(cliente);