"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8921],{65052:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"SOME-IP/grundlagen/layout","title":"Layout von Signalen, PDUs und Frames","description":"Layout von Signalen, PDUs und Frames","source":"@site/docs/SOME-IP/01_grundlagen/02_layout.md","sourceDirName":"SOME-IP/01_grundlagen","slug":"/SOME-IP/grundlagen/layout","permalink":"/Vehicle-Network-Standards/docs/SOME-IP/grundlagen/layout","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SOME-IP/01_grundlagen/02_layout.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"someipSidebar","previous":{"title":"AUTOSAR PDU (Protokolldateneinheit)","permalink":"/Vehicle-Network-Standards/docs/SOME-IP/grundlagen/kommunikation"},"next":{"title":"Datenaustausch \xfcber Ethernet Backbone","permalink":"/Vehicle-Network-Standards/docs/SOME-IP/grundlagen/datenaustausch"}}');var t=i(74848),s=i(28453);const a={},l="Layout von Signalen, PDUs und Frames",d={},u=[{value:"Layout von Signalen, PDUs und Frames",id:"layout-von-signalen-pdus-und-frames-1",level:2},{value:"Hierarchische Struktur: Signale, PDUs und Frames",id:"hierarchische-struktur-signale-pdus-und-frames",level:3},{value:"2.2.2 Struktur von Signalen",id:"222-struktur-von-signalen",level:3},{value:"2.2.3 Struktur von Protokolldateneinheiten (PDUs)",id:"223-struktur-von-protokolldateneinheiten-pdus",level:3},{value:"2.2.4 Struktur von Frames",id:"224-struktur-von-frames",level:3},{value:"2.2.5 Signal-Mapping: Von Signalen zu PDUs zu Frames",id:"225-signal-mapping-von-signalen-zu-pdus-zu-frames",level:3},{value:"2.2.6 Beispiele f\xfcr typische Layouts in automobilen Systemen",id:"226-beispiele-f\xfcr-typische-layouts-in-automobilen-systemen",level:3},{value:"2.2.7 Best Practices",id:"227-best-practices",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"layout-von-signalen-pdus-und-frames",children:"Layout von Signalen, PDUs und Frames"})}),"\n",(0,t.jsx)(n.h2,{id:"layout-von-signalen-pdus-und-frames-1",children:"Layout von Signalen, PDUs und Frames"}),"\n",(0,t.jsx)(n.p,{children:"In der automobilen Kommunikation, besonders im Rahmen von AUTOSAR (AUTomotive Open System ARchitecture), sind Signale, Protokolldateneinheiten (PDUs) und Frames die zentralen Bausteine f\xfcr den Datenaustausch zwischen elektronischen Steuerger\xe4ten (ECUs). Diese Elemente sind hierarchisch organisiert und bilden die Grundlage f\xfcr die strukturierte und effiziente Daten\xfcbertragung innerhalb eines Fahrzeugs. Dieser Abschnitt bietet eine umfassende Analyse der Struktur und des Layouts dieser Komponenten, erg\xe4nzt durch reale Beispiele, detaillierte Diagramme und Best Practices."}),"\n",(0,t.jsx)(n.h3,{id:"hierarchische-struktur-signale-pdus-und-frames",children:"Hierarchische Struktur: Signale, PDUs und Frames"}),"\n",(0,t.jsx)(n.p,{children:"Die Kommunikation in einem AUTOSAR-basierten Fahrzeugnetzwerk folgt einer streng hierarchischen Struktur:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Signale: Die kleinste Daten- und Informationseinheit, die spezifische Fahrzeugzust\xe4nde oder -informationen darstellt, wie z. B. die Geschwindigkeit oder Motortemperatur."}),"\n",(0,t.jsx)(n.li,{children:"Protokolldateneinheiten (PDUs): Container f\xfcr Signale. Eine PDU enth\xe4lt mehrere Signale und zus\xe4tzliche Steuerinformationen, die f\xfcr den Transport und die Interpretation der Signale notwendig sind."}),"\n",(0,t.jsx)(n.li,{children:"Frames: Eine oder mehrere PDUs werden in einem Frame zusammengefasst, der \xfcber das Netzwerkprotokoll (z. B. CAN, LIN, FlexRay) \xfcbertragen wird. Der Frame stellt sicher, dass die PDUs korrekt adressiert und priorisiert werden."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diagramm zur Veranschaulichung der Hierarchie:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"+------------------------------------------------------------+\n|                         Frame                              |\n| +--------------------------------------------------------+ |\n| |                    PDU (Protokolldateneinheit)          | |\n| | +------------------------------------+ +--------------+ | |\n| | |          Signal 1                  | | Signal 2     | | |\n| | +------------------------------------+ +--------------+ | |\n| | +--------------+ +-----------------------------+       | |\n| | |   Signal 3   | |   Signal 4                  |       | |\n| | +--------------+ +-----------------------------+       | |\n| +--------------------------------------------------------+ |\n+------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"222-struktur-von-signalen",children:"2.2.2 Struktur von Signalen"}),"\n",(0,t.jsx)(n.p,{children:"Definition:\nEin Signal ist die kleinste Informationseinheit im Netzwerk eines Fahrzeugs. Es repr\xe4sentiert eine spezifische Dateninformation, die von einem Sensor, Aktuator oder einer ECU stammt und typischerweise in Echtzeit verarbeitet wird."}),"\n",(0,t.jsx)(n.p,{children:"Typische Eigenschaften eines Signals:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name: Eindeutige Bezeichnung des Signals, wie \u201eVehicleSpeed\u201c oder \u201eEngineTemperature\u201c."}),"\n",(0,t.jsx)(n.li,{children:"Startbit: Die genaue Bit-Position innerhalb der PDU, an der das Signal beginnt."}),"\n",(0,t.jsx)(n.li,{children:"L\xe4nge: Die Anzahl der Bits, die das Signal belegt (z. B. 8 Bit f\xfcr ein 1-Byte-Signal)."}),"\n",(0,t.jsx)(n.li,{children:"Endianness: Die Anordnung der Bytes im Signal (Big-Endian oder Little-Endian)."}),"\n",(0,t.jsx)(n.li,{children:"Skalierungsfaktor: Definiert das Verh\xe4ltnis zwischen dem digitalen Wert und dem physikalischen Wert des Signals."}),"\n",(0,t.jsx)(n.li,{children:"Offset: Ein konstanter Wert, der zum digitalen Wert des Signals hinzugef\xfcgt wird, um den tats\xe4chlichen physikalischen Wert zu berechnen."}),"\n",(0,t.jsx)(n.li,{children:"Signaltyp: Typ der Daten (z. B. Integer, Float, Boolean)."}),"\n",(0,t.jsx)(n.li,{children:"Wertebereich: Der zul\xe4ssige Bereich der Werte, den das Signal annehmen kann."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Beispiel:\nDas Signal \u201eMotorTemperatur\u201c k\xf6nnte folgenderma\xdfen definiert sein:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L\xe4nge: 8 Bit (1 Byte)"}),"\n",(0,t.jsx)(n.li,{children:"Skalierungsfaktor: 0,5"}),"\n",(0,t.jsx)(n.li,{children:"Offset: -40"}),"\n",(0,t.jsx)(n.li,{children:"Wertebereich: -40 bis 215 \xb0C"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diagramm: Struktur eines Signals innerhalb einer PDU:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"+--------------------+--------------------+--------------------+\n| Signalname:        | MotorTemperatur    |                    |\n+--------------------+--------------------+--------------------+\n| L\xe4nge:             | 8 Bit (1 Byte)     |                    |\n+--------------------+--------------------+--------------------+\n| Startbit:          | Bit 0              |                    |\n+--------------------+--------------------+--------------------+\n| Skalierungsfaktor: | 0,5                |                    |\n+--------------------+--------------------+--------------------+\n| Offset:            | -40                |                    |\n+--------------------+--------------------+--------------------+\n| Endianness:        | Little-Endian      |                    |\n+--------------------+--------------------+--------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"223-struktur-von-protokolldateneinheiten-pdus",children:"2.2.3 Struktur von Protokolldateneinheiten (PDUs)"}),"\n",(0,t.jsx)(n.p,{children:"Definition:\nEine PDU ist ein Datencontainer, der mehrere Signale enth\xe4lt. Sie bildet die direkte Einheit, die auf einem Kommunikationsbus \xfcbertragen wird. PDUs enthalten neben den Signaldaten auch Steuerinformationen, die notwendig sind, um die Daten korrekt zu adressieren, zu interpretieren und weiterzuleiten."}),"\n",(0,t.jsx)(n.p,{children:"Aufbau einer PDU:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PDU-ID: Eine eindeutige Kennung, die die PDU identifiziert."}),"\n",(0,t.jsx)(n.li,{children:"L\xe4nge: Die Gesamtl\xe4nge der PDU in Bytes."}),"\n",(0,t.jsx)(n.li,{children:"Signaldaten: Die eigentlichen Daten, bestehend aus den Signalen, die in der PDU enthalten sind."}),"\n",(0,t.jsx)(n.li,{children:"Header: Enth\xe4lt Kontrollinformationen, wie z. B. den Zielknoten, die Priorit\xe4t der Nachricht, den Protokolltyp und eine Pr\xfcfsumme zur Fehlererkennung."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Beispiel einer PDU:\nAngenommen, eine PDU enth\xe4lt die Signale f\xfcr \u201eFahrzeuggeschwindigkeit\u201c (16 Bit) und \u201eMotortemperatur\u201c (8 Bit). Die PDU h\xe4tte eine L\xe4nge von 3 Bytes und k\xf6nnte folgenderma\xdfen strukturiert sein:"}),"\n",(0,t.jsx)(n.p,{children:"Diagramm: Aufbau einer PDU mit mehreren Signalen:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"+-----------------+----------------+----------------+----------------+\n| PDU-ID (8 Bit)  | L\xe4nge (8 Bit)   | Signal 1:      | Signal 2:       |\n|                 |                 | VehicleSpeed   | MotorTemperature|\n|                 |                 | (16 Bit)       | (8 Bit)         |\n+-----------------+----------------+----------------+----------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"224-struktur-von-frames",children:"2.2.4 Struktur von Frames"}),"\n",(0,t.jsx)(n.p,{children:"Definition:\nEin Frame ist die gr\xf6\xdfte Einheit in der Kommunikationshierarchie und enth\xe4lt eine oder mehrere PDUs. Frames werden \xfcber das Netzwerkprotokoll, z. B. CAN, FlexRay oder LIN, \xfcbertragen. Der Frame ist verantwortlich daf\xfcr, dass die PDUs korrekt adressiert und im Netzwerk \xfcbertragen werden."}),"\n",(0,t.jsx)(n.p,{children:"Aufbau eines Frames:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Frame-Header: Enth\xe4lt Informationen zur Adressierung, zur Steuerung der \xdcbertragung und zur Priorit\xe4t des Frames."}),"\n",(0,t.jsx)(n.li,{children:"Payload (Nutzdaten): Der eigentliche Inhalt des Frames, bestehend aus einer oder mehreren PDUs."}),"\n",(0,t.jsx)(n.li,{children:"Frame-Trailer: Optional, enth\xe4lt Informationen wie Pr\xfcfsummen zur Fehlererkennung und -korrektur."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Beispiel eines Frames:\nEin CAN-Frame k\xf6nnte wie folgt strukturiert sein:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Frame-Header: Enth\xe4lt den 11-Bit-Identifier, der den Frame eindeutig identifiziert, sowie Steuerinformationen."}),"\n",(0,t.jsx)(n.li,{children:"Payload: Besteht aus einer PDU mit Fahrzeugdaten."}),"\n",(0,t.jsx)(n.li,{children:"Frame-Trailer: Enth\xe4lt eine Pr\xfcfsumme zur Sicherstellung der Datenintegrit\xe4t."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diagramm: Aufbau eines CAN-Frames:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"+-------------------+-------------------+----------------------+\n| 11-Bit Identifier | Steuerinformationen| PDU (Signale)        |\n+-------------------+-------------------+----------------------+\n| Frame-Trailer     |                                      |\n+-------------------+--------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"225-signal-mapping-von-signalen-zu-pdus-zu-frames",children:"2.2.5 Signal-Mapping: Von Signalen zu PDUs zu Frames"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Signal-Mapping auf PDUs:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Die Signale werden in einer bestimmten Reihenfolge und an spezifischen Bit-Positionen innerhalb der PDU platziert. Das Mapping der Signale auf die PDU wird durch die Kommunikationsmatrix (Signal-zu-PDU-Mapping) definiert, die die Position jedes Signals innerhalb der PDU festlegt."}),"\n",(0,t.jsx)(n.li,{children:"Beispiel: Das Signal \u201eVehicleSpeed\u201c beginnt bei Bit 0 der PDU und belegt 16 Bits, w\xe4hrend \u201eMotorTemperatur\u201c bei Bit 16 beginnt und 8 Bits belegt."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"PDU-Mapping auf Frames:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mehrere PDUs k\xf6nnen in einem Frame organisiert werden, abh\xe4ngig von der Netzwerktopologie und den \xdcbertragungsanforderungen. Das PDU-zu-Frame-Mapping definiert, welche PDUs in einem Frame kombiniert und in welcher Reihenfolge sie angeordnet werden."}),"\n",(0,t.jsx)(n.li,{children:"Beispiel: Eine PDU, die Geschwindigkeit und Motortemperatur enth\xe4lt, k\xf6nnte in einem CAN-Frame zusammen mit einer weiteren PDU \xfcbertragen werden, die den Kraftstoffstand enth\xe4lt."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diagramm: Mapping von Signalen zu PDUs und PDUs zu Frames:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"Signal 1: VehicleSpeed (16 Bit)  --\x3e  +--------------------------+\n                                      | PDU 1                    |\nSignal 2: MotorTemperatur (8 Bit) --\x3e | PDU 1 (24 Bit)           | \n                                      +--------------------------+\nSignal 3: FuelLevel (8 Bit)       --\x3e | PDU 2 (8 Bit)            |\n                                      +--------------------------+\n------------------------------------------------------------------\n                                      | CAN-Frame (32 Bit)        |\n                                      +--------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"226-beispiele-f\xfcr-typische-layouts-in-automobilen-systemen",children:"2.2.6 Beispiele f\xfcr typische Layouts in automobilen Systemen"}),"\n",(0,t.jsx)(n.p,{children:"Beispiel 1: CAN-Bus Kommunikation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Signale: Fahrzeuggeschwindigkeit (16 Bit), Motortemperatur (8 Bit)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"PDU: Diese Signale werden in einer PDU mit einer L\xe4nge von 24 Bit organisiert."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Frame: Die PDU wird in einem CAN-Frame \xfcbertragen, der einen 11-Bit-Identifier, Steuerinformationen und die PDU als Nutzdaten enth\xe4lt."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Beispiel 2: FlexRay Kommunikation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Signale: Informationen zu Radpositionen, Bremsdruck (jeweils 32 Bit)."}),"\n",(0,t.jsx)(n.li,{children:"PDU: Jedes Signal wird in einer 32-Bit-PDU organisiert."}),"\n",(0,t.jsx)(n.li,{children:"Frame: Ein FlexRay-Frame k\xf6nnte mehrere dieser PDUs enthalten, die in unterschiedlichen Zeit-Slots \xfcbertragen werden, um deterministische Kommunikation zu gew\xe4hrleisten."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diagramm: Typischer FlexRay-Frame Layout"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"+-------------------+----------------------+---------------------+\n| Header:           | PDU 1 (32 Bit)        | PDU 2 (32 Bit)      |\n| Sync, Slot Info   | Signal: Radposition   | Signal: Bremsdruck  |\n+-------------------+----------------------+---------------------+\n| Frame-Trailer     |                       |                    |\n+-------------------+-----------------------+--------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"227-best-practices",children:"2.2.7 Best Practices"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Optimierung des Signal-Mappings:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Platzieren Sie die Signale innerhalb der PDU so, dass der verf\xfcgbare Platz effizient genutzt wird, und vermeiden Sie unn\xf6tige L\xfccken. Dies spart Speicherplatz und reduziert die \xdcbertragungszeit."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Priorisierung von Signalen und Frames:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Kritische Signale sollten in PDUs und Frames mit h\xf6herer Priorit\xe4t und besserer Fehlererkennung platziert werden, um sicherzustellen, dass sie ohne Verz\xf6gerung und mit hoher Zuverl\xe4ssigkeit \xfcbertragen werden."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Vermeidung von Fragmentierung:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Um die Fragmentierung von Daten zu vermeiden, sollten PDUs so organisiert werden, dass sie innerhalb eines Frames vollst\xe4ndig \xfcbertragen werden k\xf6nnen. Dies reduziert die Komplexit\xe4t bei der Wiederzusammensetzung der Daten am Empfangsger\xe4t."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Nutzung von Endianness-Kontrollen:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Achten Sie auf die Byte-Reihenfolge (Endianness) beim Mapping von Signalen in PDUs, um sicherzustellen, dass die Daten unabh\xe4ngig von der ECU-Architektur korrekt interpretiert werden."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Verwendung von Pr\xfcfsummen und Fehlerkorrektur:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Integrieren Sie robuste Pr\xfcfsummen und Fehlerkorrekturmechanismen sowohl auf der PDU- als auch auf der Frame-Ebene, um die Integrit\xe4t der \xfcbertragenen Daten sicherzustellen und Fehler w\xe4hrend der \xdcbertragung fr\xfchzeitig zu erkennen und zu korrigieren."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Dokumentation und R\xfcckverfolgbarkeit:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Stellen Sie sicher, dass jede Phase des Signal-, PDU- und Frame-Layouts umfassend dokumentiert ist. Eine gut dokumentierte Kommunikationsmatrix erleichtert sp\xe4tere Wartungsarbeiten und erlaubt eine einfache Fehlerdiagnose."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);