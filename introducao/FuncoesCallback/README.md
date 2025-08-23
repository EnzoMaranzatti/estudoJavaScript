## **Funções**

**Expressão de função:** Quando usamos expressão de função, ou seja, declarar o valor da função a uma variável, ele é lido apenas quando o interpretador chega ao código, sendo assim, caso declare um console.log() antes da função ocorrerá um erro, dizendo que a função não existe. Porém ao declarar uma função normalmente, sem variáveis, o interpretador aplica o efeito **"hoisting"** (puxando para cima). Sendo assim o interpretador não precisa chegar na linha do código da função para ele ser executado, ela já é executada primeiro internamente.

#### Função padrão

`function minhaFuncao() { ... }`

#### Expressão de função

``` 
const minhaFuncao = function() { ... } 
let minhaFuncao = function() { ... }
var minhaFuncao = function() { ... }

```

#### Arrow function

```
const media = (nota1, nota2) => {
    let media = (nota1 + nota2) / 2;
    let status;

    if(media >= 6) {
        status = true;
    } else {
        status = false;
    }

    return {
        nota1: nota1,
        nota2: nota2,
        mediaFinal: media
    };
}

```
Perceba que não usamos a palavra **function** em vez disso apenas declaramos os seus atributos e usamos **=>** para abrir a função, dai o nome "arrow function". 

A arrow function apenas funciona com **expressão de função** e quando ela tiver apenas uma linha podemos apenas escrever da seguinte forma:

` const exibirNome = nome => console.log("meu nome é ", nome);`

Neste caso não precisamos colocar o return nem abrir as chaves, deixando a declaração bem mais curta.

**Observação:** O `return` sempre retorna um único valor. 
Se você quiser retornar mais de um valor, precisa empacotar esses valores em:

- Um objeto: ideal quando você quer usar nomes para os valores (mais legível).

- Um array: útil quando a posição dos valores é mais importante que o nome (menos legível, mas mais compacto).

## **Funções Callback**

Uma função callback é uma função que é passada como argumento para outra função e é executada após a ocorrência de um evento ou a conclusão de uma operação assíncrona.

Em outras palavras, uma função callback é uma função que é "chamada de volta" depois que alguma outra função termina de executar.

**Exemplo:**

```
const nomes = [
    "João",
    "Maria Vitoria", 
    "Diego", 
    "Eduardo"
];

nomes.forEach(nome => {
    console.log(nome);
})

```