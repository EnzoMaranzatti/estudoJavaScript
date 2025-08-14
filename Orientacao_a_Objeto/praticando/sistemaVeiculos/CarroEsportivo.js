import Carro from "./Carro.js";

export default class CarroEsportivo extends Carro {
  constructor(marca, modelo, ano, valor, portas, velocidadeMax) {
    super(marca, modelo, ano, valor, portas);
    this.velocidadeMax = velocidadeMax;
  }

  // Também sobrescreve, mantendo o mesmo nome do método
  informacoes() {
    console.log(`CARRO ESPORTIVO:
Marca: ${this.marca}
Modelo: ${this.modelo}
Ano: ${this.ano}
Valor: ${this.valor}
Portas: ${this.portas}
Velocidade Máxima: ${this.velocidadeMax} km/h`);
  }
}
