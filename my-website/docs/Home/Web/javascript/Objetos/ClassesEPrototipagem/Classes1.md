---
sidebar_position: 16
title: Classes Pt1
sidebar_label: Classes Pt1
---

### Classes - 1

```javascript
// Classe é uma abstração que o compilador converte para função ao ser executada.

// Criando uma classe "Lançamento" para representar transações financeiras.
class Lancamento {
  // O construtor recebe um nome e um valor, com valores padrão "Genérico" e 0, respectivamente.
  constructor(nome = "Genérico", valor = 0) {
    // Atribuindo os valores recebidos aos atributos da classe.
    this.nome = nome;
    this.valor = valor;
  }
}

// Criando outra classe "CicloFinanceiro" para representar um ciclo de transações financeiras em um determinado período.
class CicloFinanceiro {
  // O construtor recebe o mês e o ano do ciclo financeiro.
  constructor(mes, ano) {
    // Atribuindo os valores recebidos aos atributos da classe.
    this.mes = mes;
    this.ano = ano;
    // Inicializando um array para armazenar os lançamentos financeiros.
    this.lancamentos = [];
  }

  // Método para adicionar múltiplos lançamentos ao ciclo financeiro.
  addLancamentos(...lancamentos) {
    // Para cada lançamento passado como parâmetro, adiciona ao array de lançamentos.
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  // Método para calcular o valor consolidado de todos os lançamentos no ciclo financeiro.
  sumario() {
    let valorConsolidado = 0;
    // Para cada lançamento, soma o valor ao valor consolidado.
    this.lancamentos.forEach(l => {
        valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

// Criando instâncias de lançamentos com valores específicos.
const salario = new Lancamento('Salario: ', 4500);
const contaDeLuz = new Lancamento('Luz', -20);

// Criando uma instância de ciclo financeiro para o mês de junho de 2018.
const contas = new CicloFinanceiro(6, 2018);
// Adicionando os lançamentos de salário e conta de luz ao ciclo financeiro.
contas.addLancamentos(salario, contaDeLuz);
// Mostrando o valor consolidado de todos os lançamentos no ciclo financeiro.
console.log(contas.sumario());
```
