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

// find: Retorna o primeiro item que satisfaz a condição. undefined se nenhum for encontrado.

let usuarioEncontrado = player.find((user, index) => {
   const encontrado = user.usuario === 'Maria Vitoria';
   if(encontrado) {
      console.log('Indice:',index);
   }
   return encontrado;
})

let usuarioEncontrado2 = player.find(user => user.usuario === 'Eduardo');

console.log(usuarioEncontrado);
console.log(usuarioEncontrado2);

