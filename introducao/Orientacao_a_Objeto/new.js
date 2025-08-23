function User(nome, email) {
   this.nome = nome;
   this.email = email;

   this.exibirInfos = function() {
      return "Nome: " + this.nome + "\nEmail: " + this.email;
   }
}

const novoUser = new User('Maria Vitoria', 'mariavitoria@gmail.com');
console.log(novoUser.exibirInfos());