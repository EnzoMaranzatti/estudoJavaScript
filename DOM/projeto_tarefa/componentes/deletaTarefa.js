const BotaoDeleta = () => {
   const botaoDeleta = document.createElement('button');
   botaoDeleta.innerText = 'Deletar';

   botaoDeleta.addEventListener('click', deletarTarefa);
   return botaoDeleta;
}

const deletarTarefa = (evento) => {
   const botaoDeleta = evento.target;
   const tarefaDeletada = botaoDeleta.parentElement;
   tarefaDeletada.remove();
   return botaoDeleta;
}

export default botaoDeleta;