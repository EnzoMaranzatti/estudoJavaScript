import Funcionario from "./Funcionario.js";
import Gerente from "./Gerente.js";

const novoFuncionario = new Funcionario("Maria Vitoria", 2500);
const novoGerente = new Gerente("João Pedro", 3000, 0.80);

novoFuncionario.apresentar();
novoGerente.apresentar();
novoGerente.salario = 6000;
console.log(novoGerente.salario);
novoFuncionario.salario = -1000;
// console.log(novoFuncionario.salario);