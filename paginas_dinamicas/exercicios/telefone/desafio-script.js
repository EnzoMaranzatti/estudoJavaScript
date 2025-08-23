const telefone = document.getElementById("telefone")
const teclas = document.querySelectorAll(".tecla");

teclas.forEach(tecla => {
   tecla.addEventListener("click", () => {
      telefone.value += tecla.value;
   });
});

