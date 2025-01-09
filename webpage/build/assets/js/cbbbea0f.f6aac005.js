"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[4892],{86274:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"FLEXRAY/buszugriff/dynamischer-slot","title":"FlexRay-Tutorial: Dynamische Slots im Fahrzeugnetzwerk","description":"In der modernen Fahrzeugelektrik und -elektronik spielt das FlexRay-Kommunikationssystem eine entscheidende Rolle. FlexRay ist ein hochzuverl\xe4ssiges, fehlertolerantes und deterministisches Busprotokoll, das vor allem in sicherheitskritischen Anwendungen, wie dem Antriebsstrang und Fahrdynamikregelungen, verwendet wird. In diesem Tutorial werden wir uns eingehend mit der Struktur und Bemessung dynamischer Slots im FlexRay-System befassen und diese mit statischen Slots vergleichen.","source":"@site/docs/FLEXRAY/03_buszugriff/06_dynamischer-slot.md","sourceDirName":"FLEXRAY/03_buszugriff","slug":"/FLEXRAY/buszugriff/dynamischer-slot","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/buszugriff/dynamischer-slot","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FLEXRAY/03_buszugriff/06_dynamischer-slot.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"flexraySidebar","previous":{"title":"dynamisches-segment","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/buszugriff/dynamisches-segment"},"next":{"title":"FlexRay-Tutorial: Hybrides Buszugriffsverfahren und Daten\xfcbertragung in Fahrzeugen","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/buszugriff/demonstration"}}');var s=i(74848),r=i(28453);const a={},d="FlexRay-Tutorial: Dynamische Slots im Fahrzeugnetzwerk",l={},c=[{value:"Einf\xfchrung in FlexRay",id:"einf\xfchrung-in-flexray",level:2},{value:"Dynamische Slots: Aufbau und Struktur",id:"dynamische-slots-aufbau-und-struktur",level:2},{value:"Action Point Offset und Action Point",id:"action-point-offset-und-action-point",level:3},{value:"Nachrichten\xfcbertragung im dynamischen Segment",id:"nachrichten\xfcbertragung-im-dynamischen-segment",level:3},{value:"Channel Idle Delimiter",id:"channel-idle-delimiter",level:3},{value:"Besondere Anforderungen an dynamische Botschaften",id:"besondere-anforderungen-an-dynamische-botschaften",level:2},{value:"Dynamic Trailing Sequence",id:"dynamic-trailing-sequence",level:3},{value:"Vergleich von dynamischen und statischen Slots",id:"vergleich-von-dynamischen-und-statischen-slots",level:2},{value:"Kritische Betrachtung",id:"kritische-betrachtung",level:2},{value:"Fazit",id:"fazit",level:2}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"flexray-tutorial-dynamische-slots-im-fahrzeugnetzwerk",children:"FlexRay-Tutorial: Dynamische Slots im Fahrzeugnetzwerk"})}),"\n",(0,s.jsx)(n.p,{children:"In der modernen Fahrzeugelektrik und -elektronik spielt das FlexRay-Kommunikationssystem eine entscheidende Rolle. FlexRay ist ein hochzuverl\xe4ssiges, fehlertolerantes und deterministisches Busprotokoll, das vor allem in sicherheitskritischen Anwendungen, wie dem Antriebsstrang und Fahrdynamikregelungen, verwendet wird. In diesem Tutorial werden wir uns eingehend mit der Struktur und Bemessung dynamischer Slots im FlexRay-System befassen und diese mit statischen Slots vergleichen."}),"\n",(0,s.jsx)(n.h2,{id:"einf\xfchrung-in-flexray",children:"Einf\xfchrung in FlexRay"}),"\n",(0,s.jsx)(n.p,{children:"FlexRay zeichnet sich durch seine F\xe4higkeit aus, sowohl deterministische als auch dynamische Kommunikation zu unterst\xfctzen. Das FlexRay-Kommunikationsprotokoll teilt den Kommunikationszyklus in zwei Hauptsegmente: das statische Segment und das dynamische Segment."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Statisches Segment"}),": Hier werden Nachrichten in festgelegten Slots mit garantierten Zeitfenstern \xfcbertragen, wodurch eine deterministische Kommunikation erm\xf6glicht wird."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamisches Segment"}),": Hier k\xf6nnen Nachrichten flexibel in dynamischen Slots gesendet werden, was eine effizientere Nutzung der Bandbreite erm\xf6glicht."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamische-slots-aufbau-und-struktur",children:"Dynamische Slots: Aufbau und Struktur"}),"\n",(0,s.jsx)(n.p,{children:"Dynamische Slots im FlexRay-Protokoll sind \xe4hnlich aufgebaut wie statische Slots, jedoch mit einigen wichtigen Unterschieden, die ihre Flexibilit\xe4t und Anpassungsf\xe4higkeit gew\xe4hrleisten."}),"\n",(0,s.jsx)(n.h3,{id:"action-point-offset-und-action-point",children:"Action Point Offset und Action Point"}),"\n",(0,s.jsxs)(n.p,{children:["Jeder dynamische Slot beginnt mit dem sogenannten ",(0,s.jsx)(n.strong,{children:"Action Point Offset"}),". Dieser Offset endet am ",(0,s.jsx)(n.strong,{children:"Action Point"}),", dem Zeitpunkt, zu dem die \xdcbertragung einer dynamischen Botschaft beginnt. Dieser Action Point entspricht dem Action Point des Minislots im statischen Segment."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Action Point Offset"}),": Zeitraum vom Beginn des dynamischen Slots bis zum Action Point."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Action Point"}),": Beginn der eigentlichen Nachrichten\xfcbertragung."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"nachrichten\xfcbertragung-im-dynamischen-segment",children:"Nachrichten\xfcbertragung im dynamischen Segment"}),"\n",(0,s.jsxs)(n.p,{children:["Nach dem Action Point beginnt die ",(0,s.jsx)(n.strong,{children:"Nachrichten\xfcbertragung"}),". Im dynamischen Segment k\xf6nnen Botschaften mit unterschiedlich gro\xdfem Payload \xfcbertragen werden, was eine flexible Nutzung der Bandbreite erm\xf6glicht. Dies unterscheidet sich von statischen Slots, in denen die Payload-Gr\xf6\xdfe festgelegt ist."]}),"\n",(0,s.jsx)(n.h3,{id:"channel-idle-delimiter",children:"Channel Idle Delimiter"}),"\n",(0,s.jsxs)(n.p,{children:["Nach der Nachrichten\xfcbertragung folgt der ",(0,s.jsx)(n.strong,{children:"Channel Idle Delimiter"}),". Dieser besteht, wie im statischen Slot, aus elf rezessiven Bits. Diese Delimiter dienen dazu, den Abschluss der Nachrichten\xfcbertragung zu markieren und den Bus f\xfcr die n\xe4chste \xdcbertragung vorzubereiten."]}),"\n",(0,s.jsx)(n.h2,{id:"besondere-anforderungen-an-dynamische-botschaften",children:"Besondere Anforderungen an dynamische Botschaften"}),"\n",(0,s.jsxs)(n.p,{children:["Gem\xe4\xdf der FlexRay-Spezifikation muss eine dynamische Botschaft genau mit dem n\xe4chstm\xf6glichen Action Point enden. Um dies sicherzustellen, wird die Botschafts\xfcbertragung um die sogenannte ",(0,s.jsx)(n.strong,{children:"Dynamic Trailing Sequence"})," verl\xe4ngert. Diese Sequenz kann theoretisch maximal einen Minislot lang sein und stellt sicher, dass keine \xdcberschneidungen zwischen aufeinanderfolgenden dynamischen Slots auftreten."]}),"\n",(0,s.jsx)(n.h3,{id:"dynamic-trailing-sequence",children:"Dynamic Trailing Sequence"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic Trailing Sequence"}),": Verl\xe4ngerung der Botschafts\xfcbertragung, um sicherzustellen, dass diese genau am n\xe4chsten Action Point endet."]}),"\n",(0,s.jsx)(n.li,{children:"Maximale L\xe4nge: Ein Minislot."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"vergleich-von-dynamischen-und-statischen-slots",children:"Vergleich von dynamischen und statischen Slots"}),"\n",(0,s.jsx)(n.p,{children:"Obwohl dynamische und statische Slots \xe4hnliche Strukturen aufweisen, unterscheiden sie sich in der Flexibilit\xe4t und der Art der Nachrichten\xfcbertragung:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Statische Slots"}),": Feste Zeitfenster und Payload-Gr\xf6\xdfen, deterministische \xdcbertragung."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamische Slots"}),": Flexible Zeitfenster und variable Payload-Gr\xf6\xdfen, dynamische und effizientere Nutzung der Bandbreite."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"kritische-betrachtung",children:"Kritische Betrachtung"}),"\n",(0,s.jsx)(n.p,{children:"Die Beschreibung der Dynamik in FlexRay-Slots sollte stets die strengen Spezifikationen und Protokolle ber\xfccksichtigen. Es ist wichtig zu beachten, dass die dynamische Flexibilit\xe4t nicht zu Lasten der deterministischen Sicherheit gehen darf, die f\xfcr viele sicherheitskritische Anwendungen notwendig ist."}),"\n",(0,s.jsx)(n.p,{children:"Die Implementierung der Dynamic Trailing Sequence stellt sicher, dass die Synchronisation und Ordnung der Daten\xfcbertragungen gewahrt bleibt. Ungenauigkeiten in der Konfiguration dieser Sequenzen k\xf6nnen jedoch zu Timing-Problemen und Kommunikationsst\xf6rungen f\xfchren. Daher ist eine pr\xe4zise Planung und Validierung der Netzwerkparameter unerl\xe4sslich."}),"\n",(0,s.jsx)(n.h2,{id:"fazit",children:"Fazit"}),"\n",(0,s.jsx)(n.p,{children:"FlexRay bietet durch seine dynamischen Slots eine flexible und effiziente Kommunikationsmethode, die besonders in komplexen und sicherheitskritischen Fahrzeuganwendungen von Vorteil ist. Das Verst\xe4ndnis der Struktur und Funktionsweise dynamischer Slots ist essenziell f\xfcr die erfolgreiche Implementierung und Wartung eines FlexRay-Netzwerks. Durch die sorgf\xe4ltige Planung und Beachtung der Spezifikationen k\xf6nnen die Vorteile von FlexRay voll ausgesch\xf6pft werden, ohne die Zuverl\xe4ssigkeit und Sicherheit des Kommunikationssystems zu gef\xe4hrden."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);