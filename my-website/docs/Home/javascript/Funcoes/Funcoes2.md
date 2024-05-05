---
position: 2
title: Funções - Parte 2.
---


**Função Autoinvocada (IIFE - Immediately Invoked Function Expression)**:

Uma **IIFE** é uma função que é executada imediatamente após ser definida. É uma boa maneira de criar um escopo privado.

```javascript
(function() {
  var nome = 'Privado';
  console.log(nome);
})();
```

**Funções Anônimas**:

São funções sem nome. Frequentemente utilizadas como argumentos de outras funções ou como IIFEs.

```javascript
setTimeout(function() {
  console.log('Executado após 1 segundo');
}, 1000);
```

**Funções Construtoras**:

São funções utilizadas para construir novos objetos. Elas são chamadas com a palavra-chave `new`.

```javascript
function Pessoa(nome) {
  this.nome = nome;
  this.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
  };
}
const joao = new Pessoa('João');
joao.falar();
```

**Parâmetros Padrão**:

Permite definir valores iniciais para parâmetros de funções.

```javascript
function saudacao(nome = 'visitante') {
  console.log(`Olá, ${nome}!`);
}
saudacao(); // Olá, visitante!
```

**Parâmetros Variáveis (Rest Parameters)**:

Permite representar um número indefinido de argumentos como um array.

```javascript
function somar(...numeros)

 {
  return numeros.reduce((acum, atual) => acum + atual, 0);
}
console.log(somar(1, 2, 3)); // 6
```

**This e Bind**:

`this` é uma palavra-chave que se refere ao objeto de onde a função foi chamada. `bind` é um método que cria uma nova função que, quando chamada, tem seu `this` definido para o valor fornecido.

```javascript
const pessoa = {
  nome: 'Ana',
  saudacao: function() {
    console.log(`Meu nome é ${this.nome}`);
  }
};
const saudacao = pessoa.saudacao.bind(pessoa);
saudacao(); // Meu nome é Ana
```

**Tipos de Declaração**:

Existem várias maneiras de declarar funções em JavaScript, incluindo declarações de função, expressões de função e arrow functions.

Exemplo de Declaração de Função:

```javascript
function somar(a, b) {
  return a + b;
}
```

**Parâmetros e Retornos São Opcionais**:

Em JavaScript, funções podem ser definidas sem parâmetros e podem ou não retornar valores.

```javascript
function logMensagem() {
  console.log('Mensagem padrão');
}
logMensagem(); // Mensagem padrão
```