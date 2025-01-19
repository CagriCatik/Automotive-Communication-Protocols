"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[133],{89288:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"XCP/Beschreibung_A2L/aufbau-a2l","title":"Aufbau und zur Struktur von A2L-Datei","description":"Als Experte im Bereich des ASAM XCP (Universal Measurement and Calibration Protocol) ist es essenziell, ein tiefgehendes Verst\xe4ndnis der A2L-Dateien zu besitzen. Diese Dateien spielen eine zentrale Rolle bei der Kommunikation zwischen Mess- und Kalibrierwerkzeugen sowie Steuerger\xe4ten (ECUs). Im Folgenden wird der Aufbau einer A2L-Datei detailliert erl\xe4utert, einschlie\xdflich der wesentlichen Schl\xfcsselw\xf6rter und deren Funktionen, sowie anhand praktischer Beispiele veranschaulicht.","source":"@site/docs/XCP/03_Beschreibung_A2L/01_aufbau-a2l.md","sourceDirName":"XCP/03_Beschreibung_A2L","slug":"/XCP/Beschreibung_A2L/aufbau-a2l","permalink":"/Vehicle-Network-Standards/docs/XCP/Beschreibung_A2L/aufbau-a2l","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/XCP/03_Beschreibung_A2L/01_aufbau-a2l.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"xcpSidebar","previous":{"title":"Steuerger\xe4te-Beschreibungsdatei A2L","permalink":"/Vehicle-Network-Standards/docs/XCP/Beschreibung_A2L/ecu-beschreibungsdatei"},"next":{"title":"Manuellen Erstellung von A2L-Datei","permalink":"/Vehicle-Network-Standards/docs/XCP/Beschreibung_A2L/manuelle-a2l-erstellung"}}');var s=r(74848),t=r(28453);const l={},d="Aufbau und zur Struktur von A2L-Datei",a={},h=[{value:"<strong>Einf\xfchrung in die A2L-Datei</strong>",id:"einf\xfchrung-in-die-a2l-datei",level:2},{value:"<strong>Struktur und Aufbau der A2L-Datei</strong>",id:"struktur-und-aufbau-der-a2l-datei",level:2},{value:"<strong>Header und Meta-Informationen</strong>",id:"header-und-meta-informationen",level:3},{value:"<strong>Interfacespezifische Parameter und der AML-Baum</strong>",id:"interfacespezifische-parameter-und-der-aml-baum",level:3},{value:"<strong>Kommunikation zum Steuerger\xe4t</strong>",id:"kommunikation-zum-steuerger\xe4t",level:3},{value:"<strong>Ablageschemata f\xfcr Kennlinien und -felder</strong>",id:"ablageschemata-f\xfcr-kennlinien-und--felder",level:3},{value:"<strong>Umrechnungsregeln f\xfcr Roh- auf physikalische Werte</strong>",id:"umrechnungsregeln-f\xfcr-roh--auf-physikalische-werte",level:3},{value:"<strong>Messgr\xf6\xdfen und Verstellgr\xf6\xdfen</strong>",id:"messgr\xf6\xdfen-und-verstellgr\xf6\xdfen",level:2},{value:"<strong>Messgr\xf6\xdfen (MEASUREMENT)</strong>",id:"messgr\xf6\xdfen-measurement",level:3},{value:"<strong>Verstellgr\xf6\xdfen (CHARACTERISTIC)</strong>",id:"verstellgr\xf6\xdfen-characteristic",level:3},{value:"<strong>Ereignisse (EVENT)</strong>",id:"ereignisse-event",level:2},{value:"<strong>Nutzung von A2L-Dateien mit Mess- und Kalibrierwerkzeugen</strong>",id:"nutzung-von-a2l-dateien-mit-mess--und-kalibrierwerkzeugen",level:2},{value:"<strong>Erstellung und Bearbeitung von A2L-Dateien</strong>",id:"erstellung-und-bearbeitung-von-a2l-dateien",level:2},{value:"<strong>Fazit</strong>",id:"fazit",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"aufbau-und-zur-struktur-von-a2l-datei",children:"Aufbau und zur Struktur von A2L-Datei"})}),"\n",(0,s.jsxs)(n.p,{children:["Als Experte im Bereich des ",(0,s.jsx)(n.strong,{children:"ASAM XCP (Universal Measurement and Calibration Protocol)"})," ist es essenziell, ein tiefgehendes Verst\xe4ndnis der A2L-Dateien zu besitzen. Diese Dateien spielen eine zentrale Rolle bei der Kommunikation zwischen Mess- und Kalibrierwerkzeugen sowie Steuerger\xe4ten (ECUs). Im Folgenden wird der Aufbau einer A2L-Datei detailliert erl\xe4utert, einschlie\xdflich der wesentlichen Schl\xfcsselw\xf6rter und deren Funktionen, sowie anhand praktischer Beispiele veranschaulicht."]}),"\n",(0,s.jsx)(n.h2,{id:"einf\xfchrung-in-die-a2l-datei",children:(0,s.jsx)(n.strong,{children:"Einf\xfchrung in die A2L-Datei"})}),"\n",(0,s.jsxs)(n.p,{children:["Eine ",(0,s.jsx)(n.strong,{children:"A2L-Datei"})," ist eine ",(0,s.jsx)(n.strong,{children:"ASCII-lesbare"})," Datei, die nach dem ",(0,s.jsx)(n.strong,{children:"ASAM MCD-2 MC (ASAM Methodology Committee Description)"})," Standard strukturiert ist. Sie dient als Schnittstelle zur Beschreibung von Steuerger\xe4testrukturen, Messgr\xf6\xdfen, Verstellgr\xf6\xdfen und weiteren relevanten Parametern, die f\xfcr die Kalibrierung und das Monitoring von ECUs erforderlich sind. Diese Datei erm\xf6glicht es Tools wie ",(0,s.jsx)(n.strong,{children:"CANape"})," oder ",(0,s.jsx)(n.strong,{children:"INCA"}),", die Kommunikation mit der ECU aufzubauen und die definierten Mess- und Verstellgr\xf6\xdfen zu interpretieren."]}),"\n",(0,s.jsx)(n.h2,{id:"struktur-und-aufbau-der-a2l-datei",children:(0,s.jsx)(n.strong,{children:"Struktur und Aufbau der A2L-Datei"})}),"\n",(0,s.jsx)(n.p,{children:"Die A2L-Datei ist hierarchisch aufgebaut und besteht aus verschiedenen Abschnitten, die durch Schl\xfcsselw\xf6rter definiert werden. Diese Schl\xfcsselw\xf6rter beschreiben unterschiedliche Aspekte der ECU, wie z.B. Messgr\xf6\xdfen, Verstellgr\xf6\xdfen, Kommunikationsschnittstellen und Datenformate. Der grundlegende Aufbau l\xe4sst sich in folgende Hauptbereiche unterteilen:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Header und Meta-Informationen"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Interfacespezifische Parameter"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Kommunikationsdefinitionen"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Ablageschemata und Layouts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Umrechnungsregeln"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Mess- und Verstellgr\xf6\xdfen"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Ereignisse und Trigger"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"header-und-meta-informationen",children:(0,s.jsx)(n.strong,{children:"Header und Meta-Informationen"})}),"\n",(0,s.jsx)(n.p,{children:"Am Anfang der A2L-Datei befinden sich Meta-Informationen, die grundlegende Eigenschaften der Datei festlegen. Dazu geh\xf6ren beispielsweise:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PROJECT"}),": Bezeichnung des Projekts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"VERSION"}),": Version der A2L-Datei."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DESCRIPTION"}),": Beschreibung des Inhalts und Zwecks der Datei."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'/BEGIN PROJECT "Beispielprojekt"\n/VERSION "1.0"\n/DESCRIPTION "A2L-Datei f\xfcr die ECU XYZ"\n/END PROJECT\n'})}),"\n",(0,s.jsx)(n.h3,{id:"interfacespezifische-parameter-und-der-aml-baum",children:(0,s.jsx)(n.strong,{children:"Interfacespezifische Parameter und der AML-Baum"})}),"\n",(0,s.jsxs)(n.p,{children:["Die interfacespezifischen Parameter definieren die Kommunikationseinstellungen zwischen dem Mess- und Kalibrierwerkzeug (z.B. CANape) und der ECU. Diese Parameter werden zu Beginn der A2L-Datei im sogenannten ",(0,s.jsx)(n.strong,{children:"AML-Baum (A2L Markup Language Tree)"})," beschrieben. Der AML-Baum strukturiert die Datei hierarchisch und erleichtert die Navigation durch die verschiedenen Definitionen."]}),"\n",(0,s.jsx)(n.p,{children:"Beispiel f\xfcr den Beginn des AML-Baums:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'/BEGIN ASAM\n  /BEGIN MACHINE\n    /BEGIN ECU "XYZ"\n      ...\n    /END ECU\n  /END MACHINE\n/END ASAM\n'})}),"\n",(0,s.jsx)(n.h3,{id:"kommunikation-zum-steuerger\xe4t",children:(0,s.jsx)(n.strong,{children:"Kommunikation zum Steuerger\xe4t"})}),"\n",(0,s.jsx)(n.p,{children:"Die Kommunikation zwischen dem Messwerkzeug und der ECU wird durch spezifische Schl\xfcsselw\xf6rter definiert, die die physikalischen und logischen Kommunikationsparameter festlegen. Dies umfasst beispielsweise:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"COMMUNICATION"}),": Definition des Kommunikationsprotokolls (z.B. CAN, LIN, FlexRay)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CHANNEL"}),": Spezifikation des Kommunikationskanals."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TRANSPORT_LAYER"}),": Details zur Transportprotokollschicht."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'/BEGIN COMMUNICATION "CAN_BUS"\n/TRANSPORT_LAYER "XCP"\n/END COMMUNICATION\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ablageschemata-f\xfcr-kennlinien-und--felder",children:(0,s.jsx)(n.strong,{children:"Ablageschemata f\xfcr Kennlinien und -felder"})}),"\n",(0,s.jsxs)(n.p,{children:["Ablageschemata legen fest, wie Kennlinien (CHARACTERISTIC) und Kennfelder (MEASUREMENT) in der Speicherstruktur der ECU abgelegt sind. Das Schl\xfcsselwort ",(0,s.jsx)(n.strong,{children:"RECORD_LAYOUT"})," definiert das Layout der Speicherbereiche, in denen die Daten gespeichert werden."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'/BEGIN RECORD_LAYOUT "StandardLayout"\n/ADDRESS 0x2000\n/LENGTH 256\n/END RECORD_LAYOUT\n'})}),"\n",(0,s.jsx)(n.h3,{id:"umrechnungsregeln-f\xfcr-roh--auf-physikalische-werte",children:(0,s.jsx)(n.strong,{children:"Umrechnungsregeln f\xfcr Roh- auf physikalische Werte"})}),"\n",(0,s.jsxs)(n.p,{children:["Um Rohdaten, die direkt aus der ECU gelesen werden, in physikalische Werte umzurechnen, werden ",(0,s.jsx)(n.strong,{children:"COMPU_METHOD"})," Schl\xfcsselw\xf6rter verwendet. Diese definieren mathematische Transformationen wie Skalierung und Offset."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'/BEGIN COMPU_METHOD "Linear"\n/PARAMETER "Slope" 0.1\n/PARAMETER "Offset" -40\n/END COMPU_METHOD\n'})}),"\n",(0,s.jsx)(n.h2,{id:"messgr\xf6\xdfen-und-verstellgr\xf6\xdfen",children:(0,s.jsx)(n.strong,{children:"Messgr\xf6\xdfen und Verstellgr\xf6\xdfen"})}),"\n",(0,s.jsxs)(n.p,{children:["Messgr\xf6\xdfen (",(0,s.jsx)(n.strong,{children:"MEASUREMENT"}),") und Verstellgr\xf6\xdfen (",(0,s.jsx)(n.strong,{children:"CHARACTERISTIC"}),") sind zentrale Bestandteile der A2L-Datei. Sie beschreiben die Parameter, die w\xe4hrend der ECU-Betriebspr\xfcfung gemessen oder eingestellt werden k\xf6nnen."]}),"\n",(0,s.jsx)(n.h3,{id:"messgr\xf6\xdfen-measurement",children:(0,s.jsx)(n.strong,{children:"Messgr\xf6\xdfen (MEASUREMENT)"})}),"\n",(0,s.jsxs)(n.p,{children:["Eine ",(0,s.jsx)(n.strong,{children:"Messgr\xf6\xdfe"})," beschreibt einen bestimmten Parameter, der von der ECU gemessen wird. Sie enth\xe4lt Informationen \xfcber den Datentyp, die Adresse im Steuerger\xe4t, das Datenformat und die Umrechnungsregeln."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Beispiel einer Messgr\xf6\xdfe namens \u201eShifter_B3\u201c:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'/BEGIN MEASUREMENT Shifter_B3 "Single bit signal (bit from a byte shifting)"\n  UBYTE HighLow 0 0 0 1\n  READ_WRITE\n  BIT_MASK 0x8\n  BYTE_ORDER MSB_LAST\n  ECU_ADDRESS 0x124C02\n  ECU_ADDRESS_EXTENSION 0x0\n  FORMAT "%.3"\n  /BEGIN IF_DATA CANAPE_EXT\n    100\n    LINK_MAP "byteShift" 0x124C02 0x0 0 0x0 1 0x87 0x0\n    DISPLAY 0 0 20\n  /END IF_DATA\n/END MEASUREMENT\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Detaillierte Erkl\xe4rung:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'/BEGIN MEASUREMENT Shifter_B3 "Beschreibung"'}),": Beginn der Definition einer Messgr\xf6\xdfe mit dem Namen \u201eShifter_B3\u201c und einer Beschreibung."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UBYTE HighLow 0 0 0 1"}),": Definition des Datentyps (UBYTE) und der High/Low-Bytes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"READ_WRITE"}),": Zugriffsrechte, in diesem Fall Lese- und Schreibzugriff."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BIT_MASK 0x8"}),": Bitmaske zur Identifikation des relevanten Bits innerhalb eines Bytes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BYTE_ORDER MSB_LAST"}),": Byte-Reihenfolge, hier \u201eMost Significant Byte last\u201c."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ECU_ADDRESS 0x124C02"}),": Adresse innerhalb der ECU, an der die Messgr\xf6\xdfe abgelegt ist."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ECU_ADDRESS_EXTENSION 0x0"}),": Erweiterung der ECU-Adresse, falls notwendig."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'FORMAT "%.3"'}),": Formatierung des angezeigten Wertes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"/BEGIN IF_DATA CANAPE_EXT"}),": Beginn der Schnittstellendaten f\xfcr CANape.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"100"}),": Identifikationsnummer der Schnittstelle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'LINK_MAP "byteShift" 0x124C02 0x0 0 0x0 1 0x87 0x0'}),": Verkn\xfcpfung zur internen Datenstruktur."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DISPLAY 0 0 20"}),": Anzeigeparameter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"/END IF_DATA"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"/END MEASUREMENT"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"verstellgr\xf6\xdfen-characteristic",children:(0,s.jsx)(n.strong,{children:"Verstellgr\xf6\xdfen (CHARACTERISTIC)"})}),"\n",(0,s.jsxs)(n.p,{children:["Eine ",(0,s.jsx)(n.strong,{children:"Verstellgr\xf6\xdfe"})," beschreibt einen Parameter, der in der ECU eingestellt werden kann. Sie enth\xe4lt Informationen \xfcber die Speicherstruktur, Umrechnungsregeln und die Darstellung der Werte."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Beispiel eines Parameter-Kennfeldes mit dem Namen KF1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'/BEGIN CHARACTERISTIC KF1 "8*8 BYTE no axis"\n  MAP 0xE0338 __UBYTE_Z 0 Factor100 0 2.55\n  ECU_ADDRESS_EXTENSION 0x0\n  EXTENDED_LIMITS 0 2.55\n  BYTE_ORDER MSB_LAST\n  BIT_MASK 0xFF\n  /BEGIN AXIS_DESCR\n    FIX_AXIS NO_INPUT_QUANTITY BitSlice.CONVERSION 8 0 7\n    EXTENDED_LIMITS 0 7\n    READ_ONLY\n    BYTE_ORDER MSB_LAST\n    FORMAT "%.0"\n    FIX_AXIS_PAR_DIST 0 1 8\n  /END AXIS_DESCR\n  /BEGIN AXIS_DESCR\n    FIX_AXIS NO_INPUT_QUANTITY BitSlice.CONVERSION 8 0 7\n    EXTENDED_LIMITS 0 7\n    READ_ONLY\n    BYTE_ORDER MSB_LAST\n    FORMAT "%.0"\n    FIX_AXIS_PAR_DIST 0 1 8\n  /END AXIS_DESCR\n  /BEGIN IF_DATA CANAPE_EXT\n    100\n    LINK_MAP "map3_8_8_uc" 0xE0338 0x0 0 0x0 1 0x87 0x0\n    DISPLAY 0 0 255\n  /END IF_DATA\n  FORMAT "%.3"\n/END CHARACTERISTIC\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Detaillierte Erkl\xe4rung:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'/BEGIN CHARACTERISTIC KF1 "Beschreibung"'}),": Beginn der Definition einer Verstellgr\xf6\xdfe mit dem Namen \u201eKF1\u201c und einer Beschreibung."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MAP 0xE0338 __UBYTE_Z 0 Factor100 0 2.55"}),": Mapping-Definition mit Adresse, Datentyp, Faktor und Offset."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ECU_ADDRESS_EXTENSION 0x0"}),": Erweiterung der ECU-Adresse."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"EXTENDED_LIMITS 0 2.55"}),": Erweiterte Grenzwerte f\xfcr die Verstellgr\xf6\xdfe."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BYTE_ORDER MSB_LAST"}),": Byte-Reihenfolge."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BIT_MASK 0xFF"}),": Bitmaske."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"/BEGIN AXIS_DESCR"}),": Beginn der Achsbeschreibung.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FIX_AXIS NO_INPUT_QUANTITY BitSlice.CONVERSION 8 0 7"}),": Festlegung der Achse ohne Eingangsgr\xf6\xdfe, Bit-Slice-Konvertierung \xfcber 8 Bits von Bit 0 bis 7."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"EXTENDED_LIMITS 0 7"}),": Erweiterte Grenzwerte f\xfcr die Achse."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"READ_ONLY"}),": Nur lesbarer Zugriff."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BYTE_ORDER MSB_LAST"}),": Byte-Reihenfolge."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'FORMAT "%.0"'}),": Formatierung ohne Dezimalstellen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FIX_AXIS_PAR_DIST 0 1 8"}),": Parameterverteilung der Achse."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"/END AXIS_DESCR"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"/BEGIN IF_DATA CANAPE_EXT"}),": Beginn der Schnittstellendaten f\xfcr CANape.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"100"}),": Identifikationsnummer der Schnittstelle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'LINK_MAP "map3_8_8_uc" 0xE0338 0x0 0 0x0 1 0x87 0x0'}),": Verkn\xfcpfung zur internen Datenstruktur."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DISPLAY 0 0 255"}),": Anzeigeparameter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"/END IF_DATA"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'FORMAT "%.3"'}),": Formatierung des angezeigten Wertes."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"/END CHARACTERISTIC"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ereignisse-event",children:(0,s.jsx)(n.strong,{children:"Ereignisse (EVENT)"})}),"\n",(0,s.jsx)(n.p,{children:"Ereignisse dienen dazu, unter bestimmten Bedingungen Messungen oder Verstellungen auszul\xf6sen. Sie sind essenziell f\xfcr die dynamische Steuerung und Anpassung der ECU w\xe4hrend der Betriebspr\xfcfung."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Beispiel einer Ereignisdefinition:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'/BEGIN EVENT "TemperatureThreshold"\n/TRIGGER_CONDITION "Temperature > 90\xb0C"\n/ACTION "StartMeasurement"\n/END EVENT\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Detaillierte Erkl\xe4rung:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'/BEGIN EVENT "TemperatureThreshold"'}),": Beginn der Definition eines Ereignisses mit dem Namen \u201eTemperatureThreshold\u201c."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'TRIGGER_CONDITION "Temperature > 90\xb0C"'}),": Bedingung, unter der das Ereignis ausgel\xf6st wird."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'ACTION "StartMeasurement"'}),": Aktion, die bei Eintreten des Ereignisses ausgef\xfchrt wird."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"/END EVENT"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"nutzung-von-a2l-dateien-mit-mess--und-kalibrierwerkzeugen",children:(0,s.jsx)(n.strong,{children:"Nutzung von A2L-Dateien mit Mess- und Kalibrierwerkzeugen"})}),"\n",(0,s.jsxs)(n.p,{children:["Tools wie ",(0,s.jsx)(n.strong,{children:"CANape"})," oder ",(0,s.jsx)(n.strong,{children:"INCA"})," nutzen die A2L-Dateien, um eine grafische Oberfl\xe4che bereitzustellen, \xfcber die Ingenieure Mess- und Verstellgr\xf6\xdfen einfach \xfcberwachen und anpassen k\xf6nnen. Der komplexe Aufbau der A2L-Datei bleibt dabei transparent, sodass der Anwender sich auf die praktische Anwendung konzentrieren kann, ohne tief in die Struktur der A2L-Datei eintauchen zu m\xfcssen."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Vorteile der Nutzung von A2L-Dateien:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Standardisierte Kommunikation"}),": Einheitliche Schnittstelle zwischen ECU und Messwerkzeugen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Automatisierung"}),": Automatische Generierung von Mess- und Verstellgr\xf6\xdfen in der Software."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexibilit\xe4t"}),": Einfache Anpassung und Erweiterung der Datei bei \xc4nderungen an der ECU-Software."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Transparenz"}),": Klar definierte Strukturen und Parameter erleichtern die Fehlerdiagnose und Optimierung."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"erstellung-und-bearbeitung-von-a2l-dateien",children:(0,s.jsx)(n.strong,{children:"Erstellung und Bearbeitung von A2L-Dateien"})}),"\n",(0,s.jsxs)(n.p,{children:["Die Erstellung und Bearbeitung von A2L-Dateien erfordert pr\xe4zises Arbeiten und ein tiefes Verst\xe4ndnis der ECU-Struktur sowie der verwendeten Schl\xfcsselw\xf6rter. Hierbei bieten spezialisierte Editoren, wie der mit ",(0,s.jsx)(n.strong,{children:"CANape"})," ausgelieferte A2L-Editor, erhebliche Unterst\xfctzung. Diese Editoren erm\xf6glichen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Grafische Benutzeroberfl\xe4che"}),": Vereinfachte Navigation und Bearbeitung der A2L-Datei."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Syntaxpr\xfcfung"}),": Automatische \xdcberpr\xfcfung der Datei auf Syntaxfehler und Inkonsistenzen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vorlagen und Beispiele"}),": Nutzung von Vorlagen zur schnelleren Erstellung von A2L-Dateien."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Integration mit Messwerkzeugen"}),": Direkte Verkn\xfcpfung mit Tools wie CANape f\xfcr eine nahtlose Nutzung."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Schritte zur Erstellung einer A2L-Datei mit dem CANape A2L-Editor:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Projektanlage"}),": Starten Sie den A2L-Editor und legen Sie ein neues Projekt an."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ECU-Konfiguration"}),": Definieren Sie die ECU und deren grundlegende Eigenschaften."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Kommunikationsparameter festlegen"}),": Bestimmen Sie die Kommunikationsschnittstellen und -parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Messgr\xf6\xdfen und Verstellgr\xf6\xdfen hinzuf\xfcgen"}),": Definieren Sie alle relevanten Mess- und Verstellgr\xf6\xdfen mit den entsprechenden Schl\xfcsselw\xf6rtern."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Umrechnungsregeln einf\xfcgen"}),": Legen Sie die COMPU_METHODs fest, die zur Umrechnung der Rohdaten verwendet werden."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ereignisse definieren"}),": F\xfcgen Sie Ereignisse hinzu, die bei bestimmten Bedingungen Aktionen ausl\xf6sen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Speichern und Validieren"}),": Speichern Sie die A2L-Datei und f\xfchren Sie eine Validierung durch, um Fehler zu vermeiden."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Integration mit CANape"}),": Importieren Sie die fertige A2L-Datei in CANape und testen Sie die Kommunikation mit der ECU."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fazit",children:(0,s.jsx)(n.strong,{children:"Fazit"})}),"\n",(0,s.jsx)(n.p,{children:"Die A2L-Datei ist ein unverzichtbares Element im Bereich der Fahrzeugsteuerger\xe4tekalibrierung und -diagnose. Ihr strukturierter Aufbau erm\xf6glicht eine pr\xe4zise Beschreibung der ECU-Parameter und erleichtert die Kommunikation mit Mess- und Kalibrierwerkzeugen erheblich. Ein fundiertes Verst\xe4ndnis der A2L-Struktur und der verwendeten Schl\xfcsselw\xf6rter ist daher unerl\xe4sslich f\xfcr alle, die im Bereich der Fahrzeugentwicklung und -diagnose t\xe4tig sind. Durch die Nutzung spezialisierter Editoren wie dem CANape A2L-Editor wird die Erstellung und Verwaltung von A2L-Dateien weiter vereinfacht, sodass Ingenieure sich auf die Optimierung und Analyse der ECU-Parameter konzentrieren k\xf6nnen."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);