"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8276],{22341:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"DoIP/einfuehrung/uebersicht","title":"Einf\xfchrung in DoIP","description":"\xdcbersicht","source":"@site/docs/DoIP/01_einfuehrung/01_uebersicht.md","sourceDirName":"DoIP/01_einfuehrung","slug":"/DoIP/einfuehrung/uebersicht","permalink":"/Vehicle-Network-Standards/docs/DoIP/einfuehrung/uebersicht","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DoIP/01_einfuehrung/01_uebersicht.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"doipSidebar","previous":{"title":"Einf\xfchrung","permalink":"/Vehicle-Network-Standards/docs/DoIP/einfuehrung/"},"next":{"title":"Einf\xfchrung in die allgemeinen Konzepte von DoIP","permalink":"/Vehicle-Network-Standards/docs/DoIP/einfuehrung/allgemein"}}');var s=i(74848),t=i(28453);const d={},l="Einf\xfchrung in DoIP",o={},h=[{value:"\xdcbersicht",id:"\xfcbersicht",level:2},{value:"Anwendungsbereiche von DoIP",id:"anwendungsbereiche-von-doip",level:2},{value:"Verwendung von TCP- und UDP-Paketen",id:"verwendung-von-tcp--und-udp-paketen",level:2},{value:"Beschreibungsdateien",id:"beschreibungsdateien",level:2},{value:"Detaillierte Ebenen von DoIP",id:"detaillierte-ebenen-von-doip",level:2},{value:"Fazit",id:"fazit",level:3}];function a(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"einf\xfchrung-in-doip",children:"Einf\xfchrung in DoIP"})}),"\n",(0,s.jsx)(n.h2,{id:"\xfcbersicht",children:"\xdcbersicht"}),"\n",(0,s.jsx)(n.p,{children:"Das Diagnostic over Internet Protocol (DoIP) ist eine wesentliche Komponente moderner Fahrzeugdiagnosesysteme. Diese Technologie erm\xf6glicht die Diagnose und das Flashen von Steuerger\xe4ten (ECUs) \xfcber Ethernet- und IP-Netzwerke. In diesem Leitfaden werden die grundlegenden Aspekte und Anwendungen von DoIP ausf\xfchrlich erl\xe4utert."}),"\n",(0,s.jsx)(n.h2,{id:"anwendungsbereiche-von-doip",children:"Anwendungsbereiche von DoIP"}),"\n",(0,s.jsx)(n.p,{children:"Die Hauptanwendungsbereiche von DoIP umfassen:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Diagnose \xfcber Ethernet und IP:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Kommunikation und Diagnose von Fahrzeugsteuerger\xe4ten erfolgt \xfcber Ethernet und das Internetprotokoll (IP)."}),"\n",(0,s.jsx)(n.li,{children:"Dies erm\xf6glicht eine schnelle und effiziente Daten\xfcbertragung zwischen Diagnosetools und Steuerger\xe4ten."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Flash-Programmierung:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Neben der Diagnose wird DoIP auch f\xfcr das Flashen von Steuerger\xe4ten eingesetzt."}),"\n",(0,s.jsx)(n.li,{children:"Dies bedeutet, dass Software-Updates und Konfigurations\xe4nderungen \xfcber das Netzwerk auf die Steuerger\xe4te \xfcbertragen und implementiert werden k\xf6nnen."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"verwendung-von-tcp--und-udp-paketen",children:"Verwendung von TCP- und UDP-Paketen"}),"\n",(0,s.jsx)(n.p,{children:"F\xfcr die Kommunikation im DoIP-Protokoll werden sowohl TCP- als auch UDP-Pakete verwendet:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"UDP (User Datagram Protocol):"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"UDP wird f\xfcr die \xdcbertragung von Statusinformationen und Konfigurationsdaten genutzt."}),"\n",(0,s.jsx)(n.li,{children:"Es ist ein verbindungsloses Protokoll, das eine schnelle Daten\xfcbertragung erm\xf6glicht, jedoch keine Garantie f\xfcr die Zustellung der Daten bietet."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TCP (Transmission Control Protocol):"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TCP wird f\xfcr die gesamte Diagnosesitzung verwendet."}),"\n",(0,s.jsx)(n.li,{children:"Es ist ein verbindungsorientiertes Protokoll, das eine zuverl\xe4ssige Daten\xfcbertragung sicherstellt."}),"\n",(0,s.jsx)(n.li,{children:"TCP garantiert, dass die Daten korrekt und in der richtigen Reihenfolge beim Empf\xe4nger ankommen."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"beschreibungsdateien",children:"Beschreibungsdateien"}),"\n",(0,s.jsx)(n.p,{children:"F\xfcr die Implementierung und Nutzung von DoIP werden verschiedene Beschreibungsdateien verwendet, darunter:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CDD (CANdelaStudio Diagnostic Description):"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Diese Dateien beschreiben die verf\xfcgbaren Diagnosedienste und deren Parameter."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"ODX (Open Diagnostic Data Exchange):"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ODX-Dateien sind standardisierte Dateien zur Beschreibung von Diagnosedaten."}),"\n",(0,s.jsx)(n.li,{children:"Sie enthalten Informationen \xfcber Diagnosedienste, Fehlercodes, Messwerte und andere relevante Daten, die f\xfcr die Fahrzeugdiagnose notwendig sind."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"detaillierte-ebenen-von-doip",children:"Detaillierte Ebenen von DoIP"}),"\n",(0,s.jsx)(n.p,{children:"Die folgende Darstellung zeigt die verschiedenen Ebenen des DoIP-Protokolls, geordnet von der physikalischen Schicht bis zur Anwendungsebene:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Ethernet PHY:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die physikalische Schicht, die die Hardwarekomponenten und die physische Daten\xfcbertragung beschreibt."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Ethernet MAC + VLAN:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Media Access Control (MAC)-Schicht und Virtual Local Area Networks (VLANs), die f\xfcr die Adressierung und das Management des Netzwerkverkehrs verantwortlich sind."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"IPv4/IPv6:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Internetprotokoll-Schicht, die die Adressierung und Weiterleitung von Datenpaketen im Netzwerk regelt."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TCP/UDP:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Transportprotokolle, die eine zuverl\xe4ssige Daten\xfcbertragung (TCP) bzw. eine schnelle \xdcbertragung ohne Verbindungsaufbau (UDP) erm\xf6glichen."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DoIP:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Anwendungsschicht f\xfcr die Fahrzeugdiagnose und das Flashen von Steuerger\xe4ten \xfcber IP-Netzwerke."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Durch die Kombination dieser Ebenen erm\xf6glicht DoIP eine robuste und effiziente Plattform f\xfcr die moderne Fahrzeugdiagnose, die den Anforderungen an Geschwindigkeit, Zuverl\xe4ssigkeit und Flexibilit\xe4t gerecht wird."}),"\n",(0,s.jsx)(n.h3,{id:"fazit",children:"Fazit"}),"\n",(0,s.jsx)(n.p,{children:"DoIP ist ein wesentlicher Bestandteil der modernen Fahrzeugdiagnose und -wartung. Durch die Nutzung von Ethernet- und IP-Protokollen bietet es eine skalierbare und zukunftssichere L\xf6sung f\xfcr die Diagnose und Programmierung von Fahrzeugsteuerger\xe4ten. Die Verwendung standardisierter Beschreibungsdateien wie CDD und ODX tr\xe4gt zus\xe4tzlich zur Interoperabilit\xe4t und Effizienz der Diagnoseprozesse bei."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);