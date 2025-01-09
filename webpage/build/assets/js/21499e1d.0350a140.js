"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[3780],{7644:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"CAN/can-datensicherung/twisted-pair","title":"Symmetrische Signal\xfcbertragung","description":"Einf\xfchrung in die symmetrische Signal\xfcbertragung","source":"@site/docs/CAN/05_can-datensicherung/03_twisted-pair.md","sourceDirName":"CAN/05_can-datensicherung","slug":"/CAN/can-datensicherung/twisted-pair","permalink":"/Vehicle-Network-Standards/docs/CAN/can-datensicherung/twisted-pair","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/05_can-datensicherung/03_twisted-pair.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"Bitcodierung im CAN-Bus","permalink":"/Vehicle-Network-Standards/docs/CAN/can-datensicherung/nrz-codierung"},"next":{"title":"Terminierung","permalink":"/Vehicle-Network-Standards/docs/CAN/can-datensicherung/terminierung"}}');var t=i(74848),s=i(28453);const d={},a="Symmetrische Signal\xfcbertragung",u={},g=[{value:"Einf\xfchrung in die symmetrische Signal\xfcbertragung",id:"einf\xfchrung-in-die-symmetrische-signal\xfcbertragung",level:2},{value:"Prinzip der symmetrischen Signal\xfcbertragung",id:"prinzip-der-symmetrischen-signal\xfcbertragung",level:2},{value:"Differenzbildung zur St\xf6runterdr\xfcckung",id:"differenzbildung-zur-st\xf6runterdr\xfcckung",level:2},{value:"Physikalisches \xdcbertragungsmedium",id:"physikalisches-\xfcbertragungsmedium",level:2},{value:"Umgang mit magnetischen Feldern",id:"umgang-mit-magnetischen-feldern",level:2},{value:"Verdrillte Leitungspaare (Twisted Pairs)",id:"verdrillte-leitungspaare-twisted-pairs",level:2},{value:"Effektivit\xe4t der Verdrillung",id:"effektivit\xe4t-der-verdrillung",level:2},{value:"Zusammenfassung",id:"zusammenfassung",level:2},{value:"Weiterf\xfchrende Themen",id:"weiterf\xfchrende-themen",level:2}];function l(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"symmetrische-signal\xfcbertragung",children:"Symmetrische Signal\xfcbertragung"})}),"\n",(0,t.jsx)(n.h2,{id:"einf\xfchrung-in-die-symmetrische-signal\xfcbertragung",children:"Einf\xfchrung in die symmetrische Signal\xfcbertragung"}),"\n",(0,t.jsx)(n.p,{children:"Symmetrische Signal\xfcbertragung ist eine Methode, die h\xe4ufig im Automobilbereich verwendet wird, um die \xdcbertragung von Daten robust gegen\xfcber elektromagnetischen St\xf6rungen zu machen. Diese Methode ist besonders wichtig in Systemen wie dem Controller Area Network (CAN), das als R\xfcckgrat f\xfcr die Kommunikation zwischen verschiedenen Steuerger\xe4ten in modernen Fahrzeugen dient."}),"\n",(0,t.jsx)("img",{src:"./image/1712276652085.png",alt:"CAN-Netzwerk",style:"max-width:90%; display: block; margin: 0 auto;"}),"\n",(0,t.jsx)(n.h2,{id:"prinzip-der-symmetrischen-signal\xfcbertragung",children:"Prinzip der symmetrischen Signal\xfcbertragung"}),"\n",(0,t.jsx)(n.p,{children:"Bei der symmetrischen Signal\xfcbertragung werden die Daten auf zwei Leitungen \xfcbertragen: der CAN-High-Leitung (CANH) und der CAN-Low-Leitung (CANL). Diese beiden Leitungen sind so konzipiert, dass sie gleiche und entgegengesetzte Signale tragen. St\xf6rungen, die von externen Quellen wie Motoren, Z\xfcndanlagen oder Schaltkontakten induziert werden, wirken sich auf beide Leitungen gleicherma\xdfen aus."}),"\n",(0,t.jsx)(n.h2,{id:"differenzbildung-zur-st\xf6runterdr\xfcckung",children:"Differenzbildung zur St\xf6runterdr\xfcckung"}),"\n",(0,t.jsx)(n.p,{children:"Das zentrale Prinzip der symmetrischen Signal\xfcbertragung ist die Differenzbildung. Da die St\xf6rungen auf beiden Leitungen in gleicher Weise auftreten, heben sie sich durch die Differenzbildung auf. Das Nutzsignal bleibt dabei ungest\xf6rt. Dies f\xfchrt zu einer hohen St\xf6rfestigkeit und sorgt daf\xfcr, dass das CAN-Bus-System zuverl\xe4ssig arbeiten kann."}),"\n",(0,t.jsx)(n.h2,{id:"physikalisches-\xfcbertragungsmedium",children:"Physikalisches \xdcbertragungsmedium"}),"\n",(0,t.jsx)(n.p,{children:"Der CAN-Bus nutzt zwei Leitungen, die als symmetrisches Paar arbeiten. Diese Leitungen sind die CANH und die CANL. Durch diese Konfiguration wird sichergestellt, dass jede externe St\xf6rung, die auf eine Leitung wirkt, auch die andere Leitung beeinflusst, aber in umgekehrter Polarit\xe4t. Die Differenzbildung zwischen diesen beiden Signalen eliminiert somit die St\xf6rungen."}),"\n",(0,t.jsx)(n.h2,{id:"umgang-mit-magnetischen-feldern",children:"Umgang mit magnetischen Feldern"}),"\n",(0,t.jsx)(n.p,{children:"Eine weitere wesentliche Eigenschaft der symmetrischen Signal\xfcbertragung ist die Handhabung magnetischer Felder. In einem symmetrischen System erzeugen die elektrischen Felder der beiden Leitungen entgegengesetzte magnetische Felder. Wenn die Leitungen eng aneinander liegen, heben sich diese magnetischen Felder weitgehend auf. Dies reduziert die elektromagnetische Abstrahlung, was besonders wichtig ist, um Interferenzen mit anderen elektronischen Systemen im Fahrzeug zu vermeiden."}),"\n",(0,t.jsx)(n.h2,{id:"verdrillte-leitungspaare-twisted-pairs",children:"Verdrillte Leitungspaare (Twisted Pairs)"}),"\n",(0,t.jsx)(n.p,{children:'Um die beschriebenen Vorteile zu maximieren, werden die beiden Leitungen des CAN-Bus verdrillt. Diese Technik wird als Verwendung von "Twisted Pairs" bezeichnet. Durch das Verdrillen der Leitungen wird die Induktionswirkung weiter reduziert. Die Verdrillung sorgt daf\xfcr, dass die induzierten Spannungen in den einzelnen Schleifenabschnitten sich gegenseitig aufheben.'}),"\n",(0,t.jsx)(n.h2,{id:"effektivit\xe4t-der-verdrillung",children:"Effektivit\xe4t der Verdrillung"}),"\n",(0,t.jsx)(n.p,{children:"Die Wirksamkeit der Verdrillung h\xe4ngt von der Anzahl der Umschlingungen ab. Mehr Umschlingungen pro L\xe4ngeneinheit f\xfchren zu einer besseren Unterdr\xfcckung der induzierten St\xf6rungen. Im Allgemeinen wird eine Verdrillungsrate von mindestens 30 Umschlingungen pro Meter empfohlen, um eine ausreichende Reduktion der magnetischen Einfl\xfcsse zu gew\xe4hrleisten."}),"\n",(0,t.jsx)(n.h2,{id:"zusammenfassung",children:"Zusammenfassung"}),"\n",(0,t.jsx)(n.p,{children:"Die symmetrische Signal\xfcbertragung ist ein entscheidendes Konzept im Automotivebereich, das durch die Differenzbildung und die Verwendung von verdrillten Leitungspaaren eine hohe St\xf6rsicherheit gew\xe4hrleistet. Diese Techniken minimieren die elektromagnetische Abstrahlung und verbessern die Zuverl\xe4ssigkeit und Leistungsf\xe4higkeit des CAN-Bus-Systems."}),"\n",(0,t.jsx)(n.h2,{id:"weiterf\xfchrende-themen",children:"Weiterf\xfchrende Themen"}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr ein tieferes Verst\xe4ndnis k\xf6nnten folgende Themen weiter untersucht werden:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Spezifische Implementierungen von CAN-Bus-Systemen in verschiedenen Fahrzeugmodellen."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Vergleich der symmetrischen Signal\xfcbertragung mit anderen Signal\xfcbertragungstechniken."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Auswirkungen unterschiedlicher Verdrillungsraten auf die Signalqualit\xe4t in verschiedenen Betriebsumgebungen."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);