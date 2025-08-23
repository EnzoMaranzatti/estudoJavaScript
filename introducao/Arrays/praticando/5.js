/*

   Dado este array de números:

   let numeros = [1, 2, 3, 4, 5, 6];

   Use map para criar um novo array onde cada número seja o dobro do original.

   Use filter para criar um novo array apenas com os números pares.

*/

let numeros = [1, 2, 3, 4, 5, 6];

// const newNumber = numeros.map(function(num) {
//    return num * 2;
// })

const newNumber = numeros.map(num => num * 2);

console.log(newNumber)

// const numerosPares = numeros.filter(function(num) {
//    return num % 2 === 0;
// })

const numerosPares = numeros.filter(num => num % 2 === 0);

console.log(numerosPares)