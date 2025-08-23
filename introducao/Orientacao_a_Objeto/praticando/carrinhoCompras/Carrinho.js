import ItemPedido from "./ItemPedido.js";

export default class Carrinho {
  constructor() {
    this.itens = []; // array de ItemPedido
  }

  #findIndexByProduto(produto) {
    return this.itens.findIndex((i) => i.produto === produto);
  }

  adicionarItem(produto, quantidade = 1) {
    const idx = this.#findIndexByProduto(produto);
    if (idx >= 0) {
      // Soma quantidades
      const novaQtd = this.itens[idx].quantidade + quantidade;
      this.itens[idx].quantidade = novaQtd; // usa setter (valida)
    } else {
      this.itens.push(new ItemPedido(produto, quantidade));
    }
  }

  removerItem(produto) {
    this.itens = this.itens.filter((i) => i.produto !== produto);
  }

  get total() {
    return this.itens.reduce((sum, item) => sum + item.subtotal, 0);
  }

  get totalFormatado() {
    return `R$ ${this.total.toFixed(2)}`;
  }

  listar() {
    this.itens.forEach((i) => {
      console.log(`${i.produto.nome} x${i.quantidade} = R$ ${i.subtotal.toFixed(2)}`);
    });
    console.log(`Total: ${this.totalFormatado}`);
  }

  // Baixa estoque de todos os itens; se algum falhar, reverte
  confirmar() {
    const baixados = [];
    try {
      for (const item of this.itens) {
        item.produto.baixarEstoque(item.quantidade);
        baixados.push(item);
      }
      return true; // sucesso
    } catch (err) {
      // rollback
      for (const item of baixados.reverse()) {
        item.produto.reporEstoque(item.quantidade);
      }
      throw err;
    }
  }
}
