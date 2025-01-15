"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8543],{75812:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"UDS/capl/Tester-Present","title":"Tester Present - 0x3E","description":"---","source":"@site/docs/UDS/06_capl/01_Tester-Present.md","sourceDirName":"UDS/06_capl","slug":"/UDS/capl/Tester-Present","permalink":"/Vehicle-Network-Standards/docs/UDS/capl/Tester-Present","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/UDS/06_capl/01_Tester-Present.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"udsSidebar","previous":{"title":"CAPL","permalink":"/Vehicle-Network-Standards/docs/category/capl"},"next":{"title":"Programming Session - 0x10","permalink":"/Vehicle-Network-Standards/docs/UDS/capl/Programming-Session"}}');var t=s(74848),r=s(28453);const l={},c="Tester Present - 0x3E",d={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Purpose",id:"purpose",level:2},{value:"Message Structure",id:"message-structure",level:2},{value:"Behavior",id:"behavior",level:2},{value:"CAPL Implementation",id:"capl-implementation",level:2},{value:"Variables Declaration",id:"variables-declaration",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Sending the Request",id:"sending-the-request",level:3},{value:"Stopping the Timer",id:"stopping-the-timer",level:3},{value:"Tester Present Sequence Diagram",id:"tester-present-sequence-diagram",level:3},{value:"Key Considerations",id:"key-considerations",level:2},{value:"Example Trace Output",id:"example-trace-output",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Common Issues and Debugging",id:"common-issues-and-debugging",level:2},{value:"Conclusion",id:"conclusion",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tester-present---0x3e",children:"Tester Present - 0x3E"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The Tester Present (Service 0x3E) is a Universal Diagnostic Services (UDS) request used to keep the Electronic Control Unit (ECU) communication session active. Without this service, the ECU may time out and revert to its default state. The service is commonly used during diagnostic operations to prevent session termination."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsx)(n.p,{children:"The purpose of the Tester Present service is to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Inform the ECU that the diagnostic tool is still present."}),"\n",(0,t.jsx)(n.li,{children:"Maintain the active diagnostic session (e.g., Default, Extended, or Programming sessions)."}),"\n",(0,t.jsx)(n.li,{children:"Prevent the ECU from timing out during diagnostic activities."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"message-structure",children:"Message Structure"}),"\n",(0,t.jsx)(n.p,{children:"The Tester Present message consists of the following components:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Byte Index"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Message Length (2 bytes)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0x02"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Service ID (0x3E)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0x3E"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Subfunction (KeepAlive: 0x00)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0x00"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3-7"}),(0,t.jsx)(n.td,{children:"Padding (if necessary)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0x00"})})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"behavior",children:"Behavior"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sent cyclically by the tester (diagnostic tool) to indicate its presence."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Positive Response (0x7E): Indicates the ECU acknowledges the Tester Present request."}),"\n",(0,t.jsx)(n.li,{children:"No Response: The ECU may not respond explicitly for this service (depends on configuration)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"capl-implementation",children:"CAPL Implementation"}),"\n",(0,t.jsx)(n.h3,{id:"variables-declaration",children:"Variables Declaration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"variables {\n  message testerPresentMessage; // Defines the message to be sent\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'on start {\n  // Initialize the Tester Present message\n  testerPresentMessage.id = 0x1E0; // Example ID for the ECU\n  testerPresentMessage.dlc = 8;    // Data Length Code (8 bytes)\n  testerPresentMessage.byte(0) = 0x02; // Length of the message\n  testerPresentMessage.byte(1) = 0x3E; // Service ID: Tester Present\n  testerPresentMessage.byte(2) = 0x00; // Subfunction: KeepAlive\n  setTimerCyclic("testerPresentTimer", 2000); // Send message every 2000 ms\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sending-the-request",children:"Sending the Request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'on timer testerPresentTimer {\n  output(testerPresentMessage); // Send the Tester Present request\n  write("Tester Present message sent.");\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"stopping-the-timer",children:"Stopping the Timer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'on stop {\n  cancelTimer("testerPresentTimer"); // Stop the cyclic timer on script termination\n  write("Tester Present timer stopped.");\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tester-present-sequence-diagram",children:"Tester Present Sequence Diagram"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mermaid",children:"sequenceDiagram\n    actor Tester as Tester (CAPL Script)\n    participant ECU\n\n    Tester ->> ECU: Tester Present (Service 0x3E)\n    ECU --\x3e> Tester: Positive Response (Optional)\n\n    loop Every 2000 ms\n        Tester ->> ECU: Tester Present (Service 0x3E)\n        ECU --\x3e> Tester: Positive Response (Optional)\n    end\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Actors and Participants"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"Tester"})," represents the diagnostic tool running the CAPL script."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"ECU"})," is the Electronic Control Unit being diagnosed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Initial Interaction"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The tester sends a ",(0,t.jsx)(n.strong,{children:"Tester Present"})," request to the ECU."]}),"\n",(0,t.jsx)(n.li,{children:"The ECU may optionally respond with a positive response."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cyclic Behavior"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The loop shows the cyclic transmission of ",(0,t.jsx)(n.strong,{children:"Tester Present"})," messages at intervals of 2000 milliseconds."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The response from the ECU is marked as optional (",(0,t.jsx)(n.code,{children:"Positive Response"}),") since not all implementations require an explicit acknowledgment."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"key-considerations",children:"Key Considerations"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cyclic Behavior:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Tester Present message should be sent at regular intervals."}),"\n",(0,t.jsx)(n.li,{children:"The interval should match the ECU\u2019s timeout requirements, typically 2 seconds."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Session Maintenance:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This service must be sent continuously during active diagnostic sessions."}),"\n",(0,t.jsx)(n.li,{children:"Failure to send this service may result in the ECU exiting the session."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Response Handling:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"While the ECU may not always send an explicit response, it is essential to monitor responses if required by the diagnostic specification."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Error Handling:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ensure the cyclic timer is stopped properly using ",(0,t.jsx)(n.code,{children:"cancelTimer"})," to avoid resource leaks."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"example-trace-output",children:"Example Trace Output"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Positive Response:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Tester Present message sent.\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Timer Stopped:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Tester Present timer stopped.\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["During Flashing Operations:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Keep the ECU in a Programming Session while data is being written."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["During Long Diagnostics:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure the ECU does not time out while running extended diagnostic tests."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Preventing Session Termination:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maintain communication when the diagnostic tool is idle for extended periods."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"common-issues-and-debugging",children:"Common Issues and Debugging"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["ECU Not Responding:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verify the correct CAN ID is used for the ECU."}),"\n",(0,t.jsx)(n.li,{children:"Ensure the Tester Present message is formatted correctly."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["ECU Timing Out:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check if the interval (",(0,t.jsx)(n.code,{children:"setTimerCyclic"}),") matches the ECU\u2019s timeout requirements."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Timer Mismanagement:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ensure all timers are properly canceled in the ",(0,t.jsx)(n.code,{children:"on stop"})," event to prevent cyclic execution errors."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"The Tester Present service is an essential component of UDS diagnostics, ensuring session continuity during diagnostic operations. By implementing the CAPL example above, you can effectively manage ECU communication timeouts in a diagnostic environment."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(96540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);