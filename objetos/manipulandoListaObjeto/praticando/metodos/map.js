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
   },
   {
      id: '7',
      usuario: 'Daiane Luizetti',
      nivel: '89',
      uparNivel: uparNivel
   },
   {
      id: '8',
      usuario: 'Vicente',
      nivel: '0',
      uparNivel: uparNivel
   },
   {
      id: '9',
      usuario: 'Lorenzo',
      nivel: '43',
      uparNivel: uparNivel
   },
   {
      id: '10',
      usuario: 'Eduardo',
      nivel: '100',
      uparNivel: uparNivel
   }
]

// map: Transforma cada item do array em um novo valor e retorna um novo array com esses valores. Novo array com os valores transformados.

const playerUser = player.map(user => user.usuario);
console.log(playerUser)

