"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[4495],{29319:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"CAN/CAN-Framing/adressierung","title":"Kommunikation und Adressierung","description":"Botschafts-Adressierung","source":"@site/docs/CAN/03_CAN-Framing/04_adressierung.md","sourceDirName":"CAN/03_CAN-Framing","slug":"/CAN/CAN-Framing/adressierung","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-Framing/adressierung","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/03_CAN-Framing/04_adressierung.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"Anforderung von Daten im CAN-Netzwerk","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-Framing/remote-frame"},"next":{"title":"Fehlererkennung und -behandlung im CAN-Netzwerk","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-Framing/crc-ack"}}');var t=i(74848),s=i(28453);const d={},a="Kommunikation und Adressierung",l={},u=[{value:"Botschafts-Adressierung",id:"botschafts-adressierung",level:2},{value:"Standard und Extended Format",id:"standard-und-extended-format",level:2},{value:"Identifier und Kontrollbits",id:"identifier-und-kontrollbits",level:3},{value:"Bedeutung der Identifier und Flexibilit\xe4t der Adressierung",id:"bedeutung-der-identifier-und-flexibilit\xe4t-der-adressierung",level:2}];function o(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"kommunikation-und-adressierung",children:"Kommunikation und Adressierung"})}),"\n",(0,t.jsx)(n.h2,{id:"botschafts-adressierung",children:"Botschafts-Adressierung"}),"\n",(0,t.jsx)(n.p,{children:"Im CAN-Netzwerk (Controller Area Network) wird die Kommunikation durch inhaltsbezogene Adressierung organisiert. Anders als bei vielen anderen Netzwerken, werden nicht die CAN-Knoten selbst, sondern die Daten- und Remote-Frames mit einer Kennung (Identifier - ID) versehen. Diese IDs bestimmen, welche Art von Nachricht gesendet wird und wer sie empfangen soll. Da alle CAN-Botschaften jedem Knoten im Netzwerk zur Verf\xfcgung stehen (Broadcasting), muss jeder Empf\xe4nger selbstst\xe4ndig die relevanten Botschaften ausw\xe4hlen und verarbeiten. Dies erfordert eine empf\xe4ngerseitige Filterung der empfangenen Nachrichten, bekannt als Akzeptanzfilterung."}),"\n",(0,t.jsx)(n.h2,{id:"standard-und-extended-format",children:"Standard und Extended Format"}),"\n",(0,t.jsx)(n.p,{children:"Der CAN-Bus bietet zwei verschiedene Formate f\xfcr Nachrichten: das Standard-Format und das Extended-Format. Diese Formate unterscheiden sich prim\xe4r in der L\xe4nge des Identifiers:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Standard-Format"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Der Identifier (ID) umfasst 11 Bit."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Extended-Format"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Der Identifier umfasst 29 Bit."}),"\n",(0,t.jsx)(n.li,{children:"Der 29-Bit-Identifier setzt sich aus einem 11-Bit-Basis-ID und einem 18-Bit-Extended-ID zusammen."}),"\n",(0,t.jsx)(n.li,{children:"Zwischen Basis-ID und Extended-ID befinden sich die beiden Bits IDE (Identifier Extension) und SRR (Substitute Remote Request)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"identifier-und-kontrollbits",children:"Identifier und Kontrollbits"}),"\n",(0,t.jsx)(n.p,{children:"Im Standard-Format wird der ID mit 11 Bit \xfcbertragen. Dies bedeutet, dass bis zu 2048 verschiedene Nachrichten-IDs m\xf6glich sind. Im Extended-Format wird der ID auf 29 Bit erweitert, was eine viel gr\xf6\xdfere Vielfalt an Nachrichten-IDs erm\xf6glicht, n\xe4mlich bis zu 536.870.912 verschiedene IDs."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IDE-Bit"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ein dominantes IDE-Bit (0) kennzeichnet eine Nachricht im Standard-Format."}),"\n",(0,t.jsx)(n.li,{children:"Ein rezessives IDE-Bit (1) kennzeichnet eine Nachricht im Extended-Format."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SRR-Bit"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Im Extended-Format ersetzt das SRR-Bit das RTR-Bit (Remote Transmission Request) des Standard-Formats. Das SRR-Bit wird immer rezessiv \xfcbertragen."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Control Field (r0 und r1)"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Im Extended-Format haben die beiden ersten Bits des Control-Fields keine Bedeutung und werden immer dominant \xfcbertragen."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"bedeutung-der-identifier-und-flexibilit\xe4t-der-adressierung",children:"Bedeutung der Identifier und Flexibilit\xe4t der Adressierung"}),"\n",(0,t.jsx)(n.p,{children:"Die inhaltsbezogene Adressierung im CAN-Bus ist besonders flexibel und effizient f\xfcr die Kommunikation in Fahrzeugnetzwerken. Jeder Knoten kann so konfiguriert werden, dass er nur die relevanten Nachrichten empf\xe4ngt und verarbeitet. Dies reduziert die Belastung des Systems und verbessert die Gesamtleistung des Netzwerks."}),"\n",(0,t.jsx)(n.p,{children:"Durch die Erweiterung auf 29-Bit-Identifiers im Extended-Format wird die Skalierbarkeit des Systems erheblich erh\xf6ht, was besonders in modernen Fahrzeugen mit einer Vielzahl von Steuerger\xe4ten und Sensoren von Vorteil ist. Diese Flexibilit\xe4t ist jedoch nur durch eine effektive Akzeptanzfilterung auf Empf\xe4ngerseite gew\xe4hrleistet."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);