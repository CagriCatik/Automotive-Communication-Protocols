"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[7759],{21729:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"FLEXRAY/Kommunikation/aktive-topologien","title":"Aktive Topologien","description":"Grundkonzepte von FlexRay","source":"@site/docs/FLEXRAY/02_Kommunikation/03_aktive-topologien.md","sourceDirName":"FLEXRAY/02_Kommunikation","slug":"/FLEXRAY/Kommunikation/aktive-topologien","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Kommunikation/aktive-topologien","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FLEXRAY/02_Kommunikation/03_aktive-topologien.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"flexraySidebar","previous":{"title":"Passive Topologien","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Kommunikation/passive-topologien"},"next":{"title":"FlexRay Knoten","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Kommunikation/flexray-knoten"}}');var r=i(74848),o=i(28453);const s={},l="Aktive Topologien",a={},d=[{value:"Grundkonzepte von FlexRay",id:"grundkonzepte-von-flexray",level:2},{value:"Topologien in FlexRay-Netzwerken",id:"topologien-in-flexray-netzwerken",level:2},{value:"Passive Sterntopologie",id:"passive-sterntopologie",level:3},{value:"Aktive Sterntopologie",id:"aktive-sterntopologie",level:3},{value:"Funktionsweise des aktiven Sternkopplers",id:"funktionsweise-des-aktiven-sternkopplers",level:4},{value:"Vorteile der aktiven Sterntopologie",id:"vorteile-der-aktiven-sterntopologie",level:4},{value:"Dimensionierung einer aktiven Clustertopologie",id:"dimensionierung-einer-aktiven-clustertopologie",level:3},{value:"Mischtopologien",id:"mischtopologien",level:2},{value:"Kritische Bewertung und m\xf6gliche Ungenauigkeiten",id:"kritische-bewertung-und-m\xf6gliche-ungenauigkeiten",level:2},{value:"Fazit",id:"fazit",level:2}];function u(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"aktive-topologien",children:"Aktive Topologien"})}),"\n",(0,r.jsx)(n.h2,{id:"grundkonzepte-von-flexray",children:"Grundkonzepte von FlexRay"}),"\n",(0,r.jsx)(n.p,{children:"FlexRay basiert auf einer zeitgesteuerten (TDMA) und eventgesteuerten (FEC) Kommunikation. Das Protokoll erlaubt es, dass Nachrichten in festgelegten Zeitfenstern \xfcbertragen werden, was eine deterministische Kommunikation erm\xf6glicht. FlexRay-Netzwerke bestehen aus mehreren Knoten (Steuerger\xe4ten), die durch Kommunikationskan\xe4le verbunden sind. Diese Knoten kommunizieren \xfcber einen Bus, der entweder als Single-Channel oder Dual-Channel ausgef\xfchrt sein kann."}),"\n",(0,r.jsx)(n.h2,{id:"topologien-in-flexray-netzwerken",children:"Topologien in FlexRay-Netzwerken"}),"\n",(0,r.jsx)(n.h3,{id:"passive-sterntopologie",children:"Passive Sterntopologie"}),"\n",(0,r.jsx)(n.p,{children:"In einer passiven Sterntopologie sind die FlexRay-Knoten \xfcber einen passiven Sternmittelpunkt verbunden. Diese Anordnung hat jedoch Einschr\xe4nkungen hinsichtlich der Signalst\xe4rke und der St\xf6ranf\xe4lligkeit. Die passive Sterntopologie ist einfach, bietet jedoch keine M\xf6glichkeit, fehlerhafte Kommunikationszweige zu isolieren."}),"\n",(0,r.jsx)(n.h3,{id:"aktive-sterntopologie",children:"Aktive Sterntopologie"}),"\n",(0,r.jsx)(n.p,{children:"Im Gegensatz zur passiven Sterntopologie bietet die aktive Sterntopologie eine wesentlich h\xf6here Zuverl\xe4ssigkeit und Fehlertoleranz. Bei dieser Topologie werden die FlexRay-Knoten physikalisch in Form eines Sterns angeordnet, wobei der zentrale Knoten durch einen aktiven Sternkoppler ersetzt wird."}),"\n",(0,r.jsx)(n.h4,{id:"funktionsweise-des-aktiven-sternkopplers",children:"Funktionsweise des aktiven Sternkopplers"}),"\n",(0,r.jsx)(n.p,{children:"Ein aktiver Sternkoppler empf\xe4ngt Signale von einem Kommunikationszweig, verst\xe4rkt sie und verteilt sie an alle anderen Kommunikationszweige. Dadurch wird die Signalst\xe4rke verbessert und die Reichweite des Netzwerks erh\xf6ht. Der maximale Abstand zwischen einem aktiven Sternkoppler und einem FlexRay-Knoten darf 24 Meter nicht \xfcberschreiten."}),"\n",(0,r.jsx)(n.h4,{id:"vorteile-der-aktiven-sterntopologie",children:"Vorteile der aktiven Sterntopologie"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fehlerisolierung"}),": Der aktive Sternkoppler kann fehlerhafte Kommunikationszweige erkennen und isolieren, wodurch die Ausbreitung von Fehlern verhindert wird."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Erweiterte Netzwerkreichweite"}),": Durch den Einsatz aktiver Sternkoppler kann die Ausdehnung eines FlexRay-Clusters vergr\xf6\xdfert werden."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Elektrische Stabilit\xe4t"}),": Die aktiven Komponenten sorgen f\xfcr eine ideale Busabschlie\xdfung und verbessern die elektrische Stabilit\xe4t des Netzwerks."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"dimensionierung-einer-aktiven-clustertopologie",children:"Dimensionierung einer aktiven Clustertopologie"}),"\n",(0,r.jsx)(n.p,{children:"Bei der Planung und Dimensionierung einer aktiven Clustertopologie m\xfcssen einige wichtige Faktoren ber\xfccksichtigt werden:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Signalverz\xf6gerung"}),': Der aktive Sternkoppler verursacht eine Verz\xf6gerung in der Signal\xfcbertragung. Diese Verz\xf6gerung, bekannt als "Star Truncation", darf laut FlexRay-Spezifikation 450 Nanosekunden nicht \xfcberschreiten.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Transmission Start Sequence (TSS)"}),": Jede FlexRay-Botschaft muss mit einer TSS beginnen, um die Signalverz\xf6gerung des aktiven Sternkopplers zu kompensieren."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Erweiterung durch Hintereinanderschaltung"}),": Durch das Hintereinanderschalten von zwei aktiven Sternkopplern kann die Netzwerkausdehnung um zus\xe4tzliche 24 Meter erweitert werden. Praktisch sollte jedoch eher von einer maximalen Ausdehnung von 3x12 Metern ausgegangen werden, um die Signalintegrit\xe4t zu gew\xe4hrleisten."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"mischtopologien",children:"Mischtopologien"}),"\n",(0,r.jsx)(n.p,{children:"In einigen Anwendungen werden Mischtopologien verwendet, die sowohl aktive als auch passive Komponenten kombinieren. Diese Topologien erm\xf6glichen flexible Designs und k\xf6nnen in komplexen Netzwerken vorteilhaft sein, wo unterschiedliche Anforderungen an Reichweite und Fehlertoleranz bestehen."}),"\n",(0,r.jsx)(n.h2,{id:"kritische-bewertung-und-m\xf6gliche-ungenauigkeiten",children:"Kritische Bewertung und m\xf6gliche Ungenauigkeiten"}),"\n",(0,r.jsx)(n.p,{children:"W\xe4hrend die aktive Sterntopologie viele Vorteile bietet, gibt es auch Einschr\xe4nkungen und potenzielle Probleme:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Komplexit\xe4t und Kosten"}),": Der Einsatz von aktiven Sternkopplern erh\xf6ht die Komplexit\xe4t und die Kosten des Netzwerks."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Verz\xf6gerungen"}),": Die durch den aktiven Sternkoppler verursachten Verz\xf6gerungen m\xfcssen sorgf\xe4ltig ber\xfccksichtigt werden, um die Performance des Netzwerks nicht negativ zu beeinflussen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reichweitenbeschr\xe4nkungen"}),": Trotz der theoretisch m\xf6glichen Erweiterung der Reichweite durch Hintereinanderschaltung aktiver Sternkoppler, kann die praktische Umsetzung aufgrund der Signalintegrit\xe4t eingeschr\xe4nkt sein."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fazit",children:"Fazit"}),"\n",(0,r.jsx)(n.p,{children:"FlexRay ist ein leistungsf\xe4higes und robustes Kommunikationsprotokoll f\xfcr die Fahrzeugelektronik. Die aktive Sterntopologie stellt eine erhebliche Verbesserung gegen\xfcber der passiven Sterntopologie dar, insbesondere in Bezug auf Fehlertoleranz und elektrische Stabilit\xe4t. Bei der Planung und Implementierung von FlexRay-Netzwerken m\xfcssen jedoch die spezifischen Anforderungen und Einschr\xe4nkungen sorgf\xe4ltig ber\xfccksichtigt werden, um eine optimale Performance und Zuverl\xe4ssigkeit zu gew\xe4hrleisten."}),"\n",(0,r.jsx)(n.p,{children:"Durch das Verst\xe4ndnis und die richtige Anwendung dieser Konzepte k\xf6nnen Ingenieure leistungsf\xe4hige und zuverl\xe4ssige FlexRay-Netzwerke in modernen Fahrzeugen realisieren."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);