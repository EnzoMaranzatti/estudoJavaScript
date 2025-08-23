import Pagamento from "./Pagamento.js";

export default class PagamentoCartao extends Pagamento {
  constructor(valor, numeroMascarado) {
    super(valor);
    this.numeroMascarado = numeroMascarado;
  }

  processar() {
    if (this.valor > 5000) {
      this.status = "FALHOU";
      throw new Error("Transação recusada: limite do cartão excedido.");
    }
    this.status = "PAGO";
  }
}
