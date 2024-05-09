# Funções

**Funções** são um dos blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você deseja chamá-la.

**Arrow Functions**:

As **Arrow Functions** introduzem uma sintaxe mais curta para escrever expressões de função. Elas não têm seu próprio `this`, não são adequadas para métodos e não podem ser usadas como construtoras.

```javascript
const soma = (a, b) => a + b;
```

**Call e Apply**:

`call` e `apply` são métodos fundamentais para o controle de `this` em funções. Ambos os métodos chamam uma função com um dado valor de `this` e argumentos fornecidos individualmente (`call`) ou em um array (`apply`).

```javascript
function introduzir() {
  console.log(`Meu nome é ${this.nome}`);
}
const pessoa = { nome: 'João' };
introduzir.call(pessoa); // Meu nome é João
```

**Callbacks**:

Um **callback** é uma função passada a outra função como argumento, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação.

```javascript
function processar(callback) {
  callback();
}
processar(() => {
  console.log('Processamento concluído!');
});
```

**Cidadãos de Primeira Classe**:

Funções em JavaScript são consideradas **cidadãos de primeira classe** porque podem ser atribuídas a variáveis, passadas como argumentos para outras funções, retornadas por outras funções e podem possuir propriedades e métodos, assim como qualquer outro objeto JavaScript.

**Classes vs Factory Functions**:

**Classes** e **Factory Functions** são duas maneiras de criar objetos em JavaScript. Classes são construções sintáticas que trazem uma forma mais familiar de OOP para JavaScript, enquanto Factory Functions são simplesmente funções que criam objetos sem o uso da palavra-chave `new`.

Exemplo de Factory Function:

```javascript
function criarPessoa(nome) {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  };
}
```

**Closures**:

Uma **closure** é a combinação de uma função e o ambiente lexical dentro do qual essa função foi declarada. Isso significa que uma função tem acesso às variáveis do escopo em que foi criada, mesmo após outros escopos terem sido fechados.

```javascript
function criarSaudacao(nome) {
  return function() {
    console.log(`Olá, ${nome}!`);
  };
}
const saudarJoao = criarSaudacao('João');
saudarJoao(); // Olá, João!
```

**Contexto Léxico**:

O **contexto léxico** refere-se ao ambiente em que o código está escrito. Em JavaScript, onde você escreve sua função e variáveis tem um impacto direto em como eles se comportam, especialmente quando se trata de closures e escopo de variáveis.

**Factory Functions**:

**Factory Functions** são funções que retornam novos objetos. Elas oferecem uma alternativa ao uso de classes para instanciar novos objetos.

```javascript
function criarAnimal(tipo, nome) {
  return {
    tipo,
    nome,
    falar: () => console.log(`Eu sou um(a) ${tipo} e meu nome é ${nome}`)
  };
}
```