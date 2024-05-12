---
sidebar_position: 8
title: Map
sidebar_label: Map
---

### map1.js, map2.js e map3.js

#### Descrição:
Estes exemplos demonstram diferentes implementações do método `map` para transformar um array em outro.

#### Código:
```javascript
const meuArray = ["Ana", "Bia", "João", "Gugu"];

// Implementação do método map personalizado
Array.prototype.map2 = function(callback) {
    const meuArray = [];
    // Itera sobre cada elemento do array
    for (let i = 0; i < this.length; i++) {
        // Chama a função de callback para cada elemento do array
        // Passa o elemento, o índice e o array como parâmetros
        // Armazena o resultado no novo array
        meuArray.push(callback(this[i], i, this));
    }
    // Retorna o novo array com os resultados
    return meuArray;
};

// Utilização do método map personalizado
const resultado = meuArray.map2((e, i) => {
  // Retorna cada elemento do array em maiúsculas
  return e.toUpperCase();
});

console.log(resultado);
```

#### Explicação:
- Criamos uma implementação personalizada do método `map` chamada `map2` no protótipo de `Array`.
- Iteramos sobre cada elemento do array, chamando a função de callback passada como argumento para `map2`.
- Armazenamos os resultados da função de callback em um novo array.
- Demonstramos a utilização do `map2` para transformar os elementos do array em maiúsculas.

#### Exercício:
1. Após a execução do método `map2`, qual é o resultado esperado para cada implementação?

---


