"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[2240],{12095:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"SOVD/methods/data-access-and-management","title":"Data Access and Management","description":"---","source":"@site/docs/SOVD/04_methods/data-access-and-management.md","sourceDirName":"SOVD/04_methods","slug":"/SOVD/methods/data-access-and-management","permalink":"/Vehicle-Network-Standards/docs/SOVD/methods/data-access-and-management","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SOVD/04_methods/data-access-and-management.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"sovdSidebar","previous":{"title":"Schema-Based Description","permalink":"/Vehicle-Network-Standards/docs/SOVD/methods/schema-based-description"},"next":{"title":"Data Categorization","permalink":"/Vehicle-Network-Standards/docs/SOVD/methods/data-categorization"}}');var s=i(74848),t=i(28453);const r={sidebar_position:4},o="Data Access and Management",c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Core Principles of Data Access in SOVD",id:"core-principles-of-data-access-in-sovd",level:2},{value:"Centralized API Framework",id:"centralized-api-framework",level:3},{value:"Dynamic Self-Description",id:"dynamic-self-description",level:3},{value:"RESTful Architecture",id:"restful-architecture",level:3},{value:"Multi-Client and Concurrent Access",id:"multi-client-and-concurrent-access",level:3},{value:"Detailed Methodology for Data Access",id:"detailed-methodology-for-data-access",level:2},{value:"Entity Discovery and Resource Navigation",id:"entity-discovery-and-resource-navigation",level:3},{value:"Data Retrieval",id:"data-retrieval",level:3},{value:"Fault Memory Management",id:"fault-memory-management",level:3},{value:"Data Grouping and Aggregation",id:"data-grouping-and-aggregation",level:3},{value:"Locking Mechanisms",id:"locking-mechanisms",level:3},{value:"Periodic and Trigger-Based Data Access",id:"periodic-and-trigger-based-data-access",level:3},{value:"Advantages of SOVD for Data Management",id:"advantages-of-sovd-for-data-management",level:2},{value:"Streamlined Data Representation",id:"streamlined-data-representation",level:3},{value:"Scalable Integration",id:"scalable-integration",level:3},{value:"Reduced Complexity",id:"reduced-complexity",level:3},{value:"Real-Time Adaptability",id:"real-time-adaptability",level:3},{value:"Cost and Time Efficiency",id:"cost-and-time-efficiency",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"data-access-and-management",children:"Data Access and Management"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:'Service-Oriented Vehicle Diagnostics (SOVD) is a cutting-edge API standard developed by ASAM to address the complexities of modern vehicle diagnostics. By leveraging HTTP/REST and JSON technologies, SOVD streamlines the diagnostic process, unifying access to both high-performance computers (HPCs) and classical ECUs across various operational scenarios, such as proximity, in-vehicle, and remote diagnostics. This document focuses exclusively on the "Data Access and Management" aspects of SOVD, outlining its methodology, advantages, and practical applications in automotive diagnostics.'}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"core-principles-of-data-access-in-sovd",children:"Core Principles of Data Access in SOVD"}),"\n",(0,s.jsx)(n.h3,{id:"centralized-api-framework",children:"Centralized API Framework"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The SOVD Gateway serves as the central edge node, routing diagnostic requests to the appropriate endpoints based on URI parsing. It supports both static configuration and dynamic discovery using mDNS (multicast DNS), acting as an HTTP reverse proxy to ensure seamless communication within the system\u301017\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dynamic-self-description",children:"Dynamic Self-Description"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SOVD eliminates the dependency on external diagnostic description files, such as ODX, by introducing self-describing components. This feature allows vehicles to dynamically expose their diagnostic capabilities, ensuring real-time adaptability to system changes and updates\u301011\u2020source\u3011\u301016\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"restful-architecture",children:"RESTful Architecture"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The RESTful approach ensures stateless communication, enabling standardized operations on resources using HTTP methods such as GET, POST, PUT, and DELETE. Each request encapsulates all necessary information, reducing the overhead of session management and enhancing compatibility with IT standards\u301016\u2020source\u3011\u301017\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"multi-client-and-concurrent-access",children:"Multi-Client and Concurrent Access"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SOVD supports simultaneous access by multiple clients, facilitating collaborative diagnostic workflows, such as workshop-level diagnostics and remote support by OEMs. This capability minimizes downtime and accelerates issue resolution\u301013\u2020source\u3011\u301016\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"detailed-methodology-for-data-access",children:"Detailed Methodology for Data Access"}),"\n",(0,s.jsx)(n.h3,{id:"entity-discovery-and-resource-navigation",children:"Entity Discovery and Resource Navigation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SOVD organizes vehicle components into hierarchical entities and exposes these through a discoverable API. Entities are categorized into logical domains (e.g., powertrain, infotainment) or physical components (e.g., specific ECUs)."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example Query for Component Discovery"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:'GET {base_uri}/components\nResponse:\n{\n    "items": [\n        {"id": "engine", "name": "Engine Controller Unit", "href": "{base_uri}/components/engine"},\n        {"id": "brakes", "name": "Brake Control Unit", "href": "{base_uri}/components/brakes"}\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"data-retrieval",children:"Data Retrieval"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Data is accessed via categorized endpoints, including:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Current Data (",(0,s.jsx)(n.code,{children:"currentData"}),")"]}),": Real-time operational metrics."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Identification Data (",(0,s.jsx)(n.code,{children:"identData"}),")"]}),": Static information such as VIN or software versions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Stored Data (",(0,s.jsx)(n.code,{children:"storedData"}),")"]}),": Historical or fault-related data."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example Query for Identification Data"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:'GET {base_uri}/components/engine/data?categories=identData\nResponse:\n{\n    "items": [\n        {"id": "vin", "name": "Vehicle Identification Number", "data": "1HGCM82633A123456"},\n        {"id": "swVersion", "name": "Software Version", "data": "v2.3.1"}\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"fault-memory-management",children:"Fault Memory Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Faults are managed using ",(0,s.jsx)(n.code,{children:"/faults"})," resources. SOVD enables querying active, logged, or cleared faults with contextual data such as severity and timestamps. Unlike UDS, fault memory access in SOVD requires no specialized diagnostic sequences, simplifying implementation."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example Query for Active Faults"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:'GET {base_uri}/components/engine/faults?status[aggregatedStatus]=active\nResponse:\n{\n    "items": [\n        {\n            "code": "P0301",\n            "name": "Cylinder 1 Misfire Detected",\n            "status": {"aggregatedStatus": "active"},\n            "severity": 3,\n            "timestamp": "2025-01-03T10:15:30Z"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"data-grouping-and-aggregation",children:"Data Grouping and Aggregation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To optimize data retrieval, SOVD supports the creation of data groups. These groups aggregate multiple data points into a single request, reducing latency and enhancing efficiency for repetitive queries."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example Group Query"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:'POST {base_uri}/components/engine/data/groups\nBody:\n{\n    "items": ["currentData", "identData"]\n}\nResponse:\n{\n    "id": "group12345",\n    "href": "{base_uri}/components/engine/data/groups/group12345"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"locking-mechanisms",children:"Locking Mechanisms"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SOVD ensures resource integrity during critical operations by implementing a locking mechanism. Clients can acquire exclusive locks on resources, preventing conflicts in scenarios requiring single-client access, such as actuator controls."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example Lock Acquisition"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:'POST {base_uri}/components/brakes/locks\nBody:\n{\n    "lock_expiration": 600\n}\nResponse:\n{\n    "id": "lock67890",\n    "href": "{base_uri}/components/brakes/locks/lock67890"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"periodic-and-trigger-based-data-access",children:"Periodic and Trigger-Based Data Access"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Advanced access methods, such as periodic and trigger-based data retrieval, are planned for future SOVD versions (e.g., v1.1). These methods will facilitate real-time monitoring and event-driven diagnostics, further enhancing system responsiveness\u301017\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"advantages-of-sovd-for-data-management",children:"Advantages of SOVD for Data Management"}),"\n",(0,s.jsx)(n.h3,{id:"streamlined-data-representation",children:"Streamlined Data Representation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Symbolic data representation ensures that diagnostic tools receive ready-to-use information, eliminating the need for manual data interpretation\u301012\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scalable-integration",children:"Scalable Integration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SOVD\u2019s compatibility with modern IT infrastructures and cloud-based systems enables seamless integration into large-scale diagnostic ecosystems\u301011\u2020source\u3011\u301012\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reduced-complexity",children:"Reduced Complexity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"By centralizing diagnostic operations through a unified API, SOVD minimizes the complexity traditionally associated with managing diverse diagnostic protocols and configurations\u301013\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"real-time-adaptability",children:"Real-Time Adaptability"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The dynamic discovery of components and their diagnostic capabilities ensures that SOVD remains adaptable to changes in vehicle architecture and software\u301012\u2020source\u3011\u301016\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cost-and-time-efficiency",children:"Cost and Time Efficiency"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Simplified workflows and enhanced multi-client capabilities reduce operational costs and improve time-to-diagnosis, particularly in remote and multi-platform diagnostic scenarios\u301012\u2020source\u3011\u301013\u2020source\u3011."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"SOVD\u2019s advanced data access and management capabilities position it as a transformative solution for modern vehicle diagnostics. By integrating RESTful principles, dynamic resource management, and robust fault-handling mechanisms, SOVD not only simplifies existing diagnostic processes but also lays the groundwork for future innovations. These features ensure that SOVD remains at the forefront of the evolving automotive landscape, addressing the increasing complexity of HPCs and software-defined vehicles\u301011\u2020source\u3011\u301016\u2020source\u3011\u301017\u2020source\u3011."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var a=i(96540);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);