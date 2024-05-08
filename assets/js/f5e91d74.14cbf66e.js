"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9184],{4433:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>u});var n=s(4848),a=s(8453);const r={},c="Fun\xe7\xf5es",t={id:"Home/javascript/Funcoes/Funcoes",title:"Fun\xe7\xf5es",description:"Fun\xe7\xf5es s\xe3o um dos blocos de constru\xe7\xe3o fundamentais em JavaScript. Uma fun\xe7\xe3o \xe9 um procedimento de JavaScript - um conjunto de instru\xe7\xf5es que executa uma tarefa ou calcula um valor. Para usar uma fun\xe7\xe3o, voc\xea deve defini-la em algum lugar no escopo do qual voc\xea deseja cham\xe1-la.",source:"@site/docs/Home/javascript/Funcoes/Funcoes.md",sourceDirName:"Home/javascript/Funcoes",slug:"/Home/javascript/Funcoes/",permalink:"/Documentation/docs/Home/javascript/Funcoes/",draft:!1,unlisted:!1,editUrl:"https://github.com/Geovany-Gutierrez/Documentation/edit/main/my-website/docs/Home/javascript/Funcoes/Funcoes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fun\xe7\xf5es em JavaScript",permalink:"/Documentation/docs/category/fun\xe7\xf5es-em-javascript"},next:{title:"Fun\xe7\xf5es - Parte 2.",permalink:"/Documentation/docs/Home/javascript/Funcoes/Funcoes2"}},i={},u=[];function d(e){const o={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"fun\xe7\xf5es",children:"Fun\xe7\xf5es"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Fun\xe7\xf5es"})," s\xe3o um dos blocos de constru\xe7\xe3o fundamentais em JavaScript. Uma fun\xe7\xe3o \xe9 um procedimento de JavaScript - um conjunto de instru\xe7\xf5es que executa uma tarefa ou calcula um valor. Para usar uma fun\xe7\xe3o, voc\xea deve defini-la em algum lugar no escopo do qual voc\xea deseja cham\xe1-la."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Arrow Functions"}),":"]}),"\n",(0,n.jsxs)(o.p,{children:["As ",(0,n.jsx)(o.strong,{children:"Arrow Functions"})," introduzem uma sintaxe mais curta para escrever express\xf5es de fun\xe7\xe3o. Elas n\xe3o t\xeam seu pr\xf3prio ",(0,n.jsx)(o.code,{children:"this"}),", n\xe3o s\xe3o adequadas para m\xe9todos e n\xe3o podem ser usadas como construtoras."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",children:"const soma = (a, b) => a + b;\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Call e Apply"}),":"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"call"})," e ",(0,n.jsx)(o.code,{children:"apply"})," s\xe3o m\xe9todos fundamentais para o controle de ",(0,n.jsx)(o.code,{children:"this"})," em fun\xe7\xf5es. Ambos os m\xe9todos chamam uma fun\xe7\xe3o com um dado valor de ",(0,n.jsx)(o.code,{children:"this"})," e argumentos fornecidos individualmente (",(0,n.jsx)(o.code,{children:"call"}),") ou em um array (",(0,n.jsx)(o.code,{children:"apply"}),")."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",children:"function introduzir() {\r\n  console.log(`Meu nome \xe9 ${this.nome}`);\r\n}\r\nconst pessoa = { nome: 'Jo\xe3o' };\r\nintroduzir.call(pessoa); // Meu nome \xe9 Jo\xe3o\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Callbacks"}),":"]}),"\n",(0,n.jsxs)(o.p,{children:["Um ",(0,n.jsx)(o.strong,{children:"callback"})," \xe9 uma fun\xe7\xe3o passada a outra fun\xe7\xe3o como argumento, que \xe9 ent\xe3o invocada dentro da fun\xe7\xe3o externa para completar algum tipo de rotina ou a\xe7\xe3o."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",children:"function processar(callback) {\r\n  callback();\r\n}\r\nprocessar(() => {\r\n  console.log('Processamento conclu\xeddo!');\r\n});\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Cidad\xe3os de Primeira Classe"}),":"]}),"\n",(0,n.jsxs)(o.p,{children:["Fun\xe7\xf5es em JavaScript s\xe3o consideradas ",(0,n.jsx)(o.strong,{children:"cidad\xe3os de primeira classe"})," porque podem ser atribu\xeddas a vari\xe1veis, passadas como argumentos para outras fun\xe7\xf5es, retornadas por outras fun\xe7\xf5es e podem possuir propriedades e m\xe9todos, assim como qualquer outro objeto JavaScript."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Classes vs Factory Functions"}),":"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Classes"})," e ",(0,n.jsx)(o.strong,{children:"Factory Functions"})," s\xe3o duas maneiras de criar objetos em JavaScript. Classes s\xe3o constru\xe7\xf5es sint\xe1ticas que trazem uma forma mais familiar de OOP para JavaScript, enquanto Factory Functions s\xe3o simplesmente fun\xe7\xf5es que criam objetos sem o uso da palavra-chave ",(0,n.jsx)(o.code,{children:"new"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Exemplo de Factory Function:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",children:"function criarPessoa(nome) {\r\n  return {\r\n    falar: () => console.log(`Meu nome \xe9 ${nome}`)\r\n  };\r\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Closures"}),":"]}),"\n",(0,n.jsxs)(o.p,{children:["Uma ",(0,n.jsx)(o.strong,{children:"closure"})," \xe9 a combina\xe7\xe3o de uma fun\xe7\xe3o e o ambiente lexical dentro do qual essa fun\xe7\xe3o foi declarada. Isso significa que uma fun\xe7\xe3o tem acesso \xe0s vari\xe1veis do escopo em que foi criada, mesmo ap\xf3s outros escopos terem sido fechados."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",children:"function criarSaudacao(nome) {\r\n  return function() {\r\n    console.log(`Ol\xe1, ${nome}!`);\r\n  };\r\n}\r\nconst saudarJoao = criarSaudacao('Jo\xe3o');\r\nsaudarJoao(); // Ol\xe1, Jo\xe3o!\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Contexto L\xe9xico"}),":"]}),"\n",(0,n.jsxs)(o.p,{children:["O ",(0,n.jsx)(o.strong,{children:"contexto l\xe9xico"})," refere-se ao ambiente em que o c\xf3digo est\xe1 escrito. Em JavaScript, onde voc\xea escreve sua fun\xe7\xe3o e vari\xe1veis tem um impacto direto em como eles se comportam, especialmente quando se trata de closures e escopo de vari\xe1veis."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Factory Functions"}),":"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Factory Functions"})," s\xe3o fun\xe7\xf5es que retornam novos objetos. Elas oferecem uma alternativa ao uso de classes para instanciar novos objetos."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",children:"function criarAnimal(tipo, nome) {\r\n  return {\r\n    tipo,\r\n    nome,\r\n    falar: () => console.log(`Eu sou um(a) ${tipo} e meu nome \xe9 ${nome}`)\r\n  };\r\n}\n"})})]})}function l(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>c,x:()=>t});var n=s(6540);const a={},r=n.createContext(a);function c(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);