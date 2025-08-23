export function contaPalavras(texto) {
   const paragrafos = extraiParagrafos(texto);
   const contagem = paragrafos.flatMap(paragrafo => {
      if(!paragrafo) return [];
      return verificaPalavrasDuplicadas(paragrafo)
   })
   return contagem;
}

function extraiParagrafos(texto) {
   return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra) {
   // Expressão regulares
   return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

// 1. Criar um array de palavras
// 2. Contar as ocorrencias
// 3. Montar um objeto com o resultado
function verificaPalavrasDuplicadas(texto) {
   const listaPalavras = texto.split(' ');
   const resultado = {};
   listaPalavras.forEach(palavra => {
      // if para eliminar palavras curtas, como, ou, oi, um, 1...
      if(palavra.length >=  3) {
         const palavraLimpa = limpaPalavras(palavra);
         resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
      }
   });
   return resultado;
}


