const user = {
   nome: 'Juliana',
   email: 'juliana@gmail.com',
   nascimento: '1990-01-01',
   role: 'estudante',
   ativo: true,
   exibirInfo: function() {
      console.log(this.nome, this.email);
   }
}

const admin  = {
   nome: 'Enzo',
   email: 'enzo@gmail.com',
   nascimento: '1990-01-01',
   role: 'admin',
   ativo: true,
   criaCurso: function() {
      console.log('Curso Criado');
   }
}

//                    Pegar  Fornecer - Propriedade
Object.setPrototypeOf(admin, user);

admin.criaCurso();
admin.exibirInfo();