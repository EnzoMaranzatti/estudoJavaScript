export default class ItemPedido {
  #quantidade;

  constructor(produto, quantidade = 1) {
    this.produto = produto;
    this.quantidade = quantidade; // usa o setter (valida)
  }

  get quantidade() {
    return this.#quantidade;
  }
  set quantidade(q) {
    if (!Number.isInteger(q) || q < 1) {
      throw new Error("Quantidade do item deve ser inteiro >= 1.");
    }
    this.#quantidade = q;
  }

  // Valor numérico para cálculos
  get subtotal() {
    return this.produto.precoNumero * this.#quantidade;
  }

  // Só para exibição
  get subtotalFormatado() {
    return `R$ ${this.subtotal.toFixed(2)}`;
  }
}
