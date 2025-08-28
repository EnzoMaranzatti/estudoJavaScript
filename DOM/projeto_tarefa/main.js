import BotaoConclui from './componentes/concluirTarefa.js';
import BotaoDeleta from './componentes/deletarTarefa.js';

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
   tarefa.appendChild(BotaoConclui());
   tarefa.appendChild(BotaoDeleta());
   lista.appendChild(tarefa);
   input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

// Elemento | Método   |    Evento | Ação
novaTarefa.addEventListener('click', criarTarefa);
