---
title: 'Conceitos fundamentais do C#'
sidebar_position: 1
---

# Fundamentos C#


## Tipos de dados, variáveis e constantes em C#:

Os tipos de dados em C# são fundamentais para declarar variáveis e constantes. Os tipos incluem **int**, **float**, **string**, **bool**, entre outros. Variáveis podem armazenar valores que podem ser alterados durante a execução do programa, enquanto as constantes têm valores fixos que não podem ser modificados.

### Exemplo de declaração de variáveis em C#:

```
int idade = 25;
float altura = 1.75f;
string nome = "João";
bool isAtivo = true;
```

### Exemplo de declaração de constantes em C#:

```
const float PI = 3.14f;
const string Saudacao = "Olá, mundo!";
```

## Estruturas de controle (if, else, switch):

As estruturas de controle permitem que você altere o fluxo de execução do seu programa com base em condições específicas. O **if** e o **else** são usados para tomar decisões simples, enquanto o **switch** é útil quando você precisa selecionar uma ação com base no valor de uma expressão.

### Exemplo de uso do if-else em C#:

```
int idade = 18;
if (idade >= 18) {
    Console.WriteLine("Você é maior de idade.");
} else {
    Console.WriteLine("Você é menor de idade.");
}
```

### Exemplo de uso do switch em C#:

```
int diaDaSemana = 3;
switch (diaDaSemana) {
    case 1:
        Console.WriteLine("Segunda-feira");
        break;
    case 2:
        Console.WriteLine("Terça-feira");
        break;
    // Outros casos...
    default:
        Console.WriteLine("Dia inválido");
        break;
}
```

## Loops (for, while):

Os loops permitem que você execute uma determinada parte de código repetidamente até que uma condição seja atendida. O **for** é útil quando você sabe quantas vezes deseja executar o loop, enquanto o **while** é usado quando você precisa repetir uma operação enquanto uma condição for verdadeira.

### Exemplo de uso do for em C#:

```
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}
```

### Exemplo de uso do while em C#:

```
int contador = 0;
while (contador < 5) {
    Console.WriteLine(contador);
    contador++;
}
```

## Arrays e coleções em C#:

Arrays e coleções são usados para armazenar múltiplos valores do mesmo tipo. Arrays têm um tamanho fixo, enquanto coleções como **List** podem crescer dinamicamente.

### Exemplo de uso de arrays em C#:

```
int[] numeros = new int[3] { 1, 2, 3 };
```

### Exemplo de uso de List em C#:

```
List<string> nomes = new List<string>();
nomes.Add("Maria");
nomes.Add("João");
nomes.Add("Ana");
```

## Métodos e funções:

Métodos e funções são blocos de código reutilizáveis que podem executar uma tarefa específica. Eles ajudam a organizar e simplificar o código.

### Exemplo de declaração de método em C#:

```
public int Somar(int a, int b) {
    return a + b;
}
```

### Exemplo de chamada de método em C#:

```
int resultado = Somar(3, 4);
Console.WriteLine(resultado); // Saída: 7
```

## Classes e objetos em C#:

Classes são modelos para objetos, que são instâncias dessas classes. Elas encapsulam dados e comportamentos relacionados em uma única unidade.

### Exemplo de declaração de classe em C#:

```
public class Carro {
    public string Marca { get; set; }
    public string Modelo { get; set; }
    public int Ano { get; set; }
}
```

### Exemplo de criação de objeto em C#:

```
Carro meuCarro = new Carro();
meuCarro.Marca = "Toyota";
meuCarro.Modelo = "Corolla";
meuCarro.Ano = 2022;
```

## Herança, polimorfismo e encapsulamento em C#:

Herança permite que uma classe herde características (métodos e propriedades) de outra classe. Polimorfismo permite que objetos de classes diferentes sejam tratados de forma uniforme. Encapsulamento é o conceito de ocultar os detalhes internos de uma classe e expor apenas o necessário.

### Exemplo de herança em C#:

```
public class Animal {
    public void Falar() {
        Console.WriteLine("Som genérico de um animal.");
    }
}

public class Cachorro : Animal {
    public void Falar() {
        Console.WriteLine("Au au!");
    }
}
```

### Exemplo de polimorfismo em C#:

```
Animal animal = new Cachorro();
animal.Falar(); // Saída: "Au au!"
```

### Exemplo de encapsulamento em C#:

```
public class Pessoa {
    private string nome;
    public string Nome {
        get { return nome; }
        set { nome = value; }
    }
}
```