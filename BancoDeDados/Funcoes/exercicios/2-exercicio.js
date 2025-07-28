/*
   Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
*/

const verificarIdade = (idade) => {
   let maiorIdada;
   if(idade >= 18) maiorIdada = `Maior de Idade ${idade}`;
   else maiorIdada = `Menor de Idade ${idade}`;
   return maiorIdada;
};

console.log(verificarIdade(19));

