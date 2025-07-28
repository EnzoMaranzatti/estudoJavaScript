/*
   5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

   marca (string): marca do novo carro.
   modelo (string): modelo do novo carro.
   ano (number): ano de fabricação do novo carro.
   cor (string): cor do novo carro.
   Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

   Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

   Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.
*/

const carro = {
   marca: 'Fiat',
   modelo: 'Palio',
   ano: 2005,
   cor: 'Azul',
   ligado: false,
   ligar: function () {
      if (this.ligado === true) {
         console.log('Carro ja esta ligado');
      }
      else {
         console.log('Ligando carro...');
         this.ligado = true
         console.log('Carro ligado...');
      }
   },
   desligar: function () {
      if (this.ligado === false) console.log('Carro ja esta desligado');
      else {
         console.log('Desligando carro...');
         this.ligado = false;
         console.log('Carro desligado...');
      }
   },
   obterDetalhes: function () {
      let detalhes = '';
      for (let prop in this) {
         if (typeof this[prop] !== 'function') {
            detalhes += `${prop}: ${this[prop]}\n`;
         }
      }
      return detalhes;
   }
}

const carroNovo = {
   marca: 'Toyota',
   modelo: 'Corolla',
   ano: 2022,
   cor: 'Preto'
};

const carroNovosDetalhes = {...carro, ...carroNovo};

console.log('Carro com novos detalhes: ')
console.log(carroNovosDetalhes)

