/*

   throw: Imagine que o throw é como um "alarme de erro". Ele é usado para interromper o fluxo normal do programa quando algo inesperado acontece. No nosso caso, dentro da função trataErros, quando identificamos um erro de arquivo não encontrado (erro.code === 'ENOENT'), usamos throw new Error('Arquivo não encontrado') para sinalizar que algo deu errado e que o programa precisa lidar com essa situação.

   try: O bloco try é como um "campo de testes". Colocamos dentro dele o código que pode gerar um erro. No nosso exemplo, dentro do try do fs.readFile, colocamos o código que lê o arquivo. Se durante a leitura do arquivo ocorrer um erro, o try vai "capturar" esse erro e passar para o próximo bloco, o catch.

   catch: O bloco catch é como um "tratador de erros". Ele é executado somente se um erro for lançado dentro do bloco try. No nosso caso, o catch recebe o erro que foi lançado pelo try e chama a função trataErros para lidar com ele.

   new Error(): new Error() é um construtor que cria um objeto de erro. Esse objeto contém informações sobre o erro, como uma mensagem descritiva e o stack trace (o caminho que o código percorreu até chegar no erro). Usamos new Error('Arquivo não encontrado') para criar um objeto de erro com a mensagem "Arquivo não encontrado" e lançá-lo com o throw.

   Em resumo:

   O try tenta executar um código que pode dar erro.
   Se der erro, o catch captura esse erro e faz alguma coisa com ele (no nosso caso, chama a função trataErros).
   O throw é usado para lançar um erro, interrompendo o fluxo normal do programa.
   new Error() cria um objeto de erro com informações sobre o erro.

*/

export default function tratarErro(erro) {
   if(erro.code === 'ENOENT') throw new Error('Arquivo não encontrado');
   // if(erro.code === 'ENOENT') return 'Arquivo não encontrado';
   else return 'Erro na aplicacao';
}

// module.exports = tratarErro;