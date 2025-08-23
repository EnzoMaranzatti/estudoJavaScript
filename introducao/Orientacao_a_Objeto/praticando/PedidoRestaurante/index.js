import ProdutoCardapio from "./ProdutoCardapio.js";
import Pedido from "./Pedido.js";
import { DescontoProgressivo } from "./Desconto.js";
import { PagamentoPix, PagamentoCartao, PagamentoDinheiro } from "./Pagamento.js";

// 1) Produtos
const burger = new ProdutoCardapio("Hamburguer", 28, 20);
const batata = new ProdutoCardapio("Batata", 15, 30);
const refri = new ProdutoCardapio("Refrigerante", 9, 50);
const sobrem = new ProdutoCardapio("Sobremesa", 12, 10);

// 2) Pedido
const pedido = new Pedido();
pedido.adicionarItem(burger, 2);
pedido.adicionarItem(batata, 1);
pedido.adicionarItem(burger, 1); // soma
pedido.adicionarItem(refri, 3);
pedido.listar();

// 3) Desconto
pedido.aplicarDesconto(new DescontoProgressivo());
console.log("Total com desconto:", pedido.totalComDescontoFormatado);

// 4) Confirmar
try {
  pedido.confirmar();
  console.log("Pedido confirmado!");
} catch (e) {
  console.log("Falha ao confirmar:", e.message);
}

// 5) Pagamentos (polimorfismo)
const total = pedido.totalComDesconto;
const pagamentos = [
  new PagamentoPix(total),
  new PagamentoCartao(total),
  new PagamentoDinheiro(total, /* valor entregue */ 200),
];

pagamentos.forEach(p => {
  try { p.processar(); } catch (e) { console.log(`${p.constructor.name} erro:`, e.message); }
  console.log(p.constructor.name, "->", p.status, p.troco !== undefined ? ` | troco: R$ ${p.troco.toFixed(2)}` : "");
});
