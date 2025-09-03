export default function gerarDiaDaSemana() {
   // Definindo data
   const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
   });
   const data = new Date().toLocaleDateString("pt-BR");

   // Definindo Horário
   const hora = new Date().toLocaleTimeString("pt-BR", {
      hour: "numeric",
      minute: "numeric"
   });
   
   // Formatando data completa
   const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

   return dataCompleta;
}