import User from './User.js';

// extends
export default class Admin extends User {
   constructor(nome, email, nascimento, role = "admin", ativo = "true") {
      // super - todos os parametros que vamos usar do User
      super(nome, email, nascimento, role, ativo);
   }

   // Polimorfismo 
   // exibirInfos() {
   //    const infos = super.exibirInfos();
   //    return `admin - ${infos}`;
   // }

   criarCurso(nomeCurso, quantidadeVagas) {
      return `Cruso: ${nomeCurso} - ${quantidadeVagas} de vagas.`;
   }
}