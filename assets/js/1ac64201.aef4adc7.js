"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[325],{17340:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"CAN/framing/crc-ack","title":"Fehlererkennung und -behandlung im CAN-Netzwerk","description":"Das Controller Area Network (CAN) ist ein weit verbreitetes serielles Kommunikationsprotokoll, das in Automobilen und vielen anderen Anwendungen eingesetzt wird. Eine der gr\xf6\xdften Herausforderungen bei der seriellen Kommunikation in Kraftfahrzeugen besteht darin, eine \xe4u\xdferst hohe \xdcbertragungssicherheit zu garantieren. Ein zentraler Mechanismus zur Fehlererkennung im CAN-Netzwerk ist das CRC-Verfahren (Cyclic Redundancy Check). Dieses Tutorial bietet eine detaillierte und wissenschaftlich fundierte Beschreibung des CRC-Verfahrens und der Acknowledgement-Mechanismen im CAN-Protokoll gem\xe4\xdf der ISO 11898-1 Norm.","source":"@site/docs/CAN/03_framing/05_crc-ack.md","sourceDirName":"CAN/03_framing","slug":"/CAN/framing/crc-ack","permalink":"/Vehicle-Network-Standards/docs/CAN/framing/crc-ack","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/03_framing/05_crc-ack.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"Kommunikation und Adressierung","permalink":"/Vehicle-Network-Standards/docs/CAN/framing/adressierung"},"next":{"title":"Synchronisation und Resynchronisation","permalink":"/Vehicle-Network-Standards/docs/CAN/framing/bitstuffing"}}');var t=r(74848),s=r(28453);const l={},d="Fehlererkennung und -behandlung im CAN-Netzwerk",a={},u=[{value:"Cyclic Redundancy Check (CRC)",id:"cyclic-redundancy-check-crc",level:2},{value:"Funktionsweise des CRC-Verfahrens",id:"funktionsweise-des-crc-verfahrens",level:3},{value:"Fehlererkennung durch den Empf\xe4nger",id:"fehlererkennung-durch-den-empf\xe4nger",level:3},{value:"Acknowledgement (ACK)",id:"acknowledgement-ack",level:2},{value:"Quittierungsmechanismus",id:"quittierungsmechanismus",level:3},{value:"ACK-Delimiter",id:"ack-delimiter",level:3},{value:"Knotenneutrales positives Acknowledgement",id:"knotenneutrales-positives-acknowledgement",level:3},{value:"Fehlerbehandlung: ACK-Fehler und Error Flag",id:"fehlerbehandlung-ack-fehler-und-error-flag",level:2},{value:"ACK-Fehler",id:"ack-fehler",level:3},{value:"Error Flag",id:"error-flag",level:3}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"fehlererkennung-und--behandlung-im-can-netzwerk",children:"Fehlererkennung und -behandlung im CAN-Netzwerk"})}),"\n",(0,t.jsx)(n.p,{children:"Das Controller Area Network (CAN) ist ein weit verbreitetes serielles Kommunikationsprotokoll, das in Automobilen und vielen anderen Anwendungen eingesetzt wird. Eine der gr\xf6\xdften Herausforderungen bei der seriellen Kommunikation in Kraftfahrzeugen besteht darin, eine \xe4u\xdferst hohe \xdcbertragungssicherheit zu garantieren. Ein zentraler Mechanismus zur Fehlererkennung im CAN-Netzwerk ist das CRC-Verfahren (Cyclic Redundancy Check). Dieses Tutorial bietet eine detaillierte und wissenschaftlich fundierte Beschreibung des CRC-Verfahrens und der Acknowledgement-Mechanismen im CAN-Protokoll gem\xe4\xdf der ISO 11898-1 Norm."}),"\n",(0,t.jsx)(n.h2,{id:"cyclic-redundancy-check-crc",children:"Cyclic Redundancy Check (CRC)"}),"\n",(0,t.jsx)(n.h3,{id:"funktionsweise-des-crc-verfahrens",children:"Funktionsweise des CRC-Verfahrens"}),"\n",(0,t.jsx)(n.p,{children:"Das CRC-Verfahren dient zur Erkennung von \xdcbertragungsfehlern in Datenpaketen. Hierbei wird eine CRC-Sequenz auf Basis der zu \xfcbertragenden Bits berechnet. Diese Bits umfassen den Start-of-Frame (SOF) bis einschlie\xdflich des Data Fields. Zur Berechnung der CRC-Sequenz wird ein Generatorpolynom G(x) verwendet, das in der ISO 11898-1 Norm definiert ist."}),"\n",(0,t.jsx)(n.p,{children:"Die CRC-Sequenz wird wie folgt berechnet:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Polynomdarstellung der Datenbits:"})," Die zu \xfcbertragenden Bits werden als Polynom interpretiert."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Division durch das Generatorpolynom:"})," Dieses Datenpolynom wird durch das Generatorpolynom G(x) dividiert. Der Rest dieser Division stellt die CRC-Sequenz dar."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Anf\xfcgen der CRC-Sequenz:"})," Die CRC-Sequenz wird an die urspr\xfcnglichen Datenbits angeh\xe4ngt und zusammen mit diesen \xfcbertragen."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"fehlererkennung-durch-den-empf\xe4nger",children:"Fehlererkennung durch den Empf\xe4nger"}),"\n",(0,t.jsx)(n.p,{children:"Der Empf\xe4nger erh\xe4lt das Gesamtpolynom (Originaldaten + CRC-Sequenz) und f\xfchrt erneut eine Division durch das gleiche Generatorpolynom G(x) durch. Ergibt diese Division einen Rest von Null, so ist die \xdcbertragung fehlerfrei. Andernfalls wurde ein \xdcbertragungsfehler erkannt."}),"\n",(0,t.jsx)(n.h2,{id:"acknowledgement-ack",children:"Acknowledgement (ACK)"}),"\n",(0,t.jsx)(n.h3,{id:"quittierungsmechanismus",children:"Quittierungsmechanismus"}),"\n",(0,t.jsx)(n.p,{children:"Nach der Berechnung und \xdcberpr\xfcfung der CRC-Sequenz durch den Empf\xe4nger erfolgt die Quittierung der empfangenen Nachricht im Acknowledgement-Slot (ACK-Slot). Jeder Empf\xe4nger steuert das Acknowledgement unabh\xe4ngig von der Akzeptanzfilterung:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dominanter Pegel:"})," Ein dominanter Pegel im ACK-Slot signalisiert eine positive Quittung (korrekte Daten\xfcbertragung)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Rezessiver Pegel:"})," Ein rezessiver Pegel im ACK-Slot signalisiert eine negative Quittung (fehlerhafte Daten\xfcbertragung)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ack-delimiter",children:"ACK-Delimiter"}),"\n",(0,t.jsx)(n.p,{children:"Der ACK-Delimiter folgt unmittelbar auf den ACK-Slot und wird immer rezessiv \xfcbertragen. Dieser Mechanismus stellt sicher, dass der ACK-Slot eindeutig interpretierbar ist."}),"\n",(0,t.jsx)(n.h3,{id:"knotenneutrales-positives-acknowledgement",children:"Knotenneutrales positives Acknowledgement"}),"\n",(0,t.jsx)(n.p,{children:"Da der Sender sowohl den ACK-Slot als auch den ACK-Delimiter rezessiv \xfcbertr\xe4gt, reicht eine einzige positive Quittung (dominanter Pegel) eines beliebigen Empf\xe4ngers aus, um die Korrektheit der Botschaft zu best\xe4tigen. Dies wird als knotenneutrales positives Acknowledgement bezeichnet, da es unabh\xe4ngig von der Anzahl der Empf\xe4nger funktioniert."}),"\n",(0,t.jsx)(n.h2,{id:"fehlerbehandlung-ack-fehler-und-error-flag",children:"Fehlerbehandlung: ACK-Fehler und Error Flag"}),"\n",(0,t.jsx)(n.h3,{id:"ack-fehler",children:"ACK-Fehler"}),"\n",(0,t.jsx)(n.p,{children:"Ein ACK-Fehler tritt auf, wenn keine einzige positive Quittung von den Empf\xe4ngern erfolgt. Das bedeutet, dass der rezessive Pegel im ACK-Slot nicht \xfcberschrieben wird. Ein ACK-Fehler kann auf folgende Ursachen hinweisen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fehlerhafte \xdcbertragung durch den Sender:"})," Der Sender hat m\xf6glicherweise einen Fehler bei der \xdcbertragung der Nachricht verursacht."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Nicht vorhandene Empf\xe4nger:"})," Es gibt keine Empf\xe4nger, die die Nachricht erfolgreich empfangen und positiv quittieren konnten."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"error-flag",children:"Error Flag"}),"\n",(0,t.jsx)(n.p,{children:"Wenn ein ACK-Fehler erkannt wird, bricht der Sender die laufende Nachrichten\xfcbertragung sofort ab und sendet ein Error Flag. Dieses Error Flag signalisiert allen Knoten im Netzwerk, dass ein Fehler aufgetreten ist und stellt sicher, dass keine fehlerhaften Daten im Netzwerk verbleiben."})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var i=r(96540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);