---
sidebar_position: 11
title: Funções Construtoras
sidebar_label: Funções Construtoras
---

## Funções Construtoras e Protótipos

```javascript
function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

// Todos objetos criados a partir de uma mesma função construtora apontam para o mesmo protótipo
console.log(obj1.__proto__ === obj2.__proto__); // Resultado: true
console.log(MeuObjeto.prototype === obj1.__proto__); // Resultado: true
// O protótipo aponta para a função.prototype. Em uma função construtora, ele aponta para o prototype da função.

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Eu sou ${this.nome}`);
};

obj1.falar(); // Resultado: Bom dia! Eu sou Anônimo

// Fazendo shadowing
obj2.nome = "André";
obj2.falar(); // Resultado: Bom dia! Eu sou André

// Criando com notação literal e mudando a referência de obj3 de Object.prototype para MeuObjeto.prototype
const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Rafael";
obj3.falar(); // Resultado: Bom dia! Eu sou Rafael

// Sumarizando:

// Quando um objeto é instanciado a partir de uma função, eles têm o mesmo protótipo
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); // Resultado: true

// A função tem um protótipo e uma referência para __proto. Ele aponta para Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype); // Resultado: true

console.log(Function.prototype.__proto__ === Object.prototype); // Resultado: true

// Nulo. Object.prototype é o elemento pai máximo, não tem nada após ele
console.log(Object.prototype.__proto__); // Resultado: null
```

Qual será o resultado de `console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype)`?

<details>
<summary>Resposta</summary>
`true`
</details>
Qual será o resultado de `console.log(Function.prototype.__proto__ === Object.prototype)`?
<details>
<summary>Resposta</summary>
`true`
</details>
