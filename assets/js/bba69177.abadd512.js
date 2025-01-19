"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[5926],{33953:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"DoIP/doip_routing_activation/routing-activation-request-response","title":"Routing-Aktivierungsanfrage/-antwort in DoIP","description":"Die Routing-Aktivierung ist ein zentraler Prozess im Rahmen von Diagnostics over Internet Protocol (DoIP), der die Kommunikation zwischen einem Diagnosetester und den Steuerger\xe4ten (ECUs) eines Fahrzeugs \xfcber ein Gateway erm\xf6glicht. Dieser Prozess stellt sicher, dass Diagnosebefehle die vorgesehenen Netzwerke, wie z. B. CAN-Busse im Fahrzeug, erreichen.","source":"@site/docs/DoIP/03_doip_routing_activation/01_routing-activation-request-response.md","sourceDirName":"DoIP/03_doip_routing_activation","slug":"/DoIP/doip_routing_activation/routing-activation-request-response","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_routing_activation/routing-activation-request-response","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DoIP/03_doip_routing_activation/01_routing-activation-request-response.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"doipSidebar","previous":{"title":"DoIP Routing Activation","permalink":"/Vehicle-Network-Standards/docs/category/doip-routing-activation"},"next":{"title":"TCP Verbindungsaufbau","permalink":"/Vehicle-Network-Standards/docs/DoIP/doip_routing_activation/tcp-verbindungsaufbau"}}');var s=i(74848),t=i(28453);const a={},d="Routing-Aktivierungsanfrage/-antwort in DoIP",l={},o=[{value:"1. \xdcbersicht \xfcber die Routing-Aktivierung",id:"1-\xfcbersicht-\xfcber-die-routing-aktivierung",level:2},{value:"2. Prozessablauf der Routing-Aktivierung",id:"2-prozessablauf-der-routing-aktivierung",level:2},{value:"Schritt 1: Routing-Aktivierungsanfrage",id:"schritt-1-routing-aktivierungsanfrage",level:3},{value:"Zweck:",id:"zweck",level:4},{value:"Technische Details:",id:"technische-details",level:4},{value:"Schritt 2: Netzwerkaktivierung durch das Gateway",id:"schritt-2-netzwerkaktivierung-durch-das-gateway",level:3},{value:"Beispiel-Szenarien:",id:"beispiel-szenarien",level:4},{value:"Schritt 3: Routing-Aktivierungsantwort",id:"schritt-3-routing-aktivierungsantwort",level:3},{value:"Wichtige Informationen in der Antwort:",id:"wichtige-informationen-in-der-antwort",level:4},{value:"Beispiel-Datenstruktur:",id:"beispiel-datenstruktur",level:4},{value:"Fehlerbedingungen:",id:"fehlerbedingungen",level:4},{value:"3. Erkl\xe4rung der Abbildung",id:"3-erkl\xe4rung-der-abbildung",level:2},{value:"4. Wichtige Konzepte und praktische Implikationen",id:"4-wichtige-konzepte-und-praktische-implikationen",level:2},{value:"Logische Adressen",id:"logische-adressen",level:3},{value:"Sicherheitsaspekte",id:"sicherheitsaspekte",level:3},{value:"Netzwerkabh\xe4ngigkeiten",id:"netzwerkabh\xe4ngigkeiten",level:3},{value:"5. Herausforderungen und L\xf6sungen",id:"5-herausforderungen-und-l\xf6sungen",level:2},{value:"Herausforderung 1: Netzwerklatenz",id:"herausforderung-1-netzwerklatenz",level:3},{value:"Herausforderung 2: Authentifizierungsfehler",id:"herausforderung-2-authentifizierungsfehler",level:3},{value:"Herausforderung 3: Nicht verf\xfcgbare nachgelagerte Netzwerke",id:"herausforderung-3-nicht-verf\xfcgbare-nachgelagerte-netzwerke",level:3},{value:"6. Codebeispiele zur Implementierung",id:"6-codebeispiele-zur-implementierung",level:2},{value:"Beispiel: Senden einer Routing-Aktivierungsanfrage",id:"beispiel-senden-einer-routing-aktivierungsanfrage",level:3},{value:"Beispiel: Parsen der Routing-Aktivierungsantwort",id:"beispiel-parsen-der-routing-aktivierungsantwort",level:3}];function u(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"routing-aktivierungsanfrage-antwort-in-doip",children:"Routing-Aktivierungsanfrage/-antwort in DoIP"})}),"\n",(0,s.jsx)(n.p,{children:"Die Routing-Aktivierung ist ein zentraler Prozess im Rahmen von Diagnostics over Internet Protocol (DoIP), der die Kommunikation zwischen einem Diagnosetester und den Steuerger\xe4ten (ECUs) eines Fahrzeugs \xfcber ein Gateway erm\xf6glicht. Dieser Prozess stellt sicher, dass Diagnosebefehle die vorgesehenen Netzwerke, wie z. B. CAN-Busse im Fahrzeug, erreichen."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"1-\xfcbersicht-\xfcber-die-routing-aktivierung",children:"1. \xdcbersicht \xfcber die Routing-Aktivierung"}),"\n",(0,s.jsxs)(n.p,{children:["Der Prozess der ",(0,s.jsx)(n.strong,{children:"Routing-Aktivierungsanfrage/-antwort"})," umfasst drei Hauptschritte:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Routing-Aktivierungsanfrage"}),":",(0,s.jsx)(n.br,{}),"\n","Der Diagnosetester initiiert eine Anfrage an das Gateway, um das Routing zu zus\xe4tzlichen fahrzeuginternen Netzwerken zu aktivieren, die f\xfcr Diagnosen erforderlich sind (z. B. ein CAN-Bus)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Netzwerkaktivierung durch das Gateway"}),":",(0,s.jsx)(n.br,{}),"\n","Das Gateway aktiviert gegebenenfalls Verbindungen zu weiteren Netzwerken im Fahrzeug."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Routing-Aktivierungsantwort"}),":",(0,s.jsx)(n.br,{}),"\n","Das Gateway best\xe4tigt die Anfrage, indem es eine Antwort mit wichtigen Informationen wie den logischen Adressen des Testers und des Gateways zur\xfccksendet."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"2-prozessablauf-der-routing-aktivierung",children:"2. Prozessablauf der Routing-Aktivierung"}),"\n",(0,s.jsx)(n.h3,{id:"schritt-1-routing-aktivierungsanfrage",children:"Schritt 1: Routing-Aktivierungsanfrage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Der Diagnosetester sendet eine ",(0,s.jsx)(n.strong,{children:"Routing-Aktivierungsanfrage"})," an das Gateway \xfcber TCP."]}),"\n",(0,s.jsx)(n.li,{children:"Diese Anfrage enth\xe4lt Parameter, die das Gateway anweisen, Routing f\xfcr Netzwerke zu aktivieren, die f\xfcr die Diagnose ben\xf6tigt werden."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"zweck",children:"Zweck:"}),"\n",(0,s.jsx)(n.p,{children:"Der Tester ben\xf6tigt Zugriff auf nachgelagerte fahrzeuginterne Netzwerke (z. B. CAN), um Diagnosen an verschiedenen Steuerger\xe4ten durchzuf\xfchren."}),"\n",(0,s.jsx)(n.h4,{id:"technische-details",children:"Technische Details:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Protokoll: TCP/IP"}),"\n",(0,s.jsx)(n.li,{children:"Typische Ports: Diagnoseanfragen verwenden h\xe4ufig Port 13400 f\xfcr DoIP."}),"\n",(0,s.jsxs)(n.li,{children:["Beispiel-Datenstruktur:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"Anfrageart: Routing-Aktivierung\nQuelladresse: Logische Adresse des Testers (z. B. 0x203)\nAuthentifizierungsdaten: (Optional, abh\xe4ngig vom Sicherheitsniveau)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"schritt-2-netzwerkaktivierung-durch-das-gateway",children:"Schritt 2: Netzwerkaktivierung durch das Gateway"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Nach Empfang der ",(0,s.jsx)(n.strong,{children:"Routing-Aktivierungsanfrage"})," aktiviert das Gateway gegebenenfalls die erforderlichen nachgelagerten Netzwerke, wie z. B. CAN-Busse."]}),"\n",(0,s.jsx)(n.li,{children:"Dieser Schritt stellt sicher, dass die mit diesen Netzwerken verbundenen Steuerger\xe4te f\xfcr Diagnosen erreichbar sind."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"beispiel-szenarien",children:"Beispiel-Szenarien:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CAN-Bus-Aktivierung"}),": Das Gateway erm\xf6glicht die Kommunikation mit Steuerger\xe4ten auf dem CAN-Bus."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Energiemanagement"}),": Das Gateway stellt sicher, dass Steuerger\xe4te im Energiesparmodus aufgeweckt werden, um auf Diagnoseanfragen zu reagieren."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"schritt-3-routing-aktivierungsantwort",children:"Schritt 3: Routing-Aktivierungsantwort"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Das Gateway sendet eine ",(0,s.jsx)(n.strong,{children:"Routing-Aktivierungsantwort"})," zur\xfcck an den Diagnosetester \xfcber TCP."]}),"\n",(0,s.jsx)(n.li,{children:"Diese Antwort best\xe4tigt, ob die Routing-Aktivierung erfolgreich war, und enth\xe4lt die logischen Adressen der beteiligten Einheiten."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"wichtige-informationen-in-der-antwort",children:"Wichtige Informationen in der Antwort:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Logische Adresse des Testers"}),": Zum Beispiel ",(0,s.jsx)(n.code,{children:"0x203"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Logische Adresse des Gateways"}),": Zum Beispiel ",(0,s.jsx)(n.code,{children:"0x201"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"beispiel-datenstruktur",children:"Beispiel-Datenstruktur:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"Antwortart: Routing-Aktivierungsantwort\nQuelladresse: Logische Adresse des Gateways (z. B. 0x201)\nZieladresse: Logische Adresse des Testers (z. B. 0x203)\nStatus: Erfolg oder Fehler\n"})}),"\n",(0,s.jsx)(n.h4,{id:"fehlerbedingungen",children:"Fehlerbedingungen:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Antwort kann Fehler enthalten, z. B. durch:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ung\xfcltige Authentifizierungsdaten."}),"\n",(0,s.jsx)(n.li,{children:"Nicht verf\xfcgbare nachgelagerte Netzwerke."}),"\n",(0,s.jsx)(n.li,{children:"Interne Gateway-Fehler."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-erkl\xe4rung-der-abbildung",children:"3. Erkl\xe4rung der Abbildung"}),"\n",(0,s.jsx)(n.p,{children:"Die bereitgestellte Abbildung veranschaulicht den Prozess der Routing-Aktivierung wie folgt:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Schritt 1 (Gelbes Feld)"}),":",(0,s.jsx)(n.br,{}),"\n","Der Diagnosetester sendet eine ",(0,s.jsx)(n.code,{children:"Routing-Aktivierungsanfrage"})," \xfcber TCP an das Gateway. Dieser Schritt l\xf6st aus, dass das Gateway sich auf die Diagnose vorbereitet, indem es nachgelagerte Netzwerke aktiviert."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Schritt 2 (Rotes Feld)"}),":",(0,s.jsx)(n.br,{}),"\n","Das Gateway aktiviert, falls erforderlich, relevante Netzwerke im Fahrzeug, wie z. B. einen CAN-Bus. Dies stellt sicher, dass alle Steuerger\xe4te f\xfcr die Diagnose erreichbar sind."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Schritt 3 (Blaues Feld)"}),":",(0,s.jsx)(n.br,{}),"\n","Das Gateway antwortet mit einer ",(0,s.jsx)(n.code,{children:"Routing-Aktivierungsantwort"})," und best\xe4tigt dabei die logischen Adressen des Testers und des Gateways."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-wichtige-konzepte-und-praktische-implikationen",children:"4. Wichtige Konzepte und praktische Implikationen"}),"\n",(0,s.jsx)(n.h3,{id:"logische-adressen",children:"Logische Adressen"}),"\n",(0,s.jsx)(n.p,{children:"Logische Adressen sind eindeutige Identifikatoren, die im Rahmen von DoIP verwendet werden, um verschiedene Entit\xe4ten (z. B. Tester, Gateway und Steuerger\xe4te) zu unterscheiden. Sie erm\xf6glichen ein pr\xe4zises Routing von Diagnose-Nachrichten."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Beispiel"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Tester-Adresse: ",(0,s.jsx)(n.code,{children:"0x203"})]}),"\n",(0,s.jsxs)(n.li,{children:["Gateway-Adresse: ",(0,s.jsx)(n.code,{children:"0x201"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sicherheitsaspekte",children:"Sicherheitsaspekte"}),"\n",(0,s.jsx)(n.p,{children:"Die Routing-Aktivierung kann Authentifizierungsmechanismen erfordern, um sicherzustellen, dass nur autorisierte Tester auf Diagnosenetzwerke zugreifen k\xf6nnen."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Authentifizierungsmethoden"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Passwortbasiert."}),"\n",(0,s.jsx)(n.li,{children:"Sichere Schl\xfcssel oder Zertifikate."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"netzwerkabh\xe4ngigkeiten",children:"Netzwerkabh\xe4ngigkeiten"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TCP/IP"})," dient als Transportprotokoll f\xfcr die Kommunikation \xfcber DoIP."]}),"\n",(0,s.jsxs)(n.li,{children:["Das Gateway kann f\xfcr die Kommunikation mit nachgelagerten Netzwerken auf ",(0,s.jsx)(n.strong,{children:"Ethernet"}),", ",(0,s.jsx)(n.strong,{children:"CAN"})," oder andere fahrzeugspezifische Netzwerke zur\xfcckgreifen."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-herausforderungen-und-l\xf6sungen",children:"5. Herausforderungen und L\xf6sungen"}),"\n",(0,s.jsx)(n.h3,{id:"herausforderung-1-netzwerklatenz",children:"Herausforderung 1: Netzwerklatenz"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Problem"}),": Hohe Latenzen bei der TCP/IP-Kommunikation k\xf6nnen die Routing-Aktivierung verz\xf6gern."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"L\xf6sung"}),": Optimierung der Gateway-Verarbeitung und Priorisierung von Diagnoseanfragen."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"herausforderung-2-authentifizierungsfehler",children:"Herausforderung 2: Authentifizierungsfehler"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Problem"}),": Falsche Authentifizierungsdaten k\xf6nnen die Routing-Aktivierung blockieren."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"L\xf6sung"}),": Sicherstellung der Synchronisation der Anmeldedaten zwischen Tester und Gateway."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"herausforderung-3-nicht-verf\xfcgbare-nachgelagerte-netzwerke",children:"Herausforderung 3: Nicht verf\xfcgbare nachgelagerte Netzwerke"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Problem"}),": CAN- oder andere Netzwerke sind m\xf6glicherweise inaktiv."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"L\xf6sung"}),": Verwendung von Aufwachmechanismen im Gateway oder erneutes Senden der Anfrage."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"6-codebeispiele-zur-implementierung",children:"6. Codebeispiele zur Implementierung"}),"\n",(0,s.jsx)(n.h3,{id:"beispiel-senden-einer-routing-aktivierungsanfrage",children:"Beispiel: Senden einer Routing-Aktivierungsanfrage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import socket\n\n# TCP-Verbindung einrichten\ngateway_ip = "192.168.0.10"\nport = 13400\ntester_logical_address = 0x203\n\n# Socket erstellen\nwith socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n    s.connect((gateway_ip, port))\n    \n    # Routing-Aktivierungsanfrage erstellen\n    routing_request = bytearray([0x02, tester_logical_address])  # Vereinfachtes Beispiel\n    s.send(routing_request)\n    \n    # Routing-Aktivierungsantwort empfangen\n    response = s.recv(1024)\n    print("Routing-Aktivierungsantwort:", response)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"beispiel-parsen-der-routing-aktivierungsantwort",children:"Beispiel: Parsen der Routing-Aktivierungsantwort"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def parse_response(response):\n    status = response[0]\n    gateway_address = response[1:3]\n    tester_address = response[3:5]\n    \n    if status == 0x00:\n        print("Routing-Aktivierung erfolgreich")\n        print("Gateway-Adresse:", gateway_address)\n        print("Tester-Adresse:", tester_address)\n    else:\n        print("Routing-Aktivierung fehlgeschlagen, Statuscode:", status)\n\n# Beispielantwort\nresponse = b\'\\x00\\x02\\x01\\x02\\x03\'\nparse_response(response)\n'})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var r=i(96540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);