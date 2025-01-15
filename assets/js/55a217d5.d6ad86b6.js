"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[5197],{10386:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"CAN/datensicherung/terminierung","title":"Terminierung","description":"Einf\xfchrung","source":"@site/docs/CAN/05_datensicherung/04_terminierung.md","sourceDirName":"CAN/05_datensicherung","slug":"/CAN/datensicherung/terminierung","permalink":"/Vehicle-Network-Standards/docs/CAN/datensicherung/terminierung","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/05_datensicherung/04_terminierung.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"Symmetrische Signal\xfcbertragung","permalink":"/Vehicle-Network-Standards/docs/CAN/datensicherung/twisted-pair"},"next":{"title":"Fehlererkennungsmechanismen","permalink":"/Vehicle-Network-Standards/docs/CAN/datensicherung/logische-fehlererkennung"}}');var r=i(74848),t=i(28453);const d={},l="Terminierung",u={},a=[{value:"Einf\xfchrung",id:"einf\xfchrung",level:2},{value:"Wellenwiderstand",id:"wellenwiderstand",level:2},{value:"Definition und Bedeutung",id:"definition-und-bedeutung",level:2},{value:"Auswirkungen von Reflexionen",id:"auswirkungen-von-reflexionen",level:2},{value:"Abschlusswiderstand",id:"abschlusswiderstand",level:2},{value:"Standardabschlusswiderstand",id:"standardabschlusswiderstand",level:2},{value:"Geteilter Abschlusswiderstand",id:"geteilter-abschlusswiderstand",level:2},{value:"Funktionsweise und Vorteile",id:"funktionsweise-und-vorteile",level:3},{value:"Relevanz f\xfcr den LIN-Bus",id:"relevanz-f\xfcr-den-lin-bus",level:2},{value:"Unterschiede und Gemeinsamkeiten",id:"unterschiede-und-gemeinsamkeiten",level:2}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"terminierung",children:"Terminierung"})}),"\n",(0,r.jsx)(n.h2,{id:"einf\xfchrung",children:"Einf\xfchrung"}),"\n",(0,r.jsx)(n.p,{children:"In modernen Automobilen sind zuverl\xe4ssige Kommunikationsnetzwerke entscheidend f\xfcr die Funktionalit\xe4t und Effizienz von elektronischen Steuerger\xe4ten. Neben dem bekannten CAN-Bus (Controller Area Network) hat sich der LIN-Bus (Local Interconnect Network) als kosteng\xfcnstige Alternative etabliert, insbesondere f\xfcr Anwendungen, die keine hohen Daten\xfcbertragungsraten erfordern. Im Folgenden wird ein detailliertes und wissenschaftlich fundiertes Tutorial zur Bedeutung des Wellenwiderstands und des Abschlusswiderstands im CAN-Bus pr\xe4sentiert, mit speziellen Hinweisen auf die Relevanz dieser Konzepte f\xfcr den LIN-Bus."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CAN-Netzwerk",src:i(59725).A+"",width:"1064",height:"561"})}),"\n",(0,r.jsx)(n.h2,{id:"wellenwiderstand",children:"Wellenwiderstand"}),"\n",(0,r.jsx)(n.p,{children:"Der Wellenwiderstand (charakteristische Impedanz) eines \xdcbertragungsmediums ist eine fundamentale Eigenschaft, die die Ausbreitung von elektrischen Signalen entlang des Mediums beschreibt. Im Kontext von Hochgeschwindigkeits-Daten\xfcbertragungen, wie sie im CAN-Bus \xfcblich sind, spielt der Wellenwiderstand eine entscheidende Rolle."}),"\n",(0,r.jsx)(n.h2,{id:"definition-und-bedeutung",children:"Definition und Bedeutung"}),"\n",(0,r.jsx)(n.p,{children:"Der Wellenwiderstand eines Kommunikationskanals, wie beispielsweise eines Twisted-Pair-Kabels im CAN-Bus, betr\xe4gt typischerweise 120 Ohm. Dieser Wert ist kein Zufall, sondern ergibt sich aus den physikalischen Eigenschaften des Kabels, einschlie\xdflich seiner Induktivit\xe4t und Kapazit\xe4t pro L\xe4ngeneinheit. Ein korrekter Wellenwiderstand ist essentiell, um Reflexionen von Signalen zu vermeiden, die bei Diskontinuit\xe4ten im Netzwerk auftreten k\xf6nnen."}),"\n",(0,r.jsx)(n.h2,{id:"auswirkungen-von-reflexionen",children:"Auswirkungen von Reflexionen"}),"\n",(0,r.jsx)(n.p,{children:"Reflexionen entstehen, wenn ein elektrisches Signal auf eine Impedanzdiskontinuit\xe4t trifft. Dies kann zu \xdcberlagerungen der Signale f\xfchren, die die Datenintegrit\xe4t beeintr\xe4chtigen. Im CAN-Bus, der hohe Datenraten \xfcbertr\xe4gt, k\xf6nnen solche Reflexionen gravierende St\xf6rungen verursachen, die zu Kommunikationsfehlern und einer reduzierten Zuverl\xe4ssigkeit f\xfchren."}),"\n",(0,r.jsx)(n.h2,{id:"abschlusswiderstand",children:"Abschlusswiderstand"}),"\n",(0,r.jsx)(n.p,{children:"Um Reflexionen zu minimieren und die Signalqualit\xe4t zu gew\xe4hrleisten, werden die Enden eines CAN-Busses mit Abschlusswiderst\xe4nden versehen, die dem Wellenwiderstand des Kommunikationskanals entsprechen."}),"\n",(0,r.jsx)(n.h2,{id:"standardabschlusswiderstand",children:"Standardabschlusswiderstand"}),"\n",(0,r.jsx)(n.p,{children:"Ein typischer Abschlusswiderstand im CAN-Bus hat einen Wert von 120 Ohm und wird an beiden Enden des Buskabels angebracht. Diese Abschlusswiderst\xe4nde sorgen daf\xfcr, dass das Signal vollst\xe4ndig absorbiert wird und keine Reflexionen entstehen, die die Signal\xfcbertragung st\xf6ren k\xf6nnten."}),"\n",(0,r.jsx)(n.h2,{id:"geteilter-abschlusswiderstand",children:"Geteilter Abschlusswiderstand"}),"\n",(0,r.jsx)(n.p,{children:"Eine alternative Methode zur Terminierung ist die Verwendung eines geteilten Abschlusswiderstands. Diese Technik verwendet zwei identische Widerst\xe4nde von jeweils 60 Ohm und eine Kapazit\xe4t, typischerweise 4,7 nF, die zwischen den beiden Widerst\xe4nden und der Masse geschaltet wird."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CAN-Netzwerk",src:i(25752).A+"",width:"1180",height:"412"})}),"\n",(0,r.jsx)(n.h3,{id:"funktionsweise-und-vorteile",children:"Funktionsweise und Vorteile"}),"\n",(0,r.jsx)(n.p,{children:"Der geteilte Abschlusswiderstand wirkt als Tiefpassfilter. Hochfrequente Signalanteile werden gegen Masse kurzgeschlossen, w\xe4hrend die Gleichspannungsverh\xe4ltnisse nicht beeinflusst werden. Diese Konfiguration hat mehrere Vorteile:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Erh\xf6hung der St\xf6rfestigkeit"}),": Durch die Filterung hochfrequenter St\xf6rungen wird die Anf\xe4lligkeit des Netzwerks gegen\xfcber elektromagnetischen St\xf6rungen reduziert."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reduktion der Emissionen"}),": Die Filterung der Hochfrequenzkomponenten f\xfchrt zu einer Verringerung der elektromagnetischen Emissionen, was zu einer besseren Einhaltung gesetzlicher Vorschriften f\xfchrt."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"relevanz-f\xfcr-den-lin-bus",children:"Relevanz f\xfcr den LIN-Bus"}),"\n",(0,r.jsx)(n.p,{children:"Obwohl der LIN-Bus typischerweise niedrigere Datenraten aufweist als der CAN-Bus, gelten die grundlegenden Prinzipien des Wellenwiderstands und des Abschlusswiderstands auch hier. LIN-Bus-Netzwerke m\xfcssen ebenfalls sorgf\xe4ltig entworfen werden, um Reflexionen und St\xf6rungen zu minimieren, insbesondere in Anwendungen, die eine hohe Zuverl\xe4ssigkeit erfordern."}),"\n",(0,r.jsx)(n.h2,{id:"unterschiede-und-gemeinsamkeiten",children:"Unterschiede und Gemeinsamkeiten"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Datenrate"}),": LIN-Bus-Netzwerke operieren bei niedrigeren Datenraten, wodurch die Anforderungen an den Wellenwiderstand weniger kritisch sind als im CAN-Bus. Dennoch bleibt eine ordnungsgem\xe4\xdfe Terminierung wichtig."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Terminierung"}),": Im LIN-Bus wird typischerweise nur ein Ende des Busses mit einem Abschlusswiderstand versehen, da der Master-Knoten h\xe4ufig einen eingebauten Abschlusswiderstand hat. Die Verwendung geteilter Abschlusswiderst\xe4nde ist weniger verbreitet, aber dennoch eine m\xf6gliche Methode zur Verbesserung der Signalqualit\xe4t in speziellen Anwendungen."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},59725:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/1712276671360-561ea02975296d50bc78df72ba796707.png"},25752:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/1712276687614-2073ee23b40837fac2282296a6bdcd46.png"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var s=i(96540);const r={},t=s.createContext(r);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);