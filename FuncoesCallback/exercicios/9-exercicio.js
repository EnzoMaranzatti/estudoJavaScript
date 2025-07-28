/*
  Dado um array de números:

  const valores = [10, 20, 30, 40];

  Utilize o método reduce() para calcular a soma total dos valores. Mostre a soma no console.


*/

const valores = [10, 20, 30, 40];

const somaTotal = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(somaTotal)