export default class Funcionario {
   #salario
   constructor(nome, salario) {
      this.nome = nome;
      this.#salario = salario;
   }

   get salario() {
      return `R$${this.#salario.toFixed(2)}`;
   }

   set salario(novoSalario) {
      if (novoSalario > 0) {
         this.#salario = novoSalario;
      }
      else {
         throw new Error("Salario invalido!!");
      }
   }

   apresentar() {
      console.log(`Funcionario ${this.nome}, tem o salario ${this.salario}`);
   }
}