export default class Veiculo {
  #valor;

  constructor(marca, modelo, ano, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.#valor = valor;
  }

  // Getter formatado para exibição
  get valor() {
    return `R$ ${this.#valor.toFixed(2)}`;
  }

  // Setter com validação (lança erro se negativo)
  set valor(novoValor) {
    if (novoValor < 0) {
      throw new Error("Valor inválido. O valor não pode ser negativo.");
    }
    this.#valor = novoValor;
  }

  // Método “comum” entre todas as classes (base do polimorfismo)
  informacoes() {
    console.log(`VEÍCULO:
Marca: ${this.marca}
Modelo: ${this.modelo}
Ano: ${this.ano}
Valor: ${this.valor}`);
  }
}
