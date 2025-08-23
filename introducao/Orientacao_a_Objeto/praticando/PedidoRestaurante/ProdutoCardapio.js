export default class ProdutoCardapio {
   #preco; #estoque;
   constructor(nome, preco, estoque) {
      this.nome = nome;
      this.preco = preco;      // valida via setter
      this.estoque = estoque;  // valida via setter
   }
   get preco() { return `R$ ${this.#preco.toFixed(2)}`; }
   get precoNumero() { return this.#preco; }
   set preco(v) {
      if (typeof v !== "number" || v <= 0) throw new Error("Preço inválido.");
      this.#preco = v;
   }
   get estoque() { return this.#estoque; }
   set estoque(q) {
      if (!Number.isInteger(q) || q < 0) throw new Error("Estoque inválido.");
      this.#estoque = q;
   }
   baixarEstoque(q) {
      if (!Number.isInteger(q) || q <= 0) throw new Error("Qtd inválida.");
      if (q > this.#estoque) throw new Error(`Sem estoque de ${this.nome}.`);
      this.#estoque -= q;
   }
   reporEstoque(q) {
      if (!Number.isInteger(q) || q <= 0) return;
      this.#estoque += q;
   }
}
