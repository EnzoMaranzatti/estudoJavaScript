/*

   querySelector()
      Funcionalidades: Este método permite que você selecione o primeiro elemento dentro do documento que corresponde a um seletor CSS especificado.

      Retorno: Retorna o primeiro elemento correspondente ou null se nenhum elemento for encontrado.

      Uso: Ideal quando você precisa acessar um único elemento específico na página e tem um seletor CSS que o identifica de forma única.

   querySelectorAll()
      Funcionalidade: Este método retorna todos os elementos dentro do documento que correspondem a um seletor CSS especificado.

      Retorno: Retorna um NodeList, que é uma coleção de elementos que se parecem com um array. Se nenhum elemento for encontrado, retorna um NodeList vazio.

      Uso: Ideal quando você precisa acessar múltiplos elementos que compartilham um mesmo seletor e precisa iterar sobre eles para adicionar um evento, modificar um estilo ou realizar alguma outra operação.

   getElementById()
      é um método que permite selecionar um elemento HTML através do seu atributo id. Ele é muito eficiente e rápido, sendo uma ótima opção quando você precisa acessar um elemento específico e conhece o seu id.

*/

function tocaSom(idSom) {
   const elemento = document.querySelector(idSom);
   if(elemento !== null && elemento.localName === 'audio') {
      elemento.play()
   } else {
      alert("Id som inválido!");
   }
   
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i <= listaDeTeclas.length; i++) {
   const tecla = listaDeTeclas[i];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`;

   tecla.onclick = function() {
      tocaSom(idAudio);
   };

   // Quando uma tecla é apertada
   tecla.onkeydown = function(evento) {
      if(evento.code === 'Space' || evento.code === 'Enter') {
         tecla.classList.add('ativa');
      }
   }

   tecla.onkeyup = function() {
      tecla.classList.remove('ativa');
   }
}