"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[3845],{84101:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"SOME-IP/someip/ereignis-publish-subscribe","title":"Ereignis - Publish/Subscribe","description":"3.5 Ereignis - Publish/Subscribe in SOME/IP","source":"@site/docs/SOME-IP/03_someip/05_ereignis-publish-subscribe.md","sourceDirName":"SOME-IP/03_someip","slug":"/SOME-IP/someip/ereignis-publish-subscribe","permalink":"/Vehicle-Network-Standards/docs/SOME-IP/someip/ereignis-publish-subscribe","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SOME-IP/03_someip/05_ereignis-publish-subscribe.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"someipSidebar","previous":{"title":"Fire and Forget - Methodenaufruf","permalink":"/Vehicle-Network-Standards/docs/SOME-IP/someip/fire-and-forget"},"next":{"title":"Felder - Publish/Subscribe","permalink":"/Vehicle-Network-Standards/docs/SOME-IP/someip/felder-publish.subscribe"}}');var r=i(74848),t=i(28453);const l={},d="Ereignis - Publish/Subscribe",u={},h=[{value:"3.5 <strong>Ereignis - Publish/Subscribe in SOME/IP</strong>",id:"35-ereignis---publishsubscribe-in-someip",level:2},{value:"3.5.1 <strong>Einf\xfchrung in das Publish/Subscribe-Modell</strong>",id:"351-einf\xfchrung-in-das-publishsubscribe-modell",level:3},{value:"3.5.2 <strong>Verwendung des Publish/Subscribe-Modells in SOME/IP</strong>",id:"352-verwendung-des-publishsubscribe-modells-in-someip",level:3},{value:"3.5.3 <strong>Beispiele f\xfcr Publish/Subscribe in der Automobilindustrie</strong>",id:"353-beispiele-f\xfcr-publishsubscribe-in-der-automobilindustrie",level:3},{value:"3.5.4 <strong>Vorteile des Publish/Subscribe-Modells</strong>",id:"354-vorteile-des-publishsubscribe-modells",level:3},{value:"3.5.5 <strong>Best Practices f\xfcr die Implementierung des Publish/Subscribe-Modells</strong>",id:"355-best-practices-f\xfcr-die-implementierung-des-publishsubscribe-modells",level:3},{value:"3.5.6 <strong>Zusammenfassung</strong>",id:"356-zusammenfassung",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ereignis---publishsubscribe",children:"Ereignis - Publish/Subscribe"})}),"\n",(0,r.jsxs)(n.h2,{id:"35-ereignis---publishsubscribe-in-someip",children:["3.5 ",(0,r.jsx)(n.strong,{children:"Ereignis - Publish/Subscribe in SOME/IP"})]}),"\n",(0,r.jsxs)(n.p,{children:["Das ",(0,r.jsx)(n.strong,{children:"Publish/Subscribe (Pub/Sub)"}),"-Modell ist ein zentrales Kommunikationsmuster in eventgesteuerten Architekturen, insbesondere in serviceorientierten Architekturen (SOA) innerhalb von Fahrzeugen. Es erm\xf6glicht eine effiziente und skalierbare Kommunikation zwischen verschiedenen Diensten, indem Ereignisse von einem Dienst (Publisher) ver\xf6ffentlicht und von einem oder mehreren Diensten (Subscriber) abonniert werden. In diesem Abschnitt wird das Publish/Subscribe-Modell in SOME/IP detailliert beschrieben, einschlie\xdflich der Funktionsweise, der Anwendung in der Automobilindustrie und praktischer Beispiele."]}),"\n",(0,r.jsxs)(n.h3,{id:"351-einf\xfchrung-in-das-publishsubscribe-modell",children:["3.5.1 ",(0,r.jsx)(n.strong,{children:"Einf\xfchrung in das Publish/Subscribe-Modell"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Definition und Funktionsweise:"}),"\nDas Publish/Subscribe-Modell ist ein asynchrones Kommunikationsmuster, bei dem ein Dienst (Publisher) Ereignisse ver\xf6ffentlicht, die von einem oder mehreren anderen Diensten (Subscriber) abonniert werden k\xf6nnen. Dieses Modell trennt die Rolle des Nachrichtensenders von der des Empf\xe4ngers, wodurch eine lose Kopplung zwischen den Diensten entsteht."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Hauptmerkmale:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Asynchrone Kommunikation:"})," Im Gegensatz zu synchronen Mustern wie Request/Response erfolgt die Kommunikation asynchron, das hei\xdft, der Publisher muss nicht warten, bis die Nachricht von den Subscribern empfangen wird."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Lose Kopplung:"})," Publisher und Subscriber kennen sich gegenseitig nicht direkt, was die Skalierbarkeit und Flexibilit\xe4t des Systems erh\xf6ht."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Eventgesteuert:"})," Dienste reagieren auf bestimmte Ereignisse, anstatt periodisch nach Informationen zu fragen, was die Effizienz und Reaktionsf\xe4higkeit des Systems verbessert."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Diagramm: Publish/Subscribe-Kommunikationsmuster"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"+-------------------------------------------------------------+\n|             Publish/Subscribe-Muster in SOME/IP             |\n| +---------------------------------------------------------+ |\n| |  Publisher (z.B. Sensor)                                 | |\n| |  - Ver\xf6ffentlicht Ereignis: Messwert                    | |\n| +---------------------------------------------------------+ |\n|               |                              |               |\n|               v                              v               |\n| +---------------------------------------------------------+ |\n| |  Subscriber 1 (z.B. Steuerger\xe4t A)                      | |\n| |  - Abonniert Ereignis: Verarbeitet Messwert            | |\n| +---------------------------------------------------------+ |\n|               |                              |               |\n|               v                              v               |\n| +---------------------------------------------------------+ |\n| |  Subscriber 2 (z.B. Steuerger\xe4t B)                      | |\n| |  - Abonniert Ereignis: Verarbeitet Messwert            | |\n+-------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"352-verwendung-des-publishsubscribe-modells-in-someip",children:["3.5.2 ",(0,r.jsx)(n.strong,{children:"Verwendung des Publish/Subscribe-Modells in SOME/IP"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Schritte im Publish/Subscribe-Prozess:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Publisher ver\xf6ffentlicht Ereignis:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ein Dienst (Publisher) erzeugt ein Ereignis, das ver\xf6ffentlicht wird. Dieses Ereignis k\xf6nnte eine Status\xe4nderung, ein Messwert oder eine andere wichtige Information sein."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Subscriber abonnieren Ereignisse:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Andere Dienste (Subscriber) abonnieren das Ereignis des Publishers. Sie werden automatisch benachrichtigt, wenn das Ereignis eintritt."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ereignisbenachrichtigung:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sobald das Ereignis eintritt, sendet der Publisher die Nachricht an alle registrierten Subscriber, die dann die Information verarbeiten k\xf6nnen."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Typische Nachrichtenstruktur in SOME/IP:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Header:"})," Enth\xe4lt Informationen wie die Nachrichtentypen, Service-IDs und Event-IDs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payload:"})," Beinhaltet die eigentlichen Daten, die im Ereignis \xfcbertragen werden, wie z. B. Sensordaten oder Statusinformationen."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"353-beispiele-f\xfcr-publishsubscribe-in-der-automobilindustrie",children:["3.5.3 ",(0,r.jsx)(n.strong,{children:"Beispiele f\xfcr Publish/Subscribe in der Automobilindustrie"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Beispiel 1: Reifendruck\xfcberwachungssystem (TPMS)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Anwendung:"})," Das Reifendruck\xfcberwachungssystem (TPMS) in einem Fahrzeug \xfcberwacht kontinuierlich den Luftdruck in den Reifen. Wenn der Druck in einem Reifen unter einen bestimmten Schwellenwert f\xe4llt, ver\xf6ffentlicht das TPMS ein Ereignis, das von verschiedenen Steuerger\xe4ten abonniert wird."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Prozess:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Publish:"})," Das TPMS erkennt einen niedrigen Reifendruck und ver\xf6ffentlicht dieses Ereignis."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Subscribe:"})," Das zentrale Steuerger\xe4t und das Display-System haben dieses Ereignis abonniert und werden sofort benachrichtigt, um den Fahrer zu warnen und die entsprechenden Ma\xdfnahmen einzuleiten."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Diagramm: Publish/Subscribe f\xfcr TPMS"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"+-------------------------------------------------------------+\n|                   Reifendruck\xfcberwachung (TPMS)             |\n| +---------------------------------------------------------+ |\n| |  Publisher (TPMS-Sensor)                                 | |\n| |  - Ver\xf6ffentlicht Ereignis: Niedriger Reifendruck       | |\n| +---------------------------------------------------------+ |\n|               |                              |               |\n|               v                              v               |\n| +---------------------------------------------------------+ |\n| |  Subscriber 1 (z.B. Zentralsteuerger\xe4t)                 | |\n| |  - Abonniert Ereignis: Zeigt Warnung an                 | |\n+-------------------------------------------------------------+\n|               |                              |               |\n|               v                              v               |\n| +---------------------------------------------------------+ |\n| |  Subscriber 2 (z.B. Infotainment-Display)               | |\n| |  - Abonniert Ereignis: Zeigt Druckwarnung an            | |\n+-------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Beispiel 2: Autonomes Fahren - LIDAR-Sensoren"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Anwendung:"})," In einem autonomen Fahrzeug werden LIDAR-Sensoren verwendet, um die Umgebung zu scannen und Hindernisse zu erkennen. Die Sensordaten werden als Ereignisse ver\xf6ffentlicht und von verschiedenen Steuerger\xe4ten abonniert, die f\xfcr die Navigation und Steuerung des Fahrzeugs verantwortlich sind."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Prozess:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Publish:"})," Die LIDAR-Sensoren erkennen ein Hindernis auf der Stra\xdfe und ver\xf6ffentlichen ein entsprechendes Ereignis."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Subscribe:"})," Das zentrale Steuerger\xe4t f\xfcr das autonome Fahren und das Notbremssystem haben dieses Ereignis abonniert und reagieren sofort, um das Fahrzeug entsprechend zu steuern."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Diagramm: Publish/Subscribe f\xfcr LIDAR-Daten"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"+-------------------------------------------------------------+\n|                  Autonomes Fahren - LIDAR-Sensoren          |\n| +---------------------------------------------------------+ |\n| |  Publisher (LIDAR-Sensor)                                | |\n| |  - Ver\xf6ffentlicht Ereignis: Hindernis erkannt           | |\n| +---------------------------------------------------------+ |\n|               |                              |               |\n|               v                              v               |\n| +---------------------------------------------------------+ |\n| |  Subscriber 1 (z.B. Zentralsteuerger\xe4t)                 | |\n| |  - Abonniert Ereignis: Passt Fahrverhalten an           | |\n+-------------------------------------------------------------+\n|               |                              |               |\n|               v                              v               |\n| +---------------------------------------------------------+ |\n| |  Subscriber 2 (z.B. Notbremssystem)                    | |\n| |  - Abonniert Ereignis: Aktiviert Notbremsung           | |\n+-------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"354-vorteile-des-publishsubscribe-modells",children:["3.5.4 ",(0,r.jsx)(n.strong,{children:"Vorteile des Publish/Subscribe-Modells"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. Skalierbarkeit:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Das Publish/Subscribe-Modell ist sehr skalierbar, da ein Publisher Nachrichten an viele Subscriber senden kann, ohne dass zus\xe4tzliche Komplexit\xe4t entsteht. Dies ist besonders vorteilhaft in Fahrzeugnetzwerken, die eine gro\xdfe Anzahl von Diensten unterst\xfctzen m\xfcssen."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. Flexibilit\xe4t:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Die lose Kopplung zwischen Publishern und Subscribern erm\xf6glicht es, neue Dienste einfach hinzuzuf\xfcgen oder bestehende Dienste zu \xe4ndern, ohne dass andere Teile des Systems angepasst werden m\xfcssen. Dies erh\xf6ht die Flexibilit\xe4t der Systemarchitektur."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. Echtzeitf\xe4hige Ereignisverarbeitung:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Durch das asynchrone und ereignisgesteuerte Kommunikationsmodell k\xf6nnen kritische Ereignisse in Echtzeit verarbeitet werden, was f\xfcr sicherheitskritische Anwendungen, wie z. B. Fahrerassistenzsysteme, entscheidend ist."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"4. Reduzierte Netzwerklast:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Da nur relevante Ereignisse ver\xf6ffentlicht werden und nur die Subscriber benachrichtigt werden, die diese Ereignisse abonniert haben, wird die Netzwerklast reduziert. Dies f\xfchrt zu einer effizienteren Nutzung der Bandbreite und Ressourcen."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Diagramm: Vorteile des Publish/Subscribe-Modells"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"+-------------------------------------------------------------+\n|                Vorteile des Publish/Subscribe-Modells       |\n| +---------------------------------------------------------+ |\n| |  Skalierbarkeit                                          | |\n| |  - Unterst\xfctzt viele Subscriber ohne zus\xe4tzliche Komplexit\xe4t | |\n| +---------------------------------------------------------+ |\n| |  Flexibilit\xe4t                                            | |\n| |  - Einfaches Hinzuf\xfcgen oder \xc4ndern von Diensten          | |\n| +---------------------------------------------------------+ |\n| |  Echtzeitf\xe4hige Ereignisverarbeitung                     | |\n| |  - Kritische Ereignisse werden in Echtzeit verarbeitet   | |\n| +---------------------------------------------------------+ |\n| |  Reduzierte Netzwerklast                                 | |\n| |  - Effiziente Nutzung der Bandbreite                     | |\n+-------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"355-best-practices-f\xfcr-die-implementierung-des-publishsubscribe-modells",children:["3.5.5 ",(0,r.jsx)(n.strong,{children:"Best Practices f\xfcr die Implementierung des Publish/Subscribe-Modells"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. Ereignispriorisierung:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Implementieren Sie Mechanismen zur Priorisierung von Ereignissen, damit kritische Ereignisse sofort verarbeitet werden, w\xe4hrend weniger wichtige Ereignisse m\xf6glicherweise verz\xf6gert werden k\xf6nnen."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. Fehlerbehandlung:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Stellen Sie sicher, dass es robuste Fehlerbehandlungsroutinen gibt, um mit ausgefallenen Ereignissen oder nicht erreichbaren Subscribern umzugehen. Dies kann die Implementierung von Wiederholungsmechanismen"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"oder Failover-Strategien umfassen."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. \xdcberwachung und Logging:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\xdcberwachen Sie die Ereignisver\xf6ffentlichung und -verarbeitung, um sicherzustellen, dass alle Ereignisse korrekt abonniert und verarbeitet werden. Protokollieren Sie wichtige Ereignisse, um die Fehlerbehebung zu erleichtern."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"4. Ressourcennutzung optimieren:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Planen Sie die Ressourcennutzung so, dass das Netzwerk nicht \xfcberlastet wird, insbesondere in Fahrzeugen mit vielen Publishern und Subscribern. Erw\xe4gen Sie die Implementierung von Bandbreitenmanagement-Techniken, um die Netzwerkauslastung zu optimieren."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Diagramm: Best Practices f\xfcr Publish/Subscribe"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"+-------------------------------------------------------------+\n|               Best Practices f\xfcr Publish/Subscribe          |\n| +---------------------------------------------------------+ |\n| |  Ereignispriorisierung                                   | |\n| |  - Kritische Ereignisse sofort verarbeiten               | |\n| +---------------------------------------------------------+ |\n| |  Fehlerbehandlung                                        | |\n| |  - Robuste Mechanismen f\xfcr den Umgang mit Fehlern        | |\n| +---------------------------------------------------------+ |\n| |  \xdcberwachung und Logging                                 | |\n| |  - Sicherstellen der korrekten Verarbeitung und Protokollierung | |\n| +---------------------------------------------------------+ |\n| |  Ressourcennutzung optimieren                            | |\n| |  - Netzwerk\xfcberlastung vermeiden                        | |\n+-------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"356-zusammenfassung",children:["3.5.6 ",(0,r.jsx)(n.strong,{children:"Zusammenfassung"})]}),"\n",(0,r.jsxs)(n.p,{children:["Das ",(0,r.jsx)(n.strong,{children:"Publish/Subscribe"}),"-Modell ist eine leistungsstarke Methode zur ereignisgesteuerten Kommunikation in SOME/IP-basierten Fahrzeugnetzwerken. Es erm\xf6glicht eine flexible, skalierbare und effiziente Ereignisverarbeitung, die besonders f\xfcr sicherheitskritische und zeitkritische Anwendungen in der Automobilindustrie geeignet ist. Durch die Implementierung von Best Practices k\xf6nnen Ingenieure und Entwickler sicherstellen, dass das System robust, reaktionsschnell und optimal f\xfcr die spezifischen Anforderungen eines modernen Fahrzeugs ausgelegt ist."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Dieses Kapitel bietet einen detaillierten \xdcberblick \xfcber das ",(0,r.jsx)(n.strong,{children:"Publish/Subscribe"}),"-Modell in SOME/IP und zeigt, wie es in der Automobilindustrie eingesetzt werden kann, um ereignisgesteuerte Architekturen zu unterst\xfctzen. Ingenieure und technische Fachkr\xe4fte k\xf6nnen diese Informationen nutzen, um leistungsstarke und skalierbare Kommunikationssysteme in ihren Fahrzeugprojekten zu entwickeln."]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var s=i(96540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);