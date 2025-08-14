import Pagamento from "./Pagamento.js";

export default class PagamentoBoleto extends Pagamento {
  constructor(valor) {
    super(valor);
    this.linhaDigitavel = null;
  }

  processar() {
    // Boleto não paga na hora
    this.status = "PENDENTE";
    this.linhaDigitavel = `23790.${Math.floor(Math.random() * 1e5)}.${Math.floor(Math.random() * 1e5)}-X`;
  }
}
