---
sidebar_position: 14
title: Impedindo modificaçoes
sidebar_label: Funçoes de congelar
---

### Metodos para impedir modificações

Object.preventExtensions: Impede a adição de novas propriedades a um objeto.

```javascript
const obj = Object.preventExtensions({
    nome: 'Qualquer', preco: 2.99, tag:'promocao'
})

obj.descricao = 'barato'

console.log('Extensivel: ', Object.isExtensible(obj))

delete obj.nome

console.log(obj)
```

Object.seal: Previne a adição e remoção de propriedades de um objeto, mas permite a modificação das propriedades existentes.

```javascript
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
```

Object.freeze: Congela totalmente o objeto, impedindo qualquer modificação em suas propriedades.

```javascript
const humano = Object.freeze({
    nome: 'Pessoa'
})

console.log(humano)
```


