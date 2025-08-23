/*
   Crie um array chamado produtos com 3 objetos, cada um com nome e preço.

   Adicione um novo produto usando push.

   Depois mostre o nome de cada produto usando forEach.
*/

const produto = [
   {nome: 'Caneta', preco: 1.50},
   {nome: 'Lápis', preco: 0.50},
   {nome: 'Borracha', preco: 0.25}
]

produto.push({nome: 'Calça', preco: 50.00});

produto.forEach(function(item) {
   return console.log(item.nome, item.preco);
})