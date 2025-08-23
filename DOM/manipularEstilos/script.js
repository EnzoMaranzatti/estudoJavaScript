const titulo = document.getElementById("titulo");
const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
   titulo.style.color = "red"; // Muda a cor
   titulo.style.fontSize = "40px"; // Muda tamanho
   titulo.style.background = "yellow";
})