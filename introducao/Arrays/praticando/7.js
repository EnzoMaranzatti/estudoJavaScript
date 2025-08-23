/*
   A partir do array produtos do exercício 1, crie um novo array que contenha apenas os produtos com preço acima de 50.
*/

const produto = [
   {nome: 'Caneta', preco: 1.50},
   {nome: 'Lápis', preco: 0.50},
   {nome: 'Borracha', preco: 0.25},
   {nome: 'macbook', preco: 5000.00},  
   {nome: 'teclado', preco: 200.00},
   {nome: 'mouse', preco: 50.00},
   {nome: 'monitor', preco: 800.00},
   {nome: 'notebook', preco: 3000.00},
   {nome: 'impressora', preco: 1500.00},
]

// const produtosAcimaDe50 = produto.filter(function(item) {
//    return item.preco > 50;
// })

const produtosAcimaDe50 = produto.filter(item => item.preco > 50);

console.log(produtosAcimaDe50);

