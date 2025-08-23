## **POO**
POO é uma forma de programar onde você organiza seu código como se fosse o mundo real — com objetos que possuem características (propriedades) e ações (métodos).

### *Herança Prototípica*
Herança prototípica é o mecanismo onde um objeto pode herdar propriedades e métodos de outro objeto. Isso é feito através de uma cadeia de protótipos.

Imagine que objetos têm uma “corrente invisível” chamada protótipo, onde eles podem pegar coisas emprestadas de outros objetos.

#### Exemplo:

```
const animal = {
  dormir() {
    console.log("Animal dormindo");
  }
};

const cachorro = {
  latir() {
    console.log("Au au");
  }
};

Object.setPrototypeOf(cachorro, animal);

cachorro.latir();   // Au au
cachorro.dormir();  // Animal dormindo (pegou do protótipo)
```

#### Object.setPrototypeOf()
É uma função que define manualmente o protótipo (o “pai”) de um objeto.

`Object.setPrototypeOf(objetoFilho, objetoPai);`
- objetoFilho: o objeto que vai herdar.
- objetoPai: o objeto que será o protótipo (fonte de herança).

**Cuidado**
- Object.setPrototypeOf() não é usado com frequência no dia a dia.
- É mais comum usar class + extends para herança.
- Alterar o protótipo manualmente pode ser mais lento em código que roda muitas vezes.

**Quando usar?**
- Quando você está trabalhando com objetos literais puros `({})` e quer aplicar herança simples sem usar class.
- Em projetos educativos, testes ou APIs mais avançadas.

### *Constructor*
`constructor` é um método especial que toda classe pode ter. Ele executa automaticamente quando você cria um novo objeto com`new`.

| O que é | Analogia |
|---------| -------- |
| O constructor serve para configurar o objeto assim que ele é criado. | Ele é como uma fábrica de objetos personalizada: você usa ele para inicializar as propriedades do seu objeto com os dados que você quiser. |

#### Exemplo:
```
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
```

### *New*
`new` é uma palavra-chave em JavaScript que:
- Cria um objeto vazio `{ }` por trás dos panos
- Liga esse objeto ao protótipo da classe
- Executa o constructor da classe
- Retorna o objeto criado

#### Exemplo:
`const enzo = new Pessoa("Enzo", 25);`

### *This*
`this` é uma palavra especial que se refere ao objeto atual.

#### Exemplo:
```
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log("Meu nome é " + this.nome);
  }
}

const maria = new Pessoa("Maria");
maria.falar(); // Meu nome é Maria
```
- Aqui, this.nome → pega o nome da própria maria
- `this` dentro do método falar() é o objeto maria

### *Call()*
O método `call()` permite invocar uma função e especificar o valor de this manualmente, passando os argumentos um por um.

```
function apresenta(idade) {
  console.log(`Olá, meu nome é ${this.nome} e tenho ${idade} anos.`);
}

const pessoa = { nome: "João" };

apresenta.call(pessoa, 30);
// "Olá, meu nome é João e tenho 30 anos."
```
call() chamou a função apresenta e definiu que o this dentro dela será o objeto pessoa.

### *Apply()*
`apply()` é igual ao call(), mas os argumentos são passados dentro de um array.

#### Forma

`func.apply(thisArg, [arg1, arg2, ...])`

#### Exemplo

```
apresenta.apply(pessoa, [25]);
// "Olá, meu nome é João e tenho 25 anos."
```

### *Bind()*
`bind()` é diferente de `call()` e `apply()` porque ele não executa a função imediatamente. Em vez disso, ele cria uma nova função com o this fixo no objeto que você passou.

#### Forma
`const novaFunc = func.bind(thisArg, arg1, arg2, ...);`

#### Exemplo
```
const novaFuncao = apresenta.bind(pessoa);
novaFuncao(40); 
// "Olá, meu nome é João e tenho 40 anos."
```



### *Class*
`class` é um molde (modelo) para criar vários objetos com as mesmas características (propriedades) e comportamentos (métodos).

#### Exemplo

```
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
```
- Pessoa é a classe.
- O constructor é executado automaticamente ao usar new.
- apresentar() é um método compartilhado entre todos os objetos criados com essa classe.

## **Os 4 pilares do POO**
POO é uma forma de programar onde você organiza seu código como se fosse o mundo real — com objetos que possuem características (propriedades) e ações (métodos). Essa forma de pensar torna o código mais organizado, reutilizável e fácil de manter.
### *Encapsulamento*
Encapsulamento é o conceito de **"esconder os detalhes internos"** e expor apenas o necessário. Em JavaScript, isso pode ser feito controlando como os dados de um objeto podem ser acessados ou modificados.

- **Objetivo:** proteger as propriedades para que não sejam alteradas de forma incorreta.
- **Ferramenta:** `getters` e `setters`.

#### Getters e setters
- **Getter (get):** método especial que lê uma propriedade de forma controlada.
- **Setter (set):** método especial que altera uma propriedade de forma controlada.
Eles não são funções comuns — funcionam como acessores de propriedades. Isso significa que você usa como se fossem atributos normais, mas por trás dos panos uma lógica é executada.

#### **Estrutura base**
```
class Exemplo {
  constructor(valor) {
    this._valor = valor; // underline por convenção: propriedade "privada"
  }

  get valor() {
    return this._valor;
  }

  set valor(novoValor) {
    this._valor = novoValor;
  }
}

const obj = new Exemplo(10);
console.log(obj.valor); // chama o getter → 10

obj.valor = 20;         // chama o setter
console.log(obj.valor); // 20x'
```

- O getter é chamado quando você acessa obj.valor.
- O setter é chamado quando você faz obj.valor = ....

#### **Controle de acesso**
Você pode validar valores antes de permitir a alteração.
``` 
class Conta {
  constructor(saldo) {
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    if (valor < 0) {
      console.log("Erro: saldo não pode ser negativo");
    } else {
      this._saldo = valor;
    }
  }
}

const conta = new Conta(1000);
console.log(conta.saldo); // 1000
conta.saldo = -500;       // Erro: saldo não pode ser negativo
console.log(conta.saldo); // 1000
```
Aqui o setter protege a regra de negócio.

#### **Propriedades virtuais (calculadas)**
Um getter pode **simular** uma propriedade que nem existe no objeto, mas que é calculada dinamicamente.

```
class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  get area() {
    return this.largura * this.altura;
  }
}

const r = new Retangulo(5, 10);
console.log(r.area); // 50
```
Perceba: `r.area` não existe como atributo armazenado, mas o getter faz parecer que existe.

#### **Detalhe importante**
- Por convenção, muitas vezes usamos underline `(_)` em propriedades internas `(_saldo, _valor)` para indicar que são "privadas" (embora o JavaScript não as torne privadas de verdade).w
- Getter e setter são opcionais — você pode usar apenas get ou apenas set, dependendo da necessidade.
- Em ES2020+, o JavaScript introduziu campos privados reais com #, mas isso é um passo além.

```
class Pessoa {
  #idade; // propriedade realmente privada

  constructor(nome, idade) {
    this.nome = nome;
    this.#idade = idade;
  }

  get idade() {
    return this.#idade;
  }

  set idade(novaIdade) {
    if (novaIdade < 0) {
      console.log("Idade inválida");
    } else {
      this.#idade = novaIdade;
    }
  }
}

const p = new Pessoa("Maria", 30);
console.log(p.idade); // 30
p.idade = -5;         // Idade inválida
```
### *Herança*
Herança é o mecanismo de reaproveitar código: uma classe (ou objeto) “filha” herda propriedades e métodos de uma classe (ou objeto) “pai”. Em JavaScript moderno, fazemos isso com `class` + `extends` (por baixo dos panos, tudo continua sendo protótipos).
A ideia central é: se A é um tipo de B (relação é-um / is-a), então A pode estender B, herdando comportamentos e podendo especializá-los (sobrescrever/estender métodos).

#### **Exemplo**
``` 
class Conta {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor <= 0) throw new Error("Depósito inválido");
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= 0) throw new Error("Saque inválido");
    if (valor > this.saldo) throw new Error("Saldo insuficiente");
    this.saldo -= valor;
  }

  extrato() {
    console.log(`[${this.titular}] Saldo: R$ ${this.saldo.toFixed(2)}`);
  }
}

class ContaPoupanca extends Conta {
  constructor(titular, saldoInicial = 0, taxaJuros = 0.005) {
    super(titular, saldoInicial); // chama o constructor da classe pai
    this.taxaJuros = taxaJuros;
  }

  // especialização: além do que a Conta faz, aplica juros mensais
  renderJuros() {
    const rendimento = this.saldo * this.taxaJuros;
    this.depositar(rendimento);
  }

  // sobrescrita (override): muda o comportamento de sacar
  sacar(valor) {
    // Exemplo de regra diferente: deixa sempre R$ 50 de saldo mínimo
    if (this.saldo - valor < 50) throw new Error("Saldo mínimo da poupança é R$ 50");
    super.sacar(valor); // reutiliza a lógica da classe pai
  }
}

const cp = new ContaPoupanca("Maria", 500, 0.01);
cp.extrato();        // [Maria] Saldo: R$ 500.00
cp.renderJuros();
cp.extrato();        // Saldo com juros
cp.sacar(200);
cp.extrato();        // Saque respeitando saldo mínimo
```
**Pontos-chave do exemplo:**
- `extends` cria a relação de herança.
- `super(...)` chama o constructor da classe pai.
- `super.metodo()` reutiliza o comportamento do pai dentro de um método sobrescrito.
- A classe filha pode adicionar novos métodos (`renderJuros`) e modificar comportamentos herdados (`sacar`).

### *Polimorfismo*
Polimorfismo significa “muitas formas”. É quando diferentes classes têm métodos com o mesmo nome, mas comportamentos diferentes.

``` 
class Animal {
  fazerSom() {
    console.log("Som genérico");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log("Au au!");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau!");
  }
}

const animais = [new Cachorro(), new Gato()];
animais.forEach(a => a.fazerSom());
// Au au!
// Miau!
```

#### **Analogia**

Imagine a palavra "dirigir".
- Um carro dirige de uma forma.
- Uma moto dirige de outra forma.
- Um caminhão dirige ainda de outra forma.

Apesar de usarmos a mesma palavra (método), o comportamento muda dependendo do contexto (classe).

O polimorfismo facilita a substituição de objetos sem quebrar o código. Se um método é esperado, qualquer objeto que implementá-lo pode ser usado, não importa sua classe específica.

### *Abstração*
Abstração é simplificar conceitos complexos, mostrando apenas o que é essencial.
``` 
class Veiculo {
  ligar() {
    console.log("Ligando o veículo...");
  }
}
```
Aqui, não importa se o veículo é um carro, moto ou ônibus, a ideia abstrata de "ligar" é comum a todos.

#### **Analogia**
É como **dirigir um carro:** você não precisa entender como o motor funciona internamente, apenas sabe que para "andar" precisa acelerar.

A abstração permite criar classes genéricas que servem como base para outras mais específicas. Assim, você constrói sistemas flexíveis e com menor repetição de código.

### *Resumo dos 4 pilares*

| Pilar              | O que é                                        | Analogia                                         |
| ------------------ | ---------------------------------------------- | ------------------------------------------------ |
| **Encapsulamento** | Esconder detalhes internos e controlar acessos | Caixa eletrônico que só mostra o saldo           |
| **Herança**        | Reaproveitar código de outra classe            | Filhos herdando características dos pais         |
| **Polimorfismo**   | Mesmos métodos, comportamentos diferentes      | Diferentes veículos "dirigem" de modos distintos |
| **Abstração**      | Destacar só o que importa                      | Dirigir sem entender o motor                     |
