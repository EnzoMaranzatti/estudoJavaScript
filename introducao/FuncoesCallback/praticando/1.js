/*
   Crie uma função executar que recebe outra função como parâmetro e a chama dentro dela.

   Teste passando uma função que imprime "Callback executado".

*/

function executar(callback) {}

function callback() {
   console.log("Callback executado");
}

executar(callback());