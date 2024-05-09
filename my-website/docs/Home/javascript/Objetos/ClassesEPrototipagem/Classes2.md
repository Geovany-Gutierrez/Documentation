---
sidebar_position: 17
title: Classes Pt2
sidebar_label: Classes Pt2
---

### Classes - 2

```javascript
// Criando a classe "Avo" para representar um ancestral comum.
class Avo {
    // O construtor recebe o sobrenome do avô.
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

// Criando a classe "Pai" que herda de "Avo" e representa o pai de uma família.
class Pai extends Avo {
    // O construtor recebe o sobrenome e a profissão do pai, com valor padrão 'Professor'.
    constructor(sobrenome, profissao='Professor') {
        // Chamando o construtor da classe "Avo" para definir o sobrenome.
        super(sobrenome);
        this.profissao = profissao;
    }
}

// Criando a classe "Filho" que herda de "Pai" e representa o filho na família.
class Filho extends Pai {
    // O construtor não recebe parâmetros e define automaticamente o sobrenome como 'Silva'.
    constructor() {
        // Chamando o construtor da classe "Pai" para definir o sobrenome.
        super('Silva');
    }
}

// Criando uma instância de "Filho".
const filho = new Filho();
// Mostrando as propriedades do filho, incluindo o sobrenome herdado e a profissão do pai.
console.log(filho);
```