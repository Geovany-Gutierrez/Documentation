---
sidebar_position: 2
title: Navbar
sidebar_label: Navbar
---

# Navbar.tsx

<details>
<summary>Código do Navbar.tsx</summary>

```jsx
import { FaBars } from "react-icons/fa";
import React, { useState, useCallback } from "react";
import {
  HamburguerMenu,
  MobileList,
  MobileListItem,
  Container,
  ListStyled,
  NavbarStyled,
  Wrapper,
} from "../styles/Navbar.styles";
import Logo from "./Logo";

const EncerraToken = () => {
  const handleLogout = useCallback(() => {
    const dados = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (dados) {
      dados.token = "";
      localStorage.setItem("currentUser", JSON.stringify(dados));
      window.location.reload();
    }
  }, []);

  return <a onClick={handleLogout}>Sair</a>;
};

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsToggled((prevState) => !prevState);
  }, []);

  return (
    <NavbarStyled>
      <Container>
        <a href="/">
          <Logo />
        </a>
        <ListStyled>
          <li><a href="/personagens">Personagens</a></li>
          <li><a href="/filmes">Filmes</a></li>
          <li><a href="/HQs">HQs</a></li>
          <Wrapper>
            <img src="/images/profile-picture.png" alt="Perfil" />
            <li><EncerraToken /></li>
          </Wrapper>
        </ListStyled>
        <HamburguerMenu onClick={toggleMenu}>
          <FaBars size={24} color="#FFF" />
        </HamburguerMenu>
      </Container>
      {isToggled && (
        <MobileList>
          <MobileListItem><a href="/personagens">Personagens</a></MobileListItem>
          <MobileListItem><a href="/filmes">Filmes</a></MobileListItem>
          <MobileListItem><a href="/HQs">HQs</a></MobileListItem>
          <MobileListItem><EncerraToken /></MobileListItem>
        </MobileList>
      )}
    </NavbarStyled>
  );
};

export default Navbar;
```

</details>

<details>
<summary>Navbar</summary>

## Navbar.tsx - Documentação

O arquivo `Navbar.tsx` contém um componente de barra de navegação que é usado para navegar pelo site. Ele inclui um menu de hambúrguer para visualização em dispositivos móveis e uma função para encerrar a sessão do usuário.

### Estados

- `isToggled`: Um booleano que determina se o menu do hambúrguer está aberto ou fechado.

### Funções

- `EncerraToken`: Esta função encerra a sessão do usuário atual, removendo o token do armazenamento local e recarregando a página.
- `toggleMenu`: Esta função alterna o estado de `isToggled`. Se estiver ligado, ela desliga e vice-versa.

### Código de Exemplo

```jsx
const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsToggled((prevState) => !prevState);
  }, []);

  return (
    <NavbarStyled>
      {/* ... código omitido para brevidade ... */}
      {isToggled && (
        <MobileList>
          {/* ... código omitido para brevidade ... */}
        </MobileList>
      )}
    </NavbarStyled>
  );
};
```

### Explicação Detalhada

- **EncerraToken**: Esta função é responsável por encerrar a sessão do usuário. Ela faz isso removendo o token do usuário do armazenamento local e recarregando a página. Isso efetivamente faz com que o usuário seja deslogado.

- **toggleMenu**: Esta função é usada para alternar o estado do menu do hambúrguer. Quando o estado `isToggled` é `true`, o menu do hambúrguer é exibido. Quando é `false`, o menu do hambúrguer é ocultado. A função `toggleMenu` é chamada quando o usuário clica no ícone do menu do hambúrguer.

- **useCallback**: O `useCallback` é um hook do React que retorna uma versão memorizada de uma função que só muda se uma das dependências for alterada. Isso é útil quando passamos callbacks para componentes otimizados que dependem da igualdade de referência para evitar renderizações desnecessárias. No caso do `toggleMenu`, ele garante que a função não seja recriada toda vez que o componente for renderizado, a menos que suas dependências mudem - neste caso, não há dependências, então a função é criada apenas uma vez.

- **Navbar**: Este é o componente principal que retorna a barra de navegação. Ele contém links para diferentes partes do site e um ícone de menu de hambúrguer que, quando clicado, exibe ou oculta os links de navegação em dispositivos móveis.

</details>