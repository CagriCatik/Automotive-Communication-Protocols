"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[4479],{31102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"FLEXRAY/Buszugriff/statisches-segment","title":"Statisches Segment","description":"FlexRay ist ein hochperformantes Kommunikationssystem, das in der Fahrzeugtechnik weit verbreitet ist, insbesondere f\xfcr sicherheitskritische Anwendungen und komplexe Steuerungssysteme. Innerhalb des FlexRay-Kommunikationszyklus spielt das statische Segment eine entscheidende Rolle. In diesem Tutorial erl\xe4utern wir die Struktur und Funktion des statischen Segments und gehen dabei auf technische Details und m\xf6gliche Fehlinterpretationen ein.","source":"@site/docs/FLEXRAY/03_Buszugriff/03_statisches-segment.md","sourceDirName":"FLEXRAY/03_Buszugriff","slug":"/FLEXRAY/Buszugriff/statisches-segment","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Buszugriff/statisches-segment","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FLEXRAY/03_Buszugriff/03_statisches-segment.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"flexraySidebar","previous":{"title":"Kommunikationszyklus","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Buszugriff/kommunikationszyklus"},"next":{"title":"Statischer Slot","permalink":"/Vehicle-Network-Standards/docs/FLEXRAY/Buszugriff/statischer-slot"}}');var i=t(74848),r=t(28453);const a={},d="Statisches Segment",l={},h=[{value:"Einf\xfchrung in FlexRay und das TDMA-Verfahren",id:"einf\xfchrung-in-flexray-und-das-tdma-verfahren",level:2},{value:"Struktur des Statischen Segments",id:"struktur-des-statischen-segments",level:2},{value:"Synchronisierung der Knoten",id:"synchronisierung-der-knoten",level:3},{value:"Redundanz und Datenrate im Statischen Segment",id:"redundanz-und-datenrate-im-statischen-segment",level:2},{value:"Fehlertoleranz",id:"fehlertoleranz",level:3},{value:"Erh\xf6hung der Datenrate",id:"erh\xf6hung-der-datenrate",level:3},{value:"Maximale Anzahl Statischer Slots",id:"maximale-anzahl-statischer-slots",level:2},{value:"Kritische Betrachtung und Korrekturen",id:"kritische-betrachtung-und-korrekturen",level:3},{value:"Anzahl der Slots",id:"anzahl-der-slots",level:2},{value:"Synchronisation und Fehlertoleranz",id:"synchronisation-und-fehlertoleranz",level:2}];function u(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"statisches-segment",children:"Statisches Segment"})}),"\n",(0,i.jsx)(n.p,{children:"FlexRay ist ein hochperformantes Kommunikationssystem, das in der Fahrzeugtechnik weit verbreitet ist, insbesondere f\xfcr sicherheitskritische Anwendungen und komplexe Steuerungssysteme. Innerhalb des FlexRay-Kommunikationszyklus spielt das statische Segment eine entscheidende Rolle. In diesem Tutorial erl\xe4utern wir die Struktur und Funktion des statischen Segments und gehen dabei auf technische Details und m\xf6gliche Fehlinterpretationen ein."}),"\n",(0,i.jsx)(n.h2,{id:"einf\xfchrung-in-flexray-und-das-tdma-verfahren",children:"Einf\xfchrung in FlexRay und das TDMA-Verfahren"}),"\n",(0,i.jsx)(n.p,{children:"FlexRay verwendet das Time Division Multiple Access (TDMA)-Verfahren, um eine deterministische und zuverl\xe4ssige Kommunikation zu gew\xe4hrleisten. TDMA teilt die Zeit in regelm\xe4\xdfige Intervalle, sogenannte Zeitschlitze, und weist jedem Kommunikationsknoten einen spezifischen Zeitschlitz zur Daten\xfcbertragung zu."}),"\n",(0,i.jsx)(n.h2,{id:"struktur-des-statischen-segments",children:"Struktur des Statischen Segments"}),"\n",(0,i.jsx)(n.p,{children:"Das statische Segment im FlexRay-Kommunikationszyklus besteht aus einer festen Anzahl gleich langer Zeitschlitze, den statischen Slots. Diese Struktur erm\xf6glicht eine \xe4quidistante (gleichm\xe4\xdfig verteilte) Daten\xfcbertragung, die f\xfcr verteilte Regelungen unerl\xe4sslich ist. Jeder statische Slot ist einem bestimmten FlexRay-Knoten und einer spezifischen Nachricht zugeordnet."}),"\n",(0,i.jsx)(n.h3,{id:"synchronisierung-der-knoten",children:"Synchronisierung der Knoten"}),"\n",(0,i.jsx)(n.p,{children:"Damit die Kommunikation reibungslos verl\xe4uft, m\xfcssen die lokalen Z\xe4hler der FlexRay-Knoten synchronisiert sein. Diese Z\xe4hler werden zu Beginn jedes statischen Slots inkrementiert. Der aktuelle Z\xe4hlerwert korrespondiert mit einer statischen Botschaft und dem zugeh\xf6rigen FlexRay-Knoten."}),"\n",(0,i.jsx)(n.h2,{id:"redundanz-und-datenrate-im-statischen-segment",children:"Redundanz und Datenrate im Statischen Segment"}),"\n",(0,i.jsx)(n.p,{children:"Ein wesentlicher Vorteil von FlexRay ist die M\xf6glichkeit, Redundanz zur Erh\xf6hung der Fehlertoleranz oder zur Steigerung der Datenrate zu nutzen. Die Entscheidung, ob ein redundanter Kanal zur Fehlertoleranz oder zur Datenratenerh\xf6hung verwendet wird, kann f\xfcr jede Nachricht individuell getroffen werden."}),"\n",(0,i.jsx)(n.h3,{id:"fehlertoleranz",children:"Fehlertoleranz"}),"\n",(0,i.jsx)(n.p,{children:"Im ersten Slot des statischen Segments wird dieselbe Botschaft \xfcber beide Kan\xe4le (Kanal A und Kanal B) \xfcbertragen. Dadurch wird sichergestellt, dass ein Ausfall eines Kanals nicht zum Verlust der Botschaft f\xfchrt. Diese Redundanz ist besonders wichtig f\xfcr sicherheitskritische Anwendungen."}),"\n",(0,i.jsx)(n.h3,{id:"erh\xf6hung-der-datenrate",children:"Erh\xf6hung der Datenrate"}),"\n",(0,i.jsx)(n.p,{children:"In den nachfolgenden Slots k\xf6nnen unterschiedliche Botschaften \xfcber die beiden Kan\xe4le \xfcbertragen werden, um die Datenrate zu erh\xf6hen. Diese Flexibilit\xe4t erm\xf6glicht es, die Kommunikationskapazit\xe4t des Systems optimal zu nutzen."}),"\n",(0,i.jsx)(n.h2,{id:"maximale-anzahl-statischer-slots",children:"Maximale Anzahl Statischer Slots"}),"\n",(0,i.jsx)(n.p,{children:"FlexRay erlaubt die Definition von bis zu 1023 statischen Slots. Um eine globale Zeitbasis zu generieren, sind mindestens zwei FlexRay-Knoten erforderlich. Daher muss das statische Segment mindestens zwei statische Slots umfassen."}),"\n",(0,i.jsx)(n.h3,{id:"kritische-betrachtung-und-korrekturen",children:"Kritische Betrachtung und Korrekturen"}),"\n",(0,i.jsx)(n.h2,{id:"anzahl-der-slots",children:"Anzahl der Slots"}),"\n",(0,i.jsx)(n.p,{children:"Es ist korrekt, dass FlexRay bis zu 1023 statische Slots unterst\xfctzen kann. Dies stellt sicher, dass auch in komplexen Systemen ausreichend Kommunikationskapazit\xe4t vorhanden ist."}),"\n",(0,i.jsx)(n.h2,{id:"synchronisation-und-fehlertoleranz",children:"Synchronisation und Fehlertoleranz"}),"\n",(0,i.jsx)(n.p,{children:"Die Synchronisation der lokalen Z\xe4hler ist von entscheidender Bedeutung f\xfcr die korrekte Funktion des FlexRay-Systems. Ein Fehler in der Synchronisation kann zu Kommunikationsausf\xe4llen und Datenverlust f\xfchren. Daher sind pr\xe4zise Mechanismen zur Synchronisation erforderlich, um die Integrit\xe4t des Systems zu gew\xe4hrleisten."})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);