---
sidebar_position: 1
---

# Princípios de Programação Orientada a Objetos (POO):

A POO é um paradigma de programação baseado no conceito de "objetos", que podem conter dados e código que manipula esses dados. Os quatro princípios fundamentais da POO são:

## Abstração:
A abstração é o processo de ocultar os detalhes complexos e mostrar apenas as funcionalidades necessárias. Em C#, isso pode ser feito usando interfaces ou classes abstratas.

### Exemplo de Abstração em C#:

```csharp
public interface IVeiculo {
    void Acelerar();
    void Frear();
}

public class Carro : IVeiculo {
    public void Acelerar() {
        // Implementação do método Acelerar
    }

    public void Frear() {
        // Implementação do método Frear
    }
}
```

## Encapsulamento:
O encapsulamento é a técnica de restringir o acesso aos componentes de um objeto, protegendo os dados internos da classe contra acesso não autorizado.

### Exemplo de Encapsulamento em C#:

```csharp
public class ContaBancaria {
    private double saldo;

    public void Depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        }
    }

    public double ObterSaldo() {
        return saldo;
    }
}
```

## Herança:
A herança permite que uma classe herde propriedades e métodos de outra classe. Isso promove a reutilização de código e estabelece uma relação hierárquica entre classes.

### Exemplo de Herança em C#:

```csharp
public class Animal {
    public void Respirar() {
        // Todos os animais respiram
    }
}

public class Peixe : Animal {
    public void Nadar() {
        // Peixes nadam
    }
}
```

## Polimorfismo:
O polimorfismo permite que objetos sejam tratados como instâncias de suas classes pai, em vez de suas classes reais, o que pode ser útil para a generalização de código.

### Exemplo de Polimorfismo em C#:

```csharp
public class Forma {
    public virtual void Desenhar() {
        Console.WriteLine("Desenhando uma forma");
    }
}

public class Circulo : Forma {
    public override void Desenhar() {
        Console.WriteLine("Desenhando um círculo");
    }
}

Forma forma = new Circulo();
forma.Desenhar(); // Saída: "Desenhando um círculo"
```
