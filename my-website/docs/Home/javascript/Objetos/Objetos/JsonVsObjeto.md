---
sidebar_position: 15
title: Json vs Objeto
sidebar_label: Json vs Obj
---

### Json vs Objeto
```javascript
// Criando um objeto com três atributos e uma função
const obj = { a: 1, b:2, c:3, soma() { return a + b + c } }

// Ao utilizar JSON.stringify, o objeto será convertido sem a função
console.log(JSON.stringify(obj))

// Para converter um objeto para JSON, cada atributo deve ser envolto por aspas duplas.
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

// É possível incluir diversos tipos de dados em um objeto JSON, como números, strings, booleanos, objetos e arrays.
console.log(JSON.parse('{ "a": 1.8, "b":"string", "c":true, "d": {}, "e": [] }'))
```
