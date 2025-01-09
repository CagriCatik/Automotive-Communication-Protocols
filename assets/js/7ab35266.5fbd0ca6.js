"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[5959],{41189:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>o,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"FLEXRAY/Buszugriff/demonstration","title":"Hybrides Buszugriffsverfahren und Daten\xfcbertragung","description":"FlexRay ist ein hochentwickeltes Kommunikationsprotokoll f\xfcr die Fahrzeugelektrik und -elektronik, das speziell f\xfcr sicherheitskritische Anwendungen entwickelt wurde. Es bietet hohe Datenraten, Fehlertoleranz und deterministische Kommunikation. In diesem Tutorial werden wir das hybride Buszugriffsverfahren und die damit verbundene Daten\xfcbertragung in einem FlexRay-Cluster untersuchen.","source":"@site/docs/FLEXRAY/03_Buszugriff/07_demonstration.md","sourceDirName":"FLEXRAY/03_Buszugriff","slug":"/FLEXRAY/Buszugriff/demonstration","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Buszugriff/demonstration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FLEXRAY/03_Buszugriff/07_demonstration.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"flexraySidebar","previous":{"title":"Dynamischer Slot","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Buszugriff/dynamischer-slot"},"next":{"title":"Framing","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Framing/"}}');var s=i(74848),r=i(28453);const a={},d="Hybrides Buszugriffsverfahren und Daten\xfcbertragung",u={},l=[{value:"Definition des FlexRay-Clusters",id:"definition-des-flexray-clusters",level:2},{value:"Kommunikationsplan: Statisches und Dynamisches Segment",id:"kommunikationsplan-statisches-und-dynamisches-segment",level:2},{value:"Statisches Segment",id:"statisches-segment",level:3},{value:"Dynamisches Segment",id:"dynamisches-segment",level:3},{value:"Redundante Kommunikationskan\xe4le",id:"redundante-kommunikationskan\xe4le",level:2},{value:"Interaktive Grafiken und Animationen",id:"interaktive-grafiken-und-animationen",level:2},{value:"Interaktive Grafik",id:"interaktive-grafik",level:3},{value:"Animation",id:"animation",level:3},{value:"Anleitung zur Nutzung der Medienobjekte",id:"anleitung-zur-nutzung-der-medienobjekte",level:2},{value:"Interaktive Grafik: Dynamisches Segment",id:"interaktive-grafik-dynamisches-segment",level:3},{value:"Animation: Statisches und Dynamisches Segment",id:"animation-statisches-und-dynamisches-segment",level:3}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"hybrides-buszugriffsverfahren-und-daten\xfcbertragung",children:"Hybrides Buszugriffsverfahren und Daten\xfcbertragung"})}),"\n",(0,s.jsx)(n.p,{children:"FlexRay ist ein hochentwickeltes Kommunikationsprotokoll f\xfcr die Fahrzeugelektrik und -elektronik, das speziell f\xfcr sicherheitskritische Anwendungen entwickelt wurde. Es bietet hohe Datenraten, Fehlertoleranz und deterministische Kommunikation. In diesem Tutorial werden wir das hybride Buszugriffsverfahren und die damit verbundene Daten\xfcbertragung in einem FlexRay-Cluster untersuchen."}),"\n",(0,s.jsx)(n.h2,{id:"definition-des-flexray-clusters",children:"Definition des FlexRay-Clusters"}),"\n",(0,s.jsx)(n.p,{children:"Ein FlexRay-Cluster besteht aus mehreren Knoten, die physikalisch miteinander verbunden sind. In unserem Beispiel-Cluster gibt es f\xfcnf FlexRay-Knoten, die als Knoten A bis E bezeichnet werden. Die Knoten sind \xfcber eine physikalische Linie verbunden, und um die Ausfallsicherheit zu erh\xf6hen, ist der Kommunikationskanal redundant ausgelegt, sodass zwei Kan\xe4le (Kanal A und Kanal B) zur Verf\xfcgung stehen."}),"\n",(0,s.jsx)(n.h2,{id:"kommunikationsplan-statisches-und-dynamisches-segment",children:"Kommunikationsplan: Statisches und Dynamisches Segment"}),"\n",(0,s.jsx)(n.p,{children:"Der FlexRay-Kommunikationsplan ist in zwei Hauptsegmente unterteilt: das statische Segment und das dynamische Segment. Jedes Segment umfasst eine festgelegte Anzahl von Slots, in denen die Daten\xfcbertragung stattfindet."}),"\n",(0,s.jsx)(n.h3,{id:"statisches-segment",children:"Statisches Segment"}),"\n",(0,s.jsx)(n.p,{children:"Im statischen Segment werden die sogenannten statischen Botschaften \xfcbertragen. Diese Botschaften sind fest im Kommunikationsplan definiert und werden regelm\xe4\xdfig und deterministisch \xfcbertragen, unabh\xe4ngig davon, ob sich ihre Daten ge\xe4ndert haben oder nicht. Dieses Segment ist besonders wichtig f\xfcr sicherheitskritische und zeitkritische Daten, da es eine hohe Zuverl\xe4ssigkeit und Vorhersagbarkeit bietet."}),"\n",(0,s.jsx)(n.h3,{id:"dynamisches-segment",children:"Dynamisches Segment"}),"\n",(0,s.jsx)(n.p,{children:"Im Gegensatz dazu werden im dynamischen Segment die dynamischen Botschaften \xfcbertragen. Diese Botschaften werden nur dann gesendet, wenn es einen tats\xe4chlichen Bedarf gibt, also wenn sich die zu \xfcbertragenden Daten ge\xe4ndert haben oder eine spezifische Anfrage besteht. Dies erm\xf6glicht eine effizientere Nutzung der verf\xfcgbaren Bandbreite, da nur notwendige Daten \xfcbertragen werden."}),"\n",(0,s.jsx)(n.h2,{id:"redundante-kommunikationskan\xe4le",children:"Redundante Kommunikationskan\xe4le"}),"\n",(0,s.jsx)(n.p,{children:"Die Verwendung von zwei redundanten Kan\xe4len (Kanal A und Kanal B) erh\xf6ht die Zuverl\xe4ssigkeit des FlexRay-Systems. Bei einem Ausfall eines Kanals kann der andere Kanal die Daten\xfcbertragung fortsetzen, was die Ausfallsicherheit des Gesamtsystems erh\xf6ht. In der Praxis bedeutet dies, dass wichtige Daten, wie Steuerbefehle f\xfcr sicherheitskritische Systeme (z. B. Bremsen, Lenkung), auch bei einem Teilausfall des Netzwerks sicher \xfcbertragen werden k\xf6nnen."}),"\n",(0,s.jsx)(n.h2,{id:"interaktive-grafiken-und-animationen",children:"Interaktive Grafiken und Animationen"}),"\n",(0,s.jsx)(n.p,{children:"Zur Veranschaulichung der Datenkommunikation im FlexRay-Cluster stehen Ihnen verschiedene Medienobjekte zur Verf\xfcgung:"}),"\n",(0,s.jsx)(n.h3,{id:"interaktive-grafik",children:"Interaktive Grafik"}),"\n",(0,s.jsx)(n.p,{children:"Die interaktive Grafik bietet eine detaillierte Darstellung der Kommunikationstechnik im dynamischen Segment. Sie k\xf6nnen hier die einzelnen Slots und deren Nutzung im dynamischen Segment untersuchen und nachvollziehen, wann und wie dynamische Botschaften \xfcbertragen werden."}),"\n",(0,s.jsx)(n.h3,{id:"animation",children:"Animation"}),"\n",(0,s.jsx)(n.p,{children:"Die Animation gibt einen umfassenden \xdcberblick \xfcber die Kommunikation sowohl im statischen als auch im dynamischen Segment. Mit dieser Animation k\xf6nnen Sie den gesamten Kommunikationsablauf im FlexRay-Cluster nachvollziehen und verstehen, wie die verschiedenen Botschaften im Netzwerk \xfcbertragen werden."}),"\n",(0,s.jsx)(n.h2,{id:"anleitung-zur-nutzung-der-medienobjekte",children:"Anleitung zur Nutzung der Medienobjekte"}),"\n",(0,s.jsx)(n.p,{children:"Um die volle Funktionalit\xe4t der interaktiven Grafik und der Animation nutzen zu k\xf6nnen, sollten Sie sich die jeweiligen Anleitungen sorgf\xe4ltig durchlesen. Diese Anleitungen erkl\xe4ren, wie Sie die Medienobjekte bedienen und welche Informationen Ihnen zur Verf\xfcgung stehen."}),"\n",(0,s.jsx)(n.h3,{id:"interaktive-grafik-dynamisches-segment",children:"Interaktive Grafik: Dynamisches Segment"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Untersuchen Sie die Slots"}),": Klicken Sie auf die einzelnen Slots, um deren Inhalt und \xdcbertragungsdetails zu sehen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nachvollziehen von Daten\xfcbertragungen"}),": Verfolgen Sie, wann dynamische Botschaften gesendet werden und wie der Bedarf festgestellt wird."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"animation-statisches-und-dynamisches-segment",children:"Animation: Statisches und Dynamisches Segment"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Beobachten Sie den Kommunikationsablauf"}),": Starten Sie die Animation und beobachten Sie, wie die Daten im statischen und dynamischen Segment \xfcbertragen werden."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Verstehen Sie die Segmentierung"}),": Lernen Sie die Unterschiede und die spezifischen Eigenschaften der beiden Segmente kennen."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);