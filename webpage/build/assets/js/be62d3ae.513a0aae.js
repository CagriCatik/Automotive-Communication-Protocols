"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8297],{24435:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"CAN/can-fd/gleichbleibende-sicherheit","title":"Mehr Daten bei gleichbleibender Sicherheit","description":"Einf\xfchrung in CAN-FD","source":"@site/docs/CAN/06_can-fd/10_gleichbleibende-sicherheit.md","sourceDirName":"CAN/06_can-fd","slug":"/CAN/can-fd/gleichbleibende-sicherheit","permalink":"/Vehicle-Network-Standards/docs/CAN/can-fd/gleichbleibende-sicherheit","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/06_can-fd/10_gleichbleibende-sicherheit.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"L\xe4nge des Datenfeldes","permalink":"/Vehicle-Network-Standards/docs/CAN/can-fd/laenge-datenfeld"},"next":{"title":"Bitstuffing bei CAN und CAN FD: Ein umfassendes Tutorial","permalink":"/Vehicle-Network-Standards/docs/CAN/can-fd/geaendertes-bitstuffing"}}');var t=r(74848),s=r(28453);const d={},l="Mehr Daten bei gleichbleibender Sicherheit",h={},c=[{value:"Einf\xfchrung in CAN-FD",id:"einf\xfchrung-in-can-fd",level:2},{value:"Technische Details von CAN-FD",id:"technische-details-von-can-fd",level:2},{value:"Gr\xf6\xdferes CRC-Feld f\xfcr mehr Daten",id:"gr\xf6\xdferes-crc-feld-f\xfcr-mehr-daten",level:3},{value:"CRC-Berechnung in CAN-FD",id:"crc-berechnung-in-can-fd",level:2},{value:"CRC17-Berechnung f\xfcr Datenfelder bis 16 Byte",id:"crc17-berechnung-f\xfcr-datenfelder-bis-16-byte",level:3},{value:"CRC21-Berechnung f\xfcr gr\xf6\xdfere Datenfelder",id:"crc21-berechnung-f\xfcr-gr\xf6\xdfere-datenfelder",level:3},{value:"Vorteile von CAN-FD",id:"vorteile-von-can-fd",level:2},{value:"Implementierung von CAN-FD in Automobilen",id:"implementierung-von-can-fd-in-automobilen",level:2},{value:"Schlussfolgerung",id:"schlussfolgerung",level:2}];function a(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"mehr-daten-bei-gleichbleibender-sicherheit",children:"Mehr Daten bei gleichbleibender Sicherheit"})}),"\n",(0,t.jsx)(n.h2,{id:"einf\xfchrung-in-can-fd",children:"Einf\xfchrung in CAN-FD"}),"\n",(0,t.jsx)(n.p,{children:"CAN-FD (Controller Area Network with Flexible Data-Rate) ist eine Erweiterung des klassischen CAN-Protokolls, das in den 1980er Jahren von Bosch entwickelt wurde. Es bietet h\xf6here Datenraten und gr\xf6\xdfere Nutzlasten, wodurch es besser f\xfcr moderne Anforderungen im Automotive-Bereich geeignet ist. W\xe4hrend klassisches CAN auf 1 Mbit/s und 8 Byte Daten pro Frame limitiert ist, erm\xf6glicht CAN-FD Datenraten von bis zu 5 Mbit/s und Nutzlasten bis zu 64 Byte pro Frame."}),"\n",(0,t.jsx)(n.h2,{id:"technische-details-von-can-fd",children:"Technische Details von CAN-FD"}),"\n",(0,t.jsx)(n.h3,{id:"gr\xf6\xdferes-crc-feld-f\xfcr-mehr-daten",children:"Gr\xf6\xdferes CRC-Feld f\xfcr mehr Daten"}),"\n",(0,t.jsx)(n.p,{children:"Eine der bedeutenden \xc4nderungen in CAN-FD im Vergleich zum klassischen CAN ist die Anpassung des Cyclic Redundancy Check (CRC)-Feldes. Die CRC-Pr\xfcfung ist entscheidend, um die Integrit\xe4t der Daten zu gew\xe4hrleisten. Aufgrund der erh\xf6hten Anzahl an Bits und der h\xf6heren Datenrate bei CAN-FD steigt die Wahrscheinlichkeit von Bitfehlern. Dies resultiert aus zwei Hauptfaktoren:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"K\xfcrzere Bitzeiten:"})," Die Erh\xf6hung der Datenrate f\xfchrt zu k\xfcrzeren Bitzeiten, was die Anf\xe4lligkeit f\xfcr St\xf6rungen erh\xf6ht."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gr\xf6\xdfere Datenfelder:"})," Mit der M\xf6glichkeit, bis zu 64 Byte Daten zu \xfcbertragen, steigt die Gesamtanzahl der Bits pro Frame erheblich."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Um diesen erh\xf6hten Risiken entgegenzuwirken, wurden die CRC-Felder bei CAN-FD vergr\xf6\xdfert:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"F\xfcr Datenfelder bis 16 Byte wird ein 17-Bit-CRC verwendet."}),"\n",(0,t.jsx)(n.li,{children:"F\xfcr gr\xf6\xdfere Datenfelder wird ein 21-Bit-CRC eingesetzt."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Die Generatorpolynome f\xfcr diese CRC-Berechnungen sind wie folgt:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CRC17:"})," 0x3685B"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CRC21:"})," 0x302899"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"crc-berechnung-in-can-fd",children:"CRC-Berechnung in CAN-FD"}),"\n",(0,t.jsx)(n.p,{children:"Die CRC-Berechnung ist ein kritischer Bestandteil der CAN-FD-Spezifikation, da sie sicherstellt, dass \xdcbertragungsfehler erkannt werden. Die Verwendung von Generatorpolynomen erm\xf6glicht es, den CRC-Wert effizient zu berechnen und Fehler zu erkennen, die w\xe4hrend der \xdcbertragung auftreten k\xf6nnten."}),"\n",(0,t.jsx)(n.h3,{id:"crc17-berechnung-f\xfcr-datenfelder-bis-16-byte",children:"CRC17-Berechnung f\xfcr Datenfelder bis 16 Byte"}),"\n",(0,t.jsx)(n.p,{children:"Das Generatorpolynom 0x3685B wird verwendet, um den 17-Bit-CRC zu berechnen. Der CRC-Wert wird \xfcber das gesamte Datenfeld, einschlie\xdflich der Kontrollinformationen, berechnet. Der genaue Ablauf der Berechnung beinhaltet folgende Schritte:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Initialisierung des CRC-Registers."}),"\n",(0,t.jsx)(n.li,{children:"Bitweise Verarbeitung des Datenfeldes und Anwendung des Generatorpolynoms."}),"\n",(0,t.jsx)(n.li,{children:"Ergebnis ist der 17-Bit-CRC-Wert, der an den Frame angeh\xe4ngt wird."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"crc21-berechnung-f\xfcr-gr\xf6\xdfere-datenfelder",children:"CRC21-Berechnung f\xfcr gr\xf6\xdfere Datenfelder"}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr Datenfelder, die gr\xf6\xdfer als 16 Byte sind, wird das Generatorpolynom 0x302899 verwendet. Der Prozess ist \xe4hnlich der CRC17-Berechnung, jedoch mit einem 21-Bit-Register und entsprechenden Anpassungen in der Polynomberechnung."}),"\n",(0,t.jsx)(n.h2,{id:"vorteile-von-can-fd",children:"Vorteile von CAN-FD"}),"\n",(0,t.jsx)(n.p,{children:"CAN-FD bietet mehrere Vorteile gegen\xfcber dem klassischen CAN-Protokoll:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"H\xf6here Datenrate:"})," Durch die flexible Datenrate k\xf6nnen kritische Daten schneller \xfcbertragen werden, was die Reaktionszeit von Systemen verbessert."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gr\xf6\xdfere Nutzlast:"})," Mit bis zu 64 Byte pro Frame k\xf6nnen mehr Daten in einem einzelnen Frame \xfcbertragen werden, was die Effizienz der Kommunikation erh\xf6ht."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Verbesserte Fehlererkennung:"})," Durch die erweiterten CRC-Felder wird die Wahrscheinlichkeit von unentdeckten Fehlern reduziert, was die Zuverl\xe4ssigkeit des Netzwerks erh\xf6ht."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implementierung-von-can-fd-in-automobilen",children:"Implementierung von CAN-FD in Automobilen"}),"\n",(0,t.jsx)(n.p,{children:"Die Implementierung von CAN-FD in Automobilen erfordert eine sorgf\xe4ltige Planung und Anpassung der bestehenden Netzwerke. Es ist wichtig, dass sowohl die Hardware als auch die Software der Steuerger\xe4te (ECUs) CAN-FD unterst\xfctzen. Dazu geh\xf6ren:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CAN-FD-f\xe4hige Transceiver und Controller:"})," Diese m\xfcssen die h\xf6heren Datenraten und die neuen Frame-Formate unterst\xfctzen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Angepasste Software-Stacks:"})," Die Software muss in der Lage sein, die neuen CRC-Berechnungen und die flexiblen Datenraten zu handhaben."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"schlussfolgerung",children:"Schlussfolgerung"}),"\n",(0,t.jsx)(n.p,{children:"CAN-FD stellt einen wichtigen Fortschritt im Bereich der automobilen Netzwerke dar, indem es h\xf6here Datenraten und gr\xf6\xdfere Nutzlasten erm\xf6glicht. Die Erweiterung der CRC-Felder und die Einf\xfchrung von robusteren Fehlererkennungsmechanismen tragen dazu bei, die Zuverl\xe4ssigkeit der Daten\xfcbertragung in modernen Fahrzeugen zu erh\xf6hen. Bei der Implementierung von CAN-FD m\xfcssen jedoch sorgf\xe4ltig die erh\xf6hten Anforderungen an Hardware und Software ber\xfccksichtigt werden, um die Vorteile vollst\xe4ndig auszusch\xf6pfen."}),"\n",(0,t.jsx)(n.p,{children:"Dieses Tutorial bietet einen \xdcberblick \xfcber die wesentlichen Aspekte von CAN-FD und dessen Vorteile gegen\xfcber dem klassischen CAN-Protokoll. Durch die detaillierte Beschreibung der CRC-Berechnung und die Hervorhebung der technischen Vorteile wird die Bedeutung von CAN-FD f\xfcr moderne Automobile verdeutlicht."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var i=r(96540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);