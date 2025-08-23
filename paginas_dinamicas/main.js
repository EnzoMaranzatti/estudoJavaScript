/*

   querySelector()
      - Seleciona um elemento no HTML
      - Caso seja um uma classe temos que colocar ".classe"
      - Se for um id temos que colocar "#id"
      - Se for a tag HTML colocamos "nomeTag"

*/
const btn_pom = document.querySelectorALL(".tecla");

btn_pom.addEventListener("click", () => {
   alert('Testando');
})