import User from './User.js';

// extends
export default class Docente extends User {
   constructor(nome, email, nascimento, role = "docente", ativo = "true") {
      // super - todos os parametros que vamos usar do User
      super(nome, email, nascimento, role, ativo);
   }

   aprovarEstudante(estudante, curso) {
      return `Estudante ${estudante} passou no curso ${curso}, responsável pelo curso ${this.nome}`;
   }
}

const novoDocente = new Docente("Maria", "maria@gmail.com", "2005-24-10");