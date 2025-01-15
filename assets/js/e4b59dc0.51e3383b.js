"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[9897],{74628:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"FLEXRAY/Synchronisation/synchronisationsmethode","title":"Synchronisation","description":"FlexRay ist ein deterministisches und fehlertolerantes Kommunikationssystem, das speziell f\xfcr die hohen Anforderungen in der Fahrzeugelektronik entwickelt wurde. Ein wesentlicher Bestandteil von FlexRay ist die Synchronisation der lokalen Uhren innerhalb eines FlexRay Clusters, um eine pr\xe4zise und koordinierte Kommunikation zu gew\xe4hrleisten. In diesem Tutorial werden wir die Mechanismen und Algorithmen zur Uhrensynchronisation in FlexRay Clustern detailliert erl\xe4utern.","source":"@site/docs/FLEXRAY/05_Synchronisation/03_synchronisationsmethode.md","sourceDirName":"FLEXRAY/05_Synchronisation","slug":"/FLEXRAY/Synchronisation/synchronisationsmethode","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Synchronisation/synchronisationsmethode","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FLEXRAY/05_Synchronisation/03_synchronisationsmethode.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"flexraySidebar","previous":{"title":"Uhrensynchronisation","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Synchronisation/phasen-frequenzkorrektur"}}');var t=i(74848),s=i(28453);const o={},d="Synchronisation",l={},a=[{value:"Grundprinzip der Synchronisation",id:"grundprinzip-der-synchronisation",level:2},{value:"Synchronisationsknoten (Sync-Nodes)",id:"synchronisationsknoten-sync-nodes",level:2},{value:"Zeitabgleich und Offsetkorrektur",id:"zeitabgleich-und-offsetkorrektur",level:2},{value:"Steigungskorrektur",id:"steigungskorrektur",level:2},{value:"Korrekturmechanismen",id:"korrekturmechanismen",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"synchronisation",children:"Synchronisation"})}),"\n",(0,t.jsx)(n.p,{children:"FlexRay ist ein deterministisches und fehlertolerantes Kommunikationssystem, das speziell f\xfcr die hohen Anforderungen in der Fahrzeugelektronik entwickelt wurde. Ein wesentlicher Bestandteil von FlexRay ist die Synchronisation der lokalen Uhren innerhalb eines FlexRay Clusters, um eine pr\xe4zise und koordinierte Kommunikation zu gew\xe4hrleisten. In diesem Tutorial werden wir die Mechanismen und Algorithmen zur Uhrensynchronisation in FlexRay Clustern detailliert erl\xe4utern."}),"\n",(0,t.jsx)(n.h2,{id:"grundprinzip-der-synchronisation",children:"Grundprinzip der Synchronisation"}),"\n",(0,t.jsx)(n.p,{children:"Die Synchronisation in einem FlexRay Cluster basiert darauf, dass alle Knoten (Nodes) die Sende- und Empfangszeitpunkte der statischen Botschaften im Voraus kennen. Dies erm\xf6glicht es jedem Knoten, sowohl den Zeitversatz (Offset) als auch die Frequenzabweichung (Steigung) zu korrigieren, sodass nach wenigen Kommunikationszyklen alle Knoten synchronisiert sind."}),"\n",(0,t.jsx)(n.h2,{id:"synchronisationsknoten-sync-nodes",children:"Synchronisationsknoten (Sync-Nodes)"}),"\n",(0,t.jsx)(n.p,{children:"In einem FlexRay Cluster gibt es mindestens 2 und maximal 15 Sync-Nodes, die in jedem Kommunikationszyklus eine Synchronisationsbotschaft (Sync-Botschaft) in einem festgelegten statischen Slot senden. Diese Botschaften sind keine zus\xe4tzlichen Nachrichten, sondern regul\xe4re statische Botschaften, bei denen der Sync Frame Indicator gesetzt ist. Diese Sync-Botschaften sind entscheidend f\xfcr die Synchronisation der Uhren im Cluster."}),"\n",(0,t.jsx)(n.h2,{id:"zeitabgleich-und-offsetkorrektur",children:"Zeitabgleich und Offsetkorrektur"}),"\n",(0,t.jsx)(n.p,{children:"Jeder FlexRay Knoten vergleicht die vorab bekannten Zeitpunkte der Sync-Botschaften mit den tats\xe4chlichen Empfangszeitpunkten. Aus den Differenzen dieser Zeitpunkte wird eine sortierte Liste erstellt. Die Berechnung des Offsetkorrekturwerts erfolgt durch den Fault Tolerant Midpoint (FTM) Algorithmus."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fault Tolerant Midpoint (FTM) Algorithmus:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bei bis zu sieben Sync-Nodes werden die Extremwerte (Minimum und Maximum) aus der Liste entfernt."}),"\n",(0,t.jsx)(n.li,{children:"Bei mehr als sieben Sync-Nodes werden zus\xe4tzlich die zweitgr\xf6\xdften und zweitkleinsten Werte entfernt."}),"\n",(0,t.jsx)(n.li,{children:"Die verbleibenden Werte werden addiert und gemittelt, um den Offsetkorrekturwert zu bestimmen."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Diese Methode stellt sicher, dass stark abweichende lokale Uhren die Synchronisation nicht st\xf6ren."}),"\n",(0,t.jsx)(n.h2,{id:"steigungskorrektur",children:"Steigungskorrektur"}),"\n",(0,t.jsx)(n.p,{children:"Die Steigungskorrektur erfolgt \xe4hnlich der Offsetkorrektur, jedoch messen die FlexRay Knoten hierbei die L\xe4nge der Kommunikationszyklen. Der FTM Algorithmus wird auch hier angewendet, um einen robusten Mittelwert zu berechnen, der die Zyklusl\xe4nge anpasst."}),"\n",(0,t.jsx)(n.h2,{id:"korrekturmechanismen",children:"Korrekturmechanismen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Offsetkorrektur:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ein Knoten gleicht den Offset durch Hinzuf\xfcgen oder Entfernen einer bestimmten Anzahl von Mikroticks (kleinste Zeiteinheit) in der Network Idle Time (NIT) am Ende jedes ungeraden Zyklus aus. Dies verschiebt den Start des n\xe4chsten Zyklus und passt die lokale Uhr an die globalen Anforderungen an."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Steigungskorrektur:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Die Steigungskorrektur verteilt die Anpassung gleichm\xe4\xdfig \xfcber gerade und ungerade Zyklen, um eine gleichm\xe4\xdfige Frequenzanpassung zu gew\xe4hrleisten. Dadurch wird verhindert, dass die Steigungskorrektur wie eine zus\xe4tzliche Offsetkorrektur wirkt."}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var r=i(96540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);