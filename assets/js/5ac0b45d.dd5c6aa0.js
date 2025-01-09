"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8341],{40283:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"FLEXRAY/Kommunikation/busguardian","title":"Busguardian","description":"Kommunikationszyklus und Zeitschlitze","source":"@site/docs/FLEXRAY/02_Kommunikation/09_busguardian.md","sourceDirName":"FLEXRAY/02_Kommunikation","slug":"/FLEXRAY/Kommunikation/busguardian","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Kommunikation/busguardian","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FLEXRAY/02_Kommunikation/09_busguardian.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"flexraySidebar","previous":{"title":"FlexRay - Busankopplung","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Kommunikation/flexray-busankopplung"},"next":{"title":"Buszugriff","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Buszugriff/"}}');var r=i(74848),a=i(28453);const t={},u="Busguardian",l={},d=[{value:"Kommunikationszyklus und Zeitschlitze",id:"kommunikationszyklus-und-zeitschlitze",level:2},{value:"Die Rolle der Busguardians",id:"die-rolle-der-busguardians",level:2},{value:"Lokaler Busguardian",id:"lokaler-busguardian",level:2},{value:"Funktionsweise",id:"funktionsweise",level:2},{value:"Herausforderungen",id:"herausforderungen",level:2},{value:"Zentraler Busguardian",id:"zentraler-busguardian",level:2},{value:"Funktionsweise",id:"funktionsweise-1",level:2}];function o(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"busguardian",children:"Busguardian"})}),"\n",(0,r.jsx)(n.h2,{id:"kommunikationszyklus-und-zeitschlitze",children:"Kommunikationszyklus und Zeitschlitze"}),"\n",(0,r.jsx)(n.p,{children:"Ein FlexRay-Kommunikationszyklus besteht aus zwei Hauptsegmenten:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Statisches Kommunikationssegment:"})," Hier sind die Zeitschlitze fest zugewiesen, und jeder Knoten hat spezifische Zeiten, in denen er senden darf."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dynamisches Kommunikationssegment:"})," Die Zeitschlitze werden bedarfsabh\xe4ngig genutzt, was eine gr\xf6\xdfere Flexibilit\xe4t, aber auch ein h\xf6heres Kollisionsrisiko mit sich bringt."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"die-rolle-der-busguardians",children:"Die Rolle der Busguardians"}),"\n",(0,r.jsx)(n.p,{children:"Busguardians spielen eine entscheidende Rolle bei der Sicherstellung der Ordnung im Kommunikationsablauf. Sie verhindern, dass FlexRay-Knoten au\xdferhalb ihrer zugewiesenen Zeitschlitze senden und so die Kommunikation st\xf6ren. Es gibt zwei Haupttypen von Busguardians: lokale und zentrale Busguardians."}),"\n",(0,r.jsx)(n.h2,{id:"lokaler-busguardian",children:"Lokaler Busguardian"}),"\n",(0,r.jsx)(n.p,{children:"Ein lokaler Busguardian ist jedem FlexRay-Transceiver zugeordnet und erlaubt dem Transceiver nur dann, Daten auf den Bus zu senden, wenn dies gem\xe4\xdf dem Kommunikationsplan vorgesehen ist."}),"\n",(0,r.jsx)(n.h2,{id:"funktionsweise",children:"Funktionsweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Zeit- und Kommunikationsplan-Kenntnis:"})," Der Busguardian muss sowohl den Kommunikationsplan als auch die Zeit im FlexRay-Cluster kennen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Unabh\xe4ngige Zeitbasis:"})," Ideal ist es, wenn der Busguardian seine eigene, unabh\xe4ngige Zeitbasis hat. Dies erh\xf6ht die Sicherheit, da der Busguardian unabh\xe4ngig vom FlexRay-Controller agiert und alle zeitlichen Fehler des Controllers erkennen kann."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"herausforderungen",children:"Herausforderungen"}),"\n",(0,r.jsx)(n.p,{children:"Die Implementierung eines lokalen Busguardians erfordert eine \xe4hnliche Komplexit\xe4t wie die eines FlexRay-Controllers, was die Kosten erh\xf6ht. Trotz der theoretischen Vorteile gibt es bisher keine praktischen Implementierungen eines lokalen Busguardians. Die Spezifikation (Version 2.0.9) ist noch vorl\xe4ufig."}),"\n",(0,r.jsx)(n.h2,{id:"zentraler-busguardian",children:"Zentraler Busguardian"}),"\n",(0,r.jsx)(n.p,{children:"Ein zentraler Busguardian wird auf einem aktiven Sternkoppler platziert. Dieser Ansatz ist ebenfalls noch nicht implementiert und die entsprechende Spezifikation ist ebenfalls in der Version 2.0.9 vorl\xe4ufig."}),"\n",(0,r.jsx)(n.h2,{id:"funktionsweise-1",children:"Funktionsweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Kommunikationszweig-Aktivierung:"})," Innerhalb jedes Kommunikationszyklus aktiviert der zentrale Busguardian nur den Kommunikationszweig, der zu dem Knoten f\xfchrt, der laut Kommunikationsplan senden darf."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Vermeidung von Signalkollisionen:"})," Durch diese selektive Aktivierung k\xf6nnen Signalkollisionen effektiv vermieden werden."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>u});var s=i(96540);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);