---
sidebar_position: 6
title: Getters & Setters
sidebar_label: Getters & Setters
---

## Getter e Setter

```javascript
// Declarando objeto com get e set
const sequencia = {
  _valor: 1, // convencao
  // Cada vez que a sequencia.valor é chamado, aumenta 1
  get valor() {
    return this._valor++;
  },
  // Quando o valor for passado, automaticamente isto será invocado
  set valor(valor) {
    valor > this._valor ? (this._valor = valor) : valor;
  },
};

// Exemplo
console.log(sequencia.valor, sequencia.valor);
// O que está acontecendo? getValor(), getValor

sequencia.valor = 1000; // setValor() invocado automaticamente, 1000
console.log(sequencia.valor); // Saída: 1001

sequencia.valor = 900; // 1002
console.log(sequencia.valor); // Saída: 1003
```
