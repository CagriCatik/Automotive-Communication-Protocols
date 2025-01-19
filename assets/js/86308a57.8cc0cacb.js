"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[4293],{41925:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"DoIP/doip_routing_activation/routing-activation-sequenz","title":"Routing Activation Sequenz","description":"Die Routing Activation Sequenz im Rahmen von Diagnostics over Internet Protocol (DoIP) beschreibt den Prozess, durch den ein Tester das Gateway anweist, den Datenverkehr f\xfcr nachgelagerte Netzwerke im Fahrzeug zu aktivieren. Dieser Prozess gew\xe4hrleistet den Zugriff auf Fahrzeugsteuerger\xe4te, die \xfcber Netzwerke wie CAN-Busse verbunden sind.","source":"@site/docs/DoIP/03_doip_routing_activation/03_routing-activation-sequenz.md","sourceDirName":"DoIP/03_doip_routing_activation","slug":"/DoIP/doip_routing_activation/routing-activation-sequenz","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_routing_activation/routing-activation-sequenz","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DoIP/03_doip_routing_activation/03_routing-activation-sequenz.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"doipSidebar","previous":{"title":"TCP Verbindungsaufbau","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_routing_activation/tcp-verbindungsaufbau"},"next":{"title":"Benutzung von DoIP Diagnose","permalink":"/Vehicle-Network-Standards/docs/category/benutzung-von-doip-diagnose"}}');var t=i(74848),s=i(28453);const a={},d="Routing Activation Sequenz",o={},c=[{value:"Ablauf der Routing Activation Sequenz",id:"ablauf-der-routing-activation-sequenz",level:2},{value:"Schritt 1: Routing Activation Request",id:"schritt-1-routing-activation-request",level:3},{value:"Wichtige Parameter der Anfrage:",id:"wichtige-parameter-der-anfrage",level:4},{value:"Technischer Ablauf:",id:"technischer-ablauf",level:4},{value:"Schritt 2: Routing Activation Response",id:"schritt-2-routing-activation-response",level:3},{value:"Wichtige Parameter der Antwort:",id:"wichtige-parameter-der-antwort",level:4},{value:"Technischer Ablauf:",id:"technischer-ablauf-1",level:4},{value:"Zusammenfassung der Sequenz",id:"zusammenfassung-der-sequenz",level:2},{value:"Codebeispiel zur Umsetzung",id:"codebeispiel-zur-umsetzung",level:2},{value:"Beispiel: Senden einer Routing Activation Request",id:"beispiel-senden-einer-routing-activation-request",level:3},{value:"H\xe4ufige Probleme und L\xf6sungen",id:"h\xe4ufige-probleme-und-l\xf6sungen",level:2},{value:"Problem 1: Netzwerk nicht aktiviert",id:"problem-1-netzwerk-nicht-aktiviert",level:3},{value:"Problem 2: Keine Antwort vom Gateway",id:"problem-2-keine-antwort-vom-gateway",level:3},{value:"Problem 3: Falsche logische Adresse",id:"problem-3-falsche-logische-adresse",level:3}];function l(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"routing-activation-sequenz",children:"Routing Activation Sequenz"})}),"\n",(0,t.jsxs)(n.p,{children:["Die ",(0,t.jsx)(n.strong,{children:"Routing Activation Sequenz"})," im Rahmen von Diagnostics over Internet Protocol (DoIP) beschreibt den Prozess, durch den ein Tester das Gateway anweist, den Datenverkehr f\xfcr nachgelagerte Netzwerke im Fahrzeug zu aktivieren. Dieser Prozess gew\xe4hrleistet den Zugriff auf Fahrzeugsteuerger\xe4te, die \xfcber Netzwerke wie CAN-Busse verbunden sind."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"ablauf-der-routing-activation-sequenz",children:"Ablauf der Routing Activation Sequenz"}),"\n",(0,t.jsx)(n.p,{children:"Die Routing Activation Sequenz besteht aus zwei Hauptschritten:"}),"\n",(0,t.jsx)(n.h3,{id:"schritt-1-routing-activation-request",children:"Schritt 1: Routing Activation Request"}),"\n",(0,t.jsxs)(n.p,{children:["Der Tester sendet eine ",(0,t.jsx)(n.strong,{children:"Routing Activation Request"})," an das Gateway, um den Zugriff auf weitere fahrzeuginternen Netzwerke (z. B. CAN) zu aktivieren. Die Anfrage enth\xe4lt spezifische Informationen zur Identifizierung des Testers und zur Aktivierung."]}),"\n",(0,t.jsx)(n.h4,{id:"wichtige-parameter-der-anfrage",children:"Wichtige Parameter der Anfrage:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quell-MAC-Adresse"}),": ",(0,t.jsx)(n.code,{children:"00:16:81:00:62:E0"}),(0,t.jsx)(n.br,{}),"\n","\u2192 Identifiziert die Hardware des Testers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ziel-MAC-Adresse"}),": ",(0,t.jsx)(n.code,{children:"00:A4:DF:1E:08:00"}),(0,t.jsx)(n.br,{}),"\n","\u2192 Identifiziert die Hardware des Gateways."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quell-IP-Adresse"}),": ",(0,t.jsx)(n.code,{children:"192.168.1.1"}),(0,t.jsx)(n.br,{}),"\n","\u2192 Die IP-Adresse des Testers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ziel-IP-Adresse"}),": ",(0,t.jsx)(n.code,{children:"192.168.1.2"}),(0,t.jsx)(n.br,{}),"\n","\u2192 Die IP-Adresse des Gateways."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quell-Port"}),": ",(0,t.jsx)(n.code,{children:"18945"})," (zuf\xe4llig generiert)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ziel-Port"}),": ",(0,t.jsx)(n.code,{children:"13400"})," (standardm\xe4\xdfig f\xfcr DoIP)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Logische Adresse"}),": ",(0,t.jsx)(n.code,{children:"0x203"})," (logische Adresse des Testers)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Activation Type"}),": ",(0,t.jsx)(n.code,{children:"Default"})," (gibt an, welche Art der Routing-Aktivierung angefordert wird)."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"technischer-ablauf",children:"Technischer Ablauf:"}),"\n",(0,t.jsx)(n.p,{children:"Der Tester schickt die Routing Activation Request an das Gateway, um den Zugang zu nachgelagerten Netzwerken zu aktivieren. Die Anfrage wird \xfcber eine TCP-Verbindung \xfcbertragen."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Tester \u2192 Gateway:\nRouting Activation Request\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"schritt-2-routing-activation-response",children:"Schritt 2: Routing Activation Response"}),"\n",(0,t.jsxs)(n.p,{children:["Nachdem das Gateway die Routing Activation Request empfangen hat, pr\xfcft es die Anforderung und aktiviert gegebenenfalls die nachgelagerten Netzwerke (z. B. CAN). Anschlie\xdfend wird eine ",(0,t.jsx)(n.strong,{children:"Routing Activation Response"})," zur\xfcck an den Tester gesendet."]}),"\n",(0,t.jsx)(n.h4,{id:"wichtige-parameter-der-antwort",children:"Wichtige Parameter der Antwort:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quell-MAC-Adresse"}),": ",(0,t.jsx)(n.code,{children:"00:A4:DF:1E:08:00"}),(0,t.jsx)(n.br,{}),"\n","\u2192 Identifiziert die Hardware des Gateways."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ziel-MAC-Adresse"}),": ",(0,t.jsx)(n.code,{children:"00:16:81:00:62:E0"}),(0,t.jsx)(n.br,{}),"\n","\u2192 Identifiziert die Hardware des Testers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quell-IP-Adresse"}),": ",(0,t.jsx)(n.code,{children:"192.168.1.2"}),(0,t.jsx)(n.br,{}),"\n","\u2192 Die IP-Adresse des Gateways."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ziel-IP-Adresse"}),": ",(0,t.jsx)(n.code,{children:"192.168.1.1"}),(0,t.jsx)(n.br,{}),"\n","\u2192 Die IP-Adresse des Testers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quell-Port"}),": ",(0,t.jsx)(n.code,{children:"13400"})," (DoIP-Port des Gateways)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ziel-Port"}),": ",(0,t.jsx)(n.code,{children:"18945"})," (zuf\xe4lliger Port des Testers)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Logische Adresse (Tester)"}),": ",(0,t.jsx)(n.code,{children:"0x203"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Logische Adresse (Gateway)"}),": ",(0,t.jsx)(n.code,{children:"0x201"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Status"}),": Routing erfolgreich vorbereitet."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"technischer-ablauf-1",children:"Technischer Ablauf:"}),"\n",(0,t.jsx)(n.p,{children:"Das Gateway aktiviert die erforderlichen Netzwerke und antwortet mit der Routing Activation Response, die den erfolgreichen Abschluss des Prozesses best\xe4tigt."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Gateway \u2192 Tester:\nRouting Activation Response\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"zusammenfassung-der-sequenz",children:"Zusammenfassung der Sequenz"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Routing Activation Request"}),": Der Tester fordert das Gateway auf, den Zugriff auf weitere Netzwerke im Fahrzeug (z. B. CAN) zu aktivieren."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Netzwerkaktivierung durch Gateway"}),": Das Gateway schaltet die angeforderten Netzwerke frei."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Routing Activation Response"}),": Das Gateway best\xe4tigt dem Tester, dass die Aktivierung erfolgreich durchgef\xfchrt wurde."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diese Sequenz stellt sicher, dass Diagnosedaten \xfcber das Gateway an die richtigen Netzwerke weitergeleitet werden."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"codebeispiel-zur-umsetzung",children:"Codebeispiel zur Umsetzung"}),"\n",(0,t.jsx)(n.h3,{id:"beispiel-senden-einer-routing-activation-request",children:"Beispiel: Senden einer Routing Activation Request"}),"\n",(0,t.jsx)(n.p,{children:"Das folgende Python-Skript zeigt, wie eine Routing Activation Request an ein Gateway gesendet wird:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import socket\n\n# TCP-Verbindung einrichten\ntester_ip = "192.168.1.1"\ngateway_ip = "192.168.1.2"\ntester_port = 18945  # Zuf\xe4llig generierter Port\ngateway_port = 13400  # Zielport f\xfcr DoIP\n\n# Routing Activation Request erstellen\nrouting_request = {\n    "logical_address": 0x203,\n    "activation_type": "Default",\n    "source_mac": "00:16:81:00:62:E0",\n    "destination_mac": "00:A4:DF:1E:08:00"\n}\n\n# Verbindung herstellen und Anfrage senden\nwith socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n    s.connect((gateway_ip, gateway_port))\n    s.send(str(routing_request).encode(\'utf-8\'))\n    response = s.recv(1024)\n\nprint("Routing Activation Response erhalten:", response.decode(\'utf-8\'))\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"h\xe4ufige-probleme-und-l\xf6sungen",children:"H\xe4ufige Probleme und L\xf6sungen"}),"\n",(0,t.jsx)(n.h3,{id:"problem-1-netzwerk-nicht-aktiviert",children:"Problem 1: Netzwerk nicht aktiviert"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ursache"}),": Das Gateway hat die Anfrage abgelehnt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"L\xf6sung"}),": \xdcberpr\xfcfen Sie, ob das Gateway die korrekten Sicherheits- und Authentifizierungsdaten erhalten hat."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"problem-2-keine-antwort-vom-gateway",children:"Problem 2: Keine Antwort vom Gateway"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ursache"}),": Das Gateway ist nicht erreichbar."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"L\xf6sung"}),": Stellen Sie sicher, dass die IP-Adressen und Ports korrekt konfiguriert sind."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"problem-3-falsche-logische-adresse",children:"Problem 3: Falsche logische Adresse"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ursache"}),": Die logische Adresse des Testers wurde falsch \xfcbermittelt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"L\xf6sung"}),": Pr\xfcfen Sie die Adresse in der Routing Activation Request und stellen Sie sicher, dass sie mit der Gateway-Konfiguration \xfcbereinstimmt."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var r=i(96540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);