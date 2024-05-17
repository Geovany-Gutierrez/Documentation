"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6416],{3122:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(4848),n=t(8453);const a={sidebar_position:10,title:"Criando com Object.create()",sidebar_label:"Object.create()"},s=void 0,c={id:"Home/Web/javascript/Objetos/Objetos/Object.create",title:"Criando com Object.create()",description:"Criando Objetos com Object.create()",source:"@site/docs/Home/Web/javascript/Objetos/Objetos/Object.create.md",sourceDirName:"Home/Web/javascript/Objetos/Objetos",slug:"/Home/Web/javascript/Objetos/Objetos/Object.create",permalink:"/Documentation/docs/Home/Web/javascript/Objetos/Objetos/Object.create",draft:!1,unlisted:!1,editUrl:"https://github.com/Geovany-Gutierrez/Documentation/edit/main/my-website/docs/Home/Web/javascript/Objetos/Objetos/Object.create.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Criando com Object.create()",sidebar_label:"Object.create()"},sidebar:"tutorialSidebar",previous:{title:"Prototype Chain",permalink:"/Documentation/docs/Home/Web/javascript/Objetos/Objetos/ContinuacaoProot"},next:{title:"Fun\xe7\xf5es Construtoras",permalink:"/Documentation/docs/Home/Web/javascript/Objetos/Objetos/FuncoesConstrutoras"}},i={},l=[{value:"Criando Objetos com <code>Object.create()</code>",id:"criando-objetos-com-objectcreate",level:2}];function d(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Details:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.h2,{id:"criando-objetos-com-objectcreate",children:["Criando Objetos com ",(0,r.jsx)(o.code,{children:"Object.create()"})]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-javascript",children:'const pai = { nome: "Pedro", corCabelo: "preto" };\r\n\r\n// Criando o objeto filha1 utilizando o objeto pai como prot\xf3tipo\r\nconst filha1 = Object.create(pai);\r\nfilha1.nome = "Ana";\r\nconsole.log(filha1.corCabelo); // Resultado: preto\r\n\r\n// Criando o objeto filha2 com dois par\xe2metros (pai e atributos espec\xedficos de filha2)\r\nconst filha2 = Object.create(pai, {\r\n  nome: { value: "Bia", writable: false, enumerable: true },\r\n});\r\nconsole.log(filha2.nome); // Resultado: Bia\r\nfilha2.nome = "Daenerys"; // N\xe3o afeta o valor devido \xe0 propriedade \'writable: false\'\r\nconsole.log(Object.keys(filha2)); // Resultado: [\'nome\']\r\nconsole.log(Object.keys(filha1)); // Resultado: [\'nome\']\r\n\r\nfor (let key in filha2) {\r\n  filha2.hasOwnProperty(key)\r\n    ? console.log(`${key}: Filha 2 property`)\r\n    : console.log(`${key}: Hier\xe1rquico`);\r\n  // hasOwnProperty -> Pertence \xe0 pr\xf3pria filha2?\r\n}\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Qual ser\xe1 o resultado de ",(0,r.jsx)(o.code,{children:"console.log(filha1.corCabelo)"}),"?"]}),"\n",(0,r.jsx)(t,{children:(0,r.jsxs)(o.p,{children:[(0,r.jsx)("summary",{children:"Resposta"}),"\r\n",(0,r.jsx)(o.code,{children:"preto"})]})}),"\n",(0,r.jsxs)(o.p,{children:["Qual ser\xe1 o resultado de ",(0,r.jsx)(o.code,{children:"console.log(Object.keys(filha2))"}),"?"]}),"\n",(0,r.jsx)(t,{children:(0,r.jsxs)(o.p,{children:[(0,r.jsx)("summary",{children:"Resposta"}),"\r\n",(0,r.jsx)(o.code,{children:"['nome']"})]})})]})}function b(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>c});var r=t(6540);const n={},a=r.createContext(n);function s(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);