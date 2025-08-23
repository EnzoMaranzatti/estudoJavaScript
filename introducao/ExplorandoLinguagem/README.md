## **Escopo**
Por padrão o **JavaScript** ao declarar variável sem a palavra reservada o interpretador indentifica com um **`var`**

- `var` Escopo global
- `let` Escopo de bloco
- `const` Escopo global

Espoco é o contexto atual de execução, em que valores e expressões são visíveis ou podem ser referenciadas. Se uma variável ou outra expressão não tiver "no escopo atual", então não está disponivel para uso. Os escopos também podem ser em camadas em uma hierarquia, de modo que os escopos filhos tenham acesso aos escopos pais, mas não vice-versa

Um function serve como um procedimento em JavaScript, e portanto cria um escopo, de modo que (por exemplo) uma variável definida exclusivamente dentro  de uma função não pode ser acessada de fora da função ou dentro de outras funções.

## **Coerção de Tipos**
A Coerção de Tipos em JavaScript refere-se à conversão automática e implícita de um tipo de dado para outro durante a operação. Isso pode acontecer em operações matemáticas, comparações ou concatenações de string.

**Exemplo:**
``` 
// Exemplo 1: Coerção em comparação
console.log("5" == 5); // true
// A string "5" é convertida implicitamente para número antes da comparação

// Exemplo 2: Coerção em concatenação
console.log("O número é " + 10); // "O número é 10"
// O número 10 é convertido implicitamente para string

// Exemplo 3: Coerção em operações matemáticas
console.log("10" - 2); // 8
// A string "10" é convertida implicitamente para número para realizar a subtração
```

## **Conversão de Tipos**
A Conversão de Tipos é a transformação explícita de um tipo de dado para outro. Isso pode ser feito de várias maneiras, como utilizando funções ou operadores específicos para converter um tipo em outro.

**Exemplo:**
``` 
// Exemplo 1: Convertendo string para número
let str = "42";
let num = Number(str);
console.log(num); // 42
console.log(typeof num); // "number"

// Exemplo 2: Convertendo número para string
let valor = 100;
let texto = String(valor);
console.log(texto); // "100"
console.log(typeof texto); // "string"

// Exemplo 3: Convertendo booleano para número
let bool = true;
let convertido = Number(bool);
console.log(convertido); // 1
console.log(typeof convertido); // "number"

```

## **Spread Operator**
O spread operator em JavaScript é representado por `...` (três pontos) e serve para espalhar (ou "espalhar o conteúdo") de arrays, objetos, ou até strings em partes individuais.

### *Spread com array*

**1. Clonar um array:**
```
const frutas = ['maçã', 'banana'];
const copiaFrutas = [...frutas];

console.log(copiaFrutas); // ['maçã', 'banana']
```
Caso você faça o exemplo acima da seguinte forma:
```
const frutas = ['maçã', 'banana'];
const copiaFrutas = frutas;

console.log(copiaFrutas); // ['maçã', 'banana']
```
De primeiro momento é praticamente igual, porém nesse caso, o `copiaFrutas` ele está apontando para `frutas`, sendo assim, caso adicionarmos um novo elemento ao array `copiaFrutas`, ele será adicionado ao array original. Exemplo clássico de **atribuição por referência.**

**2. Concatenar array:**
```
const doces = ['chocolate', 'bala'];
const alimentos = [...frutas, ...doces];

console.log(alimentos); // ['maçã', 'banana', 'chocolate', 'bala']
```

### *Spread com Objetos (ECMAScript 2018+)*

**1. Clonar um objeto:**
```
const pessoa = { nome: 'Ana', idade: 25 };
const copiaPessoa = { ...pessoa };

console.log(copiaPessoa); // { nome: 'Ana', idade: 25 }
```
A mesma ideia de **atribuição por referência** explicada no tópico de array acima, é aplicada em objetos também

**2. Mesclar objetos:**
```
const endereco = { cidade: 'São Paulo', estado: 'SP' };
const dadosCompletos = { ...pessoa, ...endereco };

console.log(dadosCompletos);
// { nome: 'Ana', idade: 25, cidade: 'São Paulo', estado: 'SP' }
```
**Observação importante:** Se dois objetos tiverem a mesma chave, o último sobrescreve o valor anterior

### *Atribuição por Valor:*
Quando atribuímos um tipo primitivo a uma nova variável, o JavaScript cria uma cópia do valor.

Alterar o valor da nova variável não afeta a variável original.
O mesmo ocorre quando passamos tipos primitivos como parâmetros para funções: uma cópia do valor é passada, e a alteração do parâmetro dentro da função não modifica a variável original.

### *Atribuição por Referência:*
Arrays não são tipos primitivos, então, ao atribuir um array a uma nova variável, o JavaScript cria uma referência, não uma cópia.
Ambas as variáveis apontam para o mesmo local na memória.
Modificar o array através de qualquer uma das variáveis afeta ambas.
O mesmo acontece quando passamos arrays como parâmetros para funções: a referência do array é passada, e as alterações dentro da função afetam o array original.
Para evitar a modificação do array original ao passá-lo para uma função, podemos usar o spread operator (...) para criar uma cópia do array.