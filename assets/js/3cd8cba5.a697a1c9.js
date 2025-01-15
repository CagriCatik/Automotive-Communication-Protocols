"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[9412],{27744:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"ETHERNET/ip/ipv4","title":"IPv4 - Version 4","description":"Adressen und Klassen","source":"@site/docs/ETHERNET/04_ip/02_ipv4.md","sourceDirName":"ETHERNET/04_ip","slug":"/ETHERNET/ip/ipv4","permalink":"/Vehicle-Network-Standards/docs/ETHERNET/ip/ipv4","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ETHERNET/04_ip/02_ipv4.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"ethernetSidebar","previous":{"title":"Internet Protocol - IPv4/IPv6","permalink":"/Vehicle-Network-Standards/docs/ETHERNET/ip/eigenschaften"},"next":{"title":"IPv6 - Version 6","permalink":"/Vehicle-Network-Standards/docs/ETHERNET/ip/ipv6"}}');var t=s(74848),i=s(28453);const d={},a="IPv4 - Version 4",o={},l=[];function c(e){const n={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ipv4---version-4",children:"IPv4 - Version 4"})}),"\n",(0,t.jsx)(n.p,{children:"Adressen und Klassen\nDie 32 Bit gro\xdfen IPv4-Adressen werden Byte f\xfcr Byte als Dezimalzahl mit einem Punkt als Trennzeichen dargestellt (z.B. 192.168.10.1). F\xfcr IPv4 wurden vor vielen Jahren Adressklassen definiert, welche die Adressstruktur f\xfcr den \xf6ffentlichen Bereich des Internets regeln. Diese Klassen haben heute zwar keine gro\xdfe praktische Bedeutung mehr, sie erlauben allerdings eine grobe Trennung in Netzwerk- und Hostadresse, so dass ein R\xfcckschluss auf die Knotenanzahl m\xf6glich ist."}),"\n",(0,t.jsx)(n.p,{children:"Lokale Adressen\n\xd6ffentliche IPv4-Adressen sind schon seit Jahren vergeben. Allerdings gibt es lokale bzw. private Adressbereiche, die beispielsweise in Firmen oder Privathaushalten frei genutzt werden d\xfcrfen. Da diese Adressen niemals im \xf6ffentlichen Netzwerk vorkommen, leitet ein Router lokale Adressen nicht ohne \xc4nderungen in das Internet weiter."}),"\n",(0,t.jsx)(n.p,{children:"Subnetzmasken\nDie verwendeten Ziel- und Absenderknotenadressen setzen sich aus der linksb\xfcndigen Netzwerkadresse und der rechtsb\xfcndigen Hostadresse zusammen. Die Festlegung der Position an der die IP-Adresse aufgeteilt wird, erfolgt typischerweise mit Hilfe von Subnetzmasken. Diese k\xf6nnen als eigenst\xe4ndige Adresse (z.B. 255.255.255.0) oder als Pr\xe4fix hinter einer IP-Adresse (z.B. 192.168.10.1/24) beschrieben werden. W\xe4hrend alle linksb\xfcndig gesetzten Bits die Netzwerkadresse kennzeichnen (z.B. 24 Bits), erlauben die rechtsb\xfcndig ungesetzten Bits einen R\xfcckschluss auf die Hostadresse (z.B. 8 Bits)."}),"\n",(0,t.jsx)(n.p,{children:"Multi- und Broadcast\nSoll ein IP-Paket an mehrere Teilnehmer versendet werden, so k\xf6nnen sowohl Multicast- als auch Broadcast-Adressen zum Einsatz kommen. W\xe4hrend Multicast-Adressen konfiguriert oder per IGMP angelegt werden m\xfcssen, sind Broadcast-Adressen mit Hilfe der Hostadressen ableitbar. Immer der h\xf6chste Wert eines Hostadressbereichs entspricht der zugeh\xf6rigen Broadcast-Adresse (z.B. 192.168.10.255)."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var r=s(96540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);