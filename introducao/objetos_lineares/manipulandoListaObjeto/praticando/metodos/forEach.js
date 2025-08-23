const nomes = ['Eduardo', 'Maria', 'Jose', 'Luan', 'Kauan', 'Victor'];

// forEach: Executa uma função para cada item do array. Não retorna nada, apenas realiza ações.

//nomes.forEach((nome, index) => console.log(index + 1, nome));

function uparNivel() {
   if (this.nivel < 100) {
      this.nivel++;
      console.log(`${this.usuario} subiu para o nível ${this.nivel}`);
   } else {
      this.nivel = 100;
      console.log(`${this.usuario} já alcançou o nível máximo`);
   }
}

const player = [
   {
      id: '1',
      usuario: 'Enzo Vinicius',
      nivel: '100',
      uparNivel: uparNivel
   },
   {
      id: '2',
      usuario: 'Maria Vitoria',
      nivel: '99',
      uparNivel: uparNivel
   },
   {
      id: '3',
      usuario: 'Kauan',
      nivel: '40',
      uparNivel: uparNivel
   },
   {
      id: '4',
      usuario: 'Luan',
      nivel: '22',
      uparNivel: uparNivel
   },
   {
      id: '5',
      usuario: 'Jose',
      nivel: '88',
      uparNivel: uparNivel
   },
   {
      id: '6',
      usuario: 'Victor',
      nivel: '100',
      uparNivel: uparNivel
   }
]

player[4].uparNivel();

player.forEach((user, i) => console.log(`[${i}] Usuario: ${user.usuario} é nivel ${user.nivel}`));

