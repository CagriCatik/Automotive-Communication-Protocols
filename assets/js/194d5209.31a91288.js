"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[4317],{41552:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"UDS/services/Request-Upload","title":"Request Upload - 0x35","description":"The Request Upload (0x35) service is one of the core services in the Unified Diagnostic Services (UDS) protocol (ISO 14229), enabling the client (typically a diagnostic tool or test equipment) to initiate the transfer of data from an ECU (Electronic Control Unit) to the client. The Request Upload (0x35) service is widely used in automotive diagnostics and service environments to retrieve diagnostic data, ECU logs, configuration files, or other data stored in the ECU\u2019s memory.","source":"@site/docs/UDS/02_services/14_Request-Upload.md","sourceDirName":"UDS/02_services","slug":"/UDS/services/Request-Upload","permalink":"/Vehicle-Network-Standards/docs/UDS/services/Request-Upload","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/UDS/02_services/14_Request-Upload.md","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"sidebar_position":14},"sidebar":"udsSidebar","previous":{"title":"Request Download - 0x34","permalink":"/Vehicle-Network-Standards/docs/UDS/services/Request-Download"},"next":{"title":"Transfer Data - 0x36","permalink":"/Vehicle-Network-Standards/docs/UDS/services/Request-Data-Transfer"}}');var n=r(74848),i=r(28453);const o={sidebar_position:14},d="Request Upload - 0x35",l={},a=[{value:"<strong>Purpose and Use Cases</strong>",id:"purpose-and-use-cases",level:2},{value:"<strong>Overview of the Request Upload (0x35) Service</strong>",id:"overview-of-the-request-upload-0x35-service",level:2},{value:"<strong>Request Frame Format for Request Upload (0x35)</strong>",id:"request-frame-format-for-request-upload-0x35",level:2},{value:"<strong>Data Format Identifier Details</strong>",id:"data-format-identifier-details",level:3},{value:"<strong>Address and Length Format Identifier</strong>",id:"address-and-length-format-identifier",level:3},{value:"<strong>Response Frame Format for Request Upload (0x35)</strong>",id:"response-frame-format-for-request-upload-0x35",level:2},{value:"<strong>Positive Response</strong>",id:"positive-response",level:3},{value:"<strong>Negative Response</strong>",id:"negative-response",level:3},{value:"<strong>Supported Negative Response Codes (NRC)</strong>",id:"supported-negative-response-codes-nrc",level:3},{value:"<strong>Request Upload Process</strong>",id:"request-upload-process",level:2},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}];function c(e){const s={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"request-upload---0x35",children:"Request Upload - 0x35"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Request Upload (0x35)"})," service is one of the core services in the ",(0,n.jsx)(s.strong,{children:"Unified Diagnostic Services (UDS)"})," protocol (ISO 14229), enabling the client (typically a diagnostic tool or test equipment) to initiate the transfer of data from an ECU (Electronic Control Unit) to the client. The ",(0,n.jsx)(s.strong,{children:"Request Upload (0x35)"})," service is widely used in automotive diagnostics and service environments to retrieve diagnostic data, ECU logs, configuration files, or other data stored in the ECU\u2019s memory."]}),"\n",(0,n.jsxs)(s.p,{children:["This service is essential for scenarios where data needs to be extracted from the ECU for analysis, troubleshooting, diagnostics, or reprogramming. It complements the ",(0,n.jsx)(s.strong,{children:"Request Download (0x34)"})," service, which is used for uploading data ",(0,n.jsx)(s.strong,{children:"to"})," the ECU, whereas ",(0,n.jsx)(s.strong,{children:"Request Upload"})," is specifically for ",(0,n.jsx)(s.strong,{children:"extracting"})," data from the ECU."]}),"\n",(0,n.jsx)(s.h2,{id:"purpose-and-use-cases",children:(0,n.jsx)(s.strong,{children:"Purpose and Use Cases"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Request Upload (0x35)"})," service is employed when the client needs to retrieve data stored in the ECU, making it one of the most useful services for diagnostics and ECU configuration. Typical use cases include:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Diagnostic Data Retrieval"}),": Extracting error codes, fault logs, or other diagnostic information from the ECU."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"ECU Logs"}),": Uploading log files for analysis or troubleshooting of ECU behavior."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Configuration Data"}),": Retrieving configuration or calibration data from the ECU to check current settings or backup configuration."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Firmware or Software Retrieval"}),": In some cases, it may be used to upload firmware or software from the ECU for analysis, especially during reverse engineering or diagnostic procedures."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Request Upload"})," service allows for efficient extraction of relevant data for diagnostics or software maintenance, making it indispensable for service centers, test labs, and OEMs."]}),"\n",(0,n.jsx)(s.h2,{id:"overview-of-the-request-upload-0x35-service",children:(0,n.jsx)(s.strong,{children:"Overview of the Request Upload (0x35) Service"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Request Upload (0x35)"})," service is initiated by the client to request that the ECU upload specific data from its memory to the client. The client provides a memory address where the data is stored, along with the size of the data to be transferred. The ECU validates the request and responds by transmitting the data in sequential blocks. The data transfer proceeds in a series of requests and responses until the entire block of data is uploaded."]}),"\n",(0,n.jsx)(s.p,{children:"The service requires that the client and ECU communicate in a way that ensures the correct transfer of data, even for large files or multiple data segments."}),"\n",(0,n.jsx)(s.h2,{id:"request-frame-format-for-request-upload-0x35",children:(0,n.jsx)(s.strong,{children:"Request Frame Format for Request Upload (0x35)"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Request Upload"})," frame contains several parameters, including the memory address and the size of the data to be uploaded. Below is the detailed breakdown of the frame format:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Byte Number"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter Name"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"1"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"SID (Service Identifier)"})}),(0,n.jsxs)(s.td,{children:["This is the service identifier for the ",(0,n.jsx)(s.strong,{children:"Request Upload"})," service, which is always ",(0,n.jsx)(s.strong,{children:"0x35"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"2"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Data Format Identifier"})}),(0,n.jsx)(s.td,{children:"A 1-byte value specifying the encryption and compression methods for the data transfer."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsxs)(s.td,{children:["- ",(0,n.jsx)(s.strong,{children:"Higher nibble"})," (bits 7-4): Compression method"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsxs)(s.td,{children:["- ",(0,n.jsx)(s.strong,{children:"Lower nibble"})," (bits 3-0): Encryption method"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsxs)(s.td,{children:["If the value is ",(0,n.jsx)(s.strong,{children:"0x00"}),", it indicates no encryption or compression is used."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"3"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Address and Length Format Identifier"})}),(0,n.jsx)(s.td,{children:"A 1-byte field specifying the size of the memory address and memory size fields."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsxs)(s.td,{children:["- ",(0,n.jsx)(s.strong,{children:"Higher nibble"})," (bits 7-4): Number of bytes of the ",(0,n.jsx)(s.strong,{children:"Memory Size"})," parameter."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{}),(0,n.jsxs)(s.td,{children:["- ",(0,n.jsx)(s.strong,{children:"Lower nibble"})," (bits 3-0): Number of bytes of the ",(0,n.jsx)(s.strong,{children:"Memory Address"})," parameter."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"4\u20137"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Memory Address"})}),(0,n.jsx)(s.td,{children:"Specifies the starting address in the ECU\u2019s memory from which the data will be uploaded. This is a 4-byte value."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"8\u201311"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Memory Size"})}),(0,n.jsx)(s.td,{children:"A 4-byte field specifying the size of the data block that is to be uploaded from the ECU\u2019s memory."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"data-format-identifier-details",children:(0,n.jsx)(s.strong,{children:"Data Format Identifier Details"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Data Format Identifier"})," defines how the data is handled during the upload process. It specifies the compression and encryption methods to be applied to the data, as defined by the OEM. The field is structured as follows:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Higher nibble"})," (bits 7-4): Compression method (e.g., ",(0,n.jsx)(s.strong,{children:"0x01"})," for compression type 1)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Lower nibble"})," (bits 3-0): Encryption method (e.g., ",(0,n.jsx)(s.strong,{children:"0x01"})," for encryption type 1)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Value of 0x00"}),": No compression or encryption applied."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For example, if the ",(0,n.jsx)(s.strong,{children:"Data Format Identifier"})," is ",(0,n.jsx)(s.strong,{children:"0x11"}),", this would indicate ",(0,n.jsx)(s.strong,{children:"compression method 1"})," and ",(0,n.jsx)(s.strong,{children:"encryption method 1"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"address-and-length-format-identifier",children:(0,n.jsx)(s.strong,{children:"Address and Length Format Identifier"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Address and Length Format Identifier"})," specifies how the memory address and size fields are encoded. It ensures that the client and ECU correctly interpret the sizes of the memory address and data block."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Higher nibble"})," (bits 7-4): Specifies the number of bytes in the ",(0,n.jsx)(s.strong,{children:"Memory Size"})," field."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Lower nibble"})," (bits 3-0): Specifies the number of bytes in the ",(0,n.jsx)(s.strong,{children:"Memory Address"})," field."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For instance, if the ",(0,n.jsx)(s.strong,{children:"higher nibble"})," is ",(0,n.jsx)(s.strong,{children:"0x04"}),", the ",(0,n.jsx)(s.strong,{children:"Memory Size"})," is a 4-byte value, and if the ",(0,n.jsx)(s.strong,{children:"lower nibble"})," is ",(0,n.jsx)(s.strong,{children:"0x04"}),", the ",(0,n.jsx)(s.strong,{children:"Memory Address"})," is also a 4-byte value."]}),"\n",(0,n.jsx)(s.h2,{id:"response-frame-format-for-request-upload-0x35",children:(0,n.jsx)(s.strong,{children:"Response Frame Format for Request Upload (0x35)"})}),"\n",(0,n.jsxs)(s.p,{children:["Once the ",(0,n.jsx)(s.strong,{children:"Request Upload (0x35)"})," service is received by the ECU, it processes the request and prepares to upload the requested data. The ECU responds with a ",(0,n.jsx)(s.strong,{children:"positive"})," or ",(0,n.jsx)(s.strong,{children:"negative"})," response, based on whether the request was successfully processed."]}),"\n",(0,n.jsx)(s.h3,{id:"positive-response",children:(0,n.jsx)(s.strong,{children:"Positive Response"})}),"\n",(0,n.jsxs)(s.p,{children:["If the ECU successfully accepts the upload request, it sends a ",(0,n.jsx)(s.strong,{children:"positive response"})," frame with the following structure:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Byte Number"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter Name"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"1"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"PCI Length"})}),(0,n.jsx)(s.td,{children:"Specifies the length of the response frame."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"2"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Response SID"})}),(0,n.jsxs)(s.td,{children:["The ",(0,n.jsx)(s.strong,{children:"Service Identifier"})," for the response. For a ",(0,n.jsx)(s.strong,{children:"Request Upload"})," response, this is always ",(0,n.jsx)(s.strong,{children:"0x75"})," (0x35 + 0x40)."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"3"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Length Format Identifier"})}),(0,n.jsxs)(s.td,{children:["A 1-byte value specifying the length of the ",(0,n.jsx)(s.strong,{children:"Max Number of Block Length"})," parameter."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"4"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Max Number of Block Length"})}),(0,n.jsx)(s.td,{children:"A 2-byte field indicating the maximum number of bytes the client can expect to receive in each data block."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Max Number of Block Length"})," indicates how many bytes the client can expect in each data block, guiding the client on how to structure the data upload."]}),"\n",(0,n.jsx)(s.h3,{id:"negative-response",children:(0,n.jsx)(s.strong,{children:"Negative Response"})}),"\n",(0,n.jsxs)(s.p,{children:["If the ECU cannot process the ",(0,n.jsx)(s.strong,{children:"Request Upload"})," request (due to incorrect parameters, invalid memory address, or other conditions), it sends a ",(0,n.jsx)(s.strong,{children:"negative response"})," containing the ",(0,n.jsx)(s.strong,{children:"Negative Response Code (NRC)"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Byte Number"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter Name"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"1"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"PCI Length"})}),(0,n.jsx)(s.td,{children:"Specifies the length of the response frame."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"2"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Request SID"})}),(0,n.jsxs)(s.td,{children:["The ",(0,n.jsx)(s.strong,{children:"Service Identifier"})," for the ",(0,n.jsx)(s.strong,{children:"Request Upload"})," service, which is always ",(0,n.jsx)(s.strong,{children:"0x35"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"3"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"NRC"})}),(0,n.jsxs)(s.td,{children:["The ",(0,n.jsx)(s.strong,{children:"Negative Response Code (NRC)"})," that indicates why the request was rejected."]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"supported-negative-response-codes-nrc",children:(0,n.jsx)(s.strong,{children:"Supported Negative Response Codes (NRC)"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"NRC Value"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Mnemonic"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"0x13"})}),(0,n.jsx)(s.td,{children:"Incorrect message length or invalid format"}),(0,n.jsx)(s.td,{children:"IML"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"0x22"})}),(0,n.jsx)(s.td,{children:"Conditions not correct (e.g., invalid parameters)"}),(0,n.jsx)(s.td,{children:"CNC"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"0x31"})}),(0,n.jsx)(s.td,{children:"Request out of range (e.g., invalid memory address or size)"}),(0,n.jsx)(s.td,{children:"ROOR"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"0x33"})}),(0,n.jsx)(s.td,{children:"Security access denied (e.g., insufficient permissions)"}),(0,n.jsx)(s.td,{children:"SAD"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"0x70"})}),(0,n.jsx)(s.td,{children:"General programming failure (e.g., hardware issues)"}),(0,n.jsx)(s.td,{children:"GPF"})]})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"request-upload-process",children:(0,n.jsx)(s.strong,{children:"Request Upload Process"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Initiating the Request"}),": The client sends a ",(0,n.jsx)(s.strong,{children:"Request Upload (0x35)"})," frame, specifying the memory address, memory size, and data format information. The client may also specify encryption or compression options as per the OEM's requirements."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Server Validation"}),": Upon receiving the request, the ECU validates the memory address, size, and format of the requested data. If everything is valid, the ECU prepares the data for upload. If validation fails (e.g., invalid address or size), the ECU sends a ",(0,n.jsx)(s.strong,{children:"negative response"})," with the appropriate ",(0,n.jsx)(s.strong,{children:"NRC"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Data Transfer"}),": Once the validation step is complete, the ECU responds with a ",(0,n.jsx)(s.strong,{children:"positive response"})," indicating the maximum number of bytes that can be transferred in each block. The client then begins receiving the data in blocks, based on the ",(0,n.jsx)(s.strong,{children:"Max Number of Block Length"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Completion"}),": After the entire data block has been uploaded, the ECU processes the data and completes the transfer. If the transfer was successful, the ECU sends"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["a ",(0,n.jsx)(s.strong,{children:"positive confirmation"}),". The ",(0,n.jsx)(s.strong,{children:"Request Transfer Exit (0x37)"})," service can be used to terminate the data upload session."]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"conclusion",children:(0,n.jsx)(s.strong,{children:"Conclusion"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Request Upload (0x35)"})," service is a key component of the UDS protocol, enabling clients to retrieve data from an ECU. It is commonly used for extracting diagnostic data, error logs, or configuration files. The service allows for efficient block-based data transfer, with mechanisms in place for ensuring that data is correctly uploaded from the ECU to the client. Proper error handling through ",(0,n.jsx)(s.strong,{children:"negative response codes"})," ensures robustness in the event of issues during the upload process. When combined with the ",(0,n.jsx)(s.strong,{children:"Transfer Data (0x36)"})," service, the ",(0,n.jsx)(s.strong,{children:"Request Upload (0x35)"})," service forms an essential tool for automotive diagnostics, maintenance, and configuration tasks."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>d});var t=r(96540);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);