export default class Desconto {
  calcular(valor) { throw new Error("calcular() não implementado."); }
}

// Desconto fixo
export class DescontoFixo extends Desconto {
  constructor(valorFixo) { super(); this.valorFixo = valorFixo; }
  calcular(valor) { return Math.max(0, valor - this.valorFixo); }
}

// Percentual (0..100)
export class DescontoPercentual extends Desconto {
  constructor(perc) { super(); this.perc = perc; }
  calcular(valor) {
    if (this.perc < 0 || this.perc > 100) throw new Error("Percentual inválido.");
    return valor * (1 - this.perc / 100);
  }
}

// Progressivo por faixas
export class DescontoProgressivo extends Desconto {
  calcular(valor) {
    let perc = 0;
    if (valor >= 600) perc = 15;
    else if (valor >= 300) perc = 10;
    else if (valor >= 100) perc = 5;
    return valor * (1 - perc / 100);
  }
}
