"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[6510],{60722:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"CAN/can-fd/motivation","title":"CAN-FD","description":"Einleitung","source":"@site/docs/CAN/06_can-fd/01_motivation.md","sourceDirName":"CAN/06_can-fd","slug":"/CAN/can-fd/motivation","permalink":"/Vehicle-Network-Standards/docs/CAN/can-fd/motivation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/06_can-fd/01_motivation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"CAN-FD","permalink":"/Vehicle-Network-Standards/docs/CAN/can-fd/"},"next":{"title":"Vorteile und Konsequenzen","permalink":"/Vehicle-Network-Standards/docs/CAN/can-fd/vorteile-konsequenzen"}}');var r=i(74848),s=i(28453);const d={},a="CAN-FD",h={},l=[{value:"Einleitung",id:"einleitung",level:2},{value:"Die Entwicklung eingebetteter Systeme in Fahrzeugen",id:"die-entwicklung-eingebetteter-systeme-in-fahrzeugen",level:2},{value:"Zunahme der Signal\xfcbertragung",id:"zunahme-der-signal\xfcbertragung",level:3},{value:"Entstehung neuer Bussysteme",id:"entstehung-neuer-bussysteme",level:3},{value:"Einschr\xe4nkungen und L\xf6sungen f\xfcr den klassischen CAN",id:"einschr\xe4nkungen-und-l\xf6sungen-f\xfcr-den-klassischen-can",level:2},{value:"Beschr\xe4nkungen des klassischen CAN",id:"beschr\xe4nkungen-des-klassischen-can",level:3},{value:"Leistungsengp\xe4sse",id:"leistungsengp\xe4sse",level:3},{value:"Einf\xfchrung in CAN-FD",id:"einf\xfchrung-in-can-fd",level:2},{value:"Konzept und Motivation",id:"konzept-und-motivation",level:3},{value:"Technische Details",id:"technische-details",level:3},{value:"Vorteile von CAN-FD",id:"vorteile-von-can-fd",level:2},{value:"Erh\xf6hte Bandbreite",id:"erh\xf6hte-bandbreite",level:3},{value:"Kompatibilit\xe4t und Skalierbarkeit",id:"kompatibilit\xe4t-und-skalierbarkeit",level:3},{value:"Deterministisches Verhalten",id:"deterministisches-verhalten",level:3},{value:"Schlussfolgerung",id:"schlussfolgerung",level:2}];function u(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"can-fd",children:"CAN-FD"})}),"\n",(0,r.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,r.jsx)(n.p,{children:"Der Controller Area Network (CAN) ist seit Jahrzehnten ein grundlegendes Kommunikationsprotokoll in der Automobilindustrie. Urspr\xfcnglich eingef\xfchrt, um einige hundert Signale innerhalb eines Fahrzeugs zu verarbeiten, hat sich die Anzahl der Signale mit der Evolution eingebetteter Systeme im Automobilbereich erheblich erh\xf6ht und erreicht nun f\xfcnfstellige Bereiche. Dieses Tutorial behandelt die Feinheiten von CAN mit einem Fokus auf CAN-FD (Flexible Data-Rate), geht auf die Einschr\xe4nkungen des klassischen CAN ein und erl\xe4utert, wie CAN-FD diese Herausforderungen zu \xfcberwinden versucht."}),"\n",(0,r.jsx)(n.h2,{id:"die-entwicklung-eingebetteter-systeme-in-fahrzeugen",children:"Die Entwicklung eingebetteter Systeme in Fahrzeugen"}),"\n",(0,r.jsx)(n.h3,{id:"zunahme-der-signal\xfcbertragung",children:"Zunahme der Signal\xfcbertragung"}),"\n",(0,r.jsx)(n.p,{children:"Das exponentielle Wachstum der innerhalb von Fahrzeugen \xfcbertragenen Signale hat die Landschaft eingebetteter Automobilsysteme drastisch ver\xe4ndert. Moderne Fahrzeuge erfordern die \xdcbertragung von Zehntausenden von Signalen, was die urspr\xfcnglich f\xfcr das CAN-Protokoll vorgesehene Kapazit\xe4t weit \xfcbersteigt."}),"\n",(0,r.jsx)(n.h3,{id:"entstehung-neuer-bussysteme",children:"Entstehung neuer Bussysteme"}),"\n",(0,r.jsx)(n.p,{children:"Um dem steigenden Datenaufkommen und dem Bedarf an deterministischem Systemverhalten gerecht zu werden, wurden mehrere neue Bussysteme entwickelt:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"MOST (Media Oriented Systems Transport):"})," Entwickelt f\xfcr Infotainmentsysteme und bietet Bandbreiten bis zu 150 Mbit/s."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FlexRay:"})," Ein deterministisches Bussystem mit Bandbreiten bis zu 10 Mbit/s, das haupts\xe4chlich f\xfcr Fahrerassistenzaufgaben genutzt wird."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"LIN (Local Interconnect Network):"})," Ein kosteng\xfcnstiges Bussystem, das f\xfcr einfache Sensor-Aktor-Aufgaben mit niedrigeren Bandbreiten ausgelegt ist."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Diese spezialisierten Bussysteme besetzen spezifische Nischen im Automobilnetzwerk, w\xe4hrend der universell einsetzbare CAN-Bus weiterhin vorherrschend bleibt."}),"\n",(0,r.jsx)(n.h2,{id:"einschr\xe4nkungen-und-l\xf6sungen-f\xfcr-den-klassischen-can",children:"Einschr\xe4nkungen und L\xf6sungen f\xfcr den klassischen CAN"}),"\n",(0,r.jsx)(n.h3,{id:"beschr\xe4nkungen-des-klassischen-can",children:"Beschr\xe4nkungen des klassischen CAN"}),"\n",(0,r.jsx)(n.p,{children:"Trotz der Entwicklung neuer Bussysteme ist der Ersatz von CAN durch Alternativen mit h\xf6herer Bandbreite wie FlexRay oft unpraktisch aufgrund der hohen Kosten und des erheblichen Entwicklungsaufwands. Stattdessen werden die \xdcbertragungskapazit\xe4tsbeschr\xe4nkungen von CAN h\xe4ufig durch den Einsatz mehrerer CAN-Busse und Gateways, die eine Kommunikation \xfcber Busgrenzen hinweg erm\xf6glichen, gemildert."}),"\n",(0,r.jsx)(n.h3,{id:"leistungsengp\xe4sse",children:"Leistungsengp\xe4sse"}),"\n",(0,r.jsx)(n.p,{children:"Der Hauptfaktor, der die \xdcbertragungskapazit\xe4t von CAN einschr\xe4nkt, liegt in der Art der Bit-Arbitrierung und der Best\xe4tigung:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Arbitrierungsphase:"})," W\xe4hrend dieser Phase k\xf6nnen mehrere Netzknoten gleichzeitig im Sendemodus sein, was eine Mindestbitdauer erfordert, um eine ordnungsgem\xe4\xdfe Arbitrierung sicherzustellen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\xdcbertragung des Best\xe4tigungsbits:"})," Die gleichzeitige Best\xe4tigung durch alle empfangenden Knoten am Ende einer Nachricht erfordert die Ber\xfccksichtigung der Ausbreitungsverz\xf6gerung \xfcber die Busl\xe4nge hinweg."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Beispielsweise muss bei einem 40-Meter-CAN-Bus die Bitdauer die Ausbreitungsverz\xf6gerung ber\xfccksichtigen, was die Datenrate auf maximal 1 Mbit/s begrenzt."}),"\n",(0,r.jsx)(n.h2,{id:"einf\xfchrung-in-can-fd",children:"Einf\xfchrung in CAN-FD"}),"\n",(0,r.jsx)(n.h3,{id:"konzept-und-motivation",children:"Konzept und Motivation"}),"\n",(0,r.jsx)(n.p,{children:"CAN-FD wurde entwickelt, um die Bandbreitenbeschr\xe4nkungen des klassischen CAN zu \xfcberwinden. Die innovative Idee hinter CAN-FD besteht darin, die Daten\xfcbertragungsgeschwindigkeit innerhalb einer Nachricht zu variieren. Durch die Nutzung h\xf6herer Geschwindigkeiten w\xe4hrend des Datenfelds und standardm\xe4\xdfiger Geschwindigkeiten w\xe4hrend der Arbitrierungs- und Best\xe4tigungsphasen erh\xf6ht CAN-FD die gesamte Daten\xfcbertragungsrate erheblich."}),"\n",(0,r.jsx)(n.h3,{id:"technische-details",children:"Technische Details"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bitratenumschaltung:"})," CAN-FD erm\xf6glicht den Wechsel zwischen zwei Bitraten: einer niedrigeren Rate f\xfcr die Arbitrierungs- und Best\xe4tigungsphasen und einer h\xf6heren Rate f\xfcr die Datenphase."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Erweiterte Datenl\xe4nge:"})," CAN-FD unterst\xfctzt l\xe4ngere Datenrahmen und erm\xf6glicht bis zu 64 Byte pro Rahmen im Vergleich zu den 8 Byte des klassischen CAN."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Protokolleffizienz:"})," Die F\xe4higkeit, Daten w\xe4hrend der Datenphase mit h\xf6heren Geschwindigkeiten zu \xfcbertragen, verbessert die Effizienz und reduziert die Buslast."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vorteile-von-can-fd",children:"Vorteile von CAN-FD"}),"\n",(0,r.jsx)(n.h3,{id:"erh\xf6hte-bandbreite",children:"Erh\xf6hte Bandbreite"}),"\n",(0,r.jsx)(n.p,{children:"CAN-FD kann je nach Netzwerkkonfiguration und Hardwarekapazit\xe4ten Datenraten von bis zu 8 Mbit/s erreichen, was deutlich h\xf6her ist als die des klassischen CAN."}),"\n",(0,r.jsx)(n.h3,{id:"kompatibilit\xe4t-und-skalierbarkeit",children:"Kompatibilit\xe4t und Skalierbarkeit"}),"\n",(0,r.jsx)(n.p,{children:"CAN-FD ist abw\xe4rtskompatibel zum klassischen CAN ausgelegt und erm\xf6glicht so einen reibungslosen \xdcbergang und die Integration in bestehende CAN-basierte Netzwerke. Diese Skalierbarkeit macht es zu einer idealen L\xf6sung f\xfcr moderne Automobilanwendungen, die h\xf6here Datenraten erfordern, ohne eine vollst\xe4ndige \xdcberholung der Netzwerkinfrastruktur."}),"\n",(0,r.jsx)(n.h3,{id:"deterministisches-verhalten",children:"Deterministisches Verhalten"}),"\n",(0,r.jsx)(n.p,{children:"Trotz der h\xf6heren Datenraten bewahrt CAN-FD das deterministische Verhalten, das f\xfcr Automobilanwendungen entscheidend ist, und gew\xe4hrleistet eine zuverl\xe4ssige und vorhersehbare Kommunikation zwischen kritischen Systemen."}),"\n",(0,r.jsx)(n.h2,{id:"schlussfolgerung",children:"Schlussfolgerung"}),"\n",(0,r.jsx)(n.p,{children:"CAN-FD stellt einen bedeutenden Fortschritt im CAN-Protokoll dar und adressiert die wachsenden Anforderungen an h\xf6here Bandbreiten und effiziente Daten\xfcbertragung in modernen Fahrzeugen. Durch die Integration variabler Bitraten und erweiterter Datenl\xe4ngen bietet CAN-FD eine robuste L\xf6sung, die die Leistung von Automobilnetzwerken verbessert und gleichzeitig die Kompatibilit\xe4t mit bestehenden Systemen aufrechterh\xe4lt. Angesichts der fortschreitenden Entwicklung der Automobiltechnologie ist CAN-FD eine entscheidende Innovation, die sicherstellt, dass die Kommunikation innerhalb von Fahrzeugen effizient, zuverl\xe4ssig und skalierbar bleibt."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);