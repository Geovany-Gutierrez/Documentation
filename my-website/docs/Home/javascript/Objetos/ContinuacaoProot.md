---
sidebar_position: 9
title: Cadeia de Prototipos
sidebar_label: Prototype Chain
---

## Continuação: Cadeia de Protótipos (Prototype Chain)

```javascript
Object.prototype.attr0 = "Z"; // Cuidado! Isso impacta globalmente

const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B", attr3: "L" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
// Resultado: Z A B C
// O attr3 do objeto encontrado sobrescreve os outros em níveis hierárquicos superiores

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if ((this.delta += this.velAtual <= this.velMax)) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `Atual: ${this.velAtual}km/h de ${this.velMax}km/h`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, // shadowing
};

const volvo = {
  modelo: "V40",
  status() {
    // Assim como 'this' é usado para o volvo (filho), 'super' é usado para procurar no carro (pai)
    return `${this.modelo} | ${super.status()}`;
  },
};

// Estabelecendo relação de protótipo
Object.setPrototypeOf(ferrari, carro); // parâmetros (filho, pai)
// ferrari tem carro como protótipo
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

console.log(ferrari.status());
console.log(volvo.status());
```

Qual será a saída de `console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)`?

<details>
<summary>Resposta</summary>
Z A B C
</details>
