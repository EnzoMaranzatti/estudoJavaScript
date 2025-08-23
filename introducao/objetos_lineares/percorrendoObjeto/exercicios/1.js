/*
   Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

   Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

   Desempenho excelente: média >= 9
   Bom desempenho: 7.5 <= média entre 7.6 e 8.9
   Desempenho regular: 6 <= média entre 6 e 7.5
   Desempenho insuficiente: média < 6
   Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

   Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
*/

const pessoa = {
   nome: 'João',
   materia: materia => materia,
   notas: function (itermediaria, semestral, trabalho) {
      this.media = ((itermediaria + semestral) / 2) * 0.7 + trabalho * 0.3;
      return this.media;
   },
   media: null,
   classificarDesempenho: function() {
      if(this.media >= 9) {
         console.log(`O aluno ${this.nome} tem desempenho excelente`);
      } 
      else if(this.media >= 7.5 && this.media < 9) {
         console.log(`O aluno ${this.nome} tem bom desempenho`)
      }
      else if(this.media >= 6 && this.media < 7.5) {
         console.log(`O aluno ${this.nome} tem desempenho regular`)
      }
      else {
         console.log(`O aluno ${this.nome} tem desempenho insuficiente`)
      }
   }
}

pessoa.materia('matematica');
pessoa.notas(0, 8, 9);
console.log(pessoa.media.toFixed(2));
pessoa.classificarDesempenho();