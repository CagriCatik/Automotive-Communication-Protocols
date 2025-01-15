"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[9302],{77095:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"LIN/Kommunikation/scheduling","title":"Scheduling im LIN-Bus","description":"Im LIN-Bus-System wird die Kommunikation innerhalb eines Clusters zentral vom Master-Knoten gesteuert. Der Master verwendet ein festgelegtes Sendeschema, das die zeitliche Abfolge der Daten\xfcbertragung bestimmt. Dieses Sendeschema, auch als Schedule bezeichnet, ist im LIN Description File (LDF) beschrieben und wird vom Systemdesigner im Voraus geplant. Durch diese strikte Planung wird eine deterministische Kommunikation gew\xe4hrleistet, bei der die Reihenfolge und die zeitlichen Intervalle der Daten\xfcbertragungen im gesamten Netzwerk vorhersagbar sind.","source":"@site/docs/LIN/03_Kommunikation/03_scheduling.md","sourceDirName":"LIN/03_Kommunikation","slug":"/LIN/Kommunikation/scheduling","permalink":"/Vehicle-Network-Standards/docs/LIN/Kommunikation/scheduling","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LIN/03_Kommunikation/03_scheduling.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"linSidebar","previous":{"title":"Prozesse in der LIN-Kommunikation","permalink":"/Vehicle-Network-Standards/docs/LIN/Kommunikation/prozesse"},"next":{"title":"Botschaftsstruktur","permalink":"/Vehicle-Network-Standards/docs/LIN/Botschaftsstruktur/"}}');var s=i(74848),t=i(28453);const d={},l="Scheduling im LIN-Bus",a={},u=[{value:"Slots und Minislots",id:"slots-und-minislots",level:2},{value:"Jitter und Inter Frame Space (IFS)",id:"jitter-und-inter-frame-space-ifs",level:2},{value:"Inter Frame Space (IFS)",id:"inter-frame-space-ifs",level:3},{value:"Zeitreserve und zeitliche Planung",id:"zeitreserve-und-zeitliche-planung",level:2},{value:"Herausforderungen und L\xf6sungen bei der Slot-Planung",id:"herausforderungen-und-l\xf6sungen-bei-der-slot-planung",level:2}];function o(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"scheduling-im-lin-bus",children:"Scheduling im LIN-Bus"})}),"\n",(0,s.jsxs)(n.p,{children:["Im LIN-Bus-System wird die Kommunikation innerhalb eines Clusters zentral vom Master-Knoten gesteuert. Der Master verwendet ein festgelegtes ",(0,s.jsx)(n.strong,{children:"Sendeschema"}),", das die zeitliche Abfolge der Daten\xfcbertragung bestimmt. Dieses Sendeschema, auch als ",(0,s.jsx)(n.strong,{children:"Schedule"})," bezeichnet, ist im ",(0,s.jsx)(n.strong,{children:"LIN Description File (LDF)"})," beschrieben und wird vom Systemdesigner im Voraus geplant. Durch diese strikte Planung wird eine ",(0,s.jsx)(n.strong,{children:"deterministische Kommunikation"})," gew\xe4hrleistet, bei der die Reihenfolge und die zeitlichen Intervalle der Daten\xfcbertragungen im gesamten Netzwerk vorhersagbar sind."]}),"\n",(0,s.jsxs)(n.p,{children:["Das Sendeschema teilt die verf\xfcgbare Zeit in klar definierte Einheiten ein, sogenannte ",(0,s.jsx)(n.strong,{children:"Slots"}),", die jeweils f\xfcr die \xdcbertragung eines einzelnen Frames reserviert sind. Jeder Frame wird innerhalb seines zugewiesenen Slots \xfcbertragen, wodurch eine geordnete und kollisionsfreie Kommunikation im Netzwerk erm\xf6glicht wird."]}),"\n",(0,s.jsx)(n.h2,{id:"slots-und-minislots",children:"Slots und Minislots"}),"\n",(0,s.jsxs)(n.p,{children:["Das Sendeschema basiert auf einer fein abgestimmten Zeitstruktur, die durch ",(0,s.jsx)(n.strong,{children:"Slots"})," und ",(0,s.jsx)(n.strong,{children:"Minislots"})," definiert wird:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Slot:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ein Slot ist eine Zeiteinheit, die der \xdcbertragung eines vollst\xe4ndigen Frames dient. Dazu geh\xf6ren alle Komponenten des Frames, einschlie\xdflich Break-Feld, Synchronisationsfeld, Identifier-Feld, Datenfeld und Checksum-Feld."}),"\n",(0,s.jsx)(n.li,{children:"Die Slot-Dauer wird so festgelegt, dass sie die vollst\xe4ndige \xdcbertragung des zugewiesenen Frames einschlie\xdflich einer Sicherheitsmarge abdeckt."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Minislot:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ein Minislot ist die kleinste Zeiteinheit, die im Sendeschema verwendet wird. Die Master-Aufgabe arbeitet das Sendeschema in Minislots ab."}),"\n",(0,s.jsx)(n.li,{children:"Die Dauer eines Slots ergibt sich aus der Anzahl der f\xfcr den Frame ben\xf6tigten Minislots."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Die Verwendung von Slots und Minislots erm\xf6glicht eine pr\xe4zise zeitliche Planung der Kommunikation im LIN-Netzwerk. Dies ist besonders wichtig f\xfcr Anwendungen, bei denen es auf eine regelm\xe4\xdfige und zuverl\xe4ssige Daten\xfcbertragung ankommt."}),"\n",(0,s.jsx)(n.h2,{id:"jitter-und-inter-frame-space-ifs",children:"Jitter und Inter Frame Space (IFS)"}),"\n",(0,s.jsxs)(n.p,{children:["Bei der zeitlichen Planung der Slots wird ein sogenannter ",(0,s.jsx)(n.strong,{children:"Jitter-Wert"})," ber\xfccksichtigt. Dieser Wert stellt die Abweichung zwischen dem nominalen und dem tats\xe4chlichen Beginn eines Slots dar, die durch hardwarebedingte oder prozessabh\xe4ngige Verz\xf6gerungen verursacht werden kann. Die Ber\xfccksichtigung von Jitter ist essenziell, um sicherzustellen, dass der Start jedes Slots innerhalb der zul\xe4ssigen Toleranzen erfolgt."]}),"\n",(0,s.jsx)(n.h3,{id:"inter-frame-space-ifs",children:"Inter Frame Space (IFS)"}),"\n",(0,s.jsxs)(n.p,{children:["Falls ein Frame weniger Zeit ben\xf6tigt als der ihm zugewiesene Slot, entsteht ein verbleibender Zeitraum bis zum Beginn des n\xe4chsten Slots. Dieser Zeitraum wird als ",(0,s.jsx)(n.strong,{children:"Inter Frame Space (IFS)"})," bezeichnet. Der IFS dient dazu:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Eine klare Trennung zwischen aufeinanderfolgenden Frames zu gew\xe4hrleisten."}),"\n",(0,s.jsx)(n.li,{children:"Den Slaves gen\xfcgend Zeit zu geben, um sich auf die n\xe4chste Kommunikation vorzubereiten."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Die IFS-Zeit wird im Sendeschema ber\xfccksichtigt und ist entscheidend, um eine geordnete und kollisionsfreie Kommunikation im Netzwerk sicherzustellen."}),"\n",(0,s.jsx)(n.h2,{id:"zeitreserve-und-zeitliche-planung",children:"Zeitreserve und zeitliche Planung"}),"\n",(0,s.jsx)(n.p,{children:"Die zeitliche Planung des Sendeschemas erfordert eine pr\xe4zise Berechnung der ben\xf6tigten Slot-Dauer f\xfcr jeden Frame. Diese Berechnung muss mehrere Faktoren ber\xfccksichtigen:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"L\xe4nge des Frames:"})," Die Zeit, die f\xfcr die \xdcbertragung aller Bits eines Frames ben\xf6tigt wird."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Jitter-Wert:"})," Die m\xf6gliche Abweichung vom nominalen Startzeitpunkt."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Zeitreserve:"})," Ein zus\xe4tzlicher Puffer, der Schwankungen und Verz\xf6gerungen im \xdcbertragungsprozess ausgleicht."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Insbesondere bei der Verwendung von preisg\xfcnstigen und weniger leistungsstarken Prozessoren in den Knoten ist eine gro\xdfz\xfcgige Zeitreserve wichtig. Typischerweise wird den Knoten eine Zeitreserve von bis zu ",(0,s.jsx)(n.strong,{children:"40 %"})," der berechneten Slot-Dauer einger\xe4umt. Diese Reserve gew\xe4hrleistet, dass Frames auch bei minimalen Verz\xf6gerungen oder Schwankungen zuverl\xe4ssig \xfcbertragen werden k\xf6nnen."]}),"\n",(0,s.jsx)(n.h2,{id:"herausforderungen-und-l\xf6sungen-bei-der-slot-planung",children:"Herausforderungen und L\xf6sungen bei der Slot-Planung"}),"\n",(0,s.jsx)(n.p,{children:"Die Planung der Slots im Sendeschema ist ein komplexer Prozess, der verschiedene Herausforderungen mit sich bringt:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vermeidung von Kollisionen:"})," Es muss sichergestellt werden, dass sich die \xdcbertragungen der Knoten nicht \xfcberschneiden."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optimierung der Slot-Dauer:"})," Die Slots d\xfcrfen nicht zu knapp bemessen sein, um \xdcbertragungsfehler zu vermeiden, aber auch nicht zu gro\xdfz\xfcgig, um die Effizienz des Netzwerks zu erhalten."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ber\xfccksichtigung von Jitter und IFS:"})," Diese Faktoren m\xfcssen in die Berechnung der Slot-Dauer einflie\xdfen, um eine stabile und geordnete Kommunikation sicherzustellen."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Die L\xf6sung dieser Herausforderungen erfordert eine sorgf\xe4ltige Analyse der Kommunikationsanforderungen sowie die pr\xe4zise Implementierung des Sendeschemas im LDF. Durch die optimale Gestaltung des Schedules kann die Effizienz und Zuverl\xe4ssigkeit des LIN-Netzwerks maximiert werden."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);