---
sidebar_position: 6
title: Foreach
sidebar_label: Foreach
---

### foreach1.js e foreach2.js

#### Descrição:
Estes exemplos demonstram a implementação do método `forEach` para iteração sobre os elementos de um array.

#### Código:
```javascript
const meuArray = ["Ana", "Bia", "João", "Gugu"];

// Implementação do método forEach personalizado
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Utilização do método forEach personalizado
meuArray.forEach2((e, i) => {
  console.log(`${i + 1}: ${e}`);
});

console.log("------------------");

// Função equivalente ao forEach personalizado
function exibeArray(any) {
  for (let i = 0; i < any.length; i++) {
    console.log(`${i + 1}: ${any[i]}`);
  }
}

// Utilização da função equivalente ao forEach personalizado
exibeArray(meuArray);
```

#### Explicação:
- Criamos uma implementação personalizada do método `forEach` chamada `forEach2` no protótipo de `Array`.
- Iteramos sobre cada elemento do array, chamando a função de callback passada como argumento para `forEach2`.
- Demonstramos a utilização do `forEach2` com uma função de callback anônima e também com a função `exibeArray`.

#### Exercício:
1. Após a execução do método `forEach2`, qual é a saída esperada para cada elemento do array?

---
