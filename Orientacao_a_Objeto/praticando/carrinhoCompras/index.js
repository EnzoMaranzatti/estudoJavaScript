import Produto from "./Produto.js";
import Carrinho from "./Carrinho.js";
import PagamentoPix from "./PagamentoPix.js";
import PagamentoCartao from "./PagamentoCartao.js";
import PagamentoBoleto from "./PagamentoBoleto.js";

// 1) Produtos
const p1 = new Produto("Mouse", 80, 10);
const p2 = new Produto("Teclado", 150, 5);
const p3 = new Produto("Monitor", 1200, 2);

// 2) Carrinho
const carrinho = new Carrinho();
carrinho.adicionarItem(p1, 2);
carrinho.adicionarItem(p2, 1);
carrinho.adicionarItem(p1, 3); // soma com o mouse anterior (total mouse = 5)
carrinho.adicionarItem(p3, 1);

console.log("— Itens do carrinho —");
carrinho.listar();

// 3) Teste de setter inválido
console.log("\n— Teste de setter inválido —");
try {
  p1.preco = 0; // deve lançar
} catch (e) {
  console.log("Erro esperado (preço):", e.message);
}
try {
  p2.estoque = -1; // deve lançar
} catch (e) {
  console.log("Erro esperado (estoque):", e.message);
}

// 4) Confirmar (baixa estoque atomically)
console.log("\n— Confirmando o carrinho (baixa de estoque) —");
try {
  carrinho.confirmar();
  console.log("Carrinho confirmado com sucesso!");
} catch (e) {
  console.log("Falha ao confirmar carrinho:", e.message);
}

// 5) Estoque restante
console.log("\n— Estoque após confirmação —");
console.log(p1.nome, "->", p1.estoque);
console.log(p2.nome, "->", p2.estoque);
console.log(p3.nome, "->", p3.estoque);

// 6) Pagamentos (polimorfismo)
const total = carrinho.total;
console.log("\nTotal numérico:", total, " | formatado:", carrinho.totalFormatado);

const pagamentos = [
  new PagamentoPix(total),
  new PagamentoCartao(total, "**** **** **** 1234"),
  new PagamentoBoleto(total),
];

console.log("\n— Processando pagamentos (polimorfismo) —");
pagamentos.forEach((p) => {
  try {
    p.processar();
  } catch (e) {
    console.log(`${p.constructor.name} falhou: ${e.message}`);
  }
  console.log(p.constructor.name, "-> status:", p.status);
  if (p.linhaDigitavel) console.log("Linha digitável:", p.linhaDigitavel);
});
