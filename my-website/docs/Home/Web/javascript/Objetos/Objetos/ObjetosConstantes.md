---
sidebar_position: 4
title: Criação de Objetos
sidebar_label: Criando Objetos
---

## Objetos Constantes

```javascript
const pessoa = { nome: "Joao" };

// pessoa aponta para um endereço de memória
// pessoa -> 123 -> { objeto }
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> { 456 } -> { objeto }
// pessoa = { nome: 'Ana' }

// Congelando o objeto, alterações após esta linha não serão consideradas
Object.freeze(pessoa);

pessoa.nome = "Maria"; // Não terá efeito, pois o objeto está congelado
pessoa.endereco = "Rua ABC"; // Não terá efeito, pois o objeto está congelado
delete pessoa.nome; // Não terá efeito, pois o objeto está congelado

console.log(pessoa.nome); // Retorna 'Pedro', pois a tentativa de alteração foi ignorada
console.log(pessoa); // Retorna { nome: 'Pedro' }, o objeto permanece inalterado

// Declarando o objeto já como congelado no momento da declaração
const pessoaConstante = Object.freeze({ nome: "Joao" });
console.log(pessoaConstante);

// Exercício:
// const isso = Object.freeze( { atributo: "isso" } )
//isso.atributo = 'aquilo'
// Qual será o resultado de 'isso'?
```
