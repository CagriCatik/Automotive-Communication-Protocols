"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[6901],{88804:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"AUTOSAR/Grundlagen/schichtenmodell","title":"schichtenmodell","description":"Ein umfassendes Tutorial zu AUTOSAR in der Fahrzeug-Elektrik und -Elektronik","source":"@site/docs/AUTOSAR/01_Grundlagen/04_schichtenmodell.md","sourceDirName":"AUTOSAR/01_Grundlagen","slug":"/AUTOSAR/Grundlagen/schichtenmodell","permalink":"/Vehicle-Network-Standards/docs/AUTOSAR/Grundlagen/schichtenmodell","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/AUTOSAR/01_Grundlagen/04_schichtenmodell.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"autosarSidebar","previous":{"title":"konzept","permalink":"/Vehicle-Network-Standards/docs/AUTOSAR/Grundlagen/konzept"},"next":{"title":"Schnittstellendefinitionen in AUTOSAR","permalink":"/Vehicle-Network-Standards/docs/AUTOSAR/Grundlagen/schnittstelledefinition"}}');var t=r(74848),s=r(28453);const d={},l=void 0,a={},u=[{value:"Ein umfassendes Tutorial zu AUTOSAR in der Fahrzeug-Elektrik und -Elektronik",id:"ein-umfassendes-tutorial-zu-autosar-in-der-fahrzeug-elektrik-und--elektronik",level:3},{value:"Grundlegende Struktur der AUTOSAR-Software",id:"grundlegende-struktur-der-autosar-software",level:4},{value:"1. Basissoftware (BSW)",id:"1-basissoftware-bsw",level:4},{value:"a. Microcontroller Abstraction Layer (MCAL)",id:"a-microcontroller-abstraction-layer-mcal",level:5},{value:"b. ECU Abstraction Layer (ECUAL)",id:"b-ecu-abstraction-layer-ecual",level:5},{value:"c. Service Layer",id:"c-service-layer",level:5},{value:"2. Laufzeitumgebung (RTE)",id:"2-laufzeitumgebung-rte",level:4},{value:"3. Anwendungsschicht (ASW)",id:"3-anwendungsschicht-asw",level:4},{value:"Portierung von Software",id:"portierung-von-software",level:4},{value:"Schlussfolgerung",id:"schlussfolgerung",level:4}];function c(e){const n={h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"ein-umfassendes-tutorial-zu-autosar-in-der-fahrzeug-elektrik-und--elektronik",children:"Ein umfassendes Tutorial zu AUTOSAR in der Fahrzeug-Elektrik und -Elektronik"}),"\n",(0,t.jsx)(n.p,{children:"AUTOSAR (AUTomotive Open System ARchitecture) ist ein weltweit etablierter Standard zur Entwicklung von Software f\xfcr Steuerger\xe4te in Fahrzeugen. Er erm\xf6glicht eine klare Trennung der Softwarearchitektur in verschiedene Schichten und sorgt somit f\xfcr eine bessere Wartbarkeit und Portierbarkeit der Software. In diesem Tutorial werden die wesentlichen Komponenten und Konzepte von AUTOSAR detailliert beschrieben."}),"\n",(0,t.jsx)(n.h4,{id:"grundlegende-struktur-der-autosar-software",children:"Grundlegende Struktur der AUTOSAR-Software"}),"\n",(0,t.jsx)(n.p,{children:"Die AUTOSAR-Software ist in drei Hauptkomponenten unterteilt:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Basissoftware (BSW)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Laufzeitumgebung (RTE)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Anwendungsschicht (ASW)"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"1-basissoftware-bsw",children:"1. Basissoftware (BSW)"}),"\n",(0,t.jsx)(n.p,{children:"Die Basissoftware stellt die grundlegende Infrastruktur und Dienstleistungen f\xfcr die Anwendungsschicht bereit. Sie ist in mehrere Schichten unterteilt, die spezifische Aufgaben erf\xfcllen:"}),"\n",(0,t.jsx)(n.h5,{id:"a-microcontroller-abstraction-layer-mcal",children:"a. Microcontroller Abstraction Layer (MCAL)"}),"\n",(0,t.jsx)(n.p,{children:"Der Microcontroller Abstraction Layer (MCAL) bildet die unterste Schicht der Basissoftware. Er bietet generische Treiber f\xfcr den Zugriff auf die Mikrocontroller-Hardware, einschlie\xdflich:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Speicherzugriff"}),": Treiber f\xfcr EEPROM, RAM und Flash-Speicher."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Kommunikation"}),": Treiber f\xfcr Kommunikationsprotokolle wie CAN, LIN, und FlexRay."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Input/Output (IO)"}),": Treiber f\xfcr digitale und analoge IO-Operationen."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Der MCAL erm\xf6glicht eine hardwareunabh\xe4ngige Programmierung, indem er die Hardwaredetails abstrahiert und standardisierte Schnittstellen zur Verf\xfcgung stellt."}),"\n",(0,t.jsx)(n.h5,{id:"b-ecu-abstraction-layer-ecual",children:"b. ECU Abstraction Layer (ECUAL)"}),"\n",(0,t.jsx)(n.p,{children:"Der ECU Abstraction Layer (ECUAL) abstrahiert die hardwareabh\xe4ngigen Funktionen eines Steuerger\xe4ts. Er bietet einheitliche Schnittstellen f\xfcr die:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Kommunikation"}),": Abstrahiert Kommunikationsprotokolle unabh\xe4ngig von der zugrunde liegenden Hardware."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Speicherverwaltung"}),": Einheitlicher Zugriff auf unterschiedliche Speichertypen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IO-Operationen"}),": Standardisierte Schnittstellen f\xfcr Peripherieger\xe4te."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Der ECUAL erm\xf6glicht es, dass verschiedene Steuerger\xe4te mit unterschiedlichen Hardwarekomponenten auf dieselbe Weise angesprochen werden k\xf6nnen."}),"\n",(0,t.jsx)(n.h5,{id:"c-service-layer",children:"c. Service Layer"}),"\n",(0,t.jsx)(n.p,{children:"Der Service Layer stellt diverse Hintergrunddienste f\xfcr die Anwendungsschicht bereit, darunter:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Netzwerkdienste"}),": Verwaltung der Kommunikation zwischen verschiedenen Steuerger\xe4ten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Speicherdienste"}),": Verwaltung von persistentem und fl\xfcchtigem Speicher."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Buskommunikationsdienste"}),": Handhabung der Buskommunikation, z.B. CAN-Bus."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In dieser Schicht ist auch das Betriebssystem (OS) enthalten, welches f\xfcr die Ausf\xfchrung der Software zust\xe4ndig ist."}),"\n",(0,t.jsx)(n.h4,{id:"2-laufzeitumgebung-rte",children:"2. Laufzeitumgebung (RTE)"}),"\n",(0,t.jsx)(n.p,{children:"Die Runtime Environment (RTE) bildet das Bindeglied zwischen der Basissoftware und der Anwendungsschicht. Sie bietet eine Abstraktionsschicht, die die Anwendungsschicht von der Basissoftware trennt und somit den Datenaustausch und die Interaktion zwischen diesen beiden Schichten erm\xf6glicht. Die RTE stellt sicher, dass die Softwarekomponenten unabh\xe4ngig von der zugrunde liegenden Hardware und Basissoftware entwickelt werden k\xf6nnen."}),"\n",(0,t.jsx)(n.h4,{id:"3-anwendungsschicht-asw",children:"3. Anwendungsschicht (ASW)"}),"\n",(0,t.jsx)(n.p,{children:"Die Anwendungsschicht enth\xe4lt die eigentliche Anwendungslogik und Funktionalit\xe4t des Steuerger\xe4ts. Sie besteht aus verschiedenen Softwarekomponenten (SWCs), die spezifische Funktionen implementieren. Diese Komponenten k\xf6nnen wiederverwendet und in verschiedenen Steuerger\xe4ten eingesetzt werden."}),"\n",(0,t.jsx)(n.h4,{id:"portierung-von-software",children:"Portierung von Software"}),"\n",(0,t.jsx)(n.p,{children:"Ein wesentlicher Vorteil der AUTOSAR-Architektur ist die vereinfachte Portierbarkeit der Software auf unterschiedliche Hardwareplattformen. Bei herk\xf6mmlichen Softwarearchitekturen erfordert eine Portierung oft umfangreiche Anpassungen in allen Schichten der Software. AUTOSAR reduziert diesen Aufwand erheblich:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MCAL"}),": Es m\xfcssen nur die mikrocontrollerspezifischen Treiber ersetzt werden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ECUAL"}),": Die Module m\xfcssen lediglich neu konfiguriert werden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Service Layer und RTE"}),": Diese Schichten bleiben unver\xe4ndert, wodurch der Implementierungs- und Testaufwand minimiert wird."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diese strukturierte Herangehensweise f\xfchrt zu einer signifikanten Reduktion des Implementierungs- und Testaufwands sowie des damit verbundenen Risikos."}),"\n",(0,t.jsx)(n.h4,{id:"schlussfolgerung",children:"Schlussfolgerung"}),"\n",(0,t.jsx)(n.p,{children:"AUTOSAR bietet eine standardisierte, modulare Softwarearchitektur, die die Entwicklung, Wartung und Portierung von Steuerger\xe4tesoftware erheblich vereinfacht. Durch die klare Trennung der verschiedenen Schichten k\xf6nnen Entwickler ihre Software flexibel und effizient gestalten, was zu einer h\xf6heren Zuverl\xe4ssigkeit und Wiederverwendbarkeit f\xfchrt."}),"\n",(0,t.jsx)(n.p,{children:"Dieses Tutorial hat die wesentlichen Konzepte und Komponenten von AUTOSAR erl\xe4utert und zeigt, wie die Architektur dazu beitr\xe4gt, die Herausforderungen der modernen Fahrzeug-Elektrik und -Elektronik zu bew\xe4ltigen."})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var i=r(96540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);