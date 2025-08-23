/*
  6 - Você tem um array de idades de diferentes pessoas:

  const idades = [12, 17, 19, 21, 14, 30, 25];

  Utilize o método filter() para criar um novo array que contenha apenas as idades maiores ou iguais a 18. Imprima esse novo array no console.
*/

const idades = [12, 17, 19, 21, 14, 30, 25];

// const maiorIdade = idades.filter(idade => idade >= 18);
const maiorIdade = idades.filter(function(idade) {
  return idade >= 18;
})
console.log(maiorIdade)







