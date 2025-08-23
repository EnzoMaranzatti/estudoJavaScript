import Funcionario from './Funcionario.js';

export default class Gerente extends Funcionario {
   constructor(nome, salario, bonus) {
      super(nome, salario);
      this.bonus = bonus;
   }

   apresentar() {
      console.log(`Gerente ${this.nome}, tem o salario de ${this.salario} com o bonus de ${this.bonus}`);
   }
}