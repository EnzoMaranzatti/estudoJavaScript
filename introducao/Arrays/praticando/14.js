/*

  Dado o array
   
  const produtos = [
    { nome: "Camisa", preco: 50 },
    { nome: "Calça", preco: 100 },
    { nome: "Boné", preco: 30 }
  ];

  Use reduce para calcular o total do carrinho.

*/

const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Boné", preco: 30 }
];

// const totalProdutos = produtos.reduce(function(acumulador, itemAtual) {
//   return acumulador += itemAtual.preco;
// }, 0)

const totalProdutos = produtos.reduce((acomulador, itemAtual) => acomulador += itemAtual.preco, 0)

console.log(totalProdutos)

