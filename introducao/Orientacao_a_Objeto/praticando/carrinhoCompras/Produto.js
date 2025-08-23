export default class Produto {
  #preco;
  #estoque;

  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;       // usa o setter (valida)
    this.estoque = estoque;   // usa o setter (valida)
  }

  // Para exibir bonitinho
  get preco() {
    return `R$ ${this.#preco.toFixed(2)}`;
  }
  // Para cálculos
  get precoNumero() {
    return this.#preco;
  }
  set preco(valor) {
    if (typeof valor !== "number" || valor <= 0) {
      throw new Error("Preço inválido: precisa ser número > 0.");
    }
    this.#preco = valor;
  }

  get estoque() {
    return this.#estoque;
  }
  set estoque(qtd) {
    if (!Number.isInteger(qtd) || qtd < 0) {
      throw new Error("Estoque inválido: precisa ser inteiro >= 0.");
    }
    this.#estoque = qtd;
  }

  baixarEstoque(qtd) {
    if (!Number.isInteger(qtd) || qtd <= 0) {
      throw new Error("Quantidade inválida para baixa de estoque.");
    }
    if (qtd > this.#estoque) {
      throw new Error(`Estoque insuficiente de ${this.nome}.`);
    }
    this.#estoque -= qtd;
  }

  reporEstoque(qtd) {
    if (!Number.isInteger(qtd) || qtd <= 0) return;
    this.#estoque += qtd;
  }
}
