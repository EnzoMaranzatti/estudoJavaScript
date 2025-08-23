/*

   Dado o array
   
   const valores = [12, 45, 7, 89, 23];

   Use reduce para encontrar o maior valor.

*/

const valores = [12, 45, 7, 89, 23];

const maior = valores.reduce(function(acumulador, atual) {
  return acumulador > atual ? acumulador : atual;
});

console.log(maior); // 89
