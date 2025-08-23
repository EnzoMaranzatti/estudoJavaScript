/*
   1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
*/

const nomes = ['Enzo', 'Maria Vitoria', 'Eduardo Henrique', 'Daiane Luizetti', 'Katia Maranzatti'];

const listaNomes = nomes.forEach((nome, indice) => {
   console.log(`Indice ${indice}: ${nome}`);
});