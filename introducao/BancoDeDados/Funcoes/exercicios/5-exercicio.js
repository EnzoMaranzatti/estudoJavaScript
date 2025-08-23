/*
   Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
*/

// const calculaPotencia = (base, expoente) => base ** expoente;
const calculaPotencia = (base, expoente) => Math.pow(base, expoente);

console.log(calculaPotencia(2,3));