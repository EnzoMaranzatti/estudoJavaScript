/*
   Dado o array de preços abaixo:

   let precos = [10, 20, 30, 40];

   Calcule a soma total dos preços usando reduce.

*/

/*

   O reduce serve para pegar um array e transformá-lo em um único resultado — pode ser uma soma, um texto, um objeto, qualquer coisa.

   Para isso, ele vai percorrer todos os elementos do array e, a cada passo, atualizar um acumulador.

*/

let precos = [10, 20, 30, 40];

let calcularSoma = precos.reduce(function(acumulador, itemAtual) {
   return acumulador + itemAtual;
}, 0);

console.log(calcularSoma)