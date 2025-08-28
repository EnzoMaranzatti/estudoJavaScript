const BotaoConclui = () => {
   const botaoConclui = document.createElement('button');
   botaoConclui.classList.add('check-button');
   botaoConclui.innerText = 'Concluir';

   botaoConclui.addEventListener('click', concluirTarefa);
   return botaoConclui;
}

const concluirTarefa = (evento) => {
   // Qual o alvo do evento
   const botaoConclui = evento.target;
   // Pegar o pai do elemento
   const tarefaCompleta = botaoConclui.parentElement;
   // Metodo toggle que executa a classe CSS - Retorna true/false
   tarefaCompleta.classList.toggle('done');
}

export default botaoConclui;