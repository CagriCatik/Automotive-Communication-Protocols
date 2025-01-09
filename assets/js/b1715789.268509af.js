"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[5441],{13366:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"SecOC/Threat-Models","title":"Bedrohungsmodelle","description":"Ein Bedrohungsmodell oder Threat Model ist ein konzeptioneller Rahmen, der dazu dient, potenzielle Bedrohungen und Angriffsszenarien zu identifizieren, zu analysieren und zu verstehen, denen ein System oder eine Anwendung ausgesetzt sein k\xf6nnte. Im vorliegenden Kontext bezieht sich das Bedrohungsmodell auf die Sicherheit eines Controller Area Network (CAN), einem weit verbreiteten Kommunikationsprotokoll in Fahrzeugen.","source":"@site/docs/SecOC/02_Threat-Models.md","sourceDirName":"SecOC","slug":"/SecOC/Threat-Models","permalink":"/Vehicle-Network-Standards/docs/SecOC/Threat-Models","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SecOC/02_Threat-Models.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"secocSidebar","previous":{"title":"Funktionale Spezifikation","permalink":"/Vehicle-Network-Standards/docs/SecOC/Funktionale_Spezifikation"}}');var t=r(74848),s=r(28453);const d={},o="Bedrohungsmodelle",a={},u=[];function l(e){const n={h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"bedrohungsmodelle",children:"Bedrohungsmodelle"})}),"\n",(0,t.jsx)(n.p,{children:"Ein Bedrohungsmodell oder Threat Model ist ein konzeptioneller Rahmen, der dazu dient, potenzielle Bedrohungen und Angriffsszenarien zu identifizieren, zu analysieren und zu verstehen, denen ein System oder eine Anwendung ausgesetzt sein k\xf6nnte. Im vorliegenden Kontext bezieht sich das Bedrohungsmodell auf die Sicherheit eines Controller Area Network (CAN), einem weit verbreiteten Kommunikationsprotokoll in Fahrzeugen."}),"\n",(0,t.jsx)(n.p,{children:"Der Angreifer hat in diesem Bedrohungsmodell das Ziel, verschiedene Arten von Angriffen auf das CAN-Protokoll durchzuf\xfchren, um die Sicherheit und Integrit\xe4t des Fahrzeugnetzwerks zu kompromittieren. Im Folgenden werden die spezifischen Angriffsszenarien erl\xe4utert:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Replay/Wiedergabe"}),": Bei diesem Angriffstyp versucht der Angreifer, g\xfcltige CAN-Frames mit b\xf6sartigen oder betr\xfcgerischen Absichten wiederzuverwenden. Durch das Wiedergeben von Frames k\xf6nnen Sicherheitsmechanismen umgangen werden, um Zugriff oder Kontrolle \xfcber das Fahrzeug zu erlangen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tampering/Manipulation"}),": Der Angreifer versucht, CAN-Frames zu manipulieren, indem er deren Inhalt ver\xe4ndert, um die urspr\xfcnglich beabsichtigte Operation eines Empfangssteuerger\xe4ts (ECU) zu st\xf6ren oder zu verhindern. Dies kann zu potenziell gef\xe4hrlichen Situationen f\xfchren, wenn sicherheitsrelevante Systeme beeintr\xe4chtigt werden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Forging/F\xe4lschung"}),": Bei diesem Angriffstyp generiert der Angreifer einen g\xfcltigen CAN-Frame, der dazu verwendet werden kann, ein echtes Signal zu simulieren und eine bestimmte ECU-Funktionalit\xe4t zu aktivieren. Durch F\xe4lschung k\xf6nnen b\xf6swillige Aktionen im Fahrzeugnetzwerk ausgef\xfchrt werden, die zur Gef\xe4hrdung der Insassen oder des Fahrzeugs selbst f\xfchren k\xf6nnen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fuzzing"}),": Hierbei werden zuvor gef\xe4lschte CAN-Frames in das Netzwerk injiziert, um das Verhalten eines Ziel-ECUs gegen\xfcber unerwarteten Eingaben zu testen. Dies erm\xf6glicht es dem Angreifer, Schwachstellen im System zu identifizieren und potenzielle Angriffsvektoren zu erkennen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Masquerading/Maskerade"}),": Bei diesem Angriffstyp versucht der Angreifer, seine Identit\xe4t zu verschleiern, indem er die CAN-ID eines anderen echten ECUs verwendet. Dadurch kann der Angreifer sich als legitimes Steuerger\xe4t ausgeben und unberechtigten Zugriff auf das Netzwerk erhalten, ohne erkannt zu werden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Information Gathering/Informationsbeschaffung"}),": Der Angreifer zielt darauf ab, kritische Informationen aus CAN-Frames zu extrahieren, wie beispielsweise Frame-IDs oder Nutzlasten, sowie zugeh\xf6rige ECU-Funktionalit\xe4ten zu identifizieren. Diese Informationen k\xf6nnen dann genutzt werden, um gezielte Angriffe auf bestimmte ECUs im Fahrzeugnetzwerk durchzuf\xfchren."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Um sich gegen diese Bedrohungen zu verteidigen, m\xfcssen robuste Sicherheitsma\xdfnahmen implementiert werden, einschlie\xdflich Authentifizierung, Verschl\xfcsselung, Integrit\xe4tspr\xfcfung und \xdcberwachung des CAN-Bus. Dar\xfcber hinaus ist eine kontinuierliche \xdcberpr\xfcfung und Aktualisierung der Sicherheitsma\xdfnahmen erforderlich, um auf neue Angriffsmethoden und -techniken reagieren zu k\xf6nnen und die Sicherheit des Fahrzeugnetzwerks zu gew\xe4hrleisten."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var i=r(96540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);