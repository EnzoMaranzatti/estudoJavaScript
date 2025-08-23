export default class ItemPedido {
   #quantidade;
   constructor(produto, quantidade = 1) {
      this.produto = produto;
      this.quantidade = quantidade; // valida
   }

   get quantidade() { return this.#quantidade; }
   set quantidade(q) {
      if (!Number.isInteger(q) || q < 1) throw new Error("Qtd deve ser inteiro >= 1.");
      this.#quantidade = q;
   }
   
   get subtotal() { return this.produto.precoNumero * this.#quantidade; }
   get subtotalFormatado() { return `R$ ${this.subtotal.toFixed(2)}`; }
}
