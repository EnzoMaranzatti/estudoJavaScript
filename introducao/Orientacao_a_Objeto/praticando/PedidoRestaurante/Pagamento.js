export default class Pagamento {
  constructor(valor) {
    if (typeof valor !== "number" || valor <= 0) throw new Error("Valor inválido.");
    this.valor = valor;
    this.status = "PENDENTE";
  }
  processar() { throw new Error("processar() não implementado."); }
}

export class PagamentoPix extends Pagamento {
  processar() { this.status = "PAGO"; }
}

export class PagamentoCartao extends Pagamento {
  processar() {
    if (this.valor > 1000) { this.status = "FALHOU"; throw new Error("Limite do cartão excedido."); }
    this.status = "PAGO";
  }
}

export class PagamentoDinheiro extends Pagamento {
  constructor(valor, valorEntregue) { super(valor); this.valorEntregue = valorEntregue; this.troco = 0; }
  processar() {
    if (this.valorEntregue < this.valor) { this.status = "FALHOU"; throw new Error("Dinheiro insuficiente."); }
    this.troco = +(this.valorEntregue - this.valor).toFixed(2);
    this.status = "PAGO";
  }
}
