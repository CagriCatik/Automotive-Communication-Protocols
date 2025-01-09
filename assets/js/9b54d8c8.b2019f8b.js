"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[3444],{56795:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"CAN/CAN-FD/kompatibilitaet","title":"Kompatibilit\xe4t","description":"Grundlegende Konzepte von CAN und CAN-FD","source":"@site/docs/CAN/06_CAN-FD/06_kompatibilitaet.md","sourceDirName":"CAN/06_CAN-FD","slug":"/CAN/CAN-FD/kompatibilitaet","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-FD/kompatibilitaet","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/06_CAN-FD/06_kompatibilitaet.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"CAN vs. CAN-FD","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-FD/can-vs-can-fd"},"next":{"title":"Bitratenumschaltung und \xdcbertragungsraten","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-FD/beschleunigte-uerbertragung"}}');var r=i(74848),s=i(28453);const l={},d="Kompatibilit\xe4t",a={},h=[{value:"Grundlegende Konzepte von CAN und CAN-FD",id:"grundlegende-konzepte-von-can-und-can-fd",level:2},{value:"Klassisches CAN",id:"klassisches-can",level:3},{value:"CAN-FD",id:"can-fd",level:3},{value:"Unterschiede zwischen klassischem CAN und CAN-FD",id:"unterschiede-zwischen-klassischem-can-und-can-fd",level:2},{value:"Datenrate",id:"datenrate",level:3},{value:"Datenfeldgr\xf6\xdfe",id:"datenfeldgr\xf6\xdfe",level:3},{value:"Kompatibilit\xe4t zwischen CAN und CAN-FD",id:"kompatibilit\xe4t-zwischen-can-und-can-fd",level:3},{value:"Fehlerbehandlung",id:"fehlerbehandlung",level:2},{value:"Vorteile von CAN-FD",id:"vorteile-von-can-fd",level:2},{value:"Implementierung und Anwendungsf\xe4lle",id:"implementierung-und-anwendungsf\xe4lle",level:2},{value:"Implementierung",id:"implementierung",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"kompatibilit\xe4t",children:"Kompatibilit\xe4t"})}),"\n",(0,r.jsx)(n.h2,{id:"grundlegende-konzepte-von-can-und-can-fd",children:"Grundlegende Konzepte von CAN und CAN-FD"}),"\n",(0,r.jsx)(n.h3,{id:"klassisches-can",children:"Klassisches CAN"}),"\n",(0,r.jsx)(n.p,{children:"Das klassische CAN-Protokoll, standardisiert als ISO 11898-1, wurde entwickelt, um eine zuverl\xe4ssige Kommunikation mit einer maximalen Datenrate von 1 Mbit/s zu gew\xe4hrleisten. Es nutzt eine nicht-destruktive Bit-Arbitrierung, bei der der Sender mit der h\xf6chsten Priorit\xe4t die Bussteuerung \xfcbernimmt. Die Botschaften bestehen aus einem Identifikator, Kontrollbits, Datenfeld, CRC-Feld, Acknowledge-Bit und End-of-Frame-Bits."}),"\n",(0,r.jsx)(n.h3,{id:"can-fd",children:"CAN-FD"}),"\n",(0,r.jsx)(n.p,{children:"CAN-FD, standardisiert als ISO 11898-1:2015, erweitert das klassische CAN-Protokoll um zwei Hauptmerkmale:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Flexible Datenrate"}),": CAN-FD erlaubt eine h\xf6here Datenrate als das klassische CAN. Die \xdcbertragungsgeschwindigkeit kann w\xe4hrend der Daten\xfcbertragung erh\xf6ht werden, was schnellere Daten\xfcbertragungen erm\xf6glicht."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Erh\xf6hte Datenfeldgr\xf6\xdfe"}),": Das Datenfeld kann bis zu 64 Byte umfassen, im Vergleich zu den 8 Byte des klassischen CAN."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Diese Erweiterungen sind besonders n\xfctzlich in modernen Fahrzeugen, die zunehmend mehr Daten zwischen verschiedenen Systemen austauschen m\xfcssen."}),"\n",(0,r.jsx)(n.h2,{id:"unterschiede-zwischen-klassischem-can-und-can-fd",children:"Unterschiede zwischen klassischem CAN und CAN-FD"}),"\n",(0,r.jsx)(n.h3,{id:"datenrate",children:"Datenrate"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Im klassischen CAN ist die Datenrate auf maximal 1 Mbit/s beschr\xe4nkt."}),"\n",(0,r.jsx)(n.li,{children:"CAN-FD erlaubt es, die Datenrate im Datenfeld zu erh\xf6hen, was die \xdcbertragung von gr\xf6\xdferen Datenmengen in k\xfcrzerer Zeit erm\xf6glicht."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"datenfeldgr\xf6\xdfe",children:"Datenfeldgr\xf6\xdfe"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"W\xe4hrend das klassische CAN nur Datenfelder bis zu 8 Byte unterst\xfctzt, kann CAN-FD Datenfelder bis zu 64 Byte handhaben."}),"\n",(0,r.jsx)(n.li,{children:"Dies reduziert die Anzahl der ben\xf6tigten Nachrichten und erh\xf6ht die Effizienz des Netzwerks."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"kompatibilit\xe4t-zwischen-can-und-can-fd",children:"Kompatibilit\xe4t zwischen CAN und CAN-FD"}),"\n",(0,r.jsx)(n.p,{children:"Ein wesentlicher Punkt ist die Kompatibilit\xe4t zwischen klassischem CAN und CAN-FD. CAN-FD Controller sind abw\xe4rtskompatibel und k\xf6nnen klassische CAN-Botschaften empfangen und senden. Klassische CAN Controller hingegen k\xf6nnen CAN-FD-Botschaften nicht interpretieren und w\xfcrden beim Empfang einer solchen Botschaft einen Fehler signalisieren. Dies liegt daran, dass die zus\xe4tzlichen Bits und die erh\xf6hte Datenrate im CAN-FD-Protokoll von klassischen CAN Controllern als Regelverst\xf6\xdfe interpretiert werden."}),"\n",(0,r.jsx)(n.h2,{id:"fehlerbehandlung",children:"Fehlerbehandlung"}),"\n",(0,r.jsx)(n.p,{children:"In einem gemischten Netzwerk, in dem sowohl klassische CAN als auch CAN-FD Controller existieren, ist die Fehlerbehandlung ein kritischer Aspekt. Wenn ein klassischer CAN Controller eine CAN-FD-Botschaft empf\xe4ngt, erkennt er die zus\xe4tzlichen Bits als ung\xfcltig und sendet einen Error Frame. Dies signalisiert den anderen Ger\xe4ten im Netzwerk, dass ein Kommunikationsfehler aufgetreten ist."}),"\n",(0,r.jsx)(n.h2,{id:"vorteile-von-can-fd",children:"Vorteile von CAN-FD"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"H\xf6here Effizienz"}),": Durch die M\xf6glichkeit, gr\xf6\xdfere Datenmengen pro Nachricht zu \xfcbertragen und die Datenrate zu erh\xf6hen, k\xf6nnen mehr Daten in k\xfcrzerer Zeit \xfcbertragen werden."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reduzierte Latenz"}),": Die erh\xf6hte Datenrate reduziert die Zeit, die ben\xf6tigt wird, um Daten zu \xfcbertragen, was zu einer insgesamt geringeren Latenz im Netzwerk f\xfchrt."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Zukunftssicherheit"}),": Mit dem wachsenden Bedarf an Datenkommunikation in modernen Fahrzeugen bietet CAN-FD die notwendige Bandbreite und Flexibilit\xe4t."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"implementierung-und-anwendungsf\xe4lle",children:"Implementierung und Anwendungsf\xe4lle"}),"\n",(0,r.jsx)(n.h3,{id:"implementierung",children:"Implementierung"}),"\n",(0,r.jsx)(n.p,{children:"Die Implementierung von CAN-FD erfordert Hardware, die CAN-FD unterst\xfctzt, sowie eine entsprechende Konfiguration der Software. Viele moderne Mikrocontroller und CAN-Transceiver unterst\xfctzen bereits CAN-FD."}),"\n",(0,r.jsx)(n.h3,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,r.jsx)(n.p,{children:"CAN-FD findet Anwendung in Bereichen, in denen eine hohe Datenrate und gro\xdfe Datenmengen erforderlich sind, z.B. in ADAS (Advanced Driver Assistance Systems), Infotainment-Systemen und der Kommunikation zwischen Sensoren und Aktuatoren."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);