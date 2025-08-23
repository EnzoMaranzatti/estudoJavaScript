/*
   4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

   Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

   Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

   Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
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

// Isso cria a propriedade placa no objeto, mas com enumerable: false, ou seja, ela não vai aparecer em for...in ou em Object.keys.
Object.defineProperty(carro, 'placa', {
   value: 'ABC1234',
   enumerable: false
})

console.log(carro.obterDetalhes());
console.log(Object.keys(carro));

// Acessando diretamente
console.log(carro.placa);
