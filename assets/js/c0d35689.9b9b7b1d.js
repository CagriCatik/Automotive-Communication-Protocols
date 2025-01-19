"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[6033],{18677:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"ETHERNET/some_ip/signal_vs_service","title":"Signal- vs. Serviceorientierte Daten\xfcbertragung","description":"Die Wahl der Daten\xfcbertragungsarchitektur spielt eine entscheidende Rolle in der Gestaltung moderner Fahrzeugnetzwerke. Zwei grunds\xe4tzliche Ans\xe4tze dominieren hierbei: die signalorientierte und die serviceorientierte Daten\xfcbertragung. Diese beiden Methoden unterscheiden sich nicht nur in ihrer Herangehensweise, sondern auch in ihren Zielsetzungen und den daraus resultierenden Auswirkungen auf die Netzwerkarchitektur und -leistung. Im Folgenden werden die wesentlichen Unterschiede, Vor- und Nachteile sowie die jeweiligen Einsatzbereiche der signalorientierten und serviceorientierten Daten\xfcbertragung systematisch untersucht.","source":"@site/docs/ETHERNET/06_some_ip/07_signal_vs_service.md","sourceDirName":"ETHERNET/06_some_ip","slug":"/ETHERNET/some_ip/signal_vs_service","permalink":"/Vehicle-Network-Standards/docs/ETHERNET/some_ip/signal_vs_service","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ETHERNET/06_some_ip/07_signal_vs_service.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"ethernetSidebar","previous":{"title":"Service Discovery","permalink":"/Vehicle-Network-Standards/docs/ETHERNET/some_ip/service_discovery"}}');var t=i(74848),s=i(28453);const d={},a="Signal- vs. Serviceorientierte Daten\xfcbertragung",l={},u=[{value:"1. Signalorientierte Daten\xfcbertragung",id:"1-signalorientierte-daten\xfcbertragung",level:2},{value:"1.1 Fokus auf Signalen",id:"11-fokus-auf-signalen",level:3},{value:"1.2 Unabh\xe4ngigkeit vom Empf\xe4ngerbedarf",id:"12-unabh\xe4ngigkeit-vom-empf\xe4ngerbedarf",level:3},{value:"1.3 H\xe4ufigkeit in Bussystemen",id:"13-h\xe4ufigkeit-in-bussystemen",level:3},{value:"2. Serviceorientierte Daten\xfcbertragung (SOME/IP)",id:"2-serviceorientierte-daten\xfcbertragung-someip",level:2},{value:"2.1 Fokus auf Services",id:"21-fokus-auf-services",level:3},{value:"2.2 Vermeidung unn\xf6tiger Daten\xfcbertragung",id:"22-vermeidung-unn\xf6tiger-daten\xfcbertragung",level:3},{value:"2.3 Middleware-Einfluss",id:"23-middleware-einfluss",level:3},{value:"2.4 Aktives Abonnement von Inhalten",id:"24-aktives-abonnement-von-inhalten",level:3},{value:"Vergleich der beiden Ans\xe4tze",id:"vergleich-der-beiden-ans\xe4tze",level:2},{value:"Vorteile und Nachteile im Detail",id:"vorteile-und-nachteile-im-detail",level:2},{value:"Signalorientierte \xdcbertragung",id:"signalorientierte-\xfcbertragung",level:3},{value:"Serviceorientierte \xdcbertragung (SOME/IP)",id:"serviceorientierte-\xfcbertragung-someip",level:3},{value:"Fazit",id:"fazit",level:2},{value:"Referenzen",id:"referenzen",level:2}];function g(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"signal--vs-serviceorientierte-daten\xfcbertragung",children:"Signal- vs. Serviceorientierte Daten\xfcbertragung"})}),"\n",(0,t.jsx)(n.p,{children:"Die Wahl der Daten\xfcbertragungsarchitektur spielt eine entscheidende Rolle in der Gestaltung moderner Fahrzeugnetzwerke. Zwei grunds\xe4tzliche Ans\xe4tze dominieren hierbei: die signalorientierte und die serviceorientierte Daten\xfcbertragung. Diese beiden Methoden unterscheiden sich nicht nur in ihrer Herangehensweise, sondern auch in ihren Zielsetzungen und den daraus resultierenden Auswirkungen auf die Netzwerkarchitektur und -leistung. Im Folgenden werden die wesentlichen Unterschiede, Vor- und Nachteile sowie die jeweiligen Einsatzbereiche der signalorientierten und serviceorientierten Daten\xfcbertragung systematisch untersucht."}),"\n",(0,t.jsx)(n.h2,{id:"1-signalorientierte-daten\xfcbertragung",children:"1. Signalorientierte Daten\xfcbertragung"}),"\n",(0,t.jsx)(n.p,{children:"Die signalorientierte Daten\xfcbertragung ist seit Jahrzehnten die dominierende Methode in traditionellen Fahrzeugbussystemen wie CAN (Controller Area Network), LIN (Local Interconnect Network) und FlexRay. Dieser Ansatz basiert auf der kontinuierlichen \xdcbertragung einzelner Signale oder Datenpunkte zwischen den Steuerger\xe4ten im Fahrzeug."}),"\n",(0,t.jsx)(n.h3,{id:"11-fokus-auf-signalen",children:"1.1 Fokus auf Signalen"}),"\n",(0,t.jsx)(n.p,{children:"Bei der signalorientierten Daten\xfcbertragung liegt der Schwerpunkt auf der \xdcbermittlung spezifischer Informationen, die durch einzelne Signale repr\xe4sentiert werden. Jedes Signal stellt einen bestimmten Datenpunkt dar, beispielsweise die Motordrehzahl oder die Fahrzeuggeschwindigkeit. Diese Signale werden periodisch oder ereignisgesteuert \xfcbertragen, unabh\xe4ngig davon, ob ein Empf\xe4nger diese Daten aktuell ben\xf6tigt."}),"\n",(0,t.jsx)(n.h3,{id:"12-unabh\xe4ngigkeit-vom-empf\xe4ngerbedarf",children:"1.2 Unabh\xe4ngigkeit vom Empf\xe4ngerbedarf"}),"\n",(0,t.jsx)(n.p,{children:"Ein charakteristisches Merkmal der signalorientierten \xdcbertragung ist die Unabh\xe4ngigkeit der Daten\xfcbertragung vom tats\xe4chlichen Bedarf des Empf\xe4ngers. Der Sender bestimmt selbstst\xe4ndig, wann und welche Informationen gesendet werden, ohne R\xfccksicht darauf, ob ein oder mehrere Empf\xe4nger diese Daten aktuell ben\xf6tigen. Dies f\xfchrt zu einer festen Datenrate und einer deterministischen Kommunikation, die insbesondere f\xfcr zeitkritische Anwendungen vorteilhaft ist."}),"\n",(0,t.jsx)(n.h3,{id:"13-h\xe4ufigkeit-in-bussystemen",children:"1.3 H\xe4ufigkeit in Bussystemen"}),"\n",(0,t.jsx)(n.p,{children:"Die signalorientierte Daten\xfcbertragung ist integraler Bestandteil klassischer Bussysteme:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CAN:"})," Weit verbreitet aufgrund seiner Robustheit und Echtzeitf\xe4higkeit, ideal f\xfcr Steuerungsanwendungen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"LIN:"})," Kosteng\xfcnstiger und weniger komplex, geeignet f\xfcr einfache Steuerger\xe4te wie Fensterheber oder Sitzverstellungen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FlexRay:"})," Bietet h\xf6here Datenraten und Redundanz, verwendet in sicherheitskritischen Systemen wie Fahrdynamikregelung."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-serviceorientierte-daten\xfcbertragung-someip",children:"2. Serviceorientierte Daten\xfcbertragung (SOME/IP)"}),"\n",(0,t.jsx)(n.p,{children:"Im Gegensatz zur signalorientierten \xdcbertragung fokussiert die serviceorientierte Daten\xfcbertragung auf die Bereitstellung und Nutzung von Diensten (Services). Dieses Paradigma wird durch Middleware-L\xf6sungen wie SOME/IP (Scalable service-Oriented MiddlewarE over IP) realisiert und bietet eine flexible und skalierbare Alternative zu traditionellen Bussystemen."}),"\n",(0,t.jsx)(n.h3,{id:"21-fokus-auf-services",children:"2.1 Fokus auf Services"}),"\n",(0,t.jsx)(n.p,{children:"Die serviceorientierte Daten\xfcbertragung konzentriert sich auf die Bereitstellung von Diensten, die von Clients angefordert und genutzt werden k\xf6nnen. Ein Dienst stellt eine funktionale Einheit dar, die bestimmte Aufgaben \xfcbernimmt, beispielsweise die Steuerung der Klimaanlage oder die Bereitstellung von Navigationsdaten. Daten werden dabei nicht kontinuierlich gesendet, sondern nur bei Bedarf, basierend auf den Anforderungen der Clients."}),"\n",(0,t.jsx)(n.h3,{id:"22-vermeidung-unn\xf6tiger-daten\xfcbertragung",children:"2.2 Vermeidung unn\xf6tiger Daten\xfcbertragung"}),"\n",(0,t.jsx)(n.p,{children:"Ein wesentlicher Vorteil der serviceorientierten \xdcbertragung liegt in der effizienten Nutzung der Netzwerkressourcen. Daten werden nur dann \xfcbertragen, wenn mindestens ein Empf\xe4nger diese ben\xf6tigt. Dies reduziert die Netzwerklast erheblich, da unn\xf6tige Daten\xfcbertragungen vermieden werden. Die Middleware sorgt daf\xfcr, dass Server \xfcber die aktiven Abonnements der Clients informiert sind und entsprechend reagieren k\xf6nnen."}),"\n",(0,t.jsx)(n.h3,{id:"23-middleware-einfluss",children:"2.3 Middleware-Einfluss"}),"\n",(0,t.jsx)(n.p,{children:"Die serviceorientierte Daten\xfcbertragung erfordert den Einsatz einer Middleware wie SOME/IP, die die Kommunikation zwischen den Softwarekomponenten eines Steuerger\xe4ts steuert. Diese Middleware erm\xf6glicht eine nahtlose Integration bis in die Applikationsebene und beeinflusst somit ma\xdfgeblich die Softwarearchitektur der Steuerger\xe4te. Durch die Verwendung von Middleware k\xf6nnen komplexe Dienste und Interaktionen effizient verwaltet und skaliert werden."}),"\n",(0,t.jsx)(n.h3,{id:"24-aktives-abonnement-von-inhalten",children:"2.4 Aktives Abonnement von Inhalten"}),"\n",(0,t.jsx)(n.p,{children:"Clients haben die M\xf6glichkeit, Inhalte eines Dienstes aktiv zu abonnieren. Dies bedeutet, dass sie benachrichtigt werden, sobald relevante Daten verf\xfcgbar sind, und diese Daten nur dann erhalten, wenn ein Ereignis eintritt, das diese Aktualisierung erfordert. Dieser Mechanismus stellt sicher, dass Daten\xfcbertragungen zielgerichtet und bedarfsorientiert erfolgen, was die Effizienz und Reaktionsf\xe4higkeit des Netzwerks verbessert."}),"\n",(0,t.jsx)(n.h2,{id:"vergleich-der-beiden-ans\xe4tze",children:"Vergleich der beiden Ans\xe4tze"}),"\n",(0,t.jsx)(n.p,{children:"Die folgende Tabelle fasst die wesentlichen Unterschiede zwischen der signalorientierten und der serviceorientierten Daten\xfcbertragung zusammen:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Kriterium"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Signalorientierte \xdcbertragung"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Serviceorientierte \xdcbertragung (SOME/IP)"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Kommunikationsmodell"})}),(0,t.jsx)(n.td,{children:"Kontinuierlich oder ereignisgesteuert"}),(0,t.jsx)(n.td,{children:"Bedarfsorientiert, basierend auf Dienstanfragen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Datenfokus"})}),(0,t.jsx)(n.td,{children:"Einzelne Signale oder Datenpunkte"}),(0,t.jsx)(n.td,{children:"Dienste und funktionale Einheiten"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Abh\xe4ngigkeit vom Empf\xe4ngerbedarf"})}),(0,t.jsx)(n.td,{children:"Unabh\xe4ngig, Daten werden gesendet, wenn der Sender es will"}),(0,t.jsx)(n.td,{children:"Abh\xe4ngig, Daten werden nur bei Bedarf \xfcbertragen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Netzwerklast"})}),(0,t.jsx)(n.td,{children:"H\xf6her, durch kontinuierliche Daten\xfcbertragung"}),(0,t.jsx)(n.td,{children:"Niedriger, durch bedarfsorientierte \xdcbertragung"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Skalierbarkeit"})}),(0,t.jsx)(n.td,{children:"Eingeschr\xe4nkt durch feste Topologien und Datenraten"}),(0,t.jsx)(n.td,{children:"Hoch, durch flexible Integration neuer Dienste"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Implementierungskomplexit\xe4t"})}),(0,t.jsx)(n.td,{children:"Geringer, da weniger Steuermechanismen erforderlich sind"}),(0,t.jsx)(n.td,{children:"H\xf6her, durch Middleware und dynamische Serviceverwaltung"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Energieverbrauch"})}),(0,t.jsx)(n.td,{children:"H\xf6her, aufgrund kontinuierlicher Aktivit\xe4t"}),(0,t.jsx)(n.td,{children:"Geringer, durch reduzierte Daten\xfcbertragungen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Echtzeitf\xe4higkeit"})}),(0,t.jsx)(n.td,{children:"Hoch, geeignet f\xfcr zeitkritische Anwendungen"}),(0,t.jsx)(n.td,{children:"Variabel, abh\xe4ngig von der Implementierung und dem Protokoll"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Typische Einsatzbereiche"})}),(0,t.jsx)(n.td,{children:"Steuerungssysteme, sicherheitskritische Anwendungen"}),(0,t.jsx)(n.td,{children:"Infotainment, vernetzte Fahrassistenzsysteme"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"vorteile-und-nachteile-im-detail",children:"Vorteile und Nachteile im Detail"}),"\n",(0,t.jsx)(n.h3,{id:"signalorientierte-\xfcbertragung",children:"Signalorientierte \xdcbertragung"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Vorteile:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Deterministische Kommunikation:"})," Garantierte Zeitfenster f\xfcr die Daten\xfcbertragung, essentiell f\xfcr Echtzeitanwendungen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Einfache Implementierung:"})," Weniger komplexe Softwarearchitekturen ohne Notwendigkeit f\xfcr Middleware."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Geringer Ressourcenbedarf:"})," Niedrige Anforderungen an Rechenleistung und Speicher der Steuerger\xe4te."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Nachteile:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Begrenzte Flexibilit\xe4t:"})," Schwierigkeiten bei der Integration neuer Dienste ohne umfassende Neukonfiguration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hohe Netzwerklast:"})," Kontinuierliche Daten\xfcbertragungen k\xf6nnen die Netzwerkbandbreite schnell auslasten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Skalierbarkeitseinschr\xe4nkungen:"})," Festgelegte Topologien und Datenraten begrenzen die Erweiterungsm\xf6glichkeiten."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"serviceorientierte-\xfcbertragung-someip",children:"Serviceorientierte \xdcbertragung (SOME/IP)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Vorteile:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hohe Flexibilit\xe4t:"})," Einfache Integration und Erweiterung von Diensten durch Middleware."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Effiziente Ressourcennutzung:"})," Daten werden nur bei Bedarf \xfcbertragen, was die Netzwerklast reduziert."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Skalierbarkeit:"})," Leichte Erweiterung des Netzwerks durch Hinzuf\xfcgen neuer Dienste ohne umfangreiche Neukonfiguration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Modularit\xe4t:"})," F\xf6rderung einer modularen Softwarearchitektur, die die Wartbarkeit und Erweiterbarkeit verbessert."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Nachteile:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Erh\xf6hte Komplexit\xe4t:"})," Notwendigkeit einer Middleware und komplexerer Softwarearchitekturen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"H\xf6herer Ressourcenbedarf:"})," Middleware und dynamische Serviceverwaltung erfordern mehr Rechenleistung und Speicher."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Abh\xe4ngigkeit von Middleware:"})," Die Zuverl\xe4ssigkeit und Leistungsf\xe4higkeit der Middleware beeinflusst direkt die gesamte Kommunikationsarchitektur."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fazit",children:"Fazit"}),"\n",(0,t.jsx)(n.p,{children:"Die Entscheidung zwischen signalorientierter und serviceorientierter Daten\xfcbertragung h\xe4ngt ma\xdfgeblich von den spezifischen Anforderungen und der geplanten Architektur des Fahrzeugnetzwerks ab. W\xe4hrend die signalorientierte \xdcbertragung durch ihre deterministische Natur und einfache Implementierung in zeitkritischen Steuerungssystemen Vorteile bietet, \xfcberzeugt die serviceorientierte \xdcbertragung durch ihre Flexibilit\xe4t, effiziente Ressourcennutzung und hohe Skalierbarkeit, was sie besonders f\xfcr moderne, vernetzte Anwendungen wie Infotainment-Systeme und erweiterte Fahrerassistenzsysteme attraktiv macht. Eine sorgf\xe4ltige Analyse der Anwendungsanforderungen und eine durchdachte Architekturplanung sind essenziell, um den geeigneten \xdcbertragungsansatz f\xfcr das jeweilige Fahrzeugnetzwerk zu w\xe4hlen."}),"\n",(0,t.jsx)(n.h2,{id:"referenzen",children:"Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'AUTOSAR Release 4.3: "SOME/IP Communication Services"'}),"\n",(0,t.jsx)(n.li,{children:'ISO/IEC 15118: "Road vehicles \u2013 Vehicle to grid communication interface"'}),"\n",(0,t.jsx)(n.li,{children:"IEEE Standards for Automotive Networking"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);