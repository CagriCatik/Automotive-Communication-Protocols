"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[7700],{29822:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>u,default:()=>l,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"CAN/CAN-Buszugriff/priorisierung","title":"Priorit\xe4ten und Arbitrierung","description":"Einf\xfchrung","source":"@site/docs/CAN/04_CAN-Buszugriff/03_priorisierung.md","sourceDirName":"CAN/04_CAN-Buszugriff","slug":"/CAN/CAN-Buszugriff/priorisierung","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-Buszugriff/priorisierung","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/04_CAN-Buszugriff/03_priorisierung.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"Bitweise Arbitrierung","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-Buszugriff/arbitrierung"},"next":{"title":"CAN-Datensicherung","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-Datensicherung/"}}');var t=n(74848),s=n(28453);const d={},u="Priorit\xe4ten und Arbitrierung",h={},a=[{value:"Einf\xfchrung",id:"einf\xfchrung",level:2},{value:"Priorit\xe4t und Identifier",id:"priorit\xe4t-und-identifier",level:2},{value:"Buslast und Echtzeitf\xe4higkeit",id:"buslast-und-echtzeitf\xe4higkeit",level:2},{value:"Typische CAN-Kommunikation",id:"typische-can-kommunikation",level:2},{value:"Wissensvertiefung durch Praxis",id:"wissensvertiefung-durch-praxis",level:2}];function c(e){const i={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"priorit\xe4ten-und-arbitrierung",children:"Priorit\xe4ten und Arbitrierung"})}),"\n",(0,t.jsx)(i.h2,{id:"einf\xfchrung",children:"Einf\xfchrung"}),"\n",(0,t.jsx)(i.p,{children:"Der CAN-Bus (Controller Area Network) ist ein wesentliches Netzwerkprotokoll im Automobilbereich, das f\xfcr die Kommunikation zwischen verschiedenen Steuerger\xe4ten (ECUs) verwendet wird. Ein zentrales Element des CAN-Bus ist die Priorisierung von Nachrichten, die durch den Identifier festgelegt wird. Dieses Tutorial bietet eine tiefgehende Analyse der Priorit\xe4tensteuerung und der Auswirkungen auf die Echtzeitf\xe4higkeit und Buslast des CAN-Netzwerks."}),"\n",(0,t.jsx)(i.h2,{id:"priorit\xe4t-und-identifier",children:"Priorit\xe4t und Identifier"}),"\n",(0,t.jsx)(i.p,{children:"Im CAN-Netzwerk ist der Identifier einer Nachricht entscheidend f\xfcr die Priorit\xe4t, mit der die Nachricht den Buszugriff erh\xe4lt. Der Identifier wird bitweise vom h\xf6chstwertigen zum niederwertigsten Bit \xfcbertragen."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Regel der Priorit\xe4t:"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Kleinerer Identifier = h\xf6here Priorit\xe4t:"})," In einem CAN-Bus bedeutet ein kleinerer numerischer Wert des Identifiers eine h\xf6here Priorit\xe4t der Nachricht. Die Arbitrierungslogik und die Wired-AND-Buslogik gew\xe4hrleisten, dass Nachrichten mit kleineren Identifiers bevorzugt gesendet werden. Dies liegt daran, dass in einem CAN-Bus das dominante Bit (logisch 0) das rezessive Bit (logisch 1) \xfcberschreibt. Daher gewinnt die Nachricht mit dem kleinsten Identifier die Arbitrierung."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Eine grafische Darstellung der Priorisierung k\xf6nnte den Zusammenhang weiter verdeutlichen, indem sie zeigt, wie verschiedene Nachrichten mit unterschiedlichen Identifiers um den Buszugriff konkurrieren und wie die Nachrichten mit den kleinsten Identifiers dominieren."}),"\n",(0,t.jsx)(i.h2,{id:"buslast-und-echtzeitf\xe4higkeit",children:"Buslast und Echtzeitf\xe4higkeit"}),"\n",(0,t.jsx)(i.p,{children:"Die Effektivit\xe4t des CAN-Bus h\xe4ngt stark von der Buslast ab. Der CAN-Bus erm\xf6glicht durch sein Arbitrierungsschema einen schnellen und zerst\xf6rungsfreien Zugriff auf den Bus, solange die Buslast moderat ist."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Auswirkungen hoher Buslast:"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Verz\xf6gerung niederpriorer Nachrichten:"})," Bei hoher Buslast k\xf6nnen Nachrichten mit niedriger Priorit\xe4t erhebliche Verz\xf6gerungen erfahren, da sie immer wieder von h\xf6her priorisierten Nachrichten \xfcbertroffen werden. Dies kann die Echtzeitf\xe4higkeit des Systems beeintr\xe4chtigen, besonders wenn zeitkritische Daten \xfcbertragen werden m\xfcssen."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Bei der Gestaltung eines CAN-Systems ist es daher unerl\xe4sslich, die Priorit\xe4ten der Nachrichten gem\xe4\xdf der Dringlichkeit der \xfcbertragenen Signale festzulegen. Dies stellt sicher, dass kritische Nachrichten auch bei hoher Buslast rechtzeitig \xfcbertragen werden."}),"\n",(0,t.jsx)(i.h2,{id:"typische-can-kommunikation",children:"Typische CAN-Kommunikation"}),"\n",(0,t.jsx)(i.p,{children:"Die Dynamik der CAN-Kommunikation kann am besten durch eine interaktive Grafik oder eine Kommunikationsmatrix verstanden werden. Diese zeigt die zeitliche Abfolge der Nachrichten\xfcbertragung und die Interaktionen zwischen verschiedenen Steuerger\xe4ten."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Kommunikationsmatrix:"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Die Matrix enth\xe4lt die Kommunikationsbeziehungen zwischen verschiedenen Steuerger\xe4ten und die zeitlich versetzten Ereignisse, die zu Nachrichten\xfcbertragungen f\xfchren. Durch die Analyse der Matrix kann man verstehen, wie oft Nachrichten gesendet werden, welche Priorit\xe4ten sie haben und wie sie sich auf den Buszugriff auswirken."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"wissensvertiefung-durch-praxis",children:"Wissensvertiefung durch Praxis"}),"\n",(0,t.jsx)(i.p,{children:"Eine praktische Aufgabe, wie die Simulation des Buszugriffs im CAN-Netzwerk, kann das Verst\xe4ndnis der theoretischen Konzepte vertiefen. Solche Aufgaben k\xf6nnten Szenarien mit verschiedenen Data Frames und Ereignissen simulieren, um die resultierende Nachrichtenabfolge auf dem CAN-Bus zu analysieren."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Aufgabenstellung:"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Buszugriff im CAN-Netzwerk:"})," Entwickeln Sie die Botschaftsabfolge f\xfcr eine zuf\xe4llige Konstellation von Data Frames und Ereignissen. Dies hilft, die Auswirkungen der Priorit\xe4t und Buslast auf die Nachrichten\xfcbertragung zu beobachten und zu verstehen."]}),"\n"]})]})}function l(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>u});var r=n(96540);const t={},s=r.createContext(t);function d(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function u(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);