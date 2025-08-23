/*

   Dado o array
   
   const palavras = ["JavaScript", "é", "incrível"];

*/

const palavras = ["JavaScript", "é", "incrível"];

const frase = palavras.reduce(function(acumulador, atual) {
  return acumulador + " " + atual;
});

console.log(frase); 
