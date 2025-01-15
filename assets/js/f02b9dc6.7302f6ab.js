"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[657],{46550:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"CAN/buszugriff/arbitrierung","title":"Bitweise Arbitrierung","description":"Einleitung","source":"@site/docs/CAN/04_buszugriff/02_arbitrierung.md","sourceDirName":"CAN/04_buszugriff","slug":"/CAN/buszugriff/arbitrierung","permalink":"/Vehicle-Network-Standards/docs/CAN/buszugriff/arbitrierung","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/04_buszugriff/02_arbitrierung.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"Buszugriffs im CAN-Netzwerk","permalink":"/Vehicle-Network-Standards/docs/CAN/buszugriff/prinzip"},"next":{"title":"Priorit\xe4ten und Arbitrierung","permalink":"/Vehicle-Network-Standards/docs/CAN/buszugriff/priorisierung"}}');var s=r(74848),t=r(28453);const d={},l="Bitweise Arbitrierung",u={},a=[{value:"Einleitung",id:"einleitung",level:2},{value:"Grundlagen der bitweisen Arbitrierung",id:"grundlagen-der-bitweisen-arbitrierung",level:2},{value:"Ablauf der bitweisen Arbitrierung",id:"ablauf-der-bitweisen-arbitrierung",level:2},{value:"Eindeutige Buspegel",id:"eindeutige-buspegel",level:2},{value:"Arbitrierungslogik",id:"arbitrierungslogik",level:2},{value:"Ende der Arbitrierungsphase",id:"ende-der-arbitrierungsphase",level:2}];function g(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"bitweise-arbitrierung",children:"Bitweise Arbitrierung"})}),"\n",(0,s.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,s.jsx)(n.p,{children:"Die bitweise Arbitrierung ist ein wesentliches Element des Controller Area Network (CAN), das in der ISO 11898-1 normiert ist. Diese Technik erm\xf6glicht es mehreren Steuerger\xe4ten (ECUs) in einem Fahrzeug, \xfcber ein gemeinsames Netzwerk zu kommunizieren, ohne dass es zu Datenkollisionen kommt. In diesem detaillierten und wissenschaftlich fundierten Tutorial werden die Mechanismen und Abl\xe4ufe der bitweisen Arbitrierung im CAN-Netzwerk erl\xe4utert, basierend auf der bereitgestellten Abbildung und erg\xe4nzenden Informationen."}),"\n",(0,s.jsx)(n.h2,{id:"grundlagen-der-bitweisen-arbitrierung",children:"Grundlagen der bitweisen Arbitrierung"}),"\n",(0,s.jsx)(n.p,{children:"Die bitweise Arbitrierung stellt sicher, dass in einem CAN-Netzwerk nur ein Steuerger\xe4t zur gleichen Zeit auf den Bus zugreifen und Daten senden kann. Dieses Verfahren, das auch als Carrier Sense Multiple Access mit Collision Resolution (CSMA/CR) oder Collision Avoidance (CSMA/CA) bekannt ist, verhindert Kollisionen und erm\xf6glicht eine priorit\xe4tsbasierte \xdcbertragung von Nachrichten."}),"\n",(0,s.jsx)(n.h2,{id:"ablauf-der-bitweisen-arbitrierung",children:"Ablauf der bitweisen Arbitrierung"}),"\n",(0,s.jsx)(n.p,{children:"Der Ablauf der bitweisen Arbitrierung im CAN-Netzwerk ist detailliert in der Abbildung dargestellt und l\xe4sst sich in folgende Schritte unterteilen:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sendewunsch"}),": Ein Steuerger\xe4t m\xf6chte eine Nachricht senden."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Busmonitoring"}),": Das Steuerger\xe4t \xfcberwacht den CAN-Bus, um dessen Zustand zu pr\xfcfen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pr\xfcfung: Ist der CAN-Bus frei?"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ja"}),": Das Steuerger\xe4t sendet das Start-of-Frame (SOF)-Bit."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nein"}),": Das Steuerger\xe4t wartet weiter und \xfcberwacht den Bus erneut."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Senden des n\xe4chsten ID-Bits"}),": Das Steuerger\xe4t sendet das n\xe4chste Bit der Nachricht-Identifier (ID)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pr\xfcfung: Buspegel = Sendepegel?"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ja"}),": Das Steuerger\xe4t sendet das n\xe4chste ID-Bit."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nein"}),": Es folgt eine Dominanzpr\xfcfung:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dominanter Buspegel & rezessiver Sendepegel?"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ja"}),": Das Steuerger\xe4t geht in den Fehlerzustand."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nein"}),": Das Steuerger\xe4t wechselt in den Empfangszustand."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pr\xfcfung: Arbitrierungsfeld gesendet?"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ja"}),": Das Steuerger\xe4t hat alle ID-Bits gesendet und wechselt in den Sendestatus."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Nein"}),": Das Steuerger\xe4t sendet weiterhin die ID-Bits, bis das Arbitrierungsfeld vollst\xe4ndig gesendet ist."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"eindeutige-buspegel",children:"Eindeutige Buspegel"}),"\n",(0,s.jsx)(n.p,{children:"Alle sendebereiten Steuerger\xe4te legen nach der netzwerkweiten Synchronisierung den Identifier der zu \xfcbertragenden CAN-Botschaft bitweise auf den CAN-Bus. Die Wired-AND-Buslogik des CAN-Netzwerks stellt dabei sicher, dass immer ein eindeutiger Buspegel vorliegt. Dieses Verfahren sorgt daf\xfcr, dass das dominante Bit auf dem Bus verbleibt und nur der Knoten mit der h\xf6chsten Priorit\xe4t senden kann."}),"\n",(0,s.jsx)(n.h2,{id:"arbitrierungslogik",children:"Arbitrierungslogik"}),"\n",(0,s.jsx)(n.p,{children:"Die Arbitrierungslogik entscheidet, welches Steuerger\xe4t nach der Synchronisation weiter senden darf und welches aufh\xf6ren muss. Dies erfolgt durch einen Vergleich der gesendeten Bits:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Das Steuerger\xe4t, das ein rezessives Bit sendet und ein dominantes Bit empf\xe4ngt, verliert die Arbitrierung und wechselt in den Empfangszustand."}),"\n",(0,s.jsx)(n.li,{children:"Das Steuerger\xe4t, das ein dominantes Bit sendet und kein rezessives Bit empf\xe4ngt, gewinnt die Arbitrierung und darf weiter senden."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ende-der-arbitrierungsphase",children:"Ende der Arbitrierungsphase"}),"\n",(0,s.jsx)(n.p,{children:"Am Ende der Arbitrierungsphase hat das Steuerger\xe4t mit der Nachricht mit der kleinsten ID die Berechtigung zu senden. Alle anderen Steuerger\xe4te wechseln in den Empfangszustand und versuchen erneut zu senden, sobald der Bus wieder frei ist."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var i=r(96540);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);