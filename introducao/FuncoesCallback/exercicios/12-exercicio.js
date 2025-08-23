/*
   2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
*/

const valores = [1, 2, 3, 4, 5];

const somaValores = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(somaValores);