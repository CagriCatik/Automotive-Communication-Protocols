"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[5815],{93776:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"CAN/can-kommunikation/kommunikationsprinzip","title":"CAN-Kommunikationsprinzips im Fahrzeug","description":"Im Folgenden wird das CAN-Kommunikationsprinzip im Detail erkl\xe4rt. Das Ziel ist es, ein tiefes Verst\xe4ndnis der Struktur und Funktionsweise eines CAN-Netzwerks im Fahrzeug zu vermitteln. Dabei wird besonders auf die Aspekte der Dezentralisierung, Ereignisorientierung und empf\xe4ngerselektiven Adressierung eingegangen. Zus\xe4tzlich wird die Kommunikationsmatrix ausf\xfchrlich behandelt, um die komplexen Interaktionen zwischen den CAN-Knoten zu verdeutlichen.","source":"@site/docs/CAN/02_can-kommunikation/08_kommunikationsprinzip.md","sourceDirName":"CAN/02_can-kommunikation","slug":"/CAN/can-kommunikation/kommunikationsprinzip","permalink":"/Vehicle-Network-Standards/docs/CAN/can-kommunikation/kommunikationsprinzip","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/02_can-kommunikation/08_kommunikationsprinzip.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"CAN-Buslogik im Fahrzeug","permalink":"/Vehicle-Network-Standards/docs/CAN/can-kommunikation/buslogik"},"next":{"title":"CAN-Framing","permalink":"/Vehicle-Network-Standards/docs/CAN/can-framing/"}}');var t=i(74848),s=i(28453);const d={},l="CAN-Kommunikationsprinzips im Fahrzeug",a={},h=[{value:"1. Dezentralisierung",id:"1-dezentralisierung",level:2},{value:"Vorteile der Dezentralisierung",id:"vorteile-der-dezentralisierung",level:3},{value:"2. Ereignisorientierung",id:"2-ereignisorientierung",level:2},{value:"Merkmale der ereignisorientierten Kommunikation",id:"merkmale-der-ereignisorientierten-kommunikation",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"3. Empf\xe4ngerselektive Adressierung",id:"3-empf\xe4ngerselektive-adressierung",level:2},{value:"Funktionsweise",id:"funktionsweise",level:3},{value:"Vorteile",id:"vorteile",level:3},{value:"4. Kommunikationsmatrix im CAN-Netzwerk",id:"4-kommunikationsmatrix-im-can-netzwerk",level:2},{value:"Aufbau der Kommunikationsmatrix",id:"aufbau-der-kommunikationsmatrix",level:3},{value:"Beispielhafte Kommunikationsmatrix",id:"beispielhafte-kommunikationsmatrix",level:3},{value:"Interpretation der Matrix",id:"interpretation-der-matrix",level:3},{value:"5. Funktionsweise der CAN-Kommunikation",id:"5-funktionsweise-der-can-kommunikation",level:2},{value:"Struktur eines CAN-Knotens",id:"struktur-eines-can-knotens",level:3},{value:"Kommunikationsablauf",id:"kommunikationsablauf",level:3},{value:"6. Praxisbeispiel",id:"6-praxisbeispiel",level:2},{value:"Kommunikationsmatrix f\xfcr das Fahrzeug",id:"kommunikationsmatrix-f\xfcr-das-fahrzeug",level:3},{value:"Schlussfolgerung",id:"schlussfolgerung",level:2}];function u(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"can-kommunikationsprinzips-im-fahrzeug",children:"CAN-Kommunikationsprinzips im Fahrzeug"})}),"\n",(0,t.jsx)(n.p,{children:"Im Folgenden wird das CAN-Kommunikationsprinzip im Detail erkl\xe4rt. Das Ziel ist es, ein tiefes Verst\xe4ndnis der Struktur und Funktionsweise eines CAN-Netzwerks im Fahrzeug zu vermitteln. Dabei wird besonders auf die Aspekte der Dezentralisierung, Ereignisorientierung und empf\xe4ngerselektiven Adressierung eingegangen. Zus\xe4tzlich wird die Kommunikationsmatrix ausf\xfchrlich behandelt, um die komplexen Interaktionen zwischen den CAN-Knoten zu verdeutlichen."}),"\n",(0,t.jsx)(n.h2,{id:"1-dezentralisierung",children:"1. Dezentralisierung"}),"\n",(0,t.jsx)(n.p,{children:"In sicherheitskritischen Anwendungen, wie dem Antriebsstrang eines Fahrzeugs, ist eine hohe Verf\xfcgbarkeit des Kommunikationssystems unerl\xe4sslich. Die Dezentralisierung des Buszugriffs spielt hierbei eine entscheidende Rolle."}),"\n",(0,t.jsx)(n.h3,{id:"vorteile-der-dezentralisierung",children:"Vorteile der Dezentralisierung"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Erh\xf6hte Redundanz"}),": Jeder CAN-Knoten besitzt das Recht, auf den Bus zuzugreifen. Dies bedeutet, dass der Ausfall eines einzelnen Knoten nicht den Ausfall des gesamten Systems zur Folge hat."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lastverteilung"}),": Die Verteilung der Kommunikationslast auf mehrere Knoten verhindert die \xdcberlastung einzelner Komponenten und sorgt f\xfcr eine gleichm\xe4\xdfige Auslastung des Systems."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ausfallsicherheit"}),": Durch die Dezentralisierung wird die Ausfallsicherheit des Netzwerks erh\xf6ht, da kein einzelner Punkt als Schwachstelle existiert."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-ereignisorientierung",children:"2. Ereignisorientierung"}),"\n",(0,t.jsx)(n.p,{children:"Ein CAN-Netzwerk verwendet eine ereignisorientierte Kommunikationsstrategie, die es erm\xf6glicht, effizient und schnell auf \xc4nderungen zu reagieren. Dies unterscheidet sich grundlegend von zeitgesteuerten Systemen, bei denen Nachrichten in festen Intervallen gesendet werden."}),"\n",(0,t.jsx)(n.h3,{id:"merkmale-der-ereignisorientierten-kommunikation",children:"Merkmale der ereignisorientierten Kommunikation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Asynchrone Daten\xfcbertragung"}),": Nachrichten werden nur gesendet, wenn Ereignisse dies erfordern. Dies reduziert die unn\xf6tige Belastung des Netzwerks."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hohe Reaktionsgeschwindigkeit"}),": CAN-Netzwerke k\xf6nnen auf Ereignisse in Echtzeit reagieren, was besonders f\xfcr sicherheitskritische Anwendungen wichtig ist."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Effiziente Bandbreitennutzung"}),": Die \xdcbertragungskapazit\xe4t wird optimal genutzt, da nur relevante Daten gesendet werden."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)(n.p,{children:"Ein Sensor in einem Fahrzeug detektiert eine pl\xf6tzliche Bremsung und sendet sofort eine entsprechende Nachricht an das Steuerger\xe4t. Da das Netzwerk ereignisorientiert arbeitet, wird die Nachricht umgehend verarbeitet und die erforderlichen Ma\xdfnahmen werden eingeleitet."}),"\n",(0,t.jsx)(n.h2,{id:"3-empf\xe4ngerselektive-adressierung",children:"3. Empf\xe4ngerselektive Adressierung"}),"\n",(0,t.jsx)(n.p,{children:"Um eine flexible und skalierbare Netzwerkkonfiguration zu erm\xf6glichen, verwendet das CAN-System eine empf\xe4ngerselektive Adressierung. Dies bedeutet, dass jede Nachricht von jedem Knoten empfangen werden kann, aber nur die relevanten Knoten die Nachricht weiterverarbeiten."}),"\n",(0,t.jsx)(n.h3,{id:"funktionsweise",children:"Funktionsweise"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Botschaftskennung (Identifier)"}),": Jede CAN-Nachricht ist mit einer eindeutigen Kennung versehen. Diese Kennung dient zur Identifizierung der Nachricht und zur Steuerung der Priorit\xe4t bei der Busarbitrierung."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Filterung"}),": Jeder CAN-Knoten verf\xfcgt \xfcber Filter, die bestimmen, welche Nachrichten weiterverarbeitet werden sollen. Diese Filter werden individuell konfiguriert und erm\xf6glichen eine zielgerichtete Datenverarbeitung."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"vorteile",children:"Vorteile"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Flexibilit\xe4t"}),": Neue Knoten k\xf6nnen problemlos in das Netzwerk integriert werden, ohne bestehende Knoten oder die Netzwerkkonfiguration \xe4ndern zu m\xfcssen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reduzierung der Buslast"}),": Durch die Filterung werden nur relevante Nachrichten weiterverarbeitet, was die Effizienz des Netzwerks erh\xf6ht."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"4-kommunikationsmatrix-im-can-netzwerk",children:"4. Kommunikationsmatrix im CAN-Netzwerk"}),"\n",(0,t.jsx)(n.p,{children:"Die Kommunikationsmatrix ist ein zentrales Element zur Planung und Analyse der Datenstr\xf6me innerhalb eines CAN-Netzwerks. Sie definiert, welcher Knoten welche Nachrichten sendet und empf\xe4ngt."}),"\n",(0,t.jsx)(n.h3,{id:"aufbau-der-kommunikationsmatrix",children:"Aufbau der Kommunikationsmatrix"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Datenrahmen (IDs)"}),": Jede Zeile in der Matrix repr\xe4sentiert einen Datenrahmen mit einer spezifischen Kennung."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Knoten"}),": Die Spalten repr\xe4sentieren die verschiedenen CAN-Knoten im Netzwerk."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sendende und empfangende Knoten"}),": Die Matrixeintr\xe4ge zeigen an, welcher Knoten als Sender und welcher als Empf\xe4nger fungiert."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"beispielhafte-kommunikationsmatrix",children:"Beispielhafte Kommunikationsmatrix"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data Frame"}),(0,t.jsx)(n.th,{children:"CAN-Knoten A"}),(0,t.jsx)(n.th,{children:"CAN-Knoten B"}),(0,t.jsx)(n.th,{children:"CAN-Knoten C"}),(0,t.jsx)(n.th,{children:"CAN-Knoten D"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID=0x12"}),(0,t.jsx)(n.td,{children:"Sender"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID=0x34"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Sender"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID=0x52"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{children:"Sender"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID=0x67"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{children:"Sender"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID=0xB4"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Sender"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID=0x3A5"}),(0,t.jsx)(n.td,{children:"Sender"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"interpretation-der-matrix",children:"Interpretation der Matrix"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ID=0x12"}),": Knoten A sendet, Knoten B empf\xe4ngt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ID=0x34"}),": Knoten B sendet, Knoten C und D empfangen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ID=0x52"}),": Knoten D sendet, Knoten C empf\xe4ngt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ID=0x67"}),": Knoten C sendet, Knoten A, B und D empfangen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ID=0xB4"}),": Knoten C sendet, Knoten A empf\xe4ngt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ID=0x3A5"}),": Knoten A sendet, Knoten B, C und D empfangen."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diese Matrix erm\xf6glicht eine klare und strukturierte \xdcbersicht \xfcber die Kommunikationswege im Netzwerk und unterst\xfctzt bei der Planung und Fehlersuche."}),"\n",(0,t.jsx)(n.h2,{id:"5-funktionsweise-der-can-kommunikation",children:"5. Funktionsweise der CAN-Kommunikation"}),"\n",(0,t.jsx)(n.h3,{id:"struktur-eines-can-knotens",children:"Struktur eines CAN-Knotens"}),"\n",(0,t.jsx)(n.p,{children:"Jeder CAN-Knoten besteht aus einem Host und einer CAN-Schnittstelle, die verschiedene Komponenten enth\xe4lt:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sendepuffer"}),": Speichert die zu sendenden Nachrichten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Empfangspuffer"}),": Speichert die empfangenen Nachrichten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Akzeptanzpr\xfcfung"}),": Pr\xfcft, ob eine empfangene Nachricht f\xfcr den Knoten bestimmt ist."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Senden und Empfangen"}),": \xdcber die CAN-Schnittstelle werden Nachrichten gesendet und empfangen."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:"./image/1712019772308.png",alt:"CAN-Knoten",style:"max-width:90%; display: block; margin: 0 auto;"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)("img",{src:"./image/1712019810828.png",alt:"CAN-Knoten",style:"max-width:90%; display: block; margin: 0 auto;"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)("img",{src:"./image/1712020016743.png",alt:"CAN-Knoten",style:"max-width:90%; display: block; margin: 0 auto;"}),"\n",(0,t.jsx)(n.h3,{id:"kommunikationsablauf",children:"Kommunikationsablauf"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Nachricht senden"}),": Der Host legt eine Nachricht in den Sendepuffer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Busarbitrierung"}),": Der CAN-Controller pr\xfcft die Busverf\xfcgbarkeit und f\xfchrt eine Priorit\xe4tsarbitrierung durch."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Nachricht empfangen"}),": Empf\xe4nger-Knoten pr\xfcfen anhand der Kennung und Filter, ob die Nachricht relevant ist und legen sie im Empfangspuffer ab."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Nachrichtenverarbeitung"}),": Der Host des Empf\xe4nger-Knotens verarbeitet die empfangene Nachricht weiter."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"6-praxisbeispiel",children:"6. Praxisbeispiel"}),"\n",(0,t.jsx)(n.p,{children:"Stellen Sie sich vor, ein modernes Fahrzeug verf\xfcgt \xfcber mehrere Steuerger\xe4te, die \xfcber ein CAN-Netzwerk verbunden sind. Jedes Steuerger\xe4t (ECU) ist ein CAN-Knoten und kommuniziert mit anderen Knoten, um verschiedene Funktionen zu steuern:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Motorsteuerger\xe4t (ECU A)"}),": Sendet Daten \xfcber Motordrehzahl (ID=0x12)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Getriebesteuerger\xe4t (ECU B)"}),": Empf\xe4ngt Motordrehzahldaten und sendet Ganginformationen (ID=0x34)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ABS-Steuerger\xe4t (ECU C)"}),": Empf\xe4ngt Daten von beiden Steuerger\xe4ten und sendet Bremsinformationen (ID=0x67)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"kommunikationsmatrix-f\xfcr-das-fahrzeug",children:"Kommunikationsmatrix f\xfcr das Fahrzeug"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data Frame"}),(0,t.jsx)(n.th,{children:"Motorsteuerger\xe4t"}),(0,t.jsx)(n.th,{children:"Getriebesteuerger\xe4t"}),(0,t.jsx)(n.th,{children:"ABS-Steuerger\xe4t"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID=0x12"}),(0,t.jsx)(n.td,{children:"Sender"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID=0x34"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Sender"}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID=0x67"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Empf\xe4nger"}),(0,t.jsx)(n.td,{children:"Sender"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Dieses Beispiel zeigt, wie die verschiedenen Steuerger\xe4te im Fahrzeug \xfcber ein CAN-Netzwerk interagieren und Informationen austauschen."}),"\n",(0,t.jsx)(n.h2,{id:"schlussfolgerung",children:"Schlussfolgerung"}),"\n",(0,t.jsx)(n.p,{children:"Ein CAN-Netzwerk im Fahrzeug bietet eine zuverl\xe4ssige und flexible Kommunikationsplattform f\xfcr sicherheitskritische Anwendungen. Durch die Dezentralisierung des Buszugriffs, ereignisorientierte Daten\xfcbertragung und empf\xe4ngerselektive Adressierung wird eine hohe Verf\xfcgbarkeit und Effizienz gew\xe4hrleistet. Die Kommunikationsmatrix hilft bei der Planung und Verwaltung der Datenstr\xf6me im Netzwerk und unterst\xfctzt bei der Integration neuer Knoten."})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);