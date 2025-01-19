"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[9885],{26282:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"DoIP/DoIP_Message/routing-activation-response","title":"Routing Activation Response","description":"Die Routing Activation Response ist eine wichtige Antwortnachricht im DoIP-Protokoll (Diagnostics over Internet Protocol). Sie wird vom Gateway an den Diagnosetester gesendet, um den Status der angeforderten Routing-Aktivierung zu best\xe4tigen. Diese Nachricht zeigt an, ob die Aktivierung interner Fahrzeugnetzwerke erfolgreich war oder nicht.","source":"@site/docs/DoIP/05_DoIP_Message/05_routing-activation-response.md","sourceDirName":"DoIP/05_DoIP_Message","slug":"/DoIP/DoIP_Message/routing-activation-response","permalink":"/Vehicle-Network-Standards/docs/DoIP/DoIP_Message/routing-activation-response","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DoIP/05_DoIP_Message/05_routing-activation-response.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"doipSidebar","previous":{"title":"Routing Activation Request","permalink":"/Vehicle-Network-Standards/docs/DoIP/DoIP_Message/routing-activation-request"},"next":{"title":"DoIP mit UDS-Diagnoseinformation","permalink":"/Vehicle-Network-Standards/docs/DoIP/DoIP_Message/doip-uds-diagnoseinformationen"}}');var r=s(74848),t=s(28453);const o={},d="Routing Activation Response",l={},c=[{value:"Nachrichtenstruktur",id:"nachrichtenstruktur",level:2},{value:"Beschreibung der Felder",id:"beschreibung-der-felder",level:2},{value:"<strong>Logical Address of Tester</strong>",id:"logical-address-of-tester",level:3},{value:"<strong>Logical Address of DoIP Entity</strong>",id:"logical-address-of-doip-entity",level:3},{value:"<strong>Routing Activation Response Code</strong>",id:"routing-activation-response-code",level:3},{value:"<strong>Reserved by ISO 13400</strong>",id:"reserved-by-iso-13400",level:3},{value:"<strong>Reserved for OEM-specific use</strong>",id:"reserved-for-oem-specific-use",level:3},{value:"Ablauf der Routing Activation Response",id:"ablauf-der-routing-activation-response",level:2},{value:"Beispielnachrichten",id:"beispielnachrichten",level:2},{value:"Erfolgreiche Routing Activation Response",id:"erfolgreiche-routing-activation-response",level:3},{value:"Fehlgeschlagene Routing Activation Response",id:"fehlgeschlagene-routing-activation-response",level:3},{value:"Relevante Codebeispiele",id:"relevante-codebeispiele",level:2},{value:"Beispiel: Empfang einer Routing Activation Response",id:"beispiel-empfang-einer-routing-activation-response",level:3},{value:"H\xe4ufige Probleme und L\xf6sungen",id:"h\xe4ufige-probleme-und-l\xf6sungen",level:2},{value:"Problem 1: Keine Antwort vom Gateway",id:"problem-1-keine-antwort-vom-gateway",level:3},{value:"Problem 2: Aktivierung fehlgeschlagen",id:"problem-2-aktivierung-fehlgeschlagen",level:3},{value:"Problem 3: Unerwarteter Response Code",id:"problem-3-unerwarteter-response-code",level:3}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"routing-activation-response",children:"Routing Activation Response"})}),"\n",(0,r.jsxs)(n.p,{children:["Die ",(0,r.jsx)(n.strong,{children:"Routing Activation Response"})," ist eine wichtige Antwortnachricht im DoIP-Protokoll (Diagnostics over Internet Protocol). Sie wird vom Gateway an den Diagnosetester gesendet, um den Status der angeforderten Routing-Aktivierung zu best\xe4tigen. Diese Nachricht zeigt an, ob die Aktivierung interner Fahrzeugnetzwerke erfolgreich war oder nicht."]}),"\n",(0,r.jsx)(n.h2,{id:"nachrichtenstruktur",children:"Nachrichtenstruktur"}),"\n",(0,r.jsx)(n.p,{children:"Die Routing Activation Response-Nachricht besteht aus folgenden Feldern:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"L\xe4nge"}),(0,r.jsx)(n.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Protocol Version"})}),(0,r.jsx)(n.td,{children:"1 Byte"}),(0,r.jsx)(n.td,{children:"Version des verwendeten DoIP-Protokolls."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Inverse Protocol Version"})}),(0,r.jsx)(n.td,{children:"1 Byte"}),(0,r.jsx)(n.td,{children:"Sicherheitspr\xfcfung (Komplement der Protokollversion)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Payload Type"})}),(0,r.jsx)(n.td,{children:"2 Bytes"}),(0,r.jsxs)(n.td,{children:["Typ der Nachricht (",(0,r.jsx)(n.code,{children:"0x0006"}),")."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Payload Length"})}),(0,r.jsx)(n.td,{children:"4 Bytes"}),(0,r.jsx)(n.td,{children:"L\xe4nge des Nutzdatenfeldes in Bytes."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Logical Address of Tester"})}),(0,r.jsx)(n.td,{children:"2 Bytes"}),(0,r.jsx)(n.td,{children:"Logische Adresse des Diagnosetesters."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Logical Address of DoIP entity"})}),(0,r.jsx)(n.td,{children:"2 Bytes"}),(0,r.jsx)(n.td,{children:"Logische Adresse des angesprochenen DoIP-Moduls."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Routing Activation Response Code"})}),(0,r.jsx)(n.td,{children:"1 Byte"}),(0,r.jsx)(n.td,{children:"Status der Routing-Aktivierung."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Reserved by ISO 13400"})}),(0,r.jsx)(n.td,{children:"4 Bytes"}),(0,r.jsxs)(n.td,{children:["Reserviert f\xfcr zuk\xfcnftige Verwendungen (Standard: ",(0,r.jsx)(n.code,{children:"0x00000000"}),")."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Reserved for OEM-specific use"})}),(0,r.jsx)(n.td,{children:"4 Bytes"}),(0,r.jsx)(n.td,{children:"Optional, f\xfcr herstellerspezifische Informationen."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"beschreibung-der-felder",children:"Beschreibung der Felder"}),"\n",(0,r.jsx)(n.h3,{id:"logical-address-of-tester",children:(0,r.jsx)(n.strong,{children:"Logical Address of Tester"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xe4nge"}),": 2 Bytes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Beschreibung"}),": Eindeutige logische Adresse des Diagnosetesters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),": ",(0,r.jsx)(n.code,{children:"0x0203"})," (Adresse des Testers)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"logical-address-of-doip-entity",children:(0,r.jsx)(n.strong,{children:"Logical Address of DoIP Entity"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xe4nge"}),": 2 Bytes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Beschreibung"}),": Logische Adresse des Gateways oder der spezifischen DoIP-Einheit im Fahrzeug."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),": ",(0,r.jsx)(n.code,{children:"0x0201"})," (Adresse des Gateways)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"routing-activation-response-code",children:(0,r.jsx)(n.strong,{children:"Routing Activation Response Code"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xe4nge"}),": 1 Byte."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Beschreibung"}),": Zeigt den Status der Routing-Aktivierung an."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"M\xf6gliche Werte"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0x00"}),": Aktivierung erfolgreich."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0x01"}),": Aktivierung fehlgeschlagen (z. B. Sicherheitsprobleme)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0x02"}),": Unbekannter Activation Type."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reserved-by-iso-13400",children:(0,r.jsx)(n.strong,{children:"Reserved by ISO 13400"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xe4nge"}),": 4 Bytes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Beschreibung"}),": Reservierter Bereich f\xfcr zuk\xfcnftige Spezifikationen durch die ISO 13400."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Standardwert"}),": ",(0,r.jsx)(n.code,{children:"0x00000000"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reserved-for-oem-specific-use",children:(0,r.jsx)(n.strong,{children:"Reserved for OEM-specific use"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xe4nge"}),": 4 Bytes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Beschreibung"}),": Optionales Feld f\xfcr OEM-spezifische Informationen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),": Zus\xe4tzliche Statusinformationen oder herstellerspezifische Fehlercodes."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ablauf-der-routing-activation-response",children:"Ablauf der Routing Activation Response"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Senden der Routing Activation Request"}),":",(0,r.jsx)(n.br,{}),"\n","Der Diagnosetester initiiert eine Routing Activation Request-Nachricht."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Verarbeitung durch das Gateway"}),":",(0,r.jsx)(n.br,{}),"\n","Das Gateway verarbeitet die Anfrage, aktiviert die angeforderten Netzwerke und erstellt eine Routing Activation Response."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Antwort an den Tester"}),":",(0,r.jsx)(n.br,{}),"\n","Das Gateway sendet die Routing Activation Response zur\xfcck an den Tester, um den Status der Anfrage zu best\xe4tigen."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"beispielnachrichten",children:"Beispielnachrichten"}),"\n",(0,r.jsx)(n.h3,{id:"erfolgreiche-routing-activation-response",children:"Erfolgreiche Routing Activation Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Protocol Version: 0x02\nInverse Protocol Version: 0xFD\nPayload Type: 0x0006\nPayload Length: 9 Bytes\nLogical Address of Tester: 0x0203\nLogical Address of DoIP entity: 0x0201\nRouting Activation Response Code: 0x00 (Erfolg)\nReserved by ISO 13400: 0x00000000\nReserved for OEM-specific use: 0x00000000\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fehlgeschlagene-routing-activation-response",children:"Fehlgeschlagene Routing Activation Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Protocol Version: 0x02\nInverse Protocol Version: 0xFD\nPayload Type: 0x0006\nPayload Length: 9 Bytes\nLogical Address of Tester: 0x0203\nLogical Address of DoIP entity: 0x0201\nRouting Activation Response Code: 0x01 (Fehler)\nReserved by ISO 13400: 0x00000000\nReserved for OEM-specific use: 0x00000000\n"})}),"\n",(0,r.jsx)(n.h2,{id:"relevante-codebeispiele",children:"Relevante Codebeispiele"}),"\n",(0,r.jsx)(n.h3,{id:"beispiel-empfang-einer-routing-activation-response",children:"Beispiel: Empfang einer Routing Activation Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import socket\n\n# Verbindungsparameter\ngateway_ip = "192.168.1.2"\ngateway_port = 13400\n\n# Verbindung herstellen\nwith socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n    s.connect((gateway_ip, gateway_port))\n    \n    # Nachricht senden (Routing Activation Request sollte zuvor gesendet werden)\n    response = s.recv(1024)\n\n# Antwort auswerten\nif response:\n    protocol_version = response[0]\n    inverse_protocol_version = response[1]\n    payload_type = int.from_bytes(response[2:4], "big")\n    payload_length = int.from_bytes(response[4:8], "big")\n    tester_address = int.from_bytes(response[8:10], "big")\n    doip_entity_address = int.from_bytes(response[10:12], "big")\n    response_code = response[12]\n\n    print(f"Protokoll-Version: {protocol_version}")\n    print(f"Payload-Typ: {payload_type}")\n    print(f"Tester-Adresse: 0x{tester_address:04X}")\n    print(f"DoIP-Entit\xe4t-Adresse: 0x{doip_entity_address:04X}")\n    print(f"Antwortcode: {response_code}")\nelse:\n    print("Keine Antwort erhalten.")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"h\xe4ufige-probleme-und-l\xf6sungen",children:"H\xe4ufige Probleme und L\xf6sungen"}),"\n",(0,r.jsx)(n.h3,{id:"problem-1-keine-antwort-vom-gateway",children:"Problem 1: Keine Antwort vom Gateway"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ursache"}),": Die Routing Activation Request wurde nicht korrekt verarbeitet."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xf6sung"}),": \xdcberpr\xfcfen Sie die Struktur der Request-Nachricht und stellen Sie sicher, dass die Netzwerkverbindung besteht."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"problem-2-aktivierung-fehlgeschlagen",children:"Problem 2: Aktivierung fehlgeschlagen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ursache"}),": Unbekannter Activation Type oder Sicherheitsprobleme."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xf6sung"}),": Stellen Sie sicher, dass der Activation Type unterst\xfctzt wird und die Sicherheitsmechanismen korrekt konfiguriert sind."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"problem-3-unerwarteter-response-code",children:"Problem 3: Unerwarteter Response Code"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ursache"}),": Kommunikationsfehler oder falsche Einstellungen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L\xf6sung"}),": Pr\xfcfen Sie die Fehlermeldung im Response Code und debuggen Sie die Anfrage."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);