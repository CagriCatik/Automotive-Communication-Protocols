"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[7636],{69892:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"DoIP/doip_vehicle_discovery/konfigurations-ip-adressen","title":"Konfiguration der IP-Adressen","description":"Die Sequenzdiagramme zeigen den Ablauf der IP-Adresskonfiguration mittels DHCP (Dynamic Host Configuration Protocol) in einem DoIP (Diagnostics over IP) Netzwerk. Dieses Netzwerk besteht aus drei Hauptkomponenten: dem Tester, dem DHCP-Server und dem Fahrzeug-Gateway (GW). Der Prozess wird f\xfcr beide Komponenten, den Tester und das Fahrzeug-Gateway, parallel dargestellt. Im Folgenden wird der Ablauf detailliert beschrieben und analysiert.","source":"@site/docs/DoIP/02_doip_vehicle_discovery/03_konfigurations-ip-adressen.md","sourceDirName":"DoIP/02_doip_vehicle_discovery","slug":"/DoIP/doip_vehicle_discovery/konfigurations-ip-adressen","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_vehicle_discovery/konfigurations-ip-adressen","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DoIP/02_doip_vehicle_discovery/03_konfigurations-ip-adressen.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"doipSidebar","previous":{"title":"DoIP Fahrzeugentdeckung","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_vehicle_discovery/vehicle-announcement"},"next":{"title":"Fahrzeugank\xfcndigung im DoIP-Prozess","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_vehicle_discovery/bekanntmachung-durch-fahrzeug"}}');var s=r(74848),d=r(28453);const t={},a="Konfiguration der IP-Adressen",o={},c=[{value:"Verbindung und Aktivierung",id:"verbindung-und-aktivierung",level:2},{value:"DHCP-Prozess f\xfcr den Tester",id:"dhcp-prozess-f\xfcr-den-tester",level:2},{value:"T1. DHCP: Discover",id:"t1-dhcp-discover",level:3},{value:"T2. DHCP: Offer",id:"t2-dhcp-offer",level:3},{value:"T3. DHCP: Request",id:"t3-dhcp-request",level:3},{value:"T4. DHCP: Ack",id:"t4-dhcp-ack",level:3},{value:"DHCP-Prozess f\xfcr das Fahrzeug-Gateway (GW)",id:"dhcp-prozess-f\xfcr-das-fahrzeug-gateway-gw",level:2},{value:"V1. DHCP: Discover",id:"v1-dhcp-discover",level:3},{value:"V2. DHCP: Offer",id:"v2-dhcp-offer",level:3},{value:"V3. DHCP: Request",id:"v3-dhcp-request",level:3},{value:"V4. DHCP: Ack",id:"v4-dhcp-ack",level:3},{value:"Kritische Analyse und Genauigkeit",id:"kritische-analyse-und-genauigkeit",level:2}];function l(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"konfiguration-der-ip-adressen",children:"Konfiguration der IP-Adressen"})}),"\n",(0,s.jsx)(n.p,{children:"Die Sequenzdiagramme zeigen den Ablauf der IP-Adresskonfiguration mittels DHCP (Dynamic Host Configuration Protocol) in einem DoIP (Diagnostics over IP) Netzwerk. Dieses Netzwerk besteht aus drei Hauptkomponenten: dem Tester, dem DHCP-Server und dem Fahrzeug-Gateway (GW). Der Prozess wird f\xfcr beide Komponenten, den Tester und das Fahrzeug-Gateway, parallel dargestellt. Im Folgenden wird der Ablauf detailliert beschrieben und analysiert."}),"\n",(0,s.jsx)(n.h2,{id:"verbindung-und-aktivierung",children:"Verbindung und Aktivierung"}),"\n",(0,s.jsx)(n.p,{children:"Bevor der DHCP-Prozess beginnt, muss eine physische Verbindung zwischen den Komponenten hergestellt werden, und die Aktivierungsleitung muss Spannung f\xfchren. Dies stellt sicher, dass alle Ger\xe4te betriebsbereit sind und eine Kommunikation im Netzwerk m\xf6glich ist."}),"\n",(0,s.jsx)(n.h2,{id:"dhcp-prozess-f\xfcr-den-tester",children:"DHCP-Prozess f\xfcr den Tester"}),"\n",(0,s.jsx)(n.h3,{id:"t1-dhcp-discover",children:"T1. DHCP: Discover"}),"\n",(0,s.jsx)(n.p,{children:"Der Tester beginnt den DHCP-Prozess, indem er eine DHCP-Discover-Nachricht sendet, um eine IP-Adresse anzufordern. Diese Nachricht wird an den DHCP-Server gesendet, um die Verf\xfcgbarkeit von IP-Adressen im Netzwerk zu ermitteln."}),"\n",(0,s.jsx)(n.h3,{id:"t2-dhcp-offer",children:"T2. DHCP: Offer"}),"\n",(0,s.jsx)(n.p,{children:"Der DHCP-Server empf\xe4ngt die Discover-Nachricht und antwortet mit einer DHCP-Offer-Nachricht. Darin bietet er eine verf\xfcgbare IP-Adresse an und liefert zus\xe4tzliche Konfigurationsinformationen wie Subnetzmaske und Gateway-Adresse."}),"\n",(0,s.jsx)(n.h3,{id:"t3-dhcp-request",children:"T3. DHCP: Request"}),"\n",(0,s.jsx)(n.p,{children:"Der Tester sendet daraufhin eine DHCP-Request-Nachricht, in der er die angebotene IP-Adresse anfordert. Dies signalisiert dem DHCP-Server, dass der Tester die angebotene IP-Adresse akzeptieren m\xf6chte."}),"\n",(0,s.jsx)(n.h3,{id:"t4-dhcp-ack",children:"T4. DHCP: Ack"}),"\n",(0,s.jsx)(n.p,{children:"Der DHCP-Server best\xe4tigt die Zuweisung der IP-Adresse mit einer DHCP-Ack-Nachricht. Damit wird dem Tester mitgeteilt, dass die IP-Adresse erfolgreich zugewiesen wurde und nun verwendet werden kann."}),"\n",(0,s.jsx)(n.h2,{id:"dhcp-prozess-f\xfcr-das-fahrzeug-gateway-gw",children:"DHCP-Prozess f\xfcr das Fahrzeug-Gateway (GW)"}),"\n",(0,s.jsx)(n.h3,{id:"v1-dhcp-discover",children:"V1. DHCP: Discover"}),"\n",(0,s.jsx)(n.p,{children:"Das Fahrzeug-Gateway sendet ebenfalls eine DHCP-Discover-Nachricht, um eine IP-Adresse anzufordern. Dieser Prozess ist analog zum Tester."}),"\n",(0,s.jsx)(n.h3,{id:"v2-dhcp-offer",children:"V2. DHCP: Offer"}),"\n",(0,s.jsx)(n.p,{children:"Der DHCP-Server antwortet mit einer DHCP-Offer-Nachricht, die eine verf\xfcgbare IP-Adresse sowie Konfigurationsinformationen wie Subnetzmaske und Gateway-Adresse f\xfcr das Fahrzeug-Gateway enth\xe4lt."}),"\n",(0,s.jsx)(n.h3,{id:"v3-dhcp-request",children:"V3. DHCP: Request"}),"\n",(0,s.jsx)(n.p,{children:"Das Fahrzeug-Gateway antwortet darauf mit einer DHCP-Request-Nachricht, in der es die angebotene IP-Adresse anfordert. Dies signalisiert dem DHCP-Server, dass das Gateway die angebotene IP-Adresse akzeptieren m\xf6chte."}),"\n",(0,s.jsx)(n.h3,{id:"v4-dhcp-ack",children:"V4. DHCP: Ack"}),"\n",(0,s.jsx)(n.p,{children:"Der DHCP-Server best\xe4tigt die Zuweisung der IP-Adresse mit einer DHCP-Ack-Nachricht, die dem Fahrzeug-Gateway mitteilt, dass die IP-Adresse erfolgreich zugewiesen wurde und nun verwendet werden kann."}),"\n",(0,s.jsx)(n.h2,{id:"kritische-analyse-und-genauigkeit",children:"Kritische Analyse und Genauigkeit"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Synchronisation und Timing:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Synchronisation der Discover- und Offer-Nachrichten ist entscheidend, um Kollisionen oder Missverst\xe4ndnisse zu vermeiden. In realen Szenarien k\xf6nnen Netzwerkverz\xf6gerungen oder Paketverluste diesen Prozess beeinflussen."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Vermeidung doppelter IP-Adressen:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Prozess sollte sicherstellen, dass keine doppelten IP-Adressen im Netzwerk vergeben werden. Dies wird durch die sorgf\xe4ltige Verwaltung der verf\xfcgbaren IP-Adressen durch den DHCP-Server gew\xe4hrleistet."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Erweiterte Konfigurationsoptionen:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Neben der Zuweisung der IP-Adresse k\xf6nnen weitere DHCP-Optionen konfiguriert werden, wie z. B. DNS-Server, NTP-Server und andere Netzwerkdienste, um eine vollst\xe4ndige Netzwerkkonfiguration sicherzustellen."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var i=r(96540);const s={},d=i.createContext(s);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);