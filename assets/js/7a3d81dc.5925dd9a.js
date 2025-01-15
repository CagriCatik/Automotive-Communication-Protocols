"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8776],{26674:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"FLEXRAY/Kommunikation/flexray-bus","title":"Bus","description":"Herausforderungen der elektromagnetischen Vertr\xe4glichkeit","source":"@site/docs/FLEXRAY/02_Kommunikation/06_flexray-bus.md","sourceDirName":"FLEXRAY/02_Kommunikation","slug":"/FLEXRAY/Kommunikation/flexray-bus","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Kommunikation/flexray-bus","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FLEXRAY/02_Kommunikation/06_flexray-bus.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"flexraySidebar","previous":{"title":"Controller","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Kommunikation/flexray-controller"},"next":{"title":"Buspegel","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Kommunikation/flexray-buspegel"}}');var t=r(74848),s=r(28453);const u={},l="Bus",d={},a=[{value:"Herausforderungen der elektromagnetischen Vertr\xe4glichkeit",id:"herausforderungen-der-elektromagnetischen-vertr\xe4glichkeit",level:2},{value:"Physikalische Signal\xfcbertragung",id:"physikalische-signal\xfcbertragung",level:3},{value:"Busstruktur und Terminierung",id:"busstruktur-und-terminierung",level:3},{value:"Reflexionen und Terminierung",id:"reflexionen-und-terminierung",level:4},{value:"Geteilter Busabschluss",id:"geteilter-busabschluss",level:4},{value:"Kritische Bewertung",id:"kritische-bewertung",level:2},{value:"Fazit",id:"fazit",level:2}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"bus",children:"Bus"})}),"\n",(0,t.jsx)(n.h2,{id:"herausforderungen-der-elektromagnetischen-vertr\xe4glichkeit",children:"Herausforderungen der elektromagnetischen Vertr\xe4glichkeit"}),"\n",(0,t.jsx)(n.p,{children:"Die hohe Datenrate und der Verzicht auf geschirmte Leitungen stellen gro\xdfe Herausforderungen f\xfcr die elektromagnetische Vertr\xe4glichkeit (EMV) dar. Zur Erh\xf6hung der Immunit\xe4t gegen\xfcber hochfrequenten St\xf6rfeldern und elektrostatischen Entladungen (ESD) sowie zur Reduzierung der Emissionen werden im FlexRay Physical Layer spezifische Ma\xdfnahmen definiert."}),"\n",(0,t.jsx)(n.h3,{id:"physikalische-signal\xfcbertragung",children:"Physikalische Signal\xfcbertragung"}),"\n",(0,t.jsx)(n.p,{children:"Die physikalische Signal\xfcbertragung im FlexRay-Cluster basiert auf der \xdcbertragung von Spannungsdifferenzen. Durch Motoren, Z\xfcndanlagen und Schaltkontakte induzierte St\xf6rspannungen werden durch diese \xdcbertragungsweise unsch\xe4dlich gemacht. Dies wird durch die vergleichsweise geringen Differenzspannungen (2 Volt f\xfcr den Buspegel \u201eData_1\u201c, -2 Volt f\xfcr den Buspegel \u201eData_0\u201c) erreicht, wodurch die Emissionen gering gehalten werden."}),"\n",(0,t.jsx)(n.h3,{id:"busstruktur-und-terminierung",children:"Busstruktur und Terminierung"}),"\n",(0,t.jsx)(n.p,{children:"Der FlexRay-Bus besteht aus zwei Leitungen: Bus Plus (BP) und Bus Minus (BM). Durch das Verdrillen dieser Leitungen wird das magnetische Feld erheblich reduziert, wodurch verdrillte Leiterpaare ohne Abschirmung in der Praxis \xfcblich sind."}),"\n",(0,t.jsx)(n.h4,{id:"reflexionen-und-terminierung",children:"Reflexionen und Terminierung"}),"\n",(0,t.jsx)(n.p,{children:"Bei hohen Datenraten und gro\xdfen Busausdehnungen k\xf6nnen Signalausgleichsvorg\xe4nge (Reflexionen) auftreten. Diese Reflexionen werden durch die Terminierung der Enden des Kommunikationskanals mittels Abschlusswiderst\xe4nden verhindert. Die FlexRay-Spezifikation schreibt eine Last zwischen 40 und 55 Ohm vor, weshalb die Abschlusswiderst\xe4nde zwischen 80 und 110 Ohm liegen m\xfcssen. Folglich sollte das verwendete Kabel einen Wellenwiderstand in diesem Bereich aufweisen."}),"\n",(0,t.jsx)(n.h4,{id:"geteilter-busabschluss",children:"Geteilter Busabschluss"}),"\n",(0,t.jsx)(n.p,{children:"Anstelle eines einzelnen Busabschlusswiderstandes kann auch ein geteilter Busabschluss verwendet werden. Dieser wirkt wie ein Tiefpassfilter und kurzschlie\xdft hochfrequente Signale gegen Masse, ohne die Gleichspannungsverh\xe4ltnisse zu beeinflussen. Dies tr\xe4gt zur weiteren Reduzierung von St\xf6rungen bei und verbessert die EMV."}),"\n",(0,t.jsx)(n.h2,{id:"kritische-bewertung",children:"Kritische Bewertung"}),"\n",(0,t.jsx)(n.p,{children:"W\xe4hrend die FlexRay-Technologie erhebliche Fortschritte in der Fahrzeugelektrik erm\xf6glicht, gibt es auch kritische Punkte zu beachten:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Kosten f\xfcr ungeeignete Kabel"}),": Obwohl FlexRay ungeeignete, nicht abgeschirmte Kabel verwendet, ist es wichtig, dass diese Kabel von hoher Qualit\xe4t sind, um St\xf6rungen zu minimieren."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Komplexit\xe4t der Implementierung"}),": Die genaue Einhaltung der Spezifikationen und die korrekte Terminierung sind entscheidend, um Reflexionen und St\xf6rungen zu vermeiden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"EMV-Ma\xdfnahmen"}),": Trotz der Ma\xdfnahmen zur EMV muss die Systemumgebung sorgf\xe4ltig \xfcberwacht und getestet werden, um sicherzustellen, dass die elektromagnetische Vertr\xe4glichkeit gew\xe4hrleistet ist."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fazit",children:"Fazit"}),"\n",(0,t.jsx)(n.p,{children:"FlexRay bietet eine leistungsf\xe4hige und robuste L\xf6sung f\xfcr die Datenkommunikation in Fahrzeugen, die hohe Datenraten und deterministische \xdcbertragung erm\xf6glicht. Durch die sorgf\xe4ltige Implementierung und Ber\xfccksichtigung der EMV-Ma\xdfnahmen kann FlexRay effektiv eingesetzt werden, um den steigenden Anforderungen moderner Fahrzeuge gerecht zu werden. Dieses Tutorial hat die wesentlichen Aspekte und Herausforderungen der FlexRay-Technologie erl\xe4utert und bietet eine solide Grundlage f\xfcr deren Anwendung in der Praxis."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>u,x:()=>l});var i=r(96540);const t={},s=i.createContext(t);function u(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:u(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);