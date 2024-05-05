---
sidebar_position: 2
---


# Princípios SOLID:

Os princípios SOLID são um conjunto de cinco princípios de design de software que ajudam a criar sistemas mais compreensíveis, flexíveis e sustentáveis.

## Single Responsibility Principle (Princípio da Responsabilidade Única):
Uma classe deve ter apenas uma razão para mudar, significando que deve ter apenas uma tarefa ou responsabilidade.

### Exemplo do SRP em C#:

```csharp
public class Relatorio {
    public void GerarRelatorio() {
        // Gera o relatório
    }
}

public class Impressora {
    public void ImprimirRelatorio(Relatorio relatorio) {
        // Imprime o relatório
    }
}
```

## Open/Closed Principle (Princípio Aberto/Fechado):
Entidades de software (classes, módulos, funções, etc.) devem estar abertas para extensão, mas fechadas para modificação.

### Exemplo do OCP em C#:

```csharp
public abstract class Forma {
    public abstract double Area();
}

public class Retangulo : Forma {
    public double Largura { get; set; }
    public double Altura { get; set; }

    public override double Area() {
        return Largura * Altura;
    }
}

public class Circulo : Forma {
    public double Raio { get; set; }

    public override double Area() {
        return Math.PI * Raio * Raio;
    }
}
```

## Liskov Substitution Principle (Princípio da Substituição de Liskov):
Objetos de uma classe base devem ser substituíveis por objetos de subclasses sem afetar a integridade do programa.

### Exemplo do LSP em C#:

```csharp
public class Ave {
    public virtual void Voar() {
        // Implementação do voo
    }
}

public class Pinguim : Ave {
    public override void Voar() {
        throw new InvalidOperationException("Pinguins não voam");
    }
}
```

## Interface Segregation Principle (Princípio da Segregação de Interface):
Uma classe não deve ser forçada a implementar interfaces que não utiliza.

### Exemplo do ISP em C#:

```csharp
public interface IAve {
    void Comer();
}

public interface IAveVoadora {
    void Voar();
}

public class Coruja : IAve, IAveVoadora {
    public void Comer() {
        // Comer
    }

    public void Voar() {
        // Voar
    }
}

public class Avestruz : IAve {
    public void Comer() {
        // Comer
    }
}
```

## Dependency Inversion Principle (Princípio da Inversão de Dependência):
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

### Exemplo do DIP em C#:

```csharp
public interface IDispositivoDeArmazenamento {
    void SalvarDados(object dados);
}

public class DiscoRigido : IDispositivoDeArmazenamento {
    public void SalvarDados(object dados) {
        // Salva dados no disco rígido
    }
}

public class Cliente {
    private IDispositivoDeArmazenamento dispositivoDeArmazenamento;

    public Cliente(IDispositivoDeArmazenamento dispositivo) {
        dispositivoDeArmazenamento = dispositivo;
    }

    public void SalvarDados(object dados) {
        dispositivoDeArmazenamento.SalvarDados(dados);
    }
}
```