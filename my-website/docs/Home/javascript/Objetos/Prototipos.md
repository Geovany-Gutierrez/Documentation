---
sidebar_position: 8
title: Prototipos
sidebar_label: Prototype
---

## Anotações sobre Protótipos em JavaScript

- Referência no protótipo - herança:

  - Procura na hierarquia de objetos até achar o objeto.
  - Se não achar, retorna `undefined`; se achar, retorna o valor do elemento na hierarquia onde foi encontrado.

- O conceito de protótipo não é igual ao `.prototype`.

```javascript
const ferrari = {
  modelo: "F40",
  velMax: 342,
};

const volvo = {
  modelo: "V40",
  velMax: 120,
};

console.log(ferrari.prototype); // Resultado: undefined
console.log(ferrari.__proto__); // Resultado: [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype); // Resultado: true
console.log(volvo.__proto__ === Object.prototype); // Resultado: true

console.log(Object.prototype.__proto__ === null); // Resultado: true

// '__proto__' serve para acessar o protótipo do objeto, ou seja, o objeto pai.
// Se não encontrar no objeto atual, ele procura na hierarquia de protótipos.

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto); // Resultado: function function
console.log(Object.prototype, MeuObjeto.prototype); // Resultado: {} MeuObjeto {}
```

Qual será o resultado de `console.log(ferrari.prototype)`?

<details>
<summary>Resposta</summary>
`undefined`
</details>
Qual será o resultado de `console.log(Object.prototype.__proto__)`?
<details>
<summary>Resposta</summary>
`null`
</details>
