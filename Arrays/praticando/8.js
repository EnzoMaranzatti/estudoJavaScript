/*
   Usando o mesmo produtos, crie um novo array de strings no formato:

   "Produto: [nome], Preço: [preço]"
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

// const novoProduto = produto.map(function(item) {
//    return `Produto: ${item.nome}, Preço: ${item.preco}`
// })

const novoProduto = produto.map(item => `Produto: ${item.nome}, Preço: ${item.preco}`)

console.log(novoProduto)Ex