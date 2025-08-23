/*
   3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

   Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

   ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
   ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
   desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
   obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
   Em seguida, faça o seguinte:

   Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
   Chame o método obterDetalhes e imprima no console a string retornada.
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

console.log(carro.obterDetalhes());
carro.ligar();
console.log(carro.obterDetalhes());
carro.desligar();
console.log(carro.obterDetalhes());

