## **Array**

| Método      | O que faz                                          | Exemplo                            | Resultado     |
| ----------- | -------------------------------------------------- | ---------------------------------- | ------------- |
| `push`      | adiciona elemento no final                         | `arr.push(4)`                      | `[1,2,3,4]`   |
| `pop`       | remove elemento do final                           | `arr.pop()`                        | `[1,2]`       |
| `shift`     | remove elemento do início                          | `arr.shift()`                      | `[2,3]`       |
| `unshift`   | adiciona elemento no início                        | `arr.unshift(0)`                   | `[0,1,2,3]`   |
| `length`    | retorna o tamanho                                  | `arr.length`                       | `3`           |
| `indexOf`   | retorna a posição de um item                       | `arr.indexOf(2)`                   | `1`           |
| `includes`  | verifica se existe um item                         | `arr.includes(3)`                  | `true`        |
| `join`      | junta elementos em string                          | `arr.join("-")`                    | `"1-2-3"`     |
| `reverse`   | inverte a ordem                                    | `arr.reverse()`                    | `[3,2,1]`     |
| `sort`      | ordena (alfabético ou numérico c/ função)          | `arr.sort((a,b)=>a-b)`             | `[1,2,3]`     |
| `slice`     | retorna parte do array                             | `arr.slice(1,3)`                   | `[2,3]`       |
| `splice`    | remove/insere elementos                            | `arr.splice(1,1,"X")`              | `[1,"X",3]`   |
| `forEach`   | percorre cada elemento                             | `arr.forEach(x => console.log(x))` | imprime 1,2,3 |
| `map`       | cria novo array transformado                       | `arr.map(x => x*2)`                | `[2,4,6]`     |
| `filter`    | cria novo array filtrando                          | `arr.filter(x => x>1)`             | `[2,3]`       |
| `reduce`    | reduz a 1 valor acumulado                          | `arr.reduce((acc,x)=>acc+x,0)`     | `6`           |
| `find`      | retorna o primeiro item que corresponde            | `arr.find(x => x>1)`               | `2`           |
| `findIndex` | retorna a posição do primeiro item que corresponde | `arr.findIndex(x => x>1)`          | `1`           |
| `every`     | testa se **todos** satisfazem condição             | `arr.every(x => x>0)`              | `true`        |
| `some`      | testa se **algum** satisfaz condição               | `arr.some(x => x>2)`               | `true`        |
| `flat`      | “achata” arrays aninhados                          | `[1,[2,3]].flat()`                 | `[1,2,3]`     |
| `concat`    | junta dois arrays                                  | `arr.concat([4,5])`                | `[1,2,3,4,5]` |

### *Digas extras*

**Como remover nomes repetidos de uma lista de chamada:**

`Set` O Set é uma estrutura de dados nativa do JavaScript (introduzida no ES6) que armazena valores únicos — ou seja, não permite duplicatas.

*Características do Set:*

- Armazena valores únicos (sem repetições).
- Pode conter valores de qualquer tipo: primitivos ou referências.
- A ordem dos valores inseridos é mantida (inserção).

**Exemplo:**
```
const numeros = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = [...new Set(numeros)]; // [1, 2, 3, 4, 5]
```
Passo a passo:

-  Remove duplicatas: `const setUnico = new Set(numeros); // Set { 1, 2, 3, 4 }`
-  Transforma Set em Array: const arrayFinal = `[...setUnico];  // [1, 2, 3, 4]`

Não podemos declarar o Set sem chamar o `new`