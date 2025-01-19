"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[9335],{4416:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"CAN/framing/frametypen","title":"CAN-Framing","description":"Data Frame","source":"@site/docs/CAN/03_framing/01_frametypen.md","sourceDirName":"CAN/03_framing","slug":"/CAN/framing/frametypen","permalink":"/Vehicle-Network-Standards/docs/CAN/framing/frametypen","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/03_framing/01_frametypen.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"Framing","permalink":"/Vehicle-Network-Standards/docs/CAN/framing/"},"next":{"title":"Struktur und Funktion von Data Frames im CAN-Netzwerk","permalink":"/Vehicle-Network-Standards/docs/CAN/framing/data-frame"}}');var t=r(74848),s=r(28453);const a={},d="CAN-Framing",l={},o=[{value:"Data Frame",id:"data-frame",level:2},{value:"Remote Frame",id:"remote-frame",level:2},{value:"Error Frame",id:"error-frame",level:2}];function c(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"can-framing",children:"CAN-Framing"})}),"\n",(0,t.jsx)(n.h2,{id:"data-frame",children:"Data Frame"}),"\n",(0,t.jsx)(n.p,{children:"Zur \xdcbertragung von Nutzdaten sieht die ISO 11898-1 den sogenannten Data Frame vor. Ein Data Frame kann maximal acht Nutzbytes transportieren. Zur Verf\xfcgung steht dazu das sogenannte Data Field, welches eingerahmt ist von einer Vielzahl von Feldern, die zur Abwicklung des CAN-Kommunikationsprotokolls erforderlich sind. Diese Felder sind im Einzelnen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Start of Frame (SOF):"})," Markiert den Beginn des Data Frames."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Identifier (ID):"})," Enth\xe4lt die Botschaftsadresse, die zur Identifikation der Nachricht dient."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Remote Transmission Request (RTR):"})," Ein Bit, das den Unterschied zwischen einem Data Frame und einem Remote Frame signalisiert."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Identifier Extension (IDE):"})," Bestimmt, ob ein Standard- oder ein Extended-Identifier verwendet wird."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reserved Bit (r):"})," Reservierte Bits, die f\xfcr zuk\xfcnftige Erweiterungen vorgesehen sind."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Length Code (DLC):"})," Gibt die Anzahl der Bytes im Data Field an."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Field:"})," Enth\xe4lt die eigentlichen Nutzdaten (bis zu 8 Bytes)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cyclic Redundancy Check Sequence (CRC Sequence):"})," Dient der Fehlererkennung innerhalb des Frames."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CRC Delimiter:"})," Trennt das CRC-Feld von den folgenden Feldern."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Acknowledgement Field (ACK):"})," Besteht aus dem ACK-Slot und dem ACK-Delimiter. Der Empf\xe4nger signalisiert hier, dass die Nachricht fehlerfrei empfangen wurde."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"End of Frame (EOF):"})," Markiert das Ende des Data Frames."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Intermission (ITM):"})," Ein Intervall, das zwischen zwei aufeinanderfolgenden Nachrichten liegt."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CAN-Knoten",src:r(3381).A+"",width:"1362",height:"257"})}),"\n",(0,t.jsx)(n.p,{children:"Der Data Frame ist das R\xfcckgrat der CAN-Kommunikation und erm\xf6glicht die effiziente \xdcbertragung von Daten zwischen den Knoten eines CAN-Netzwerks."}),"\n",(0,t.jsx)(n.h2,{id:"remote-frame",children:"Remote Frame"}),"\n",(0,t.jsx)(n.p,{children:"W\xe4hrend zur \xdcbertragung von Data Frames die entsprechenden Informationserzeuger die Initiative ergreifen, existiert mit dem Remote Frame ein Frametyp, mit dem Nutzdaten, also Data Frames, von beliebigen CAN-Knoten angefordert werden k\xf6nnen. Bis auf das fehlende Data Field setzt sich ein Remote Frame wie ein Data Frame zusammen. Die Felder sind wie folgt:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Start of Frame (SOF)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Identifier (ID)"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Remote Transmission Request (RTR):"})," Dieses Bit ist im Remote Frame immer gesetzt."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Identifier Extension (IDE)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Reserved Bit (r)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Data Length Code (DLC)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Cyclic Redundancy Check Sequence (CRC Sequence)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"CRC Delimiter"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Acknowledgement Field (ACK)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"End of Frame (EOF)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Intermission (ITM)"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CAN-Knoten",src:r(42765).A+"",width:"1188",height:"279"})}),"\n",(0,t.jsx)(n.p,{children:"Der wesentliche Unterschied zum Data Frame besteht im Fehlen des Data Fields. Der Remote Frame dient dazu, einen anderen Knoten im Netzwerk zur \xdcbertragung eines Data Frames aufzufordern."}),"\n",(0,t.jsx)(n.h2,{id:"error-frame",children:"Error Frame"}),"\n",(0,t.jsx)(n.p,{children:"Der Error Frame steht zur Verf\xfcgung, um w\xe4hrend des Kommunikationsbetriebs entdeckte Fehler zu signalisieren. Mit dem \xdcbertragen eines Error Frames geht der Abbruch der laufenden Botschafts\xfcbertragung einher. Der Aufbau eines Error Frames unterscheidet sich wesentlich vom Aufbau eines Data oder Remote Frames. Man kann lediglich zwei Felder voneinander unterscheiden:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Error Flag:"})," Das Error Flag signalisiert den Fehlerzustand. Es besteht aus sechs dominanten Bits, die von der Fehler entdeckenden Station gesendet werden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Error Delimiter:"})," Dieses Feld besteht aus acht rezessiven Bits und markiert das Ende des Error Frames."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Ein Error Frame wird gesendet, wenn eine Station einen Fehler erkennt, und zwingt alle Stationen dazu, die fehlerhafte Nachricht zu verwerfen. Dies stellt sicher, dass keine fehlerhaften Daten im Netzwerk akzeptiert werden."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CAN-Knoten",src:r(92332).A+"",width:"875",height:"237"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3381:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/1712276187445-543a95a5aae5babc71da3bb5a389bd49.png"},42765:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/1712276204782-30f91506686f17ab90431d639af842e3.png"},92332:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/1712276232272-8381b47b2f5ffe0b47e903c346be9fa3.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var i=r(96540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);