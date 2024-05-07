---
sidebar_position: 7
title: Funções Importantes
sidebar_label: Funções Importantes
---

## Funções importantes do Object

```javascript
// Criando objeto pessoa
const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

// Listando o nome dos itens em pessoa (nome | idade | peso)
console.log(Object.keys(pessoa));
// Listando os valores de cada item em pessoa ('Rebeca', 2, 13)
console.log(Object.values(pessoa));
// Retorna um array de arrays contendo os pares chave-valor
console.log(Object.entries(pessoa));

// Função entries.forEach para concatenar nome do item e valor (nome: Rebeca)
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// Usando defineProperty para declarar dataNascimento em pessoa
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true, // será mostrado ao procurar no objeto
  writable: false, // não poderá ser alterado
  value: "02/02/2000",
});
pessoa.dataNascimento = "02/02/2002";
console.log(pessoa.dataNascimento); // Saída: 02/02/2000
console.log(Object.keys(pessoa)); // Saída: ['nome', 'idade', 'peso', 'dataNascimento']

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
// Usando object assign para passar objetos como valor em outro objeto
const obj = Object.assign(dest, o1, o2);
Object.freeze(obj);
// Congelando objeto a partir daqui
obj.c = 1234;
console.log(obj); // Saída: { a: 4, b: 2, c: 3 }
// Qual o valor de obj? -> { a: 4, b: 2, c: 3 }
```
