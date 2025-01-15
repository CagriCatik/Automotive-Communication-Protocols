"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[7087],{10501:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"SecOC/secos_mechanism","title":"SecOC Mechanism","description":"Secure Onboard Communication (SecOC) is a foundational AUTOSAR module designed to authenticate and validate data exchanged among ECUs (Electronic Control Units). By generating and verifying cryptographic tags (Message Authentication Codes, or MACs), SecOC ensures that messages have not been altered during transit and originate from a legitimate source. However, it is essential to note that SecOC does not protect against eavesdropping; it only safeguards message integrity and authenticity, not confidentiality.","source":"@site/docs/SecOC/03_secos_mechanism.md","sourceDirName":"SecOC","slug":"/SecOC/secos_mechanism","permalink":"/Vehicle-Network-Standards/docs/SecOC/secos_mechanism","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SecOC/03_secos_mechanism.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"secocSidebar","previous":{"title":"AUTOSAR SecOC","permalink":"/Vehicle-Network-Standards/docs/SecOC/autosar_secoc"},"next":{"title":"SecOC Opportunities for Standardization","permalink":"/Vehicle-Network-Standards/docs/SecOC/secoc_oppurtunities"}}');var i=s(74848),a=s(28453);const r={},c="SecOC Mechanism",o={},d=[{value:"Core Principles of SecOC",id:"core-principles-of-secoc",level:2},{value:"How the Mechanism Works",id:"how-the-mechanism-works",level:2},{value:"Example Implementation Snippet",id:"example-implementation-snippet",level:2},{value:"Explanation:",id:"explanation",level:3},{value:"Why SecOC Does Not Protect Against Eavesdropping",id:"why-secoc-does-not-protect-against-eavesdropping",level:2},{value:"Summary of SecOC Mechanism",id:"summary-of-secoc-mechanism",level:2}];function l(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"secoc-mechanism",children:"SecOC Mechanism"})}),"\n",(0,i.jsxs)(n.p,{children:["Secure Onboard Communication (SecOC) is a foundational AUTOSAR module designed to authenticate and validate data exchanged among ECUs (Electronic Control Units). By generating and verifying cryptographic tags (Message Authentication Codes, or MACs), SecOC ensures that messages have not been altered during transit and originate from a legitimate source. However, it is essential to note that SecOC ",(0,i.jsx)(n.strong,{children:"does not"})," protect against eavesdropping; it only safeguards message integrity and authenticity, not confidentiality."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"core-principles-of-secoc",children:"Core Principles of SecOC"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Integrity and Authenticity"}),(0,i.jsx)(n.br,{}),"\n","SecOC attaches a cryptographic MAC to each transmitted message. The receiver recalculates the MAC with the same cryptographic key and compares it to the received MAC. If they match, the message is considered valid."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Freshness Value"}),(0,i.jsx)(n.br,{}),"\n","To defend against replay attacks\u2014where an attacker records and re-sends valid packets\u2014SecOC includes a \u201cfreshness\u201d component (e.g., counters, timestamps, or nonces). Both sender and receiver track this freshness value to determine whether a message is current or stale."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key-Based Mechanism"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Symmetric Key"}),": Both sender and receiver share the same secret key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Asymmetric Key"}),": Relies on a private/public key pair. (Less common for the typical high-speed, low-latency automotive networks due to higher computational overhead.)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"No Confidentiality"}),(0,i.jsx)(n.br,{}),"\n","Since SecOC focuses on authentication and integrity, messages are not encrypted. Attackers can still observe the data (eavesdropping), but they cannot modify it undetected."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"how-the-mechanism-works",children:"How the Mechanism Works"}),"\n",(0,i.jsx)(n.p,{children:"Below is a high-level depiction of how SecOC processes messages between two ECUs:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"MAC Generation"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The transmitting ECU (ECU 1) takes the message data and a freshness value (e.g., an incrementing counter)."}),"\n",(0,i.jsx)(n.li,{children:"Using a cryptographic key (symmetric or asymmetric signing key) and a MAC generator function, the ECU produces a MAC."}),"\n",(0,i.jsxs)(n.li,{children:["The resulting ",(0,i.jsx)(n.strong,{children:"Secured PDU"})," contains both the original data and the MAC (plus counter information)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Transmission"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Secured PDU is placed on the in-vehicle network (CAN, FlexRay, Ethernet, etc.) and received by the appropriate destination(s)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"MAC Verification"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The receiving ECU (ECU 2) extracts the data, freshness value, and MAC from the Secured PDU."}),"\n",(0,i.jsx)(n.li,{children:"It independently recalculates the MAC using the same cryptographic key and freshness data."}),"\n",(0,i.jsx)(n.li,{children:"If the newly computed MAC matches the received MAC, the data is authenticated. Any mismatch implies possible tampering or error."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Key Point"}),": If an attacker tries to replay a previously valid packet, the freshness counter at the receiver will have advanced, causing the MAC verification to fail."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"example-implementation-snippet",children:"Example Implementation Snippet"}),"\n",(0,i.jsx)(n.p,{children:"Below is a simplified C-style example demonstrating how SecOC-like functionality might be implemented with symmetric keys. It includes the handling of message data, a freshness value, and MAC generation/verification."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#include <string.h>\n#include <stdint.h>\n#include <stdbool.h>\n\n#define MAC_LEN 16\n\n// Hypothetical function to compute a MAC over payload + freshness\nvoid compute_MAC(const uint8_t *sharedKey,\n                 const uint8_t *payload,\n                 size_t payloadLen,\n                 uint32_t freshness,\n                 uint8_t *macOut);\n\n// Transmitting ECU\nvoid transmit_message(uint8_t *payload, size_t payloadLen, uint32_t freshness) {\n    uint8_t mac[MAC_LEN];\n\n    // Compute MAC using a shared secret key + freshness\n    compute_MAC(/*sharedKey*/ NULL, payload, payloadLen, freshness, mac);\n\n    // Append the MAC and freshness to the message (or add to header fields)\n    // For simplicity: [payload | 4 bytes of freshness | 16 bytes of MAC]\n    // Real implementations store this differently depending on the PDU format\n    // ...\n\n    // Transmit the packet over the network\n    // network_send(...);\n}\n\n// Receiving ECU\nbool receive_message(uint8_t *rxBuffer, size_t rxLen) {\n    // Extract the payload, freshness, and received MAC\n    uint32_t receivedFreshness = 0;\n    uint8_t receivedMAC[MAC_LEN];\n    uint8_t calculatedMAC[MAC_LEN];\n\n    // Pseudocode for parsing\n    // parse_payload(rxBuffer, rxLen, &payload, &receivedFreshness, receivedMAC);\n\n    // Recompute MAC\n    compute_MAC(/*sharedKey*/ NULL, /*payload*/ NULL, /*payloadLen*/ 0,\n                receivedFreshness, calculatedMAC);\n\n    // Compare MAC\n    if (memcmp(receivedMAC, calculatedMAC, MAC_LEN) == 0) {\n        // Check if freshness is valid (not too old or repeated)\n        // if valid_freshness(receivedFreshness) ...\n        return true;\n    } else {\n        return false;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explanation",children:"Explanation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"compute_MAC(...)"})," is a placeholder function that performs a keyed MAC operation over the message payload ",(0,i.jsx)(n.strong,{children:"and"})," the freshness value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"transmit_message(...)"}),":","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Assembles the payload data."}),"\n",(0,i.jsx)(n.li,{children:"Retrieves or increments a freshness value (e.g., a counter)."}),"\n",(0,i.jsx)(n.li,{children:"Generates and appends the MAC."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"receive_message(...)"}),":","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Extracts the data, freshness, and MAC from the incoming packet."}),"\n",(0,i.jsx)(n.li,{children:"Regenerates the MAC using the same secret key and freshness value."}),"\n",(0,i.jsx)(n.li,{children:"Compares the regenerated MAC with the received one."}),"\n",(0,i.jsx)(n.li,{children:"If they match\u2014and the freshness counter is valid\u2014the message is accepted."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"why-secoc-does-not-protect-against-eavesdropping",children:"Why SecOC Does Not Protect Against Eavesdropping"}),"\n",(0,i.jsxs)(n.p,{children:["While SecOC prevents unauthorized message manipulation or replay, the transmitted data is still sent in plaintext (unless an additional encryption mechanism is employed). This design choice stems from the typical automotive requirement of low latency and minimal overhead; encryption adds complexity and processing time. Therefore, an adversary can still ",(0,i.jsx)(n.strong,{children:"observe"})," the data, but cannot easily alter or forge it without detection."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Eavesdropping Scenario"}),": An attacker on the bus can read messages but will not be able to insert or modify them successfully without failing the MAC checks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Countermeasure"}),": If confidentiality is a requirement, an encryption layer (such as IPsec on Ethernet, or a custom encryption scheme for CAN) must be added in addition to SecOC."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"summary-of-secoc-mechanism",children:"Summary of SecOC Mechanism"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Core Function"}),": Ensures integrity and authenticity of messages by attaching a MAC computed over the data and a freshness value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Replay Protection"}),": Freshness counters or timestamps prevent previously captured messages from being re-sent effectively."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key Management"}),": Both sides must share or manage a key (symmetric or asymmetric)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Limitations"}),": No built-in encryption means attackers can still read traffic; to prevent eavesdropping, an additional layer of security is needed."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By understanding these operational details and limitations, automotive engineers can effectively deploy SecOC in their AUTOSAR architectures, maintaining robust in-vehicle communication security while meeting real-time performance constraints."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);