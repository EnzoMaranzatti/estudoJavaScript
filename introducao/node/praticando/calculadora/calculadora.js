export default function calculadora(a, b, operador) {
   switch(operador) {
      case 'soma': return a + b; break;
      case 'subtracao': return a - b; break;
      case 'multiplicacao': return a * b; break;
      case 'divisao': return a / b; break;
   }
}


