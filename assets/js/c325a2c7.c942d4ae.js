"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6537],{1941:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=r(4848),n=r(8453);const s={sidebar_position:8,title:"Map",sidebar_label:"Map"},t=void 0,i={id:"Home/Web/javascript/Array/map",title:"Map",description:"map1.js, map2.js e map3.js",source:"@site/docs/Home/Web/javascript/Array/map.md",sourceDirName:"Home/Web/javascript/Array",slug:"/Home/Web/javascript/Array/map",permalink:"/Documentation/docs/Home/Web/javascript/Array/map",draft:!1,unlisted:!1,editUrl:"https://github.com/Geovany-Gutierrez/Documentation/edit/main/my-website/docs/Home/Web/javascript/Array/map.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Map",sidebar_label:"Map"},sidebar:"tutorialSidebar",previous:{title:"Filter",permalink:"/Documentation/docs/Home/Web/javascript/Array/filter"},next:{title:"Reduce",permalink:"/Documentation/docs/Home/Web/javascript/Array/reduce"}},c={},l=[{value:"map1.js, map2.js e map3.js",id:"map1js-map2js-e-map3js",level:3},{value:"Descri\xe7\xe3o:",id:"descri\xe7\xe3o",level:4},{value:"C\xf3digo:",id:"c\xf3digo",level:4},{value:"Explica\xe7\xe3o:",id:"explica\xe7\xe3o",level:4},{value:"Exerc\xedcio:",id:"exerc\xedcio",level:4}];function d(e){const a={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h3,{id:"map1js-map2js-e-map3js",children:"map1.js, map2.js e map3.js"}),"\n",(0,o.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o:"}),"\n",(0,o.jsxs)(a.p,{children:["Estes exemplos demonstram diferentes implementa\xe7\xf5es do m\xe9todo ",(0,o.jsx)(a.code,{children:"map"})," para transformar um array em outro."]}),"\n",(0,o.jsx)(a.h4,{id:"c\xf3digo",children:"C\xf3digo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-javascript",children:'const meuArray = ["Ana", "Bia", "Jo\xe3o", "Gugu"];\r\n\r\n// Implementa\xe7\xe3o do m\xe9todo map personalizado\r\nArray.prototype.map2 = function(callback) {\r\n    const meuArray = [];\r\n    // Itera sobre cada elemento do array\r\n    for (let i = 0; i < this.length; i++) {\r\n        // Chama a fun\xe7\xe3o de callback para cada elemento do array\r\n        // Passa o elemento, o \xedndice e o array como par\xe2metros\r\n        // Armazena o resultado no novo array\r\n        meuArray.push(callback(this[i], i, this));\r\n    }\r\n    // Retorna o novo array com os resultados\r\n    return meuArray;\r\n};\r\n\r\n// Utiliza\xe7\xe3o do m\xe9todo map personalizado\r\nconst resultado = meuArray.map2((e, i) => {\r\n  // Retorna cada elemento do array em mai\xfasculas\r\n  return e.toUpperCase();\r\n});\r\n\r\nconsole.log(resultado);\n'})}),"\n",(0,o.jsx)(a.h4,{id:"explica\xe7\xe3o",children:"Explica\xe7\xe3o:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["Criamos uma implementa\xe7\xe3o personalizada do m\xe9todo ",(0,o.jsx)(a.code,{children:"map"})," chamada ",(0,o.jsx)(a.code,{children:"map2"})," no prot\xf3tipo de ",(0,o.jsx)(a.code,{children:"Array"}),"."]}),"\n",(0,o.jsxs)(a.li,{children:["Iteramos sobre cada elemento do array, chamando a fun\xe7\xe3o de callback passada como argumento para ",(0,o.jsx)(a.code,{children:"map2"}),"."]}),"\n",(0,o.jsx)(a.li,{children:"Armazenamos os resultados da fun\xe7\xe3o de callback em um novo array."}),"\n",(0,o.jsxs)(a.li,{children:["Demonstramos a utiliza\xe7\xe3o do ",(0,o.jsx)(a.code,{children:"map2"})," para transformar os elementos do array em mai\xfasculas."]}),"\n"]}),"\n",(0,o.jsx)(a.h4,{id:"exerc\xedcio",children:"Exerc\xedcio:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:["Ap\xf3s a execu\xe7\xe3o do m\xe9todo ",(0,o.jsx)(a.code,{children:"map2"}),", qual \xe9 o resultado esperado para cada implementa\xe7\xe3o?"]}),"\n"]}),"\n",(0,o.jsx)(a.hr,{})]})}function m(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>t,x:()=>i});var o=r(6540);const n={},s=o.createContext(n);function t(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);