"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[6222],{49094:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"CAN/CAN-FD/vorteile-konsequenzen","title":"Vorteile und Konsequenzen","description":"Verbesserung der Daten\xfcbertragungseffizienz","source":"@site/docs/CAN/06_CAN-FD/02_vorteile-konsequenzen.md","sourceDirName":"CAN/06_CAN-FD","slug":"/CAN/CAN-FD/vorteile-konsequenzen","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-FD/vorteile-konsequenzen","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/06_CAN-FD/02_vorteile-konsequenzen.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"CAN-FD","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-FD/motivation"},"next":{"title":"Botschaftsformate","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-FD/botschaftsformate"}}');var t=r(74848),s=r(28453);const d={},l="Vorteile und Konsequenzen",a={},o=[{value:"Verbesserung der Daten\xfcbertragungseffizienz",id:"verbesserung-der-daten\xfcbertragungseffizienz",level:2},{value:"Vereinfachung der Entwicklung",id:"vereinfachung-der-entwicklung",level:2},{value:"Notwendigkeit neuer Controller",id:"notwendigkeit-neuer-controller",level:2},{value:"Koexistenz von klassischen und CAN-FD-Controllern",id:"koexistenz-von-klassischen-und-can-fd-controllern",level:2},{value:"Nutzung des vorhandenen CAN-Wissens",id:"nutzung-des-vorhandenen-can-wissens",level:2}];function u(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"vorteile-und-konsequenzen",children:"Vorteile und Konsequenzen"})}),"\n",(0,t.jsx)(n.h2,{id:"verbesserung-der-daten\xfcbertragungseffizienz",children:"Verbesserung der Daten\xfcbertragungseffizienz"}),"\n",(0,t.jsx)(n.p,{children:"Einer der Hauptvorteile von CAN-FD ist die F\xe4higkeit, Nutzdaten schneller zu \xfcbertragen, was die Busbelegungszeit effektiv reduziert. Diese Reduzierung der Buslast erm\xf6glicht es, mehr Daten innerhalb des gleichen Zeitrahmens wie bei einer klassischen CAN-Nachricht zu \xfcbertragen."}),"\n",(0,t.jsx)(n.p,{children:"Wenn beispielsweise die Nutzdaten in einem CAN-FD-Frame mit der f\xfcnffachen Geschwindigkeit einer klassischen CAN-Nachricht \xfcbertragen werden, bleibt die Dauer des CAN-FD-Frames nahezu gleich, obwohl er f\xfcnfmal mehr Nutzdaten enth\xe4lt. Daher kann CAN-FD bei vergleichbarer Buslast eine f\xfcnffache Steigerung der Daten\xfcbertragung erreichen."}),"\n",(0,t.jsx)(n.h2,{id:"vereinfachung-der-entwicklung",children:"Vereinfachung der Entwicklung"}),"\n",(0,t.jsx)(n.p,{children:"Die Einf\xfchrung von CAN-FD bringt mehrere bedeutende Vorteile und Vereinfachungen im Entwicklungsprozess mit sich:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Entsch\xe4rfung des Buslast-Problems"}),": CAN-FD mildert das Buslast-Problem erheblich, wodurch eine effizientere Datenverwaltung erm\xf6glicht wird."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reduzierung der Anzahl der CAN-Busse"}),": Der Trend zur Vermehrung der CAN-Busse kann umgekehrt werden, was die Komplexit\xe4t der Automobilnetzwerke reduziert."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Vereinfachung von Gateways"}),": Mit CAN-FD wird der Bedarf an komplexen Gateways verringert und in einigen F\xe4llen sogar vollst\xe4ndig eliminiert."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Weniger Datensegmentierung"}),": Gr\xf6\xdfere Nutzdatennutzlasten pro Nachricht reduzieren die Notwendigkeit der Datensegmentierung, was zu einer einfacheren Datenverarbeitung f\xfchrt."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Verbessertes Verh\xe4ltnis von Nutzdaten zum Overhead"}),": Weniger Nachrichten mit gr\xf6\xdferen Nutzdatennutzlasten f\xfchren zu einem besseren Verh\xe4ltnis von Nutzdaten zu Overhead, was die Gesamteffizienz steigert."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notwendigkeit-neuer-controller",children:"Notwendigkeit neuer Controller"}),"\n",(0,t.jsx)(n.p,{children:"Um CAN-FD zu betreiben, sind neue CAN-FD-Controller erforderlich. Diese Controller sind abw\xe4rtskompatibel und unterst\xfctzen auch das klassische CAN-Protokoll. Steuerger\xe4te k\xf6nnen schrittweise auf die neue CAN-FD-Technologie aufger\xfcstet werden. Solange jedoch noch klassische CAN-Controller im Kommunikationsnetzwerk beteiligt sind, muss das klassische CAN-Protokoll weiterhin verwendet werden."}),"\n",(0,t.jsx)(n.h2,{id:"koexistenz-von-klassischen-und-can-fd-controllern",children:"Koexistenz von klassischen und CAN-FD-Controllern"}),"\n",(0,t.jsx)(n.p,{children:"Das Missverst\xe4ndnis, dass h\xf6here \xdcbertragungsraten nur m\xf6glich sind, wenn alle Steuerger\xe4te an einem CAN-Bus mit CAN-FD-Controllern ausgestattet sind, muss angesprochen werden. Partial Networking bietet eine Option, bei der Steuerger\xe4te mit klassischen CAN-Controllern in den Schlafmodus versetzt werden k\xf6nnen, wodurch die verbleibenden CAN-FD-f\xe4higen Steuerger\xe4te mit h\xf6heren Geschwindigkeiten kommunizieren k\xf6nnen. Diese Methode ist besonders n\xfctzlich bei Fahrzeugservice-Diagnosen oder beim Aufspielen neuer Software auf Steuerger\xe4te, da h\xf6here Datenraten die f\xfcr solche Prozesse erforderliche Zeit erheblich verk\xfcrzen k\xf6nnen."}),"\n",(0,t.jsx)(n.h2,{id:"nutzung-des-vorhandenen-can-wissens",children:"Nutzung des vorhandenen CAN-Wissens"}),"\n",(0,t.jsx)(n.p,{children:"Ein weiterer Vorteil von CAN-FD ist, dass es sich um eine Erweiterung des klassischen CAN-Protokolls handelt und nicht um eine v\xf6llig neue Technologie. Daher bleibt das bestehende Wissen, die F\xe4higkeiten und Erfahrungen mit CAN weiterhin relevant und anwendbar. Dieser Kontinuit\xe4t gew\xe4hrleistet, dass der \xdcbergang von CAN zu CAN-FD ohne umfangreiche Schulungen oder den Verlust bisheriger Errungenschaften erfolgen kann."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var i=r(96540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);