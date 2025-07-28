/*
  7 - Dado um array com preços em reais:

  const precosEmReais = [10, 25, 50, 100];

  Utilize o método map() para converter esses valores para dólares, assumindo que 1 dólar vale 5 reais. Imprima o novo array com os valores convertidos.
*/

const precosEmReais = [10, 25, 50, 100];

// const precosEmDolares = precosEmReais.map(function(preco) {
//    return preco / 5;
// });

// const precosEmDolares = precosEmReais.map(preco => preco / 5);

const precosEmDolares = precosEmReais.map(preco => {
   return preco / 5;
})

console.log(precosEmDolares)







