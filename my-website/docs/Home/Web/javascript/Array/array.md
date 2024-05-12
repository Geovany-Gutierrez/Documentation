---
sidebar_position: 2
title: Array
sidebar_label: Arrays
---


### Array.js

#### Descrição:
Este exemplo mostra como criar um objeto que simula um array e adiciona o método `toString` para exibir seus valores.

#### Código:
```javascript
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)
```

#### Explicação:
Criamos um objeto `quaseArray` simulando um array usando chaves numéricas como índices. Em seguida, adicionamos o método `toString` ao objeto para convertê-lo em uma representação de string semelhante a um array real. Por fim, comparamos a saída de `toString` do nosso objeto com um array real.

#### Exercício:
1. Qual será a saída do `console.log(quaseArray[0])`?

---
