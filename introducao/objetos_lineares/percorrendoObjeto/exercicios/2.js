/*
   2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

   marca (string): marca do carro.
   modelo (string): modelo do carro.
   ano (number): ano de fabricação do carro.
   cor (string): cor do carro.
   Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

   Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

   Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
*/

const carro = {
   marca: 'Fiat',
   modelo: 'Palio',
   ano: 2005,
   cor: 'Azul',
}

// for(let propriedade in carro) {
//    console.log(carro[propriedade]);
// }

carro.caracteristica = 'Pneus de liga leve';

for(let propriedade in carro) {
   console.log(propriedade, ' - ', carro[propriedade], '(', typeof propriedade, ')');
}

