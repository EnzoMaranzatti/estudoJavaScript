export default class User {
   #nome
   #email
   #nascimento
   #role
   #ativo
   constructor(nome, email, nascimento, role, ativo = true, cursosMatriculados = []) {
      this.#nome = nome;
      this.#email = email;
      this.#nascimento = nascimento;
      this.#role = role || "estudante";
      this.#ativo = ativo;
      this.cursosMatriculados = cursosMatriculados || "Nenhum curso matriculado";
   }

   // Não recebe nenhum parametro
   get nome() {
      if (novoNome === "") {
         throw new Error("Formato do nome não é valido!!");
      }
      return this.#nome;
   }
   get email() {
      return this.#email;
   }
   get nacimento() {
      return this.#nascimento;
   }
   get role() {
      return this.#role;
   }
   get ativo() {
      return this.#ativo;
   }

   // Recebe apenas um paramentro, que será o dado modificado
   set nome(novoNome) {
      this.#nome = novoNome;
   }

   exibirInfos() {

      return `${this.nome}, ${this.email}`;
   }

   criarPerfil() {
      this.ativo = true;
      return `Perfil criado com sucesso.`;
   }

   apagarPerfil() {
      this.ativo = false;
      return `Perfil apagado com sucesso!`;
   }

   exibirListaCurso(cursos) {
      if(typeof cursos === "object") {
         return cursos.forEach(curso => console.log("- " + curso));
      }
      else {
         return "Erro ao exibir lista de cursos.";
      }
   }

  matricularEmCurso(curso) {
      if (this.ativo) {
         this.cursosMatriculados.push({
         nomeCurso: curso,
         status: "Matriculado"
         });
         return `Você foi matriculado no curso ${curso}.`;
      } else {
         return `Você não está ativo.`;
      }
   }

   exibirCursosMatriculados() {
      if (this.cursosMatriculados.length === 0) {
         return "Nenhum curso matriculado.";
      }

      let resultado = "Cursos matriculados:\n";
      this.cursosMatriculados.forEach((curso, index) => {
         resultado += `${index + 1}. ${curso.nomeCurso} - ${curso.status}\n`;
      });

      return resultado;
   }
}

// console.log(novoUser.exibirListaCurso(listaCursos));
// console.log(novoUser.exibirInfos())
// console.log(novoUser.apagarPerfil());
// console.log(novoUser.ativo);
// console.log(novoUser.criarPerfil());
// console.log(novoUser.ativo);
// console.log(novoUser.matricularEmCurso("Java"));
// console.log(novoUser.matricularEmCurso("JavaScript"));
// console.log(novoUser.matricularEmCurso("C++"));
// console.log(novoUser.exibirCursosMatriculados());
