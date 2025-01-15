"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[6407],{929:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"LIN/LIN/LIN_Signal_Flanken","title":"LIN_Signal_Flanken","description":"LIN-Bus Signalflanken und Pull-Up-Einfluss","source":"@site/docs/LIN/LIN/04_LIN_Signal_Flanken.md","sourceDirName":"LIN/LIN","slug":"/LIN/LIN/LIN_Signal_Flanken","permalink":"/Vehicle-Network-Standards/docs/LIN/LIN/LIN_Signal_Flanken","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LIN/LIN/04_LIN_Signal_Flanken.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"linSidebar","previous":{"title":"LIN_Dominant-Rezessiv","permalink":"/Vehicle-Network-Standards/docs/LIN/LIN/LIN_Dominant-Rezessiv"},"next":{"title":"LIN_Bus-Hardware","permalink":"/Vehicle-Network-Standards/docs/LIN/LIN/LIN_Bus-Hardware"}}');var l=i(74848),r=i(28453);const d={},t=void 0,a={},u=[{value:"LIN-Bus Signalflanken und Pull-Up-Einfluss",id:"lin-bus-signalflanken-und-pull-up-einfluss",level:3},{value:"Modell der Signalflanken",id:"modell-der-signalflanken",level:4},{value:"Verhalten der Signalflanken",id:"verhalten-der-signalflanken",level:4},{value:"Wichtige \xdcberlegungen zur Dimensionierung der Pull-Up-Widerst\xe4nde",id:"wichtige-\xfcberlegungen-zur-dimensionierung-der-pull-up-widerst\xe4nde",level:4},{value:"Zusammenfassung",id:"zusammenfassung",level:4}];function c(e){const n={h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"lin-bus-signalflanken-und-pull-up-einfluss",children:"LIN-Bus Signalflanken und Pull-Up-Einfluss"}),"\n",(0,l.jsxs)(n.p,{children:["Das Verhalten der Signalflanken im LIN-Bus ist ein wesentlicher Faktor f\xfcr die Qualit\xe4t und Zuverl\xe4ssigkeit der Kommunikation. Die ",(0,l.jsx)(n.strong,{children:"Flankensteilheit"})," der Signal\xfcbertragung wird durch die Pull-Up-Widerst\xe4nde und die kapazitive Last beeinflusst. Diese Faktoren bestimmen, wie schnell die Spannung zwischen den dominanten und rezessiven Zust\xe4nden wechselt und haben direkte Auswirkungen auf die elektromagnetische Vertr\xe4glichkeit (EMV) und die Signalintegrit\xe4t."]}),"\n",(0,l.jsx)(n.h4,{id:"modell-der-signalflanken",children:"Modell der Signalflanken"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Kapazitive Last am LIN-Bus:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Die Gesamtkapazit\xe4t des LIN-Busses setzt sich aus der Eingangs-Kapazit\xe4t aller angeschlossenen Knoten und der Linienkapazit\xe4t der Busleitung selbst zusammen. Diese parasit\xe4re Kapazit\xe4t wirkt wie ein Kondensator, der beim \xdcbergang zwischen Zust\xe4nden aufgeladen bzw. entladen werden muss."}),"\n",(0,l.jsx)(n.li,{children:"Diese Kapazit\xe4t beeinflusst die Lade- und Entladezeiten der Busleitung und damit die Signalflanken."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Pull-Up-Widerst\xe4nde:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Alle Pull-Up-Widerst\xe4nde der Knoten sind parallel geschaltet, wodurch sich ein effektiver Pull-Up-Widerstand ergibt, der die Busleitung bei offenen Schaltern auf den hohen Pegel zieht."}),"\n",(0,l.jsx)(n.li,{children:"Der Pull-Up-Widerstand bestimmt die Geschwindigkeit des Ladens der kapazitiven Last beim \xdcbergang in den rezessiven Zustand (High Level)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"verhalten-der-signalflanken",children:"Verhalten der Signalflanken"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Falling Edge (Abfallende Flanke):"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Wenn der LIN-Bus in den ",(0,l.jsx)(n.strong,{children:"dominanten Zustand"})," wechselt, wird die Leitung aktiv auf Masse gezogen. Dies f\xfchrt zu einer steilen abfallenden Flanke, da die Leitung sofort entladen wird."]}),"\n",(0,l.jsx)(n.li,{children:"Die Steilheit dieser Flanke ist wichtig, um eine klare und eindeutige Trennung der logischen Zust\xe4nde sicherzustellen."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Rising Edge (Ansteigende Flanke):"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Im ",(0,l.jsx)(n.strong,{children:"rezessiven Zustand"})," wird die Leitung durch die Pull-Up-Widerst\xe4nde auf die Betriebsspannung gezogen. Da die kapazitive Last erst aufgeladen werden muss, ist die ansteigende Flanke langsamer."]}),"\n",(0,l.jsx)(n.li,{children:"Je h\xf6her der Pull-Up-Widerstand, desto flacher wird die ansteigende Flanke, was die Signal\xfcbertragungsrate und die Lesbarkeit der Daten beeinflusst."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"wichtige-\xfcberlegungen-zur-dimensionierung-der-pull-up-widerst\xe4nde",children:"Wichtige \xdcberlegungen zur Dimensionierung der Pull-Up-Widerst\xe4nde"}),"\n",(0,l.jsx)(n.p,{children:"Eine falsche Dimensionierung der Pull-Up-Widerst\xe4nde kann zu Problemen f\xfchren:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Steile Flanken:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Zu steile Flanken k\xf6nnen ",(0,l.jsx)(n.strong,{children:"EMV-Probleme"})," verursachen, da sie starke elektromagnetische St\xf6rungen erzeugen, die benachbarte Systeme beeinflussen k\xf6nnen."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Flache Flanken:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Zu flache Flanken k\xf6nnen zu ",(0,l.jsx)(n.strong,{children:"Fehlinterpretationen durch die UART"})," f\xfchren, da der \xdcbergang zwischen den Pegeln zu langsam erfolgt und somit nicht korrekt als Logikwechsel erkannt wird."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Ein ",(0,l.jsx)(n.strong,{children:"korrekt dimensionierter Pull-Up-Widerstand"})," ist daher entscheidend, um eine ",(0,l.jsx)(n.strong,{children:"Balance zwischen Flankensteilheit und EMV-Vertr\xe4glichkeit"})," zu erreichen. Durch die richtige Auswahl des Widerstandswerts wird sichergestellt, dass die Signal\xfcbertragung stabil und zuverl\xe4ssig ist, ohne unn\xf6tige St\xf6rungen zu erzeugen."]}),"\n",(0,l.jsx)(n.h4,{id:"zusammenfassung",children:"Zusammenfassung"}),"\n",(0,l.jsx)(n.p,{children:"Die Signaleigenschaften des LIN-Busses werden ma\xdfgeblich durch die Pull-Up-Widerst\xe4nde und die kapazitive Last der Busleitung beeinflusst. Eine steile abfallende Flanke bei aktivem Low-Pegel und eine kontrollierte ansteigende Flanke beim \xdcbergang zum High-Pegel sind essenziell, um eine klare und fehlerfreie Kommunikation sicherzustellen. Die richtige Dimensionierung der Pull-Up-Widerst\xe4nde spielt daher eine Schl\xfcsselrolle in der elektromagnetischen Vertr\xe4glichkeit und Signalintegrit\xe4t des LIN-Busses."})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>t});var s=i(96540);const l={},r=s.createContext(l);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);