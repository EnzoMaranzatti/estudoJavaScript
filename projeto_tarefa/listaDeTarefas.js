const criarTarefa = (evento) => {
   // Tira o reflesh da página
   evento.preventDefault();

   const lista = document.querySelector('[data-list]');
   const input = document.querySelector('[data-form-input]');
   const valor = input.value;

   const tarefa = document.createElement('li');
   tarefa.classList.add('task');
   const conteudo = `<p class="content">${valor}</p>`;
   
   tarefa.innerHTML = conteudo;
   lista.appendChild(tarefa);
}

const novaTarefa = document.querySelector('[data-form-button]');

// Elemento | Método   |    Evento | Ação
novaTarefa.addEventListener('click', criarTarefa);