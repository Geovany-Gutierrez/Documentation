"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1751],{571:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=o(4848),a=o(8453);const s={sidebar_position:1,title:"Documenta\xe7\xe3o - Desafio",sidebar_label:"Documenta\xe7\xe3o - Desafio"},i=void 0,d={id:"EstudoCodigos/HomePage",title:"Documenta\xe7\xe3o - Desafio",description:"App.jsx",source:"@site/docs/EstudoCodigos/HomePage.md",sourceDirName:"EstudoCodigos",slug:"/EstudoCodigos/HomePage",permalink:"/Documentation/docs/EstudoCodigos/HomePage",draft:!1,unlisted:!1,editUrl:"https://github.com/Geovany-Gutierrez/Documentation/edit/main/my-website/docs/EstudoCodigos/HomePage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Documenta\xe7\xe3o - Desafio",sidebar_label:"Documenta\xe7\xe3o - Desafio"},sidebar:"tutorialSidebar",previous:{title:"Estudo Projeto",permalink:"/Documentation/docs/category/estudo-projeto"},next:{title:"Documentacao",permalink:"/Documentation/docs/category/documentacao"}},t={},l=[{value:"App.jsx",id:"appjsx",level:2},{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:3},{value:"Uso",id:"uso",level:3},{value:"C\xf3digo",id:"c\xf3digo",level:3},{value:"Detalhes T\xe9cnicos",id:"detalhes-t\xe9cnicos",level:3},{value:"LoginPage",id:"loginpage",level:2},{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o-1",level:3},{value:"C\xf3digo",id:"c\xf3digo-1",level:3},{value:"Detalhes T\xe9cnicos",id:"detalhes-t\xe9cnicos-1",level:3},{value:"Form",id:"form",level:2},{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o-2",level:3},{value:"C\xf3digo",id:"c\xf3digo-2",level:3},{value:"Detalhes T\xe9cnicos",id:"detalhes-t\xe9cnicos-2",level:3},{value:"HomePage",id:"homepage",level:2},{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o-3",level:3},{value:"C\xf3digo",id:"c\xf3digo-3",level:3},{value:"Detalhes T\xe9cnicos",id:"detalhes-t\xe9cnicos-3",level:3},{value:"Navbar",id:"navbar",level:2},{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o-4",level:3},{value:"C\xf3digo",id:"c\xf3digo-4",level:3},{value:"Detalhes T\xe9cnicos",id:"detalhes-t\xe9cnicos-4",level:3},{value:"CarouselCard",id:"carouselcard",level:2},{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o-5",level:3},{value:"C\xf3digo",id:"c\xf3digo-5",level:3},{value:"Detalhes T\xe9cnicos",id:"detalhes-t\xe9cnicos-5",level:3},{value:"Card",id:"card",level:2},{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o-6",level:3},{value:"C\xf3digo",id:"c\xf3digo-6",level:3},{value:"Detalhes T\xe9cnicos",id:"detalhes-t\xe9cnicos-6",level:3},{value:"Diagrama de Arquitetura Geral do Aplicativo:",id:"diagrama-de-arquitetura-geral-do-aplicativo",level:2},{value:"Diagrama de Fluxo de Navega\xe7\xe3o:",id:"diagrama-de-fluxo-de-navega\xe7\xe3o",level:3},{value:"Diagrama do Processo de Autentica\xe7\xe3o:",id:"diagrama-do-processo-de-autentica\xe7\xe3o",level:3}];function c(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"appjsx",children:"App.jsx"}),"\n",(0,n.jsx)(r.h3,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"App.jsx"})," serve como o ponto de entrada principal da aplica\xe7\xe3o. Este arquivo define o componente ",(0,n.jsx)(r.code,{children:"App"}),", que gerencia o estado de autentica\xe7\xe3o do usu\xe1rio e determina qual p\xe1gina deve ser renderizada com base nesse estado."]}),"\n",(0,n.jsx)(r.h3,{id:"uso",children:"Uso"}),"\n",(0,n.jsxs)(r.p,{children:["O componente ",(0,n.jsx)(r.code,{children:"App"})," utiliza o hook ",(0,n.jsx)(r.code,{children:"useState"})," para manter o estado de autentica\xe7\xe3o do usu\xe1rio (",(0,n.jsx)(r.code,{children:"isLoggedIn"}),") e as informa\xe7\xf5es do usu\xe1rio atual (",(0,n.jsx)(r.code,{children:"currentUser"}),"). O hook ",(0,n.jsx)(r.code,{children:"useEffect"})," \xe9 usado para verificar se existe um usu\xe1rio armazenado no local storage quando o componente \xe9 montado pela primeira vez."]}),"\n",(0,n.jsx)(r.h3,{id:"c\xf3digo",children:"C\xf3digo"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import { useEffect, useState } from "react";\r\nimport LoginPage from "./pages/login/LoginPage";\r\nimport HomePage from "./pages/home/HomePage";\r\n\r\nfunction App() {\r\n  // Estado para gerenciar se o usu\xe1rio est\xe1 logado\r\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\r\n  // Estado para armazenar as informa\xe7\xf5es do usu\xe1rio atual\r\n  const [, setCurrentUser] = useState(null);\r\n\r\n  // Verifica se o usu\xe1rio est\xe1 autenticado ao carregar o componente\r\n  useEffect(() => {\r\n    // Recupera o usu\xe1rio do local storage, se dispon\xedvel\r\n    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "{}");\r\n    // Se um token estiver presente, considera o usu\xe1rio como logado\r\n    setIsLoggedIn(!!storedUser.token);\r\n    // Atualiza as informa\xe7\xf5es do usu\xe1rio atual com os dados recuperados\r\n    setCurrentUser(storedUser);\r\n  }, []);\r\n\r\n  // Renderiza `HomePage` se o usu\xe1rio estiver logado, caso contr\xe1rio `LoginPage`\r\n  return isLoggedIn ? <HomePage /> : <LoginPage />;\r\n}\r\n\r\nexport default App;\n'})}),"\n",(0,n.jsx)(r.h3,{id:"detalhes-t\xe9cnicos",children:"Detalhes T\xe9cnicos"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useState"}),": Inicializa o estado de autentica\xe7\xe3o e o estado do usu\xe1rio atual."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useEffect"}),": Executa uma verifica\xe7\xe3o no local storage para determinar o estado de autentica\xe7\xe3o."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"localStorage"}),": Utilizado para persistir as informa\xe7\xf5es do usu\xe1rio entre as sess\xf5es."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"JSON.parse"}),": Converte a string armazenada no local storage de volta para um objeto JavaScript."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Operador Condicional (tern\xe1rio)"}),": ",(0,n.jsx)(r.code,{children:"isLoggedIn ? <HomePage /> : <LoginPage />"})," decide qual componente renderizar."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"loginpage",children:"LoginPage"}),"\n",(0,n.jsx)(r.h3,{id:"introdu\xe7\xe3o-1",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O ",(0,n.jsx)(r.code,{children:"LoginPage"})," \xe9 um componente React que gerencia a exibi\xe7\xe3o da tela de login. Ele utiliza anima\xe7\xf5es para melhorar a experi\xeancia do usu\xe1rio e transi\xe7\xf5es entre o estado inicial e o formul\xe1rio de login."]}),"\n",(0,n.jsx)(r.h3,{id:"c\xf3digo-1",children:"C\xf3digo"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import { useState, useEffect } from "react";\r\nimport Logo from "../../components/Logo";\r\nimport Form from "../../components/Form";\r\nimport {\r\n  Background,\r\n  FormContainer,\r\n  Wrapper,\r\n  Overlay,\r\n  StyledForm,\r\n} from "../../styles/loginPage.styles";\r\n\r\nconst LoginPage = () => {\r\n  const [showOverlay, setShowOverlay] = useState(true);\r\n\r\n  useEffect(() => {\r\n    const timer = setTimeout(() => {\r\n      setShowOverlay(false);\r\n    }, 2500);\r\n    return () => clearTimeout(timer);\r\n  }, []);\r\n\r\n  return (\r\n    <>\r\n      {showOverlay && (\r\n        <Overlay showOverlay={showOverlay}>\r\n          <Logo />\r\n        </Overlay>\r\n      )}\r\n      <FormContainer>\r\n        <Wrapper>\r\n          {!showOverlay && (\r\n            <>\r\n              <Logo />\r\n              <StyledForm>\r\n                <Form />\r\n              </StyledForm>\r\n            </>\r\n          )}\r\n        </Wrapper>\r\n        <Background />\r\n      </FormContainer>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default LoginPage;\n'})}),"\n",(0,n.jsx)(r.h3,{id:"detalhes-t\xe9cnicos-1",children:"Detalhes T\xe9cnicos"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useState"}),": Controla a visibilidade do overlay."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useEffect"}),": Gerencia um temporizador para a transi\xe7\xe3o do overlay."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Overlay"}),": Um componente estilizado que exibe o logo durante a anima\xe7\xe3o inicial."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"form",children:"Form"}),"\n",(0,n.jsx)(r.h3,{id:"introdu\xe7\xe3o-2",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O componente ",(0,n.jsx)(r.code,{children:"Form"})," \xe9 respons\xe1vel por gerenciar o estado do formul\xe1rio de login e registro, incluindo a valida\xe7\xe3o de entrada do usu\xe1rio e a intera\xe7\xe3o com o local storage para autentica\xe7\xe3o."]}),"\n",(0,n.jsx)(r.h3,{id:"c\xf3digo-2",children:"C\xf3digo"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import { useState } from "react";\r\nimport {\r\n  Title,\r\n  Paragraph,\r\n  InputField,\r\n  FormLabel,\r\n  SubmitButton,\r\n  RedSpan,\r\n} from "../styles/Form.styles";\r\n\r\nfunction generateToken() {\r\n  return Math.random().toString(36).substring(2, 18);\r\n}\r\n\r\nconst Form: React.FC = () => {\r\n  const [username, setUsername] = useState("");\r\n  const [password, setPassword] = useState("");\r\n  const [formType, setFormType] = useState(0);\r\n  const [, setLoggedIn] = useState(false);\r\n\r\n  // Fun\xe7\xf5es handleToggleForm, handleRegister, handleLogin aqui\r\n\r\n  return (\r\n    <form onSubmit={formType === 0 ? handleLogin : handleRegister}>\r\n      {/* Elementos do formul\xe1rio aqui */}\r\n    </form>\r\n  );\r\n};\r\n\r\nexport default Form;\n'})}),"\n",(0,n.jsx)(r.h3,{id:"detalhes-t\xe9cnicos-2",children:"Detalhes T\xe9cnicos"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useState"}),": Mant\xe9m o estado dos campos de entrada e o tipo de formul\xe1rio."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"generateToken"}),": Gera um token aleat\xf3rio para a autentica\xe7\xe3o do usu\xe1rio."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"handleToggleForm"}),": Alterna entre os modos de login e registro."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"handleRegister"}),": Registra um novo usu\xe1rio no local storage."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"handleLogin"}),": Autentica um usu\xe1rio existente."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"homepage",children:"HomePage"}),"\n",(0,n.jsx)(r.h3,{id:"introdu\xe7\xe3o-3",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O ",(0,n.jsx)(r.code,{children:"HomePage"})," \xe9 um componente React que serve como a p\xe1gina inicial da aplica\xe7\xe3o. Ele combina v\xe1rios componentes para criar uma interface de usu\xe1rio rica e interativa."]}),"\n",(0,n.jsx)(r.h3,{id:"c\xf3digo-3",children:"C\xf3digo"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import React from "react";\r\nimport Navbar from "../../components/Navbar";\r\nimport CarouselCard from "../../components/Body";\r\n\r\nconst Home: React.FC = () => {\r\n  return (\r\n    <>\r\n      <Navbar />\r\n      <CarouselCard />\r\n    </>\r\n  );\r\n};\r\n\r\nexport default Home;\n'})}),"\n",(0,n.jsx)(r.h3,{id:"detalhes-t\xe9cnicos-3",children:"Detalhes T\xe9cnicos"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Navbar"}),": Um componente que fornece a navega\xe7\xe3o principal da aplica\xe7\xe3o."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"CarouselCard"}),": Um componente que exibe conte\xfado em um formato de carrossel."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"navbar",children:"Navbar"}),"\n",(0,n.jsx)(r.h3,{id:"introdu\xe7\xe3o-4",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O componente ",(0,n.jsx)(r.code,{children:"Navbar"})," \xe9 uma barra de navega\xe7\xe3o responsiva que permite aos usu\xe1rios alternar entre diferentes categorias e realizar logout."]}),"\n",(0,n.jsx)(r.h3,{id:"c\xf3digo-4",children:"C\xf3digo"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import { FaBars as IconeCustomizado } from "react-icons/fa";\r\nimport { useState, useCallback, useEffect } from "react";\r\nimport {\r\n  // Estilos importados aqui\r\n} from "../styles/Navbar.styles";\r\nimport Logo from "./Logo";\r\n\r\n// Componente Logout aqui\r\n\r\nconst Navbar = () => {\r\n  // Estados e fun\xe7\xf5es aqui\r\n\r\n  return (\r\n    // JSX do Navbar aqui\r\n  );\r\n};\r\n\r\nexport default Navbar;\n'})}),"\n",(0,n.jsx)(r.h3,{id:"detalhes-t\xe9cnicos-4",children:"Detalhes T\xe9cnicos"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useState"}),": Mant\xe9m o estado do menu e da categoria atual."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useCallback"}),": Otimiza as fun\xe7\xf5es de toggle e logout para evitar recria\xe7\xf5es desnecess\xe1rias."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useEffect"}),": Recupera a categoria atual do local storage quando o componente \xe9 montado."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"localStorage"}),": Armazena e recupera a categoria atual e os dados do usu\xe1rio para funcionalidades de navega\xe7\xe3o e logout."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"carouselcard",children:"CarouselCard"}),"\n",(0,n.jsx)(r.h3,{id:"introdu\xe7\xe3o-5",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O componente ",(0,n.jsx)(r.code,{children:"CarouselCard"})," \xe9 respons\xe1vel por renderizar um carrossel de cards interativos que exibem informa\xe7\xf5es sobre personagens, filmes ou HQs, dependendo da categoria selecionada pelo usu\xe1rio."]}),"\n",(0,n.jsx)(r.h3,{id:"c\xf3digo-5",children:"C\xf3digo"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import { useState, useEffect } from "react";\r\nimport { FaStar, FaTimes } from "react-icons/fa";\r\n// Importa\xe7\xf5es de estilos omitidas para brevidade\r\n\r\ninterface CardInfo {\r\n  // Estrutura da interface CardInfo aqui\r\n}\r\n\r\nconst CarouselCard = () => {\r\n  // Estados e efeitos para gerenciar a lista de cards e a categoria atual\r\n\r\n  // Fun\xe7\xe3o para filtrar filmes por cronologia ou ano de lan\xe7amento\r\n\r\n  return (\r\n    // JSX do CarouselCard aqui\r\n  );\r\n};\r\n\r\n// Componente Card individual\r\n\r\nconst Card = ({\r\n  item,\r\n  categoriaAtual,\r\n}: {\r\n  item: CardInfo;\r\n  categoriaAtual: string;\r\n}): JSX.Element => {\r\n  // Estado e fun\xe7\xe3o para controlar a expans\xe3o do card\r\n\r\n  return (\r\n    // JSX do Card aqui\r\n  );\r\n};\r\n\r\nexport default CarouselCard;\n'})}),"\n",(0,n.jsx)(r.h3,{id:"detalhes-t\xe9cnicos-5",children:"Detalhes T\xe9cnicos"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useState"}),": Utilizado para manter o estado da lista de cards, a lista completa para filtragem e a categoria atual."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useEffect"}),": Empregado para carregar a categoria atual do localStorage e para carregar os dados do JSON quando a categoria muda."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"fetch"}),": Usado para solicitar dados do arquivo JSON."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Filtragem"}),": A fun\xe7\xe3o ",(0,n.jsx)(r.code,{children:"filtrarFilmes"})," permite ordenar a lista de filmes por cronologia ou ano de lan\xe7amento."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"card",children:"Card"}),"\n",(0,n.jsx)(r.h3,{id:"introdu\xe7\xe3o-6",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O componente ",(0,n.jsx)(r.code,{children:"Card"})," \xe9 um card individual dentro do carrossel que pode ser expandido para mostrar mais detalhes sobre o item exibido."]}),"\n",(0,n.jsx)(r.h3,{id:"c\xf3digo-6",children:"C\xf3digo"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"// Componente Card individual com estados e fun\xe7\xf5es\r\n\r\nexport default Card;\n"})}),"\n",(0,n.jsx)(r.h3,{id:"detalhes-t\xe9cnicos-6",children:"Detalhes T\xe9cnicos"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"useState"}),": Controla se o card est\xe1 expandido ou n\xe3o."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"toggleExpand"}),": Fun\xe7\xe3o que alterna o estado de expans\xe3o do card."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\xcdcones"}),": ",(0,n.jsx)(r.code,{children:"FaStar"})," e ",(0,n.jsx)(r.code,{children:"FaTimes"})," do ",(0,n.jsx)(r.code,{children:"react-icons/fa"})," s\xe3o usados para representar avalia\xe7\xf5es e fechar o card expandido."]}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"diagrama-de-arquitetura-geral-do-aplicativo",children:"Diagrama de Arquitetura Geral do Aplicativo:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-mermaid",children:"graph LR;\r\n    A[App.jsx] --\x3e B(LoginPage);\r\n    A --\x3e C(HomePage);\r\n    B --\x3e D(Form);\r\n    C --\x3e E(Navbar);\r\n    C --\x3e F(CarouselCard);\r\n    F --\x3e G(Card);\r\n    E --\x3e H(Logo);\n"})}),"\n",(0,n.jsx)(r.h3,{id:"diagrama-de-fluxo-de-navega\xe7\xe3o",children:"Diagrama de Fluxo de Navega\xe7\xe3o:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-mermaid",children:"graph TD;\r\n    LoginPage --\x3e HomePage;\r\n    HomePage --\x3e Navbar;\r\n    Navbar --\x3e LoginPage;\r\n    Navbar --\x3e HomePage;\r\n    HomePage --\x3e CarouselCard;\r\n    CarouselCard --\x3e Card;\n"})}),"\n",(0,n.jsx)(r.h3,{id:"diagrama-do-processo-de-autentica\xe7\xe3o",children:"Diagrama do Processo de Autentica\xe7\xe3o:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-mermaid",children:"graph TD;\r\n    A[App.jsx] --\x3e B(LoginPage);\r\n    B --\x3e C(Form);\r\n    C --\x3e D(handleLogin);\r\n    C --\x3e E(handleRegister);\r\n    D --\x3e F(localStorage);\r\n    E --\x3e F(localStorage);\n"})})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>d});var n=o(6540);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);