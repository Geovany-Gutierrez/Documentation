---
sidebar_position: 3
title: Simulando um array
sidebar_label: Simulando array
---


### simulandoArrayComObjeto.js

#### Descrição:
Este exemplo é semelhante ao anterior, criando um objeto simulando um array e adicionando o método `toString`.

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
O código é idêntico ao exemplo anterior, onde criamos um objeto `quaseArray` simulando um array e adicionamos o método `toString`.

#### Exercício:
1. Qual será a saída do `console.log(quaseArray[0])`?

---
