export default class Pagamento {
  constructor(valor) {
    if (typeof valor !== "number" || valor <= 0) {
      throw new Error("Valor do pagamento inválido.");
    }
    this.valor = valor;
    this.status = "PENDENTE"; // PENDENTE | PAGO | FALHOU
  }

  processar() {
    throw new Error("processar() não implementado.");
  }
}
