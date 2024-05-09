---
sidebar_position: 2
title: Coleção Pares Chave-Valor
sidebar_label: Pares Chave-Valor
---

## Coleção Dinâmica de Pares Chave-Valor

```javascript
// Declarando objeto a partir do construtor Object
const produto = new Object();
// Criando e atribuindo o atributo 'nome'
produto.nome = 'Cadeira';
// De forma resumida, o produto.marca será genérico, sem se diferir do comportamento de outras declarações
produto['Marca'] = 'Genérica';
// Criando e atribuindo o atributo 'preco'
produto.preco = 220;

console.log(produto);

// Deletando produto.preco
delete produto.preco;
// Deletando produto.marca
delete produto['Marca'];
console.log(produto);

// Criando um objeto carro
const carro = {
    modelo: 'A4',
    valor: 80000,
    // Passando objeto no objeto carro
    proprietario: {
        nome: 'João',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    // Condutor -> Array de objetos
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    // Passando função no objeto
    calcularValorSeguro: function() {
        // ...
    }
};

carro.modelo = 1000;
// Carro -> Proprietario -> Endereco -> Logradouro
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante';
console.log(carro);

// Deletando carro.proprietario. Tudo dentro do objeto proprietario será excluído
delete carro.proprietario;

console.log(carro);
```
<details>
<summary>Exercício: Remover Propriedade</summary>

```javascript
// Crie uma função chamada 'removerPropriedade' que receba dois parâmetros: um objeto e o nome de uma propriedade.
// A função deve verificar se a propriedade existe no objeto. Se existir, deve removê-la do objeto e retornar true.
// Se a propriedade não existir, a função deve retornar false.
```
---
```javascript
// Testando a função com o objeto 'produto'
console.log("Propriedade 'nome' removida:", removerPropriedade(produto, 'nome')); // Resultado: true
console.log(produto); // Verificando se a propriedade 'nome' foi removida

console.log("Propriedade 'cor' removida:", removerPropriedade(produto, 'cor')); // Resultado: false
console.log(produto); // Verificando se a propriedade 'cor' foi removida
```
<details>
<summary>Resposta</summary>

```javascript
function removerPropriedade(obj, propriedade) {
  if (obj.hasOwnProperty(propriedade)) {
    delete obj[propriedade];
    return true;
  } else {
    return false;
  }
}
```
</details>
</details>
