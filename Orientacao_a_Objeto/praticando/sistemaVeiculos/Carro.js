import Veiculo from "./Veiculo.js";

export default class Carro extends Veiculo {
  constructor(marca, modelo, ano, valor, portas) {
    super(marca, modelo, ano, valor);
    this.portas = portas;
  }

  // Sobrescreve o método mantendo o MESMO nome
  informacoes() {
    console.log(`CARRO:
Marca: ${this.marca}
Modelo: ${this.modelo}
Ano: ${this.ano}
Valor: ${this.valor}
Portas: ${this.portas}`);
  }
}
