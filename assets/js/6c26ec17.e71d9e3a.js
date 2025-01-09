"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[9770],{50985:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"AUTOSAR/Grundlagen/schnittstellendefinition","title":"AUTOSAR-Schnittstellen: Ein umfassendes Tutorial","description":"AUTOSAR (AUTomotive Open System ARchitecture) ist ein weltweit anerkannter Standard f\xfcr die Entwicklung von Softwarearchitekturen im Automobilbereich. Einer der zentralen Bestandteile von AUTOSAR sind die Schnittstellen, die eine klare und standardisierte Kommunikation zwischen verschiedenen Softwarekomponenten (SWC) und zwischen SWCs und der Basissoftware (BSW) erm\xf6glichen. In diesem Tutorial werden wir die drei Typen von Schnittstellen, die AUTOSAR unterscheidet, detailliert und pr\xe4zise behandeln: AUTOSAR Interface, Standardized AUTOSAR Interface und Standardized Interface.","source":"@site/docs/AUTOSAR/01_Grundlagen/05_schnittstellendefinition.md","sourceDirName":"AUTOSAR/01_Grundlagen","slug":"/AUTOSAR/Grundlagen/schnittstellendefinition","permalink":"/Vehicle-Network-Standards/docs/AUTOSAR/Grundlagen/schnittstellendefinition","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/AUTOSAR/01_Grundlagen/05_schnittstellendefinition.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"autosarSidebar","previous":{"title":"Schnittstellendefinitionen in AUTOSAR","permalink":"/Vehicle-Network-Standards/docs/AUTOSAR/Grundlagen/schnittstelledefinition"},"next":{"title":"04_1_swc-mapping","permalink":"/Vehicle-Network-Standards/docs/AUTOSAR/Grundlagen/04_1_swc-mapping"}}');var r=i(74848),s=i(28453);const d={},a="AUTOSAR-Schnittstellen: Ein umfassendes Tutorial",l={},c=[{value:"1. AUTOSAR Interface",id:"1-autosar-interface",level:2},{value:"Definition",id:"definition",level:3},{value:"Funktionsweise",id:"funktionsweise",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"2. Standardized AUTOSAR Interface",id:"2-standardized-autosar-interface",level:2},{value:"Definition",id:"definition-1",level:3},{value:"Funktionsweise",id:"funktionsweise-1",level:3},{value:"Beispiel",id:"beispiel-1",level:3},{value:"3. Standardized Interface",id:"3-standardized-interface",level:2},{value:"Definition",id:"definition-2",level:3},{value:"Funktionsweise",id:"funktionsweise-2",level:3},{value:"Beispiel",id:"beispiel-2",level:3},{value:"Zusammenfassung",id:"zusammenfassung",level:2}];function o(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"autosar-schnittstellen-ein-umfassendes-tutorial",children:"AUTOSAR-Schnittstellen: Ein umfassendes Tutorial"})}),"\n",(0,r.jsx)(n.p,{children:"AUTOSAR (AUTomotive Open System ARchitecture) ist ein weltweit anerkannter Standard f\xfcr die Entwicklung von Softwarearchitekturen im Automobilbereich. Einer der zentralen Bestandteile von AUTOSAR sind die Schnittstellen, die eine klare und standardisierte Kommunikation zwischen verschiedenen Softwarekomponenten (SWC) und zwischen SWCs und der Basissoftware (BSW) erm\xf6glichen. In diesem Tutorial werden wir die drei Typen von Schnittstellen, die AUTOSAR unterscheidet, detailliert und pr\xe4zise behandeln: AUTOSAR Interface, Standardized AUTOSAR Interface und Standardized Interface."}),"\n",(0,r.jsx)(n.h2,{id:"1-autosar-interface",children:"1. AUTOSAR Interface"}),"\n",(0,r.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.p,{children:"Das AUTOSAR Interface ist eine generische Schnittstelle, die von den Ports einer Software-Komponente (SWC) abgeleitet wird. Diese Schnittstellen werden von der Runtime Environment (RTE) bereitgestellt und dienen als Kommunikationsmittel zwischen SWCs oder zwischen einer SWC und der Steuerger\xe4te-Firmware, wie beispielsweise den I/O Hardware Abstraction (IoHwAb) oder komplexen Treibern."}),"\n",(0,r.jsx)(n.h3,{id:"funktionsweise",children:"Funktionsweise"}),"\n",(0,r.jsx)(n.p,{children:"\xdcber ein AUTOSAR Interface kann eine SWC Eingangs- oder Ausgangswerte lesen bzw. schreiben. Diese generische Natur erm\xf6glicht eine flexible Anpassung und Wiederverwendbarkeit von SWCs in unterschiedlichen Kontexten. Die RTE \xfcbernimmt die Aufgabe, die Kommunikation zu koordinieren und sicherzustellen, dass Daten korrekt zwischen den SWCs ausgetauscht werden."}),"\n",(0,r.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,r.jsx)(n.p,{children:"Eine SWC kann ein AUTOSAR Interface verwenden, um Sensordaten zu lesen. Die Schnittstelle abstrahiert die Details der Hardware-Interaktion und bietet eine standardisierte Methode, um auf die Daten zuzugreifen."}),"\n",(0,r.jsx)(n.h2,{id:"2-standardized-autosar-interface",children:"2. Standardized AUTOSAR Interface"}),"\n",(0,r.jsx)(n.h3,{id:"definition-1",children:"Definition"}),"\n",(0,r.jsx)(n.p,{children:"Das Standardized AUTOSAR Interface ist eine besondere Form des AUTOSAR Interface, das bereits durch den AUTOSAR Standard vordefiniert ist. Diese Schnittstellen werden verwendet, um auf AUTOSAR Services zuzugreifen, die von BSW-Modulen des Service Layers bereitgestellt werden, wie z.B. dem ECU State Manager oder dem Diagnostic Event Manager."}),"\n",(0,r.jsx)(n.h3,{id:"funktionsweise-1",children:"Funktionsweise"}),"\n",(0,r.jsx)(n.p,{children:"Diese vordefinierten Schnittstellen erleichtern die Integration und Interoperabilit\xe4t von SWCs, indem sie einen einheitlichen Zugang zu wichtigen Systemdiensten bieten. Durch die Verwendung standardisierter Schnittstellen k\xf6nnen Entwickler sicherstellen, dass ihre SWCs kompatibel mit den allgemeinen AUTOSAR-Diensten sind und so die Wiederverwendbarkeit und Skalierbarkeit der Software erh\xf6hen."}),"\n",(0,r.jsx)(n.h3,{id:"beispiel-1",children:"Beispiel"}),"\n",(0,r.jsx)(n.p,{children:"Ein typisches Beispiel f\xfcr ein Standardized AUTOSAR Interface ist die Schnittstelle zum ECU State Manager, die es einer SWC erm\xf6glicht, den Zustand der Steuerger\xe4te zu \xfcberwachen und zu steuern."}),"\n",(0,r.jsx)(n.h2,{id:"3-standardized-interface",children:"3. Standardized Interface"}),"\n",(0,r.jsx)(n.h3,{id:"definition-2",children:"Definition"}),"\n",(0,r.jsx)(n.p,{children:"Das Standardized Interface ist eine Schnittstelle, die durch den AUTOSAR Standard als API (Application Programming Interface) in der Programmiersprache C vordefiniert ist. Diese Schnittstellen werden haupts\xe4chlich zwischen BSW-Modulen innerhalb eines Steuerger\xe4ts, zwischen der RTE und dem Betriebssystem oder zwischen der RTE und dem BSW-Modul Com verwendet."}),"\n",(0,r.jsx)(n.h3,{id:"funktionsweise-2",children:"Funktionsweise"}),"\n",(0,r.jsx)(n.p,{children:"Das Standardized Interface erm\xf6glicht eine konsistente und effiziente Kommunikation zwischen verschiedenen Schichten der AUTOSAR-Architektur. Diese API stellt sicher, dass alle Module auf eine standardisierte Weise interagieren, wodurch die Kompatibilit\xe4t und Integration innerhalb des Systems vereinfacht wird."}),"\n",(0,r.jsx)(n.h3,{id:"beispiel-2",children:"Beispiel"}),"\n",(0,r.jsx)(n.p,{children:"Ein Beispiel f\xfcr ein Standardized Interface ist die API f\xfcr die Kommunikation zwischen der RTE und dem Betriebssystem. Diese Schnittstelle definiert klar, wie die RTE Dienste des Betriebssystems aufrufen kann, um Aufgaben wie Zeitmanagement oder Speicherverwaltung durchzuf\xfchren."}),"\n",(0,r.jsx)(n.h2,{id:"zusammenfassung",children:"Zusammenfassung"}),"\n",(0,r.jsx)(n.p,{children:"AUTOSAR bietet durch die klar definierten Schnittstellentypen eine robuste und skalierbare Architektur f\xfcr die Entwicklung von Fahrzeugsoftware. Die drei Haupttypen von Schnittstellen - AUTOSAR Interface, Standardized AUTOSAR Interface und Standardized Interface - spielen eine zentrale Rolle bei der Sicherstellung der Interoperabilit\xe4t, Wiederverwendbarkeit und Wartbarkeit von Softwarekomponenten in modernen Fahrzeugen. Ein tiefes Verst\xe4ndnis dieser Schnittstellen ist unerl\xe4sslich f\xfcr Entwickler, die in der AUTOSAR-Umgebung arbeiten und qualitativ hochwertige Software f\xfcr die Automobilindustrie erstellen m\xf6chten."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);