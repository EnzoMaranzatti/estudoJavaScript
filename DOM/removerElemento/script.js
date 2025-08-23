 const mensagem = document.getElementById("mensagem");
  const botao = document.getElementById("remover");

  botao.addEventListener("click", () => {
    mensagem.remove();
  });