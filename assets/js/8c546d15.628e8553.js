"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8439],{10080:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"LIN/Kommunikation/prozesse","title":"prozesse","description":"Prozesse in der LIN-Kommunikation","source":"@site/docs/LIN/03_Kommunikation/02_prozesse.md","sourceDirName":"LIN/03_Kommunikation","slug":"/LIN/Kommunikation/prozesse","permalink":"/Vehicle-Network-Standards/docs/LIN/Kommunikation/prozesse","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LIN/03_Kommunikation/02_prozesse.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"linSidebar","previous":{"title":"Kommunikationsprinzipien im LIN-Bus","permalink":"/Vehicle-Network-Standards/docs/LIN/Kommunikation/prinzip"},"next":{"title":"Scheduling im LIN-Bus","permalink":"/Vehicle-Network-Standards/docs/LIN/Kommunikation/scheduling"}}');var s=i(74848),t=i(28453);const d={},a=void 0,l={},o=[{value:"Prozesse in der LIN-Kommunikation",id:"prozesse-in-der-lin-kommunikation",level:2},{value:"Einf\xfchrung in die Aufgabenverteilung",id:"einf\xfchrung-in-die-aufgabenverteilung",level:3},{value:"Master-Task: Steuerung und Zeitmanagement",id:"master-task-steuerung-und-zeitmanagement",level:3},{value:"Ablauf der Master-Task:",id:"ablauf-der-master-task",level:4},{value:"Slave-Task: Reaktive Kommunikation",id:"slave-task-reaktive-kommunikation",level:3},{value:"M\xf6gliche Reaktionen der Slave-Task:",id:"m\xf6gliche-reaktionen-der-slave-task",level:4},{value:"Technische Details und Protokollstruktur",id:"technische-details-und-protokollstruktur",level:3},{value:"LIN-Frame-Struktur",id:"lin-frame-struktur",level:4},{value:"Schedule Table",id:"schedule-table",level:4},{value:"Implementierung und Konfiguration",id:"implementierung-und-konfiguration",level:3},{value:"Aufgaben der Master-Task:",id:"aufgaben-der-master-task",level:4},{value:"Aufgaben der Slave-Task:",id:"aufgaben-der-slave-task",level:4},{value:"Fehlererkennung und Diagnostik",id:"fehlererkennung-und-diagnostik",level:3}];function u(e){const n={h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"prozesse-in-der-lin-kommunikation",children:"Prozesse in der LIN-Kommunikation"}),"\n",(0,s.jsx)(n.h3,{id:"einf\xfchrung-in-die-aufgabenverteilung",children:"Einf\xfchrung in die Aufgabenverteilung"}),"\n",(0,s.jsxs)(n.p,{children:["Die Kommunikation im Local Interconnect Network (LIN) basiert auf der Implementierung des Protokolls als Softwarekomponente im Mikrocontroller der Knoten. Im Gegensatz zu anderen Bussystemen wird kein dedizierter Kommunikationscontroller verwendet. Stattdessen wird die LIN-Kommunikation durch softwarebasierte Prozesse abgewickelt, die als ",(0,s.jsx)(n.strong,{children:"Master-Task"})," und ",(0,s.jsx)(n.strong,{children:"Slave-Task"})," bezeichnet werden. Jeder Knoten im Netzwerk besitzt mindestens eine Slave-Task, w\xe4hrend der Master-Knoten zus\xe4tzlich eine Master-Task ausf\xfchrt, die das Senderecht verteilt und den Buszugriff koordiniert."]}),"\n",(0,s.jsx)(n.h3,{id:"master-task-steuerung-und-zeitmanagement",children:"Master-Task: Steuerung und Zeitmanagement"}),"\n",(0,s.jsxs)(n.p,{children:["Die Master-Task im Master-Knoten ist f\xfcr die zentrale Steuerung des LIN-Netzwerks verantwortlich. Sobald das Netzwerk in Betrieb genommen wird, beginnt die Master-Task mit der zyklischen Abarbeitung des ",(0,s.jsx)(n.strong,{children:"Schedule Tables"}),", der das festgelegte Sendeschema abbildet."]}),"\n",(0,s.jsx)(n.h4,{id:"ablauf-der-master-task",children:"Ablauf der Master-Task:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Start des Schedules:"})," Der Master initiiert die Kommunikation, indem er die Eintr\xe4ge im Schedule Table nacheinander abarbeitet. Jeder Eintrag definiert einen ",(0,s.jsx)(n.strong,{children:"Slot"}),", in dem ein vollst\xe4ndiger Frame \xfcbertragen wird."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Frame Header:"})," F\xfcr jeden Slot sendet der Master-Knoten den Frame Header, bestehend aus:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Break-Feld"}),": Signalisiert den Beginn des Frames und dient als Synchronisationspunkt."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sync-Feld"}),": Legt die Baudrate fest, damit die Slaves sich auf die \xdcbertragung einstellen k\xf6nnen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Identifier-Feld"}),": Enth\xe4lt die Kennung der Nachricht und gibt an, welcher Slave darauf reagieren soll."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Koordination der Slaves:"})," Nach dem Senden des Frame Headers \xfcberl\xe4sst der Master den Bus an den zust\xe4ndigen Slave, der entsprechend antwortet."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Durch die strikte Einhaltung des Schedules stellt die Master-Task sicher, dass die Kommunikation deterministisch bleibt und alle Knoten ihre vorgesehenen Aufgaben innerhalb der vorgegebenen Zeitfenster ausf\xfchren k\xf6nnen."}),"\n",(0,s.jsx)(n.h3,{id:"slave-task-reaktive-kommunikation",children:"Slave-Task: Reaktive Kommunikation"}),"\n",(0,s.jsxs)(n.p,{children:["Jeder Knoten im LIN-Netzwerk f\xfchrt eine Slave-Task aus, die auf empfangene Anfragen des Masters reagiert. Die Reaktion einer Slave-Task h\xe4ngt vom Inhalt des empfangenen ",(0,s.jsx)(n.strong,{children:"Frame Headers"})," ab. Das Verhalten wird durch die Konfiguration in der ",(0,s.jsx)(n.strong,{children:"LIN Description File (LDF)"})," festgelegt."]}),"\n",(0,s.jsx)(n.h4,{id:"m\xf6gliche-reaktionen-der-slave-task",children:"M\xf6gliche Reaktionen der Slave-Task:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Senden einer Response:"})," Der Slave-Knoten liefert eine Antwort, die im Data-Feld des Frames enthalten ist."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Empfangen einer Response:"})," Der Slave nimmt die vom Master oder einem anderen Slave gesendete Antwort entgegen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ignorieren des Headers:"})," Der Slave reagiert nicht, wenn der Frame Header f\xfcr ihn irrelevant ist."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dieses reaktive Verhalten erm\xf6glicht eine effiziente Nutzung des Busses, da nur die Knoten aktiv werden, die f\xfcr die aktuelle Kommunikation relevant sind. Die Konfiguration der Slave-Tasks durch die LDF gew\xe4hrleistet, dass jeder Knoten genau wei\xdf, wann und wie er auf bestimmte Header reagieren soll."}),"\n",(0,s.jsx)(n.h3,{id:"technische-details-und-protokollstruktur",children:"Technische Details und Protokollstruktur"}),"\n",(0,s.jsx)(n.h4,{id:"lin-frame-struktur",children:"LIN-Frame-Struktur"}),"\n",(0,s.jsx)(n.p,{children:"Ein vollst\xe4ndiger LIN-Frame besteht aus mehreren standardisierten Komponenten, die eine zuverl\xe4ssige Kommunikation erm\xf6glichen:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Break-Feld:"})," Signalisiert den Beginn des Frames und sorgt f\xfcr eine klare Trennung zwischen den \xdcbertragungen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sync-Feld:"})," Dient zur Synchronisation der Baudrate zwischen Master und Slaves."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Identifier-Feld:"})," Beinhaltet die Kennung des Frames, die die Empf\xe4nger dar\xfcber informiert, welche Daten folgen und wie sie darauf reagieren sollen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data-Feld:"})," Enth\xe4lt die eigentlichen Nutzdaten, die zwischen den Knoten \xfcbertragen werden."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Checksum-Feld:"})," Erm\xf6glicht die Fehlererkennung und erh\xf6ht die Zuverl\xe4ssigkeit der Daten\xfcbertragung."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Diese klare Struktur stellt sicher, dass alle Knoten die Frames korrekt interpretieren und die Kommunikation robust bleibt."}),"\n",(0,s.jsx)(n.h4,{id:"schedule-table",children:"Schedule Table"}),"\n",(0,s.jsxs)(n.p,{children:["Der ",(0,s.jsx)(n.strong,{children:"Schedule Table"})," ist ein zentrales Element der LIN-Kommunikation, da er den zeitlichen Ablauf der Frames steuert. Jeder Eintrag im Schedule Table definiert:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Slotzeit:"})," Die Dauer des Slots, die ausreichend lang sein muss, um den vollst\xe4ndigen Frame zu \xfcbertragen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Frame-Informationen:"})," Angaben dar\xfcber, welcher Frame in diesem Slot gesendet werden soll."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Die deterministische Natur des Schedule Tables erm\xf6glicht eine pr\xe4zise Planung und Synchronisation der Kommunikation im gesamten Netzwerk."}),"\n",(0,s.jsx)(n.h3,{id:"implementierung-und-konfiguration",children:"Implementierung und Konfiguration"}),"\n",(0,s.jsx)(n.p,{children:"Die erfolgreiche Implementierung eines LIN-Netzwerks erfordert eine sorgf\xe4ltige Planung und Konfiguration, die durch die LIN Description File (LDF) unterst\xfctzt wird. Diese Datei enth\xe4lt alle relevanten Informationen \xfcber das Netzwerk, einschlie\xdflich:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Frame-Strukturen und deren Identifier."}),"\n",(0,s.jsx)(n.li,{children:"Zeitliche Vorgaben f\xfcr die Slots im Schedule Table."}),"\n",(0,s.jsx)(n.li,{children:"Verhalten der Slave-Tasks bei verschiedenen Frame Headers."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"aufgaben-der-master-task",children:"Aufgaben der Master-Task:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Exakte Abarbeitung des Schedule Tables."}),"\n",(0,s.jsx)(n.li,{children:"Generierung und \xdcbertragung der Frame Headers."}),"\n",(0,s.jsx)(n.li,{children:"\xdcberwachung der korrekten Ausf\xfchrung durch die Slaves."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"aufgaben-der-slave-task",children:"Aufgaben der Slave-Task:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reaktion auf empfangene Frame Headers gem\xe4\xdf der LDF."}),"\n",(0,s.jsx)(n.li,{children:"Senden und Empfangen von Daten entsprechend der vorgesehenen Konfiguration."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Die LDF spielt eine zentrale Rolle bei der Definition der Kommunikationsprozesse und erm\xf6glicht eine effiziente Implementierung und Fehlerdiagnose."}),"\n",(0,s.jsx)(n.h3,{id:"fehlererkennung-und-diagnostik",children:"Fehlererkennung und Diagnostik"}),"\n",(0,s.jsx)(n.p,{children:"LIN bietet grundlegende Mechanismen zur Fehlererkennung, die in die Protokollstruktur integriert sind:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Checksum-Feld:"})," Jedes Frame enth\xe4lt eine Pr\xfcfsumme, die es den Empf\xe4ngern erm\xf6glicht, \xdcbertragungsfehler zu erkennen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Diagnostik-Frames:"})," Diese speziellen Frames erm\xf6glichen es, den Status der Knoten zu \xfcberwachen und Fehler an den Master zu melden."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Diese Mechanismen tragen wesentlich zur Zuverl\xe4ssigkeit und Stabilit\xe4t des Netzwerks bei, insbesondere in Umgebungen mit hoher elektromagnetischer St\xf6ranf\xe4lligkeit."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var r=i(96540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);