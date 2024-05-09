---
sidebar_position: 3
title: Criação de Objetos
sidebar_label: Criando Objetos
---

## Criação de objetos

```javascript
// Usando a notação literal para criar objetos
const obj1 = {};

// Criando objeto usando o construtor Object em JavaScript
const obj2 = new Object();

console.log(obj1, obj2);

// Definindo uma função construtora de objetos com parâmetros
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
  this.desc = desc;
}

// Instanciando objetos a partir da função construtora
const p1 = new Produto("Caneta", 8, 0.15);
const p2 = new Produto("Notebook", 3000, 0.25);
console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());

// Criando uma função factory que retorna objetos com métodos
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return ((salarioBase / 30) * (30 - faltas)).toFixed(2);
    },
  };
}

// Instanciando objetos a partir da função factory
const func1 = criarFuncionario("Eduardo", 2000, 0);
const func2 = criarFuncionario("Juan", 2000, 20);

console.log(func1);
console.log(func2.getSalario());

// Usando Object.create para criar um objeto com protótipo nulo
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// Utilizando JSON.parse para criar um objeto a partir de uma string JSON
const fromJSON = JSON.parse('{"": "Sou um json"}');
console.log(fromJSON);
```

<details>
<summary>Exercício: Chamada e Resultado no Console</summary>

```javascript
// Exercício: Crie uma função construtora chamada Animal que recebe nome e tipo como parâmetros.
// Essa função deve criar objetos com as propriedades nome, tipo e emitirSom,
// onde emitirSom é um método que retorna uma mensagem informando o som emitido pelo animal.
```

<details>
<summary>Resposta</summary>

```javascript
function Animal(nome, tipo) {
  this.nome = nome;
  this.tipo = tipo;
  this.emitirSom = function () {
    switch (this.tipo.toLowerCase()) {
      case "cachorro":
        return "Au au!";
      case "gato":
        return "Miau!";
      case "pássaro":
        return "Piu piu!";
      default:
        return "Som desconhecido.";
    }
  };
}
// Instanciando objetos a partir da função construtora Animal
const cachorro = new Animal("Rex", "Cachorro");
const gato = new Animal("Whiskers", "Gato");
const passaro = new Animal("Piu", "Pássaro");

console.log(cachorro.nome + " faz " + cachorro.emitirSom());
console.log(gato.nome + " faz " + gato.emitirSom());
console.log(passaro.nome + " faz " + passaro.emitirSom());
```

</details>
Resultado no Console:

Rex faz Au au!
Whiskers faz Miau!
Piu faz Piu piu!

</details>
