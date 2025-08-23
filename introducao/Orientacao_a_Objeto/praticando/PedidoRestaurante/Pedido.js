import ItemPedido from "./ItemPedido.js";

export default class Pedido {
   constructor() { this.itens = []; this._desconto = null; }

   #indexOf(produto) { return this.itens.findIndex(i => i.produto === produto); }

   adicionarItem(produto, qtd = 1) {
      const idx = this.#indexOf(produto);
      if (idx >= 0) this.itens[idx].quantidade += qtd;
      else this.itens.push(new ItemPedido(produto, qtd));
   }

   removerItem(produto) { this.itens = this.itens.filter(i => i.produto !== produto); }

   get totalBruto() { return this.itens.reduce((s, i) => s + i.subtotal, 0); }
   get totalBrutoFormatado() { return `R$ ${this.totalBruto.toFixed(2)}`; }

   aplicarDesconto(estrategia) { this._desconto = estrategia; }

   get totalComDesconto() {
      const base = this.totalBruto;
      return this._desconto ? this._desconto.calcular(base) : base;
   }
   get totalComDescontoFormatado() { return `R$ ${this.totalComDesconto.toFixed(2)}`; }

   listar() {
      this.itens.forEach(i =>
         console.log(`${i.produto.nome} x${i.quantidade} = ${i.subtotalFormatado}`)
      );
      console.log("Total bruto:", this.totalBrutoFormatado);
      if (this._desconto) console.log("Total com desconto:", this.totalComDescontoFormatado);
   }

   confirmar() {
      const baixados = [];
      try {
         for (const item of this.itens) {
            item.produto.baixarEstoque(item.quantidade);
            baixados.push(item);
         }
         return true;
      } catch (e) {
         for (const item of baixados.reverse()) item.produto.reporEstoque(item.quantidade);
         throw e;
      }
   }
}
