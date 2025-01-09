"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[279],{68971:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"CAN/can-datensicherung/logische-fehlerbehandlung","title":"Fehlerbehandlung","description":"Netzwerkweite Datenkonsistenz im CAN-Bus","source":"@site/docs/CAN/05_can-datensicherung/06_logische-fehlerbehandlung.md","sourceDirName":"CAN/05_can-datensicherung","slug":"/CAN/can-datensicherung/logische-fehlerbehandlung","permalink":"/Vehicle-Network-Standards/docs/CAN/can-datensicherung/logische-fehlerbehandlung","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CAN/05_can-datensicherung/06_logische-fehlerbehandlung.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"canSidebar","previous":{"title":"Fehlererkennungsmechanismen","permalink":"/Vehicle-Network-Standards/docs/CAN/can-datensicherung/logische-fehlererkennung"},"next":{"title":"Fehlerbehandlung","permalink":"/Vehicle-Network-Standards/docs/CAN/can-datensicherung/fehlerverfolgung"}}');var i=r(74848),t=r(28453);const l={},a="Fehlerbehandlung",d={},u=[{value:"Netzwerkweite Datenkonsistenz im CAN-Bus",id:"netzwerkweite-datenkonsistenz-im-can-bus",level:2},{value:"Fehlererkennung und Fehlersignalisierung",id:"fehlererkennung-und-fehlersignalisierung",level:2},{value:"Prim\xe4res und Sekund\xe4res Error Flag",id:"prim\xe4res-und-sekund\xe4res-error-flag",level:2},{value:"Error Delimiter und Bus-Idle-Kennung",id:"error-delimiter-und-bus-idle-kennung",level:2},{value:"Abschluss der Fehlerbehandlung",id:"abschluss-der-fehlerbehandlung",level:2},{value:"Zeitrahmen der Fehlerbehandlung",id:"zeitrahmen-der-fehlerbehandlung",level:2},{value:"Fehlerpassiver Zustand und Suspend Transmission Time",id:"fehlerpassiver-zustand-und-suspend-transmission-time",level:2},{value:"Schlussfolgerung",id:"schlussfolgerung",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"fehlerbehandlung",children:"Fehlerbehandlung"})}),"\n",(0,i.jsx)(n.h2,{id:"netzwerkweite-datenkonsistenz-im-can-bus",children:"Netzwerkweite Datenkonsistenz im CAN-Bus"}),"\n",(0,i.jsx)(n.p,{children:"Das Controller Area Network (CAN) Protokoll ist ein robustes Kommunikationsprotokoll, das in Fahrzeugnetzwerken weit verbreitet ist. Ein wesentliches Merkmal des CAN-Protokolls ist seine F\xe4higkeit, netzwerkweite Datenkonsistenz aufrechtzuerhalten, selbst wenn lokale St\xf6rungen auftreten. Dies wird durch die Implementierung spezifischer Fehlererkennungs- und Fehlerbehandlungsmechanismen erreicht."}),"\n",(0,i.jsx)(n.h2,{id:"fehlererkennung-und-fehlersignalisierung",children:"Fehlererkennung und Fehlersignalisierung"}),"\n",(0,i.jsx)(n.p,{children:"Wenn ein CAN-Knoten einen Fehler erkennt, ist es seine Pflicht, alle anderen Knoten im Netzwerk dar\xfcber zu informieren. Dies geschieht durch die \xdcbertragung eines Fehlersignals, auch Error Flag genannt. Ein Error Flag besteht aus sechs dominanten Bits, die bewusst die Bitstuffingregel verletzen, um einen Bitstuffing-Fehler zu verursachen. Diese bewusste Regelverletzung dient dazu, sicherzustellen, dass alle Knoten im Netzwerk den Fehler erkennen."}),"\n",(0,i.jsx)("img",{src:"./image/1712276741129.png",alt:"CAN-Netzwerk",style:"max-width:90%; display: block; margin: 0 auto;"}),"\n",(0,i.jsx)(n.h2,{id:"prim\xe4res-und-sekund\xe4res-error-flag",children:"Prim\xe4res und Sekund\xe4res Error Flag"}),"\n",(0,i.jsx)(n.p,{children:"Die \xdcbertragung eines Error Flags durch den fehlererkennenden Knoten (prim\xe4res Error Flag) l\xf6st bei allen anderen Knoten ebenfalls die \xdcbertragung eines Error Flags (sekund\xe4res Error Flag) aus. Dadurch wird die regul\xe4re Daten\xfcbertragung abgebrochen und das Netzwerk in einen Fehlerbehandlungsmodus versetzt. In manchen Situationen k\xf6nnen sich prim\xe4re und sekund\xe4re Error Flags \xfcberlagern, was die Gesamtdauer der Fehlerbehandlung beeinflusst."}),"\n",(0,i.jsx)(n.h2,{id:"error-delimiter-und-bus-idle-kennung",children:"Error Delimiter und Bus-Idle-Kennung"}),"\n",(0,i.jsx)(n.p,{children:"Nach der \xdcbertragung eines Error Flags folgt stets ein Error Delimiter. Dieser besteht aus acht rezessiven Bits und ersetzt den ACK-Delimiter und das EOF (End of Frame) einer regul\xe4ren Botschafts\xfcbertragung. Zusammen mit der obligatorischen Sendepause, der sogenannten Intermission (ITM), ergeben sich auf dem CAN-Bus elf rezessive Bits, die als Bus-Idle-Kennung fungieren."}),"\n",(0,i.jsx)(n.h2,{id:"abschluss-der-fehlerbehandlung",children:"Abschluss der Fehlerbehandlung"}),"\n",(0,i.jsx)(n.p,{children:"Die Fehlerbehandlung wird abgeschlossen, indem der Sender der abgebrochenen CAN-Botschaft nach der ITM versucht, die abgebrochene Botschaft erneut zu \xfcbertragen. Dies bedeutet jedoch nicht, dass eine sofortige Wiederholung garantiert ist. Der CAN-Bus verwendet ein priorit\xe4tengesteuertes Zugriffsverfahren, was bedeutet, dass andere Nachrichten mit h\xf6herer Priorit\xe4t Vorrang haben k\xf6nnen."}),"\n",(0,i.jsx)(n.h2,{id:"zeitrahmen-der-fehlerbehandlung",children:"Zeitrahmen der Fehlerbehandlung"}),"\n",(0,i.jsx)(n.p,{children:"Die Zeit von der Fehlererkennung bis zum Wiederaufsetzen der abgebrochenen Botschaft variiert:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"17 Bitzeiten:"})," Im besten Fall, wenn sich prim\xe4res und sekund\xe4res Error Flag \xfcberlagern."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"23 Bitzeiten:"})," Wenn sich prim\xe4res und sekund\xe4res Error Flag nicht \xfcberlagern."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"31 Bitzeiten:"})," Wenn der fehlerhafte Knoten sich im fehlerpassiven Zustand befindet. In diesem Zustand muss der Knoten eine sogenannte Suspend Transmission Time abwarten, bevor er erneut auf den CAN-Bus zugreifen darf. Diese Sendepause betr\xe4gt 8 Bits."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"./image/1712276756119.png",alt:"CAN-Netzwerk",style:"max-width:90%; display: block; margin: 0 auto;"}),"\n",(0,i.jsx)(n.h2,{id:"fehlerpassiver-zustand-und-suspend-transmission-time",children:"Fehlerpassiver Zustand und Suspend Transmission Time"}),"\n",(0,i.jsx)(n.p,{children:"Ein Knoten im fehlerpassiven Zustand hat eine verminderte Priorit\xe4t beim Buszugriff und muss nach einem Fehler eine zus\xe4tzliche Pause von 8 Bitzeiten (Suspend Transmission Time) einhalten. Dieser Mechanismus verhindert, dass fehlerhafte Knoten den Bus \xfcberm\xe4\xdfig belasten und erm\xf6glicht eine stabilere Netzwerkkonfiguration."}),"\n",(0,i.jsx)(n.h2,{id:"schlussfolgerung",children:"Schlussfolgerung"}),"\n",(0,i.jsx)(n.p,{children:"Das CAN-Protokoll stellt durch seine ausgekl\xfcgelten Fehlererkennungs- und Fehlerbehandlungsmechanismen sicher, dass die Datenkonsistenz im Netzwerk aufrechterhalten wird. Die \xdcbertragung von Error Flags, gefolgt von Error Delimiters und einer definierten Sendepause, sorgt daf\xfcr, dass alle Knoten synchronisiert bleiben und Fehler effizient behandelt werden k\xf6nnen. Die priorit\xe4tengesteuerte Natur des CAN-Bus bedeutet jedoch, dass keine sofortige Wiederholung einer abgebrochenen Botschaft garantiert werden kann. Insbesondere im fehlerpassiven Zustand m\xfcssen zus\xe4tzliche Wartezeiten eingehalten werden, um die Netzwerksicherheit und -stabilit\xe4t zu gew\xe4hrleisten."})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var s=r(96540);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);