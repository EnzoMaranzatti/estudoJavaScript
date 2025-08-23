/*
   O que é DOM?
   
   - O DOM é uma representação em árvore do documento HTML carregado no navegador.

   - Cada elemento do HTML (como <div>, <p>, <h1>, etc.) é transformado em um nó/objeto que o JavaScript pode acessar e manipular.

   - Isso permite alterar a página em tempo real: mudar texto, estilo, atributos, adicionar/remover elementos, reagir a eventos (cliques, teclas, etc).

   Pense no DOM como uma ponte entre o HTML e o JavaScript.
*/

const titulo = document.getElementById("titulo");
const paragrafo = document.querySelector(".mensagem");
const botao = document.getElementById("btn");

titulo.textContent = "Bem Vindo ao DOM!";
paragrafo.innerHTML = "Agora este texto foi <b>alterado</b> pelo JS.";

botao.addEventListener("click", () => {
   alert("Você clicou no botão!");
})

/*
   1. Selecionar Elementos
      - document.getElementById("id");
      - document.querySelector(".classe");
      - document.getSelectorAll("tag ou seletor")

   2. Alterar Conteúdo
      - .textContent: Só texto
      - .innerHTML: Interpreta tags HTML

   3. Eventos
      - .addEventListener("tipo", callback): reage a ações (cliques, teclas, etc)
*/