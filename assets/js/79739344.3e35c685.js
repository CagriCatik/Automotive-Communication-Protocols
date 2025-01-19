"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8321],{96527:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"DoIP/doip_vehicle_discovery/bekanntmachung-durch-fahrzeug","title":"Fahrzeugank\xfcndigung im DoIP-Prozess","description":"Beschreibung des Prozesses","source":"@site/docs/DoIP/02_doip_vehicle_discovery/04_bekanntmachung-durch-fahrzeug.md","sourceDirName":"DoIP/02_doip_vehicle_discovery","slug":"/DoIP/doip_vehicle_discovery/bekanntmachung-durch-fahrzeug","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_vehicle_discovery/bekanntmachung-durch-fahrzeug","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DoIP/02_doip_vehicle_discovery/04_bekanntmachung-durch-fahrzeug.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"doipSidebar","previous":{"title":"Konfiguration der IP-Adressen","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_vehicle_discovery/konfigurations-ip-adressen"},"next":{"title":"DoIP Fahrzeugerkennung durch den Diagnosetester","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_vehicle_discovery/fahrzeuganfrage-durch-diagnose-tester"}}');var s=i(74848),d=i(28453);const t={},l="Fahrzeugank\xfcndigung im DoIP-Prozess",a={},h=[{value:"Beschreibung des Prozesses",id:"beschreibung-des-prozesses",level:2},{value:"Fahrzeugank\xfcndigung (Vehicle Announcement)",id:"fahrzeugank\xfcndigung-vehicle-announcement",level:3},{value:"Beispiel einer Fahrzeugank\xfcndigung",id:"beispiel-einer-fahrzeugank\xfcndigung",level:3},{value:"Analyse der Angaben",id:"analyse-der-angaben",level:3},{value:"MAC-Adressen",id:"mac-adressen",level:4},{value:"IP-Adressen",id:"ip-adressen",level:4},{value:"Ports",id:"ports",level:4},{value:"VIN (Vehicle Identification Number)",id:"vin-vehicle-identification-number",level:4},{value:"EID (Entity Identifier)",id:"eid-entity-identifier",level:4},{value:"GID (Group Identifier)",id:"gid-group-identifier",level:4},{value:"Logische Adresse",id:"logische-adresse",level:4},{value:"DoIP-Pufferung",id:"doip-pufferung",level:2},{value:"Kritische Analyse",id:"kritische-analyse",level:2},{value:"MAC-Adresse",id:"mac-adresse",level:3},{value:"Ports",id:"ports-1",level:3},{value:"GID (Group Identifier)",id:"gid-group-identifier-1",level:3}];function o(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"fahrzeugank\xfcndigung-im-doip-prozess",children:"Fahrzeugank\xfcndigung im DoIP-Prozess"})}),"\n",(0,s.jsx)(n.h2,{id:"beschreibung-des-prozesses",children:"Beschreibung des Prozesses"}),"\n",(0,s.jsx)(n.h3,{id:"fahrzeugank\xfcndigung-vehicle-announcement",children:"Fahrzeugank\xfcndigung (Vehicle Announcement)"}),"\n",(0,s.jsx)(n.p,{children:"Sobald einem Fahrzeuggateway (DoIP edge node) eine IP-Adresse zugewiesen wurde, sendet das Gateway dreimal eine Fahrzeugank\xfcndigung (Vehicle Announcement) als Broadcast im Netzwerk. Diese Ank\xfcndigungen dienen dazu, das Fahrzeug im Netzwerk bekannt zu machen, sodass ein Diagnosetester es erkennen und mit ihm kommunizieren kann."}),"\n",(0,s.jsx)(n.h3,{id:"beispiel-einer-fahrzeugank\xfcndigung",children:"Beispiel einer Fahrzeugank\xfcndigung"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Src. MAC:"})," 00:A4:DF:1E:08:00"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dst. MAC:"})," FF:FF:FF:FF:FF",":FF"," (Broadcast)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Src. IP:"})," 192.168.1.2"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dst. IP:"})," 192.168.1.255 (Broadcast)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Src. Port:"})," 24777 (zuf\xe4llig)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dst. Port:"})," 13400 (UDP_DISCOVERY)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"VIN:"})," VECTORVEH1CLE8100"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"EID:"})," 00:A4:DF:1E:08:00"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GID:"})," FF:FF:FF:FF:FF",":FF"," (leer)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Logische Adresse:"})," 0x201 (GW)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"analyse-der-angaben",children:"Analyse der Angaben"}),"\n",(0,s.jsx)(n.h4,{id:"mac-adressen",children:"MAC-Adressen"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Quell-MAC-Adresse (Src. MAC):"})," Dies ist die physische Adresse des Fahrzeuggateways. Sie identifiziert das Gateway eindeutig im Netzwerk."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ziel-MAC-Adresse (Dst. MAC):"})," Diese ist als Broadcast-Adresse gesetzt (FF:FF:FF:FF:FF",":FF","), was bedeutet, dass alle Ger\xe4te im Netzwerk diese Nachricht empfangen k\xf6nnen."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ip-adressen",children:"IP-Adressen"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Quell-IP-Adresse (Src. IP):"})," Dies ist die IP-Adresse, die dem Fahrzeuggateway zugewiesen wurde, und wird f\xfcr die Kommunikation mit anderen Ger\xe4ten im Netzwerk genutzt."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ziel-IP-Adresse (Dst. IP):"})," Auch die IP-Adresse ist als Broadcast-Adresse (192.168.1.255) gesetzt, um sicherzustellen, dass alle Ger\xe4te im Netzwerk die Nachricht empfangen."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ports",children:"Ports"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Quellport (Src. Port):"})," Dieser Port wird zuf\xe4llig gew\xe4hlt und dient zur Identifikation der Sitzung."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Zielport (Dst. Port):"})," Der Zielport 13400 ist standardm\xe4\xdfig f\xfcr UDP_DISCOVERY reserviert und wird in DoIP-Netzwerken h\xe4ufig verwendet, um die Fahrzeugerkennung zu erm\xf6glichen."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"vin-vehicle-identification-number",children:"VIN (Vehicle Identification Number)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die ",(0,s.jsx)(n.strong,{children:"VIN"})," ist die eindeutige Fahrzeugidentifikationsnummer, die in der Ank\xfcndigung enthalten ist, um das Fahrzeug zu identifizieren."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"eid-entity-identifier",children:"EID (Entity Identifier)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Der ",(0,s.jsx)(n.strong,{children:"EID"})," ist eine eindeutige Kennung des Fahrzeuggateways, die das Gateway im Netzwerk identifiziert."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"gid-group-identifier",children:"GID (Group Identifier)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Der ",(0,s.jsx)(n.strong,{children:"GID"})," ist in diesem Beispiel leer (FF:FF:FF:FF:FF",":FF","), was darauf hindeutet, dass keine Gruppenzuordnung vorgenommen wurde. In anderen Szenarien k\xf6nnte der GID zur Organisation mehrerer Fahrzeuge oder Gateways verwendet werden."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"logische-adresse",children:"Logische Adresse"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die ",(0,s.jsx)(n.strong,{children:"logische Adresse"})," 0x201 identifiziert das Fahrzeuggateway im DoIP-Netzwerk. Diese Adresse ist innerhalb des Netzwerks einzigartig und wird verwendet, um gezielte Kommunikation zu erm\xf6glichen."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"doip-pufferung",children:"DoIP-Pufferung"}),"\n",(0,s.jsx)(n.p,{children:"Nach der erfolgreichen Fahrzeugank\xfcndigung speichert der Diagnosetester die DoIP-Informationen. Diese Informationen beinhalten die erhaltenen MAC- und IP-Adressen sowie die zugeh\xf6rigen Ports und Identifikatoren. Dies gew\xe4hrleistet eine stabile und konsistente Kommunikation zwischen dem Tester und dem Fahrzeug w\xe4hrend der Diagnose."}),"\n",(0,s.jsx)(n.h2,{id:"kritische-analyse",children:"Kritische Analyse"}),"\n",(0,s.jsx)(n.p,{children:"Die bereitgestellten Informationen sind weitgehend korrekt, jedoch gibt es einige Punkte, die n\xe4her erl\xe4utert werden sollten:"}),"\n",(0,s.jsx)(n.h3,{id:"mac-adresse",children:"MAC-Adresse"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Verwendung einer Broadcast-MAC-Adresse (FF:FF:FF:FF:FF",":FF",") sollte detaillierter erkl\xe4rt werden, insbesondere im Hinblick darauf, wie sie sicherstellt, dass alle Ger\xe4te im Netzwerk die Ank\xfcndigung empfangen k\xf6nnen. Die Rolle der Broadcast-Adresse in Netzwerken k\xf6nnte pr\xe4ziser dargestellt werden."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ports-1",children:"Ports"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Zielport 13400 ist standardm\xe4\xdfig f\xfcr UDP_DISCOVERY reserviert. Es sollte jedoch darauf hingewiesen werden, dass dieser Port konfigurierbar ist und je nach Netzwerkumgebung angepasst werden kann."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"gid-group-identifier-1",children:"GID (Group Identifier)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der GID ist in diesem Beispiel leer. Es w\xe4re hilfreich, ein Szenario zu beschreiben, in dem der GID nicht leer ist und wie dies die Kommunikation im Netzwerk beeinflusst. Der GID k\xf6nnte verwendet werden, um Gruppen von Fahrzeugen oder Gateways zu identifizieren, was in komplexeren Netzwerken n\xfctzlich sein kann."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(96540);const s={},d=r.createContext(s);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);