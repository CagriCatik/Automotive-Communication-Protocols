"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[981],{31220:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"UDS/uds/Services","title":"Services in UDS","description":"What is a Service in UDS?","source":"@site/docs/UDS/01_uds/03_Services.md","sourceDirName":"UDS/01_uds","slug":"/UDS/uds/Services","permalink":"/Vehicle-Network-Standards/docs/UDS/uds/Services","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/UDS/01_uds/03_Services.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"udsSidebar","previous":{"title":"Introduction to UDS","permalink":"/Vehicle-Network-Standards/docs/UDS/uds/Introduction"},"next":{"title":"Services","permalink":"/Vehicle-Network-Standards/docs/category/services"}}');var r=n(74848),t=n(28453);const c={sidebar_position:3},a="Services in UDS",d={},l=[{value:"What is a Service in UDS?",id:"what-is-a-service-in-uds",level:2},{value:"Understanding the Concept of Services",id:"understanding-the-concept-of-services",level:3},{value:"Purpose of Services in UDS",id:"purpose-of-services-in-uds",level:3},{value:"Types of Information and Tasks UDS Services Handle",id:"types-of-information-and-tasks-uds-services-handle",level:2},{value:"1. Diagnostic Information Retrieval",id:"1-diagnostic-information-retrieval",level:3},{value:"2. Diagnostic Tasks",id:"2-diagnostic-tasks",level:3},{value:"3. Maintenance Tasks",id:"3-maintenance-tasks",level:3},{value:"The Structure of UDS Services",id:"the-structure-of-uds-services",level:2},{value:"1. Service ID (SID):",id:"1-service-id-sid",level:3},{value:"2. Sub-functions:",id:"2-sub-functions",level:3},{value:"3. Data Parameters:",id:"3-data-parameters",level:3},{value:"Commonly Used UDS Services",id:"commonly-used-uds-services",level:2},{value:"1. Diagnostic Session Control (0x10)",id:"1-diagnostic-session-control-0x10",level:3},{value:"2. ECU Reset (0x11)",id:"2-ecu-reset-0x11",level:3},{value:"3. Read DTC Information (0x19)",id:"3-read-dtc-information-0x19",level:3},{value:"4. Read Data by Identifier (0x22)",id:"4-read-data-by-identifier-0x22",level:3},{value:"5. Write Data by Identifier (0x2E)",id:"5-write-data-by-identifier-0x2e",level:3},{value:"6. Request Download (0x34)",id:"6-request-download-0x34",level:3},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const s={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"services-in-uds",children:"Services in UDS"})}),"\n",(0,r.jsx)(s.h2,{id:"what-is-a-service-in-uds",children:"What is a Service in UDS?"}),"\n",(0,r.jsx)(s.p,{children:"In the context of Unified Diagnostic Services (UDS), the term service refers to a command or action that allows communication between the diagnostic tool (tester) and the vehicle's Electronic Control Units (ECUs). These services provide a structured way to retrieve information, perform diagnostic tasks, and manage maintenance procedures in vehicles."}),"\n",(0,r.jsx)(s.h3,{id:"understanding-the-concept-of-services",children:"Understanding the Concept of Services"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Services as Commands:",(0,r.jsx)(s.br,{}),"\n","Think of a service in UDS as a command that you give to the ECU, much like entering commands in a computer's command prompt. For instance, when you type a command such as ",(0,r.jsx)(s.code,{children:"erase"})," or ",(0,r.jsx)(s.code,{children:"open"})," in a terminal, the system performs the corresponding action. Similarly, in UDS, a service is issued to instruct the ECU to perform a specific task."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example: If you issue the command ",(0,r.jsx)(s.code,{children:"erase"}),", the ECU will clear certain data, such as fault codes or software information."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Services as Communication Protocol:",(0,r.jsx)(s.br,{}),"\n",'UDS services are also a communication protocol used by the tester (client) to request information from the ECU (server). This is how the vehicle\'s ECU "understands" the actions it needs to take. The service provides a common interface between the diagnostic tool and the ECU.']}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Example: If a tester wants to know the Vehicle Identification Number (VIN) of the vehicle, it can send a service request with a specific Service ID, and the ECU will respond with the requested data."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"purpose-of-services-in-uds",children:"Purpose of Services in UDS"}),"\n",(0,r.jsx)(s.p,{children:"The services in UDS allow the tester to interact with the ECUs to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Retrieve Diagnostic Information: For example, reading fault codes (DTCs), VIN, or other vehicle data."}),"\n",(0,r.jsx)(s.li,{children:"Perform Diagnostic Tasks: For example, clearing DTCs, checking system health, or performing tests."}),"\n",(0,r.jsx)(s.li,{children:"Maintenance Tasks: Services can also perform maintenance functions like flashing software or resetting systems."}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"types-of-information-and-tasks-uds-services-handle",children:"Types of Information and Tasks UDS Services Handle"}),"\n",(0,r.jsx)(s.h3,{id:"1-diagnostic-information-retrieval",children:"1. Diagnostic Information Retrieval"}),"\n",(0,r.jsx)(s.p,{children:"Services allow you to retrieve various forms of diagnostic information:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Vehicle Information: Such as the VIN number, software version, hardware version, and part numbers."}),"\n",(0,r.jsx)(s.li,{children:"Diagnostic Trouble Codes (DTCs): Services can read DTCs, which are generated by the ECU when it detects a fault in the vehicle\u2019s system."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Example of Reading Diagnostic Information:",(0,r.jsx)(s.br,{}),"\n","If a technician wants to read the VIN, they would use Service 0x22 (Read Data by Identifier) with a specific identifier for the VIN."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Request: ",(0,r.jsx)(s.code,{children:"0x22 0xF1"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"0x22"}),": Service ID for Read Data by Identifier"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"0xF1"}),": Data identifier for VIN."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Response: ",(0,r.jsx)(s.code,{children:"0x22 0xF1 [VIN Data]"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The ECU responds with the VIN in a format such as ",(0,r.jsx)(s.code,{children:"EB6B3A84CD2356701"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"2-diagnostic-tasks",children:"2. Diagnostic Tasks"}),"\n",(0,r.jsx)(s.p,{children:"These tasks involve identifying faults or system statuses:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Read DTCs: A critical function of UDS is to read the DTCs from the ECU, which helps diagnose issues in various subsystems like engine control, airbags, etc."}),"\n",(0,r.jsx)(s.li,{children:"Clear DTCs: Once the issues are addressed, DTCs can be cleared, signaling that the problem has been fixed."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Example of Reading DTCs:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Request: ",(0,r.jsx)(s.code,{children:"0x19 0x02"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"0x19"}),": Service ID for Read DTC Information"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"0x02"}),": Sub-function to read all DTCs."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Response: ",(0,r.jsx)(s.code,{children:"0x59 0x02 [DTC Data]"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The ECU responds with the list of DTCs stored in the system."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"3-maintenance-tasks",children:"3. Maintenance Tasks"}),"\n",(0,r.jsx)(s.p,{children:"UDS services are not limited to diagnostics; they also enable maintenance tasks like updating software or reprogramming the ECU. These tasks help in:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Flashing ECUs: Writing new software or patches to the ECU."}),"\n",(0,r.jsx)(s.li,{children:"Resetting ECUs: For example, performing a reset to restore the ECU to its default state after a software update or clearing DTCs."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Example of ECU Reset:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Request: ",(0,r.jsx)(s.code,{children:"0x11 0x01"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"0x11"}),": Service ID for ECU Reset"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"0x01"}),": Sub-function for Hard Reset."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Response: ",(0,r.jsx)(s.code,{children:"0x51 0x01"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The ECU acknowledges the reset and responds positively."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"the-structure-of-uds-services",children:"The Structure of UDS Services"}),"\n",(0,r.jsx)(s.p,{children:"Each UDS service follows a defined structure, including the following components:"}),"\n",(0,r.jsx)(s.h3,{id:"1-service-id-sid",children:"1. Service ID (SID):"}),"\n",(0,r.jsx)(s.p,{children:"A unique identifier for the service. For example:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"0x10: Diagnostic Session Control"}),"\n",(0,r.jsx)(s.li,{children:"0x11: ECU Reset"}),"\n",(0,r.jsx)(s.li,{children:"0x19: Read DTC Information"}),"\n",(0,r.jsx)(s.li,{children:"0x22: Read Data by Identifier"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"2-sub-functions",children:"2. Sub-functions:"}),"\n",(0,r.jsx)(s.p,{children:"Some services have sub-functions that define specific operations within that service. For example:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["ECU Reset service (",(0,r.jsx)(s.code,{children:"0x11"}),") has sub-functions such as:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"0x01: Hard Reset"}),"\n",(0,r.jsx)(s.li,{children:"0x02: Key-Off-On Reset"}),"\n",(0,r.jsx)(s.li,{children:"0x03: Soft Reset"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"3-data-parameters",children:"3. Data Parameters:"}),"\n",(0,r.jsx)(s.p,{children:"Services often require additional parameters, such as:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Data identifiers: To specify which data to read or write (e.g., VIN, DTCs, calibration values)."}),"\n",(0,r.jsx)(s.li,{children:"Memory addresses: In services like Read Memory by Address (Service ID: 0x23), where specific memory locations are read."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Service: ",(0,r.jsx)(s.code,{children:"0x22 0xF1 0x90"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"0x22"}),": Read Data by Identifier"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"0xF1 0x90"}),": Identifiers for VIN."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"commonly-used-uds-services",children:"Commonly Used UDS Services"}),"\n",(0,r.jsx)(s.p,{children:"Below are some of the frequently used UDS services, which help with vehicle diagnostics and maintenance:"}),"\n",(0,r.jsx)(s.h3,{id:"1-diagnostic-session-control-0x10",children:"1. Diagnostic Session Control (0x10)"}),"\n",(0,r.jsx)(s.p,{children:"This service controls the diagnostic session. It allows the tester to switch between different sessions like default, extended, or programming."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request: ",(0,r.jsx)(s.code,{children:"0x10 0x01"})," (Start default session)"]}),"\n",(0,r.jsxs)(s.li,{children:["Response: ",(0,r.jsx)(s.code,{children:"0x50 0x01"})," (Acknowledgement for the default session)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"2-ecu-reset-0x11",children:"2. ECU Reset (0x11)"}),"\n",(0,r.jsx)(s.p,{children:"This service resets the ECU. It has sub-functions for different reset types, such as a Hard Reset or a Soft Reset."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request: ",(0,r.jsx)(s.code,{children:"0x11 0x01"})," (Hard Reset)"]}),"\n",(0,r.jsxs)(s.li,{children:["Response: ",(0,r.jsx)(s.code,{children:"0x51 0x01"})," (Acknowledgement for the reset)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"3-read-dtc-information-0x19",children:"3. Read DTC Information (0x19)"}),"\n",(0,r.jsx)(s.p,{children:"This service is used to retrieve Diagnostic Trouble Codes (DTCs) that indicate faults in various vehicle systems."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request: ",(0,r.jsx)(s.code,{children:"0x19 0x02"})," (Read all DTCs)"]}),"\n",(0,r.jsxs)(s.li,{children:["Response: ",(0,r.jsx)(s.code,{children:"0x59 0x02 [DTC Data]"})," (List of DTCs)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"4-read-data-by-identifier-0x22",children:"4. Read Data by Identifier (0x22)"}),"\n",(0,r.jsx)(s.p,{children:"This service allows reading specific data from the ECU based on a data identifier (DID). For example, reading the VIN or software version of the ECU."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request: ",(0,r.jsx)(s.code,{children:"0x22 0xF1"})," (Read VIN)"]}),"\n",(0,r.jsxs)(s.li,{children:["Response: ",(0,r.jsx)(s.code,{children:"0x22 0xF1 [VIN Data]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"5-write-data-by-identifier-0x2e",children:"5. Write Data by Identifier (0x2E)"}),"\n",(0,r.jsx)(s.p,{children:"This service writes specific data to the ECU. It can be used for tasks like writing calibration values or flashing new software."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request: ",(0,r.jsx)(s.code,{children:"0x2E 0xF1 [Data]"})," (Write data to ECU)"]}),"\n",(0,r.jsxs)(s.li,{children:["Response: ",(0,r.jsx)(s.code,{children:"0x2F 0xF1 [Confirmation]"})," (Acknowledgement)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"6-request-download-0x34",children:"6. Request Download (0x34)"}),"\n",(0,r.jsx)(s.p,{children:"This service initiates a software download to the ECU, often used in flashing the ECU with new firmware."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Example:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request: ",(0,r.jsx)(s.code,{children:"0x34 [Download Data]"})]}),"\n",(0,r.jsxs)(s.li,{children:["Response: ",(0,r.jsx)(s.code,{children:"0x35 [Download Acknowledged]"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(s.p,{children:"In Unified Diagnostic Services (UDS), services are the backbone of communication between the tester (client) and the ECU (server). These services provide a standardized way to retrieve diagnostic data, perform system tests, and carry out maintenance tasks like ECU flashing and resetting."}),"\n",(0,r.jsx)(s.p,{children:"By understanding UDS services, technicians and engineers can effectively communicate with the vehicle's ECUs, enabling precise diagnostics, maintenance, and repairs. Each service has a dedicated purpose, whether it\u2019s reading fault codes, clearing them, or updating ECU software, and these services are critical in ensuring the proper functioning of modern vehicles."}),"\n",(0,r.jsx)(s.p,{children:"The 26-27 services defined by UDS each serve a specific role, making the protocol a powerful tool for modern automotive diagnostics and maintenance."})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>a});var i=n(96540);const r={},t=i.createContext(r);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);