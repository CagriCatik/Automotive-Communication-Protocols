"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[877],{8274:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"FLEXRAY/kommunikation/flexray-busankopplung","title":"FlexRay - Busankopplung","description":"Einleitung","source":"@site/docs/FLEXRAY/02_kommunikation/08_flexray-busankopplung.md","sourceDirName":"FLEXRAY/02_kommunikation","slug":"/FLEXRAY/kommunikation/flexray-busankopplung","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/kommunikation/flexray-busankopplung","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FLEXRAY/02_kommunikation/08_flexray-busankopplung.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"flexraySidebar","previous":{"title":"FlexRay Buspegel","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/kommunikation/flexray-buspegel"},"next":{"title":"Busguardian","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/kommunikation/busguardian"}}');var s=r(74848),t=r(28453);const l={},u="FlexRay - Busankopplung",d={},a=[{value:"Einleitung",id:"einleitung",level:2},{value:"FlexRay Controller und physikalisches \xdcbertragungsmedium",id:"flexray-controller-und-physikalisches-\xfcbertragungsmedium",level:2},{value:"FlexRay Transceiver: Die Schnittstelle zwischen Controller und Bus",id:"flexray-transceiver-die-schnittstelle-zwischen-controller-und-bus",level:2},{value:"Elektromagnetische Vertr\xe4glichkeit (EMV) und Entst\xf6rung",id:"elektromagnetische-vertr\xe4glichkeit-emv-und-entst\xf6rung",level:2},{value:"LC-Entst\xf6rschaltungen",id:"lc-entst\xf6rschaltungen",level:2},{value:"Herausforderungen und L\xf6sungen",id:"herausforderungen-und-l\xf6sungen",level:2},{value:"Zusammenfassung",id:"zusammenfassung",level:2},{value:"Weiterf\xfchrende Ressourcen",id:"weiterf\xfchrende-ressourcen",level:2}];function o(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"flexray---busankopplung",children:"FlexRay - Busankopplung"})}),"\n",(0,s.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,s.jsx)(n.p,{children:"FlexRay ist ein robustes und zuverl\xe4ssiges Kommunikationsprotokoll, das speziell f\xfcr den Einsatz in der Fahrzeugelektronik entwickelt wurde. Es bietet eine hohe Datenrate und deterministische Kommunikation, was es ideal f\xfcr sicherheitskritische Anwendungen macht. In diesem Tutorial werden wir die Rolle des FlexRay Controllers und des FlexRay Transceivers erl\xe4utern und auf die technische Umsetzung und Herausforderungen bei der Integration in Fahrzeuge eingehen."}),"\n",(0,s.jsx)(n.h2,{id:"flexray-controller-und-physikalisches-\xfcbertragungsmedium",children:"FlexRay Controller und physikalisches \xdcbertragungsmedium"}),"\n",(0,s.jsx)(n.p,{children:"Der FlexRay Controller ist das Herzst\xfcck eines FlexRay Netzwerks. Er generiert und verarbeitet bin\xe4re Datenstr\xf6me, die zur Kommunikation \xfcber das Netzwerk verwendet werden. Der FlexRay Controller kann jedoch nicht direkt an das physikalische \xdcbertragungsmedium angeschlossen werden, da dieses auf Differenzsignal\xfcbertragung basiert. Differenzsignale sind notwendig, um eine hohe St\xf6rsicherheit und Zuverl\xe4ssigkeit zu gew\xe4hrleisten, da sie weniger anf\xe4llig f\xfcr elektromagnetische St\xf6rungen sind."}),"\n",(0,s.jsx)(n.h2,{id:"flexray-transceiver-die-schnittstelle-zwischen-controller-und-bus",children:"FlexRay Transceiver: Die Schnittstelle zwischen Controller und Bus"}),"\n",(0,s.jsx)(n.p,{children:"Der FlexRay Transceiver \xfcbernimmt die wichtige Aufgabe, die vom FlexRay Controller kommenden logischen Signale in Differenzsignale umzuwandeln und umgekehrt. Dies erm\xf6glicht die effektive Kommunikation \xfcber das FlexRay Netzwerk. Der Transceiver hat folgende Hauptfunktionen:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Umwandlung von Signalen"}),": Er konvertiert die bin\xe4ren Signale des Controllers in Differenzsignale und die Differenzsignale vom Bus in bin\xe4re Signale."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Steuerung durch den Host"}),": Der Transceiver verf\xfcgt \xfcber Steuerleitungen (STBN und EN), die vom Host-System kontrolliert werden, um den Betriebszustand des Transceivers festzulegen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Betriebszust\xe4nde"}),": Der Transceiver kann in verschiedene Zust\xe4nde versetzt werden: \u201eNormal\u201c, \u201eStandby\u201c, \u201eSleep\u201c, und \u201eReceiveOnly\u201c. Die letzten beiden Zust\xe4nde sind optional und dienen der Energieeinsparung bzw. dem Empfangsmodus ohne Senden."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"elektromagnetische-vertr\xe4glichkeit-emv-und-entst\xf6rung",children:"Elektromagnetische Vertr\xe4glichkeit (EMV) und Entst\xf6rung"}),"\n",(0,s.jsx)(n.p,{children:"Ein kritischer Aspekt des FlexRay Transceivers ist seine elektromagnetische Vertr\xe4glichkeit (EMV). Trotz hoher EMV lassen sich durch den Einsatz von Entst\xf6rdrosseln (LC-Filter) die Emissionen weiter reduzieren. Dies ist wichtig, um St\xf6rungen anderer empfindlicher Elektroniksysteme im Fahrzeug zu minimieren."}),"\n",(0,s.jsx)(n.h2,{id:"lc-entst\xf6rschaltungen",children:"LC-Entst\xf6rschaltungen"}),"\n",(0,s.jsx)(n.p,{children:"LC-Entst\xf6rschaltungen bestehen aus Induktivit\xe4ten (Drosseln) und Kondensatoren. Sie unterdr\xfccken hochfrequente St\xf6rungen und sorgen f\xfcr eine saubere Signal\xfcbertragung. Die Spezifikationen f\xfcr die Entst\xf6rdrosseln im FlexRay System sind:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Leitungswiderstand"}),": < 2 Ohm"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Induktivit\xe4t"}),": > 50 \u03bcH"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Streuinduktivit\xe4t"}),": < 1 \u03bcH"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Diese Werte stellen sicher, dass die Drosseln ausreichend St\xf6rstr\xf6me unterdr\xfccken, ohne die Signalqualit\xe4t zu beeintr\xe4chtigen."}),"\n",(0,s.jsx)(n.h2,{id:"herausforderungen-und-l\xf6sungen",children:"Herausforderungen und L\xf6sungen"}),"\n",(0,s.jsx)(n.p,{children:"Ein kleiner Nachteil der LC-Entst\xf6rschaltungen ist die Bildung eines Schwingkreises durch die Kombination von Streuinduktivit\xe4t und Kopplungskondensator. Dieser Schwingkreis kann bei den Schaltvorg\xe4ngen des FlexRay Transceivers zu einem \xdcberschwingen der Bussignale f\xfchren. Um dieses Problem zu minimieren, muss die Streuinduktivit\xe4t sorgf\xe4ltig \xfcberwacht und kontrolliert werden."}),"\n",(0,s.jsx)(n.h2,{id:"zusammenfassung",children:"Zusammenfassung"}),"\n",(0,s.jsx)(n.p,{children:"Die Integration eines FlexRay Controllers mit einem FlexRay Transceiver erfordert ein tiefes Verst\xe4ndnis der Signal\xfcbertragung und der elektromagnetischen Vertr\xe4glichkeit. Durch die richtige Auswahl und Implementierung von LC-Entst\xf6rschaltungen k\xf6nnen St\xf6rungen minimiert und die Zuverl\xe4ssigkeit der Kommunikation erh\xf6ht werden. Trotz der technischen Herausforderungen bieten FlexRay Netzwerke eine robuste und deterministische L\xf6sung f\xfcr die komplexen Anforderungen moderner Fahrzeugelektronik."}),"\n",(0,s.jsx)(n.h2,{id:"weiterf\xfchrende-ressourcen",children:"Weiterf\xfchrende Ressourcen"}),"\n",(0,s.jsx)(n.p,{children:"F\xfcr eine tiefere Einarbeitung in das Thema empfehlen wir die folgenden Ressourcen:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FlexRay Consortium Dokumentationen"}),"\n",(0,s.jsx)(n.li,{children:"Fachliteratur zur Fahrzeugelektronik und EMV"}),"\n",(0,s.jsx)(n.li,{children:"Technische Spezifikationen und Whitepapers von Halbleiterherstellern"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Mit diesem Wissen sind Sie gut ger\xfcstet, um die Vorteile des FlexRay Netzwerks in Ihren Fahrzeugentwicklungsprojekten zu nutzen und gleichzeitig die Herausforderungen der Implementierung zu meistern."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>u});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);