/*
   Crie uma função que receba dois arrays e os concatene em um único array.
*/

function meuArray(array1, array2) { return array1.concat(array2); }

const nomes = ['Enzo Vinicius', 'Maria Vitoria', 'Eduardo Henrique'];
const salarios = [1000, 2000, 3000];

const FUNC = meuArray(nomes, salarios);

console.log(FUNC);
