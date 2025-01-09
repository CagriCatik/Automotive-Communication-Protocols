"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[3497],{10958:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"CAN/can-framing/data-frame","title":"Struktur und Funktion von Data Frames im CAN-Netzwerk","description":"Einleitung","source":"@site/docs/CAN/03_can-framing/02_data-frame.md","sourceDirName":"CAN/03_can-framing","slug":"/CAN/can-framing/data-frame","permalink":"/Vehicle-Network-Standards/docs/CAN/can-framing/data-frame","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/03_can-framing/02_data-frame.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"CAN-Framing","permalink":"/Vehicle-Network-Standards/docs/CAN/can-framing/frametypen"},"next":{"title":"Anforderung von Daten im CAN-Netzwerk","permalink":"/Vehicle-Network-Standards/docs/CAN/can-framing/remote-frame"}}');var r=i(74848),a=i(28453);const d={},s="Struktur und Funktion von Data Frames im CAN-Netzwerk",l={},u=[{value:"Einleitung",id:"einleitung",level:2},{value:"Aufbau eines CAN Data Frames",id:"aufbau-eines-can-data-frames",level:2},{value:"1. Start of Frame (SOF)",id:"1-start-of-frame-sof",level:3},{value:"2. Identifier (ID) und Remote Transmission Request (RTR)",id:"2-identifier-id-und-remote-transmission-request-rtr",level:3},{value:"3. Identifier Extension (IDE)",id:"3-identifier-extension-ide",level:3},{value:"4. Data Length Code (DLC)",id:"4-data-length-code-dlc",level:3},{value:"5. Data Field",id:"5-data-field",level:3},{value:"6. Cyclic Redundancy Check (CRC) und Acknowledgement (ACK)",id:"6-cyclic-redundancy-check-crc-und-acknowledgement-ack",level:3},{value:"7. End of Frame (EOF)",id:"7-end-of-frame-eof",level:3},{value:"Fazit",id:"fazit",level:2}];function m(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"struktur-und-funktion-von-data-frames-im-can-netzwerk",children:"Struktur und Funktion von Data Frames im CAN-Netzwerk"})}),"\n",(0,r.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,r.jsx)(n.p,{children:"Der Controller Area Network (CAN)-Bus ist ein wesentlicher Bestandteil moderner Automobile, der eine zuverl\xe4ssige Kommunikation zwischen verschiedenen elektronischen Steuerger\xe4ten (ECUs) erm\xf6glicht. In diesem Kontext nehmen Data Frames eine zentrale Rolle ein, da sie die Nutzdaten \xfcbertragen. Dieser Leitfaden beschreibt detailliert den Aufbau und die Funktion jedes Elements eines CAN Data Frames, um ein tiefgehendes Verst\xe4ndnis f\xfcr dessen Mechanismen und Anwendungen zu vermitteln."}),"\n",(0,r.jsx)("img",{src:"./image/1712276346227.png",alt:"CAN-Knoten",style:"max-width:90%; display: block; margin: 0 auto;"}),"\n",(0,r.jsx)(n.h2,{id:"aufbau-eines-can-data-frames",children:"Aufbau eines CAN Data Frames"}),"\n",(0,r.jsx)(n.p,{children:"Ein CAN Data Frame setzt sich aus mehreren Komponenten zusammen, die jeweils spezifische Aufgaben w\xe4hrend der \xdcbertragung erf\xfcllen. Diese Komponenten gew\xe4hrleisten die Initiierung und Aufrechterhaltung der Synchronisation zwischen Kommunikationspartnern, die Herstellung der definierten Kommunikationsbeziehungen sowie die \xdcbertragung und Sicherung der Nutzdaten. Im Folgenden werden die einzelnen Komponenten eines CAN Data Frames erl\xe4utert:"}),"\n",(0,r.jsx)(n.h3,{id:"1-start-of-frame-sof",children:"1. Start of Frame (SOF)"}),"\n",(0,r.jsx)(n.p,{children:"Die \xdcbertragung eines Data Frames beginnt mit dem Startbit, auch als Start Of Frame (SOF) bezeichnet. Dieses Bit wird vom Sender dominant \xfcbertragen und sorgt durch den Wechsel des Signalpegels von rezessiv (Bus Idle) nach dominant f\xfcr die netzwerkweite Synchronisation. Empf\xe4nger vergleichen w\xe4hrend der \xdcbertragung alle Signalflankenwechsel von rezessiv nach dominant mit ihrem eingestellten Bittiming. Bei Abweichungen synchronisieren sich die Empf\xe4nger, um den Phasenfehler auszugleichen (Nachsynchronisation)."}),"\n",(0,r.jsx)(n.h3,{id:"2-identifier-id-und-remote-transmission-request-rtr",children:"2. Identifier (ID) und Remote Transmission Request (RTR)"}),"\n",(0,r.jsx)(n.p,{children:"Dem SOF folgt der Identifier (ID), der die Priorit\xe4t des Data Frames festlegt und in Verbindung mit der Akzeptanzfilterung die in der Kommunikationsmatrix definierten Sender-Empf\xe4nger-Relationen im CAN-Netzwerk sicherstellt. Das RTR-Bit (Remote Transmission Request) informiert die Empf\xe4nger \xfcber den Frametyp: Ein dominantes RTR-Bit zeigt einen Data Frame an, w\xe4hrend ein rezessives RTR-Bit einen Remote Frame anzeigt."}),"\n",(0,r.jsx)(n.h3,{id:"3-identifier-extension-ide",children:"3. Identifier Extension (IDE)"}),"\n",(0,r.jsx)(n.p,{children:"Das Identifier Extension (IDE)-Bit unterscheidet zwischen dem Standard- und Extended-Format. Im Standard-Format umfasst der Identifier 11 Bit, w\xe4hrend er im Extended-Format 29 Bit umfasst. Diese Unterscheidung erm\xf6glicht die Anpassung der Identifier-L\xe4nge an spezifische Anforderungen des Netzwerks."}),"\n",(0,r.jsx)(n.h3,{id:"4-data-length-code-dlc",children:"4. Data Length Code (DLC)"}),"\n",(0,r.jsx)(n.p,{children:"Der Data Length Code (DLC) gibt die Anzahl der zu \xfcbertragenden Nutzbytes an. Diese Nutzbytes werden im Data Field transportiert. Ein Data Frame kann maximal acht Nutzbytes \xfcbertragen."}),"\n",(0,r.jsx)("img",{src:"./image/1712276365231.png",alt:"CAN-Knoten",style:"max-width:90%; display: block; margin: 0 auto;"}),"\n",(0,r.jsx)(n.h3,{id:"5-data-field",children:"5. Data Field"}),"\n",(0,r.jsx)(n.p,{children:"Das Data Field enth\xe4lt die eigentlichen Nutzdaten, die im Rahmen der CAN-Kommunikation \xfcbertragen werden. Die L\xe4nge des Data Fields variiert je nach im DLC angegebenen Anzahl der Bytes."}),"\n",(0,r.jsx)("img",{src:"./image/1712276396634.png",alt:"CAN-Knoten",style:"max-width:90%; display: block; margin: 0 auto;"}),"\n",(0,r.jsx)(n.h3,{id:"6-cyclic-redundancy-check-crc-und-acknowledgement-ack",children:"6. Cyclic Redundancy Check (CRC) und Acknowledgement (ACK)"}),"\n",(0,r.jsx)(n.p,{children:"Zur Sicherung der \xfcbertragenen Nutzbytes wird eine Pr\xfcfsumme unter Anwendung des Cyclic Redundancy Checks (CRC) erstellt. Basierend auf dem Ergebnis des CRCs quittieren die Empf\xe4nger im ACK-Slot (Acknowledgement) den Empfang des Frames entweder positiv oder negativ."}),"\n",(0,r.jsx)(n.h3,{id:"7-end-of-frame-eof",children:"7. End of Frame (EOF)"}),"\n",(0,r.jsx)(n.p,{children:"Die \xdcbertragung eines Data Frames wird mit sieben rezessiven Bits, dem End Of Frame (EOF), beendet. Diese Bits signalisieren das Ende der \xdcbertragung und erm\xf6glichen den \xdcbergang in den Bus Idle-Zustand."}),"\n",(0,r.jsx)(n.h2,{id:"fazit",children:"Fazit"}),"\n",(0,r.jsx)(n.p,{children:"Ein tiefgehendes Verst\xe4ndnis der Struktur und Funktionsweise von CAN Data Frames ist f\xfcr die Entwicklung und Wartung von CAN-Netzwerken essenziell. Jedes Element eines Data Frames spielt eine spezifische Rolle bei der Sicherstellung einer zuverl\xe4ssigen und effizienten Kommunikation. Durch die Kenntnis dieser Elemente k\xf6nnen Entwickler und Ingenieure robustere und effizientere CAN-basierte Systeme gestalten und implementieren."})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>s});var t=i(96540);const r={},a=t.createContext(r);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);