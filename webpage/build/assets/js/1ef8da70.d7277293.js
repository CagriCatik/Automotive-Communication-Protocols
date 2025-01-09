"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8195],{48510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"DoIP/CANoe/typical_communication_sequence","title":"Typical Communication Sequence","description":"This section provides a comprehensive explanation of the Diagnostic over Internet Protocol (DoIP) communication sequence, as used in conjunction with Vector CANoe. The aim is to provide a structured understanding, practical insights, and best practices for implementing and analyzing DoIP sequences.","source":"@site/docs/DoIP/06_CANoe/01_typical_communication_sequence.md","sourceDirName":"DoIP/06_CANoe","slug":"/DoIP/CANoe/typical_communication_sequence","permalink":"/Vehicle-Network-Standards/docs/DoIP/CANoe/typical_communication_sequence","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DoIP/06_CANoe/01_typical_communication_sequence.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"doipSidebar","previous":{"title":"doip-uds-diagnoseinformationen","permalink":"/Vehicle-Network-Standards/docs/DoIP/DoIP_Message/doip-uds-diagnoseinformationen"},"next":{"title":"trace_window_interpretation","permalink":"/Vehicle-Network-Standards/docs/DoIP/CANoe/trace_window_interpretation"}}');var s=t(74848),o=t(28453);const a={},c="Typical Communication Sequence",r={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Key Components in DoIP Communication",id:"key-components-in-doip-communication",level:2},{value:"DoIP Communication Sequence",id:"doip-communication-sequence",level:2},{value:"Initial Connection",id:"initial-connection",level:3},{value:"IP Address Assignment",id:"ip-address-assignment",level:3},{value:"Vehicle Announcement",id:"vehicle-announcement",level:3},{value:"Vehicle Identification Request and Response",id:"vehicle-identification-request-and-response",level:3},{value:"TCP Channel Establishment",id:"tcp-channel-establishment",level:3},{value:"Routing Activation",id:"routing-activation",level:3},{value:"Diagnostic Message Exchange",id:"diagnostic-message-exchange",level:3},{value:"Closing the TCP Channel",id:"closing-the-tcp-channel",level:3},{value:"Practical Example: Using Vector CANoe for DoIP",id:"practical-example-using-vector-canoe-for-doip",level:2},{value:"Best Practices",id:"best-practices",level:2}];function l(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"typical-communication-sequence",children:"Typical Communication Sequence"})}),"\n",(0,s.jsx)(n.p,{children:"This section provides a comprehensive explanation of the Diagnostic over Internet Protocol (DoIP) communication sequence, as used in conjunction with Vector CANoe. The aim is to provide a structured understanding, practical insights, and best practices for implementing and analyzing DoIP sequences."}),"\n",(0,s.jsx)("img",{src:"../image/ip-adress-assignment.png",alt:"Image",style:"max-width:75%; display: block; margin: 0 auto;"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"DoIP, or Diagnostic over Internet Protocol, is a standardized protocol that enables vehicle diagnostics using IP-based communication. This guide focuses on the theoretical steps involved in a typical DoIP communication sequence, ranging from the initial connection to the handling of diagnostic messages. While the examples are demonstrated using Vector CANoe, the principles and methodologies discussed here are broadly applicable across various DoIP implementations."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"key-components-in-doip-communication",children:"Key Components in DoIP Communication"}),"\n",(0,s.jsx)(n.p,{children:"To implement a DoIP communication sequence effectively, certain hardware and software components are essential. The Vector Network Hardware Interface, specifically the VN5610A model, is required to connect the tester to the ECU. Additionally, Vector CANoe serves as the software tool that allows users to simulate, analyze, and test communication sequences in automotive networks. The two main network protocols used during the communication sequence are UDP (User Datagram Protocol) and TCP (Transmission Control Protocol). UDP is primarily used for the initial identification phase, while TCP ensures secure and reliable communication during diagnostic operations."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"doip-communication-sequence",children:"DoIP Communication Sequence"}),"\n",(0,s.jsx)(n.h3,{id:"initial-connection",children:"Initial Connection"}),"\n",(0,s.jsx)(n.p,{children:"The communication process begins with establishing a connection between the ECU and the tester. This is achieved using the VN5610A hardware interface. Once connected, ensure that the ECU is powered on. This setup forms the foundation for all subsequent communication steps."}),"\n",(0,s.jsx)(n.h3,{id:"ip-address-assignment",children:"IP Address Assignment"}),"\n",(0,s.jsx)(n.p,{children:"A critical prerequisite for successful communication is the proper configuration of IP addresses. Both the tester and the ECU must have correctly assigned IP addresses. In Vector CANoe, this configuration is performed within the TCP/IP stack settings. For users unfamiliar with this process, detailed tutorials are available that explain the steps to configure the IP stack in CANoe."}),"\n",(0,s.jsx)(n.h3,{id:"vehicle-announcement",children:"Vehicle Announcement"}),"\n",(0,s.jsx)(n.p,{children:"When the ECU is powered on, it broadcasts a Vehicle Announcement Message three times. The visibility of this message depends on the current status of the network. This announcement is an essential step as it signals the presence of the ECU to the network and prepares the tester for subsequent actions."}),"\n",(0,s.jsx)(n.h3,{id:"vehicle-identification-request-and-response",children:"Vehicle Identification Request and Response"}),"\n",(0,s.jsx)(n.p,{children:'Following the vehicle announcement, the tester sends a Vehicle Identification Request. This request can be sent with or without parameters. When sent without parameters, the request functions as a discovery query, essentially asking all devices on the network, "Who\u2019s there?" In response, all ECUs that receive the request will transmit their Vehicle Identification Numbers (VINs) through a Vehicle Identification Response Message.'}),"\n",(0,s.jsx)(n.p,{children:"If the request is sent with specific parameters, such as a VIN or an Entity ID, only the ECU matching the specified criteria will respond, while all others will discard the request. In Vector CANoe, these parameters are configured in the Diagnostic Session settings. To send a parameter-less request, the address field should be left empty. For parameterized requests, the VIN or Entity ID must be explicitly defined."}),"\n",(0,s.jsx)(n.h3,{id:"tcp-channel-establishment",children:"TCP Channel Establishment"}),"\n",(0,s.jsx)(n.p,{children:"After the identification phase, the communication transitions from UDP to TCP to ensure secure and reliable data transfer. The tester initiates a TCP handshake, which establishes a dedicated channel for subsequent communication. This step is crucial for maintaining data integrity and synchronization during the diagnostic operations."}),"\n",(0,s.jsx)(n.h3,{id:"routing-activation",children:"Routing Activation"}),"\n",(0,s.jsx)(n.p,{children:"Once the TCP channel is established, the tester sends a Routing Activation Request to the ECU. This request activates communication with ECUs located behind the gateway or with the gateway itself. For this step to succeed, logical addresses for both the tester and the ECU must be correctly configured. When the ECU receives the Routing Activation Request, it responds with a Routing Activation Response, confirming that the activation was successful. This step ensures seamless communication between all relevant components within the vehicle network."}),"\n",(0,s.jsx)(n.h3,{id:"diagnostic-message-exchange",children:"Diagnostic Message Exchange"}),"\n",(0,s.jsx)(n.p,{children:"With routing activated, the tester can now send DoIP Diagnostic Messages. Upon receiving these messages, the gateway acknowledges receipt by sending a Diagnostic Message Positive Acknowledgment. The gateway then routes the message to the appropriate ECU within the car\u2019s internal network or processes it internally if required. Once the target ECU processes the diagnostic request, it sends a response back to the gateway, which in turn forwards it to the tester. These diagnostic exchanges can be monitored in real time using the Diagnostic Console in CANoe, providing a clear view of the communication flow and response behavior."}),"\n",(0,s.jsx)(n.h3,{id:"closing-the-tcp-channel",children:"Closing the TCP Channel"}),"\n",(0,s.jsx)(n.p,{children:"After completing all diagnostic operations, the TCP channel is closed through a process known as TCP Teardown. This step ensures that resources are freed, and the communication session is properly terminated."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"practical-example-using-vector-canoe-for-doip",children:"Practical Example: Using Vector CANoe for DoIP"}),"\n",(0,s.jsx)(n.p,{children:"To illustrate the process, consider a scenario where an engineer uses Vector CANoe to analyze DoIP communication. The process begins with setting up the hardware by connecting the ECU to the tester via the VN5610A interface and powering on the ECU. The IP addresses are then configured using the TCP/IP stack settings in CANoe. Once configured, the engineer observes the vehicle announcement messages in the Diagnostic Console. The tester sends vehicle identification requests, and the responses are verified for accuracy. Routing is activated by correctly setting logical addresses, after which diagnostic messages are exchanged and analyzed. Finally, the TCP channel is closed to complete the session."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.p,{children:"To ensure a successful DoIP implementation, it is vital to follow certain best practices. During the initial setup, verify that the IP addresses are correctly assigned and that the network configuration matches the requirements of the diagnostic tools. During communication, monitor vehicle announcement and diagnostic messages to ensure they align with expected behavior. Properly configure logical addresses for both the tester and ECU to facilitate seamless routing activation. Additionally, log all communication steps to identify and debug any issues that may arise. In scenarios where the ECU fails to respond, implement robust error-handling mechanisms to maintain system reliability."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);