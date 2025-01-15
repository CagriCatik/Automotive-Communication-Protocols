"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8873],{94722:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"FLEXRAY/Framing/frame-header","title":"Struktur einer FlexRay-Botschaft","description":"FlexRay ist ein leistungsstarkes Kommunikationsprotokoll, das speziell f\xfcr den Einsatz in modernen Fahrzeugen entwickelt wurde. Es erm\xf6glicht die zuverl\xe4ssige und deterministische \xdcbertragung von Daten zwischen verschiedenen elektronischen Steuerger\xe4ten (ECUs) im Fahrzeug. Dieses Tutorial bietet eine detaillierte Erkl\xe4rung der FlexRay-Daten\xfcbertragung, insbesondere des Botschaftsrahmens.","source":"@site/docs/FLEXRAY/04_Framing/01_frame-header.md","sourceDirName":"FLEXRAY/04_Framing","slug":"/FLEXRAY/Framing/frame-header","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Framing/frame-header","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FLEXRAY/04_Framing/01_frame-header.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"flexraySidebar","previous":{"title":"Framing","permalink":"/Vehicle-Network-Standards/docs/category/framing"},"next":{"title":"Nachrichten\xfcbertragung und Fehlererkennung","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Framing/frame-payload"}}');var t=r(74848),s=r(28453);const a={},d="Struktur einer FlexRay-Botschaft",l={},h=[{value:"Header",id:"header",level:2},{value:"Payload",id:"payload",level:2},{value:"Trailer",id:"trailer",level:2},{value:"Fehlerkorrektur und Synchronisation",id:"fehlerkorrektur-und-synchronisation",level:2}];function o(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"struktur-einer-flexray-botschaft",children:"Struktur einer FlexRay-Botschaft"})}),"\n",(0,t.jsx)(n.p,{children:"FlexRay ist ein leistungsstarkes Kommunikationsprotokoll, das speziell f\xfcr den Einsatz in modernen Fahrzeugen entwickelt wurde. Es erm\xf6glicht die zuverl\xe4ssige und deterministische \xdcbertragung von Daten zwischen verschiedenen elektronischen Steuerger\xe4ten (ECUs) im Fahrzeug. Dieses Tutorial bietet eine detaillierte Erkl\xe4rung der FlexRay-Daten\xfcbertragung, insbesondere des Botschaftsrahmens."}),"\n",(0,t.jsx)(n.p,{children:"Eine FlexRay-Botschaft besteht aus drei Hauptkomponenten:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Header"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Payload"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Trailer"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.p,{children:"Der Header einer FlexRay-Botschaft ist 40 Bits lang und besteht aus mehreren wichtigen Feldern:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Identifier (ID)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L\xe4nge: 11 Bits"}),"\n",(0,t.jsx)(n.li,{children:"Funktion: Der Identifier kennzeichnet eine spezifische Botschaft und korrespondiert mit einem Slot im FlexRay-Cluster. Eine Ausnahme bildet die ID=0x00, die ung\xfcltige Botschaften kennzeichnet."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Indikatorbits"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Anzahl: 4 Bits"}),"\n",(0,t.jsxs)(n.li,{children:["Funktion: Diese Bits spezifizieren n\xe4her die Art der Botschaft. Zu den Indikatorbits geh\xf6ren:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payload Preamble Indicator"}),": Zeigt an, ob im Payload einer statischen Botschaft ein Network Management Vector oder in einer dynamischen Botschaft ein Message Identifier \xfcbertragen wird."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Null Frame Indicator"}),": Kennzeichnet, ob der Payload ausschlie\xdflich aus Nullen besteht (ung\xfcltiger Payload)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sync Frame Indicator"}),": Gibt an, ob die Botschaft als Synchronisationsrahmen verwendet wird."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Startup Frame Indicator"}),": Gibt an, ob die Botschaft als Startrahmen verwendet wird."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Reserviertes Bit"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Anzahl: 1 Bit"}),"\n",(0,t.jsx)(n.li,{children:"Funktion: Dieses Bit ist f\xfcr zuk\xfcnftige Erweiterungen reserviert und hat aktuell keine definierte Funktion."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Payload Length"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L\xe4nge: 7 Bits"}),"\n",(0,t.jsx)(n.li,{children:"Funktion: Zeigt die Gr\xf6\xdfe des Payloads in Words (1 Word = 2 Bytes) an. Damit k\xf6nnen maximal 254 Bytes Nutzdaten \xfcbertragen werden."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Header CRC Sequence"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L\xe4nge: 11 Bits"}),"\n",(0,t.jsx)(n.li,{children:"Funktion: Eine Pr\xfcfsumme, die zur Fehlererkennung dient. Sie wird basierend auf dem Identifier, der Payload Length, den Indikatorbits und einem spezifizierten Generatorpolynom berechnet."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Cycle Counter"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L\xe4nge: 6 Bits"}),"\n",(0,t.jsx)(n.li,{children:"Funktion: Repr\xe4sentiert die Nummer des Zyklus, in dem die Botschaft gesendet wird. Der Cycle Counter z\xe4hlt von 0 bis 63 und wiederholt sich dann."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"payload",children:"Payload"}),"\n",(0,t.jsx)(n.p,{children:"Der Payload-Bereich einer FlexRay-Botschaft enth\xe4lt die eigentlichen Nutzdaten. Die maximale L\xe4nge des Payloads betr\xe4gt 254 Bytes, wie durch die Payload Length im Header spezifiziert. Die Datenstruktur im Payload kann je nach Anwendung variieren, aber sie ist in der Regel in statische und dynamische Segmente unterteilt:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Statische Segmente"}),": Diese sind fest zugewiesene Zeitfenster, die deterministische Kommunikationsmuster gew\xe4hrleisten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamische Segmente"}),": Diese Segmente erlauben eine flexiblere Daten\xfcbertragung und k\xf6nnen f\xfcr unterschiedliche Priorit\xe4ten und Nutzlasten verwendet werden."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"trailer",children:"Trailer"}),"\n",(0,t.jsx)(n.p,{children:"Der Trailer einer FlexRay-Botschaft enth\xe4lt abschlie\xdfende Informationen, die zur Sicherstellung der Integrit\xe4t und Vollst\xe4ndigkeit der Botschaft beitragen. Dazu geh\xf6rt in der Regel eine CRC-Pr\xfcfsumme, die \xfcber den gesamten Botschaftsinhalt berechnet wird."}),"\n",(0,t.jsx)(n.h2,{id:"fehlerkorrektur-und-synchronisation",children:"Fehlerkorrektur und Synchronisation"}),"\n",(0,t.jsx)(n.p,{children:"Die FlexRay-Kommunikation ist so konzipiert, dass sie extrem robust gegen\xfcber Fehlern und Synchronisationsproblemen ist. Die Header CRC Sequence und die CRC-Pr\xfcfsumme im Trailer stellen sicher, dass Fehler bei der \xdcbertragung erkannt werden. Zus\xe4tzlich sorgen der Sync Frame Indicator und der Startup Frame Indicator daf\xfcr, dass die Botschaften korrekt synchronisiert und initialisiert werden."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var i=r(96540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);