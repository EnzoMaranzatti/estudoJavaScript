const lista = document.getElementById("lista");
const botao = document.getElementById("add");

botao.addEventListener("click", () => {
   const novoItem = document.createElement("li");
   novoItem.textContent = "Novo item adicionado";
   lista.appendChild(novoItem);
});