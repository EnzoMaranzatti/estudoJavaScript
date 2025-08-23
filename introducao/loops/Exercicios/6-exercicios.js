/*

   Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

*/

const num = [100, 240, 340, 230, 250, 2010];
let somaNum = 0;


for(let numeros of num) somaNum += numeros; 

somaNum = somaNum / num.length;

console.log(somaNum);