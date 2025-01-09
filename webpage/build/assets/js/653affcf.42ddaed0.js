"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[2991],{77243:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"CAN/can-kommunikation/knoten","title":"CAN-Knoten","description":"Einleitung","source":"@site/docs/CAN/02_can-kommunikation/02_knoten.md","sourceDirName":"CAN/02_can-kommunikation","slug":"/CAN/can-kommunikation/knoten","permalink":"/Vehicle-Network-Standards/docs/CAN/can-kommunikation/knoten","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/02_can-kommunikation/02_knoten.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"CAN-Netzwerk","permalink":"/Vehicle-Network-Standards/docs/CAN/can-kommunikation/netzwerk"},"next":{"title":"CAN-Controller","permalink":"/Vehicle-Network-Standards/docs/CAN/can-kommunikation/controller"}}');var t=r(74848),s=r(28453);const a={},o="CAN-Knoten",d={},c=[{value:"Einleitung",id:"einleitung",level:2},{value:"Steigende Komplexit\xe4t in der Steuerger\xe4tevernetzung",id:"steigende-komplexit\xe4t-in-der-steuerger\xe4tevernetzung",level:2},{value:"Vereinheitlichung der Software",id:"vereinheitlichung-der-software",level:2},{value:"AUTOSAR (AUTomotive Open System ARchitecture)",id:"autosar-automotive-open-system-architecture",level:2},{value:"Aufbau eines CAN-Knotens",id:"aufbau-eines-can-knotens",level:2},{value:"Microcontroller Abstraction Layer",id:"microcontroller-abstraction-layer",level:3},{value:"ECU Abstraction Layer",id:"ecu-abstraction-layer",level:3},{value:"Service Layer",id:"service-layer",level:3}];function l(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"can-knoten",children:"CAN-Knoten"})}),"\n",(0,t.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,t.jsx)(n.p,{children:"Die fortschreitende Elektronifizierung des Automobils f\xfchrt zu einer rasanten Zunahme der Quantit\xe4t und Komplexit\xe4t der Software. Moderne Fahrzeuge, insbesondere in der Oberklasse, verf\xfcgen \xfcber mehr als 1000 Software-Funktionen, die auf \xfcber 70 elektronischen Steuerger\xe4ten (Electronic Control Units \u2013 ECUs) in verschiedenen Bussystemen ausgef\xfchrt werden. Ein elektronisches Steuerger\xe4t in einem CAN-Netzwerk wird als CAN-Knoten bezeichnet."}),"\n",(0,t.jsx)(n.h2,{id:"steigende-komplexit\xe4t-in-der-steuerger\xe4tevernetzung",children:"Steigende Komplexit\xe4t in der Steuerger\xe4tevernetzung"}),"\n",(0,t.jsx)(n.p,{children:"In den Anf\xe4ngen der Steuerger\xe4tevernetzung war ein einfacher CAN-Treiber ausreichend, der eine weitgehend hardwareunabh\xe4ngige Schnittstelle f\xfcr die Applikation bereitstellte. Ein CAN-Controller und ein CAN-Transceiver erm\xf6glichten die Realisierung der CAN-Schnittstelle. Heutzutage sind ein Betriebssystem und Funktionen des Netzwerkmanagements sowie der Diagnose unabdingbar. Die stark gewachsene Softwarekomplexit\xe4t erfordert eine Vereinheitlichung der Steuerger\xe4teinfrastruktur."}),"\n",(0,t.jsx)(n.h2,{id:"vereinheitlichung-der-software",children:"Vereinheitlichung der Software"}),"\n",(0,t.jsx)(n.p,{children:"Eine einheitliche Softwarearchitektur reduziert den Entwicklungsaufwand und erleichtert die Wartung. Sie erm\xf6glicht zudem eine h\xf6here Wiederverwendbarkeit und Austauschbarkeit von Software-Komponenten zwischen verschiedenen Fahrzeugplattformen und zwischen OEMs (Original Equipment Manufacturer) und Zulieferern."}),"\n",(0,t.jsx)(n.h2,{id:"autosar-automotive-open-system-architecture",children:"AUTOSAR (AUTomotive Open System ARchitecture)"}),"\n",(0,t.jsx)(n.p,{children:"AUTOSAR bietet eine Referenzarchitektur f\xfcr Steuerger\xe4tesoftware, mit dem Ziel, die Softwareentwicklung zu standardisieren und zu vereinfachen. Im Mittelpunkt dieser Architektur steht das AUTOSAR Runtime Environment (RTE), welches das Netzwerk vollst\xe4ndig von den Applikationssoftware-Komponenten entkoppelt. Das RTE bietet den Software-Komponenten einheitliche Dienste in Form der Basis-Software. Diese Basis-Software ist in drei Ebenen unterteilt: Microcontroller Abstraction Layer, ECU Abstraction Layer und Service Layer."}),"\n",(0,t.jsx)(n.h2,{id:"aufbau-eines-can-knotens",children:"Aufbau eines CAN-Knotens"}),"\n",(0,t.jsx)(n.p,{children:"Die folgende Grafik zeigt den Aufbau eines modernen CAN-Knotens gem\xe4\xdf der AUTOSAR-Architektur."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CAN-AUTOSAR",src:r(64519).A+"",width:"1279",height:"1027"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"microcontroller-abstraction-layer",children:"Microcontroller Abstraction Layer"}),"\n",(0,t.jsx)(n.p,{children:"Diese unterste Ebene abstrahiert die Hardware und stellt Treiber bereit, die direkt mit der Hardware interagieren. Dazu geh\xf6ren:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Microcontroller Drivers"}),": Treiber f\xfcr die grundlegende Funktionalit\xe4t des Mikrocontrollers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Memory Drivers"}),": Treiber f\xfcr den Zugriff auf den Speicher."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"I/O Drivers"}),": Treiber f\xfcr Eingabe-/Ausgabeger\xe4te."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ecu-abstraction-layer",children:"ECU Abstraction Layer"}),"\n",(0,t.jsx)(n.p,{children:"Diese Ebene abstrahiert die spezifische Hardware der ECUs und erm\xf6glicht eine hardwareunabh\xe4ngige Softwareentwicklung. Zu den Komponenten geh\xf6ren:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Communication Drivers"}),": Treiber f\xfcr die Kommunikation, z.B. CAN- und SPI-Treiber."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Communication Hardware Abstraction"}),": Abstraktionsschicht f\xfcr die Kommunikationshardware, wie CAN-Interfaces und Transceiver-Treiber."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Memory Hardware Abstraction"}),": Abstraktionsschicht f\xfcr den Speicherzugriff."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Onboard Device Abstraction"}),": Abstraktionsschicht f\xfcr die Steuerger\xe4te-Hardware."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"service-layer",children:"Service Layer"}),"\n",(0,t.jsx)(n.p,{children:"Diese h\xf6chste Ebene der Basis-Software bietet verschiedene Dienste f\xfcr die Applikationssoftware. Zu den wichtigsten Komponenten geh\xf6ren:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"System Services"}),": Basisdienste f\xfcr die Systemverwaltung."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Memory Services"}),": Dienste f\xfcr den Speicherzugriff und -verwaltung."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Communication Services"}),": Diese umfassen AUTOSAR COM f\xfcr die Standardkommunikation, den Diagnostic COM Manager f\xfcr Diagnosedienste und Generic NM/CAN NM f\xfcr das Netzwerkmanagement. Der PDU Router koordiniert die Kommunikation zwischen diesen Diensten und dem CAN TP (Transportprotokoll)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Die Verwendung der AUTOSAR-Architektur in modernen Fahrzeugen erm\xf6glicht eine strukturierte und effiziente Entwicklung von Steuerger\xe4tesoftware. Durch die Entkopplung der Applikationssoftware von der Hardware und die Bereitstellung einheitlicher Dienste wird die Komplexit\xe4t beherrschbar und die Wiederverwendbarkeit von Software-Komponenten gef\xf6rdert. Dies tr\xe4gt wesentlich zur Reduzierung von Entwicklungskosten und zur Erh\xf6hung der Qualit\xe4t und Zuverl\xe4ssigkeit der Fahrzeugsoftware bei."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},64519:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/can_autosar-57d6986c95d2abaf1b28d600bf8b25dd.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(96540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);