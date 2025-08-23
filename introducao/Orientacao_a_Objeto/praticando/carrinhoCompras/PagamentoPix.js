import Pagamento from "./Pagamento.js";

export default class PagamentoPix extends Pagamento {
  processar() {
    this.status = "PAGO";
  }
}
