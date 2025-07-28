/*
Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
*/

const nome = 'Maria Vitoria';
const idade = 19;
const altura = 1.59;
const peso = 57.3;
const casada = true;
let template = `${nome} tem ${idade} anos, com aproximadamente ${altura} metros de altura, com o equivalente ${peso} de peso em kilos`;

if(casada === true) {
   template += ` e seu estado civil é casada [${casada}]`;
} else {
   template += `e seu estado civil não é casada [${casada}]`;
}


console.log(template)
