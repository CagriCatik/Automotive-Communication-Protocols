"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[1869],{16156:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"CAN/CAN-Kommunikation/controller","title":"CAN-Controller","description":"Das Controller Area Network (CAN) ist ein robustes Fahrzeugbus-Standard, der es Mikrocontrollern und Ger\xe4ten erm\xf6glicht, ohne Host-Computer miteinander zu kommunizieren.","source":"@site/docs/CAN/02_CAN-Kommunikation/03_controller.md","sourceDirName":"CAN/02_CAN-Kommunikation","slug":"/CAN/CAN-Kommunikation/controller","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-Kommunikation/controller","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/02_CAN-Kommunikation/03_controller.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"CAN-Knoten","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-Kommunikation/knoten"},"next":{"title":"CAN-Transceiver","permalink":"/Vehicle-Network-Standards/docs/CAN/CAN-Kommunikation/transceiver"}}');var t=r(74848),s=r(28453);const o={},d="CAN-Controller",l={},a=[{value:"Aufbau eines CAN-Netzwerks",id:"aufbau-eines-can-netzwerks",level:2},{value:"Komponenten eines CAN-Knotens",id:"komponenten-eines-can-knotens",level:2},{value:"CAN-Controller",id:"can-controller-1",level:3},{value:"CAN-Transceiver",id:"can-transceiver",level:3},{value:"Kommunikation im CAN-Netzwerk",id:"kommunikation-im-can-netzwerk",level:2},{value:"Integration von CAN-Controllern",id:"integration-von-can-controllern",level:3},{value:"Terminierung des CAN-Busses",id:"terminierung-des-can-busses",level:2}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"can-controller",children:"CAN-Controller"})}),"\n",(0,t.jsx)(n.p,{children:"Das Controller Area Network (CAN) ist ein robustes Fahrzeugbus-Standard, der es Mikrocontrollern und Ger\xe4ten erm\xf6glicht, ohne Host-Computer miteinander zu kommunizieren."}),"\n",(0,t.jsx)(n.h2,{id:"aufbau-eines-can-netzwerks",children:"Aufbau eines CAN-Netzwerks"}),"\n",(0,t.jsx)(n.p,{children:"In einem CAN-Netzwerk, wie in der unteren Grafik dargestellt, bestehen die grundlegenden Komponenten aus mehreren CAN-Knoten, die jeweils aus einem Host, einem CAN-Controller und einem CAN-Transceiver bestehen. Die Knoten sind \xfcber die beiden Leitungen CANH (CAN High) und CANL (CAN Low) miteinander verbunden. An beiden Enden des CAN-Busses befindet sich jeweils ein Terminierungswiderstand $$( R_T )$$, der f\xfcr die korrekte Funktion des Netzwerks notwendig ist."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CAN-Leitung",src:r(70837).A+"",width:"916",height:"488"})}),"\n",(0,t.jsx)(n.h2,{id:"komponenten-eines-can-knotens",children:"Komponenten eines CAN-Knotens"}),"\n",(0,t.jsx)(n.h3,{id:"can-controller-1",children:"CAN-Controller"}),"\n",(0,t.jsx)(n.p,{children:"Der CAN-Controller \xfcbernimmt die Kommunikationsaufgaben gem\xe4\xdf dem CAN-Protokoll und entlastet dadurch den Host. Er ist verantwortlich f\xfcr das Senden und Empfangen von Nachrichten, das Erkennen von Fehlern und das Gew\xe4hrleisten der Datensicherheit und -integrit\xe4t."}),"\n",(0,t.jsx)(n.h3,{id:"can-transceiver",children:"CAN-Transceiver"}),"\n",(0,t.jsx)(n.p,{children:"Der CAN-Transceiver verbindet den CAN-Controller mit dem physikalischen \xdcbertragungsmedium. \xdcblicherweise sind der CAN-Controller und der CAN-Transceiver galvanisch getrennt, oft mittels Optokoppler, um \xdcberspannungssch\xe4den zu verhindern. Diese Trennung sch\xfctzt den Host und den CAN-Controller vor Besch\xe4digungen durch \xdcberspannungen auf dem CAN-Bus."}),"\n",(0,t.jsx)(n.h2,{id:"kommunikation-im-can-netzwerk",children:"Kommunikation im CAN-Netzwerk"}),"\n",(0,t.jsx)(n.p,{children:"In einem CAN-Netzwerk k\xf6nnen die Anzahl der zu sendenden und empfangenden Nachrichten sowie deren Frequenzen stark variieren. Ein Knoten k\xf6nnte beispielsweise f\xfcnf verschiedene Nachrichten in einem Zyklus von zehn Millisekunden empfangen, w\xe4hrend ein anderer Knoten alle 100 Millisekunden nur eine Nachricht empf\xe4ngt. Diese Unterschiede haben zur Entwicklung von zwei grundlegenden CAN-Controller-Architekturen gef\xfchrt:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CAN-Controller mit Objektespeicherung"}),": Diese Architektur speichert Nachrichten in einer internen Queue, wodurch eine effiziente Handhabung von Nachrichten mit hoher Frequenz erm\xf6glicht wird."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CAN-Controller ohne Objektespeicherung"}),": Diese Architektur ist einfacher und eignet sich f\xfcr Anwendungen mit geringeren Kommunikationsanforderungen."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"integration-von-can-controllern",children:"Integration von CAN-Controllern"}),"\n",(0,t.jsx)(n.p,{children:"CAN-Controller k\xf6nnen entweder als integrierte oder eigenst\xe4ndige Bausteine (stand-alone) verwendet werden. Bei der Stand-Alone-Variante behandelt der Mikrocontroller den CAN-Controller wie einen Speicherbaustein, was gr\xf6\xdfere Flexibilit\xe4t bietet. Die On-Chip-Variante nimmt weniger Platz in Anspruch und erm\xf6glicht eine schnellere und zuverl\xe4ssigere Kommunikation zwischen Mikrocontroller und CAN-Controller."}),"\n",(0,t.jsx)(n.h2,{id:"terminierung-des-can-busses",children:"Terminierung des CAN-Busses"}),"\n",(0,t.jsx)(n.p,{children:"Die Terminierung des CAN-Busses erfolgt durch Widerst\xe4nde an den beiden Enden der CAN-Leitungen. Diese Terminierungswiderst\xe4nde ( R_T ) verhindern Signalreflexionen, die zu Kommunikationsst\xf6rungen f\xfchren k\xf6nnten. In der obigen Grafik sind diese Widerst\xe4nde am Anfang und Ende des Busses dargestellt."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},70837:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/can_leitung-835c2b4c74a5c8d9accf95c477c7e850.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var i=r(96540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);