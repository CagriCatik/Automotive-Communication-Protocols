"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8253],{78830:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"DoIP/doip_routing_activation/tcp-verbindungsaufbau","title":"TCP Verbindungsaufbau","description":"Der TCP Verbindungsaufbau ist ein essenzieller Prozess innerhalb des DoIP-Protokolls (Diagnostics over Internet Protocol), der die zuverl\xe4ssige und stabile Kommunikation zwischen einem Tester und einem Gateway (GW) erm\xf6glicht. Der Aufbau erfolgt \xfcber das standardisierte Three-Way-Handshake-Verfahren, welches sicherstellt, dass beide Kommunikationspartner synchronisiert sind und Daten korrekt \xfcbertragen werden k\xf6nnen.","source":"@site/docs/DoIP/03_doip_routing_activation/02_tcp-verbindungsaufbau.md","sourceDirName":"DoIP/03_doip_routing_activation","slug":"/DoIP/doip_routing_activation/tcp-verbindungsaufbau","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_routing_activation/tcp-verbindungsaufbau","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DoIP/03_doip_routing_activation/02_tcp-verbindungsaufbau.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"doipSidebar","previous":{"title":"Routing-Aktivierungsanfrage/-antwort in DoIP","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_routing_activation/routing-activation-request-response"},"next":{"title":"Routing Activation Sequenz","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_routing_activation/routing-activation-sequenz"}}');var r=i(74848),t=i(28453);const d={},l="TCP Verbindungsaufbau",a={},c=[{value:"Ablauf des TCP Verbindungsaufbaus",id:"ablauf-des-tcp-verbindungsaufbaus",level:2},{value:"Schritt 1: Verbindungsanfrage",id:"schritt-1-verbindungsanfrage",level:3},{value:"Technische Beschreibung:",id:"technische-beschreibung",level:4},{value:"Schritt 2: Verbindungsanfrage mit Best\xe4tigung",id:"schritt-2-verbindungsanfrage-mit-best\xe4tigung",level:3},{value:"Schritt 3: Best\xe4tigung der Verbindung",id:"schritt-3-best\xe4tigung-der-verbindung",level:3},{value:"Ergebnis:",id:"ergebnis",level:4},{value:"Zusammenfassung des Prozesses",id:"zusammenfassung-des-prozesses",level:2},{value:"Relevante Codebeispiele",id:"relevante-codebeispiele",level:2},{value:"Beispiel: Aufbau einer TCP-Verbindung",id:"beispiel-aufbau-einer-tcp-verbindung",level:3},{value:"Beispiel: Paketanalysen mit Wireshark",id:"beispiel-paketanalysen-mit-wireshark",level:3},{value:"H\xe4ufige Probleme und L\xf6sungen",id:"h\xe4ufige-probleme-und-l\xf6sungen",level:2},{value:"Problem 1: Zeit\xfcberschreitung bei der Verbindung",id:"problem-1-zeit\xfcberschreitung-bei-der-verbindung",level:3},{value:"Problem 2: SYN-ACK wird nicht empfangen",id:"problem-2-syn-ack-wird-nicht-empfangen",level:3},{value:"Problem 3: Verbindung wird sofort abgelehnt",id:"problem-3-verbindung-wird-sofort-abgelehnt",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tcp-verbindungsaufbau",children:"TCP Verbindungsaufbau"})}),"\n",(0,r.jsxs)(n.p,{children:["Der ",(0,r.jsx)(n.strong,{children:"TCP Verbindungsaufbau"})," ist ein essenzieller Prozess innerhalb des DoIP-Protokolls (Diagnostics over Internet Protocol), der die zuverl\xe4ssige und stabile Kommunikation zwischen einem Tester und einem Gateway (GW) erm\xf6glicht. Der Aufbau erfolgt \xfcber das standardisierte ",(0,r.jsx)(n.strong,{children:"Three-Way-Handshake-Verfahren"}),", welches sicherstellt, dass beide Kommunikationspartner synchronisiert sind und Daten korrekt \xfcbertragen werden k\xf6nnen."]}),"\n",(0,r.jsx)(n.h2,{id:"ablauf-des-tcp-verbindungsaufbaus",children:"Ablauf des TCP Verbindungsaufbaus"}),"\n",(0,r.jsx)(n.h3,{id:"schritt-1-verbindungsanfrage",children:"Schritt 1: Verbindungsanfrage"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Der Tester sendet als TCP-Client eine Verbindungsanfrage (",(0,r.jsx)(n.code,{children:"SYN"}),") an das Gateway, das als TCP-Server fungiert."]}),"\n",(0,r.jsxs)(n.li,{children:["Die Anfrage enth\xe4lt folgende wichtige Parameter:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quell-MAC-Adresse"})," des Testers: ",(0,r.jsx)(n.code,{children:"00:16:81:00:62:E0"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ziel-MAC-Adresse"})," des Gateways: ",(0,r.jsx)(n.code,{children:"00:A4:DF:1E:08:00"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quell-IP-Adresse"})," des Testers: ",(0,r.jsx)(n.code,{children:"192.168.1.1"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ziel-IP-Adresse"})," des Gateways: ",(0,r.jsx)(n.code,{children:"192.168.1.2"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quell-Port"}),": Zuf\xe4lliger Port, z. B. ",(0,r.jsx)(n.code,{children:"18945"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ziel-Port"}),": Standardm\xe4\xdfig ",(0,r.jsx)(n.code,{children:"13400"})," f\xfcr UDP_DISCOVERY im DoIP."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"technische-beschreibung",children:"Technische Beschreibung:"}),"\n",(0,r.jsxs)(n.p,{children:["Die Verbindungsanfrage wird durch das TCP-Flag ",(0,r.jsx)(n.code,{children:"SYN"})," (Synchronize) gekennzeichnet und enth\xe4lt die ",(0,r.jsx)(n.strong,{children:"Sequenznummer A"}),", mit der die Kommunikation initialisiert wird."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Tester \u2192 Gateway:\nSYN (SeqNo A)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"schritt-2-verbindungsanfrage-mit-best\xe4tigung",children:"Schritt 2: Verbindungsanfrage mit Best\xe4tigung"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Nach Erhalt der Verbindungsanfrage antwortet das Gateway mit einer ",(0,r.jsx)(n.code,{children:"SYN-ACK"}),"-Nachricht (Synchronize-Acknowledge)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Diese Nachricht enth\xe4lt:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Eine neue ",(0,r.jsx)(n.strong,{children:"Sequenznummer B"}),", die vom Gateway generiert wurde."]}),"\n",(0,r.jsxs)(n.li,{children:["Eine Best\xe4tigung der vom Tester gesendeten Sequenznummer A (",(0,r.jsx)(n.code,{children:"AckNo A+1"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Zus\xe4tzliche technische Details:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quell-MAC-Adresse"})," des Gateways: ",(0,r.jsx)(n.code,{children:"00:A4:DF:1E:08:00"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ziel-MAC-Adresse"})," des Testers: ",(0,r.jsx)(n.code,{children:"00:16:81:00:62:E0"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quell-IP-Adresse"})," des Gateways: ",(0,r.jsx)(n.code,{children:"192.168.1.2"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ziel-IP-Adresse"})," des Testers: ",(0,r.jsx)(n.code,{children:"192.168.1.1"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quell-Port"}),": ",(0,r.jsx)(n.code,{children:"13400"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ziel-Port"}),": ",(0,r.jsx)(n.code,{children:"18945"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Gateway \u2192 Tester:\nSYN-ACK (SeqNo B, AckNo A+1)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"schritt-3-best\xe4tigung-der-verbindung",children:"Schritt 3: Best\xe4tigung der Verbindung"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Der Tester best\xe4tigt die Verbindung, indem er eine ",(0,r.jsx)(n.code,{children:"ACK"}),"-Nachricht (Acknowledgement) zur\xfccksendet."]}),"\n",(0,r.jsxs)(n.li,{children:["Diese Nachricht enth\xe4lt:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sequenznummer A+1"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"AckNo B+1"})," zur Best\xe4tigung der Sequenznummer des Gateways."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ergebnis",children:"Ergebnis:"}),"\n",(0,r.jsx)(n.p,{children:"Nach Abschluss dieses Schritts gilt die TCP-Verbindung als erfolgreich aufgebaut, und beide Parteien sind synchronisiert."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Tester \u2192 Gateway:\nACK (SeqNo A+1, AckNo B+1)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"zusammenfassung-des-prozesses",children:"Zusammenfassung des Prozesses"}),"\n",(0,r.jsx)(n.p,{children:"Der komplette Verbindungsaufbau kann wie folgt zusammengefasst werden:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SYN"}),": Der Tester initiiert die Verbindung und sendet eine Synchronisationsnachricht mit Sequenznummer A."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SYN-ACK"}),": Das Gateway antwortet mit einer Synchronisations- und Best\xe4tigungsnachricht, die Sequenznummer B und ",(0,r.jsx)(n.code,{children:"AckNo A+1"})," enth\xe4lt."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ACK"}),": Der Tester best\xe4tigt die Synchronisation und schickt ",(0,r.jsx)(n.code,{children:"AckNo B+1"})," zur\xfcck."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Dieses Verfahren gew\xe4hrleistet:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Den synchronisierten Datenaustausch."}),"\n",(0,r.jsx)(n.li,{children:"Die Verl\xe4sslichkeit der Verbindung."}),"\n",(0,r.jsx)(n.li,{children:"Die Korrektheit der Daten\xfcbertragung."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"relevante-codebeispiele",children:"Relevante Codebeispiele"}),"\n",(0,r.jsx)(n.h3,{id:"beispiel-aufbau-einer-tcp-verbindung",children:"Beispiel: Aufbau einer TCP-Verbindung"}),"\n",(0,r.jsx)(n.p,{children:"Das folgende Python-Skript veranschaulicht, wie eine TCP-Verbindung zwischen einem Tester (Client) und einem Gateway (Server) hergestellt werden kann:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import socket\n\n# TCP-Client (Tester)\ntester_ip = "192.168.1.1"\ngateway_ip = "192.168.1.2"\ntester_port = 18945  # Zuf\xe4lliger Port\ngateway_port = 13400  # Zielport\n\n# Socket erstellen und Verbindung aufbauen\nwith socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n    s.bind((tester_ip, tester_port))  # Quell-IP und Port\n    s.connect((gateway_ip, gateway_port))  # Ziel-IP und Port\n    \n    # SYN senden (automatisch beim Verbindungsaufbau)\n    print("TCP-Verbindung erfolgreich aufgebaut!")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"beispiel-paketanalysen-mit-wireshark",children:"Beispiel: Paketanalysen mit Wireshark"}),"\n",(0,r.jsx)(n.p,{children:"Die folgende Beschreibung zeigt, wie die einzelnen Schritte des Verbindungsaufbaus in einem Tool wie Wireshark visualisiert werden k\xf6nnen:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Filter verwenden"}),":","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"tcp.flags.syn == 1 || tcp.flags.ack == 1\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Beobachten Sie:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SYN-Paket des Testers."}),"\n",(0,r.jsx)(n.li,{children:"SYN-ACK des Gateways."}),"\n",(0,r.jsx)(n.li,{children:"ACK-Paket des Testers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"h\xe4ufige-probleme-und-l\xf6sungen",children:"H\xe4ufige Probleme und L\xf6sungen"}),"\n",(0,r.jsx)(n.h3,{id:"problem-1-zeit\xfcberschreitung-bei-der-verbindung",children:"Problem 1: Zeit\xfcberschreitung bei der Verbindung"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ursache"}),": Gateway nicht erreichbar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xf6sung"}),": Pr\xfcfen Sie die IP-Adressen, Ports und Netzwerkeinstellungen."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"problem-2-syn-ack-wird-nicht-empfangen",children:"Problem 2: SYN-ACK wird nicht empfangen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ursache"}),": Firewall blockiert die Kommunikation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xf6sung"}),": Konfigurieren Sie die Firewall, um TCP-Port 13400 zuzulassen."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"problem-3-verbindung-wird-sofort-abgelehnt",children:"Problem 3: Verbindung wird sofort abgelehnt"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ursache"}),": Gateway ist nicht im Diagnosemodus."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xf6sung"}),": Stellen Sie sicher, dass das Gateway f\xfcr DoIP konfiguriert ist."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var s=i(96540);const r={},t=s.createContext(r);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);