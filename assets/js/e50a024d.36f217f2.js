"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[6878],{23263:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"SOVD/methods/schema-based-description","title":"Schema-Based Description","description":"Overview of Schema-Based Architecture","source":"@site/docs/SOVD/04_methods/03_schema-based-description.md","sourceDirName":"SOVD/04_methods","slug":"/SOVD/methods/schema-based-description","permalink":"/Vehicle-Network-Standards/docs/SOVD/methods/schema-based-description","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SOVD/04_methods/03_schema-based-description.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"sovdSidebar","previous":{"title":"Resource Discovery and Queries","permalink":"/Vehicle-Network-Standards/docs/SOVD/methods/resource-discovery-and-queries"},"next":{"title":"Data Access and Management","permalink":"/Vehicle-Network-Standards/docs/SOVD/methods/data-access-and-management"}}');var a=s(74848),r=s(28453);const t={},c="Schema-Based Description",o={},l=[{value:"Overview of Schema-Based Architecture",id:"overview-of-schema-based-architecture",level:2},{value:"Key Concepts of Schema-Based Design",id:"key-concepts-of-schema-based-design",level:2},{value:"1. <strong>Self-Describing API</strong>",id:"1-self-describing-api",level:3},{value:"2. <strong>Resource-Based Architecture</strong>",id:"2-resource-based-architecture",level:3},{value:"Categorization of Resources",id:"categorization-of-resources",level:4},{value:"3. <strong>Dynamic Capability Descriptions</strong>",id:"3-dynamic-capability-descriptions",level:3},{value:"Example of Capability Discovery",id:"example-of-capability-discovery",level:4},{value:"4. <strong>Aggregated and Grouped Data Sets</strong>",id:"4-aggregated-and-grouped-data-sets",level:3},{value:"Fault Memory and Control Operations",id:"fault-memory-and-control-operations",level:2},{value:"Fault Memory Handling",id:"fault-memory-handling",level:3},{value:"Locking and Operational Control",id:"locking-and-operational-control",level:3},{value:"Example Lock Request",id:"example-lock-request",level:4},{value:"Security and Extensibility",id:"security-and-extensibility",level:2},{value:"Authorization",id:"authorization",level:3},{value:"Example of OAuth Token Authorization",id:"example-of-oauth-token-authorization",level:4},{value:"Extensible Schema Design",id:"extensible-schema-design",level:3},{value:"Benefits of Schema-Based SOVD",id:"benefits-of-schema-based-sovd",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"schema-based-description",children:"Schema-Based Description"})}),"\n",(0,a.jsx)(n.h2,{id:"overview-of-schema-based-architecture",children:"Overview of Schema-Based Architecture"}),"\n",(0,a.jsx)(n.p,{children:"The schema-based design of SOVD introduces a unified, self-describing API architecture that transforms vehicle diagnostics into a dynamic, scalable, and user-friendly system. The central premise of schema-based SOVD is the decoupling of static configurations like ODX files and enabling diagnostics that dynamically adapt to vehicle changes. Using standardized technologies such as HTTP, REST, and JSON, the schema-based approach offers flexibility, interoperability, and ease of implementation across diverse diagnostic scenarios."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"key-concepts-of-schema-based-design",children:"Key Concepts of Schema-Based Design"}),"\n",(0,a.jsxs)(n.h3,{id:"1-self-describing-api",children:["1. ",(0,a.jsx)(n.strong,{children:"Self-Describing API"})]}),"\n",(0,a.jsx)(n.p,{children:"The SOVD schema-based system employs a self-describing API that dynamically reveals diagnostic capabilities. This eliminates dependency on external descriptive files like ODX, as each component and its resources provide introspective descriptions."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Discovery Process:"})," Clients can query the system to discover:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Entities and their sub-entities."}),"\n",(0,a.jsx)(n.li,{children:"Associated resources such as fault codes, diagnostic data, and operations."}),"\n",(0,a.jsx)(n.li,{children:"Capabilities and operational states."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example Request for Entity Discovery:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"GET {base_uri}/components\n"})}),"\n",(0,a.jsx)(n.p,{children:"Response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "items": [\n        {"id": "engine", "name": "Engine Control Unit", "href": "{base_uri}/components/engine"}\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"This structure allows a diagnostic client to interact dynamically with components."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"2-resource-based-architecture",children:["2. ",(0,a.jsx)(n.strong,{children:"Resource-Based Architecture"})]}),"\n",(0,a.jsxs)(n.p,{children:["SOVD organizes its operations around ",(0,a.jsx)(n.strong,{children:"resources"})," represented as hierarchical and logical entities. Each resource can be queried or manipulated using RESTful principles. Resources include:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Data Resources:"})," Provide access to real-time (",(0,a.jsx)(n.code,{children:"currentData"}),"), stored (",(0,a.jsx)(n.code,{children:"storedData"}),"), and system information (",(0,a.jsx)(n.code,{children:"sysInfo"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Fault Resources:"})," Enable fault memory operations such as reading, querying details, and clearing faults."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Operation Resources:"})," Represent software or hardware functions (e.g., actuator controls)."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"categorization-of-resources",children:"Categorization of Resources"}),"\n",(0,a.jsx)(n.p,{children:"SOVD categorizes resources into:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Data Categories:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"identData"}),": Identification information (e.g., VIN, software version)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"currentData"}),": Live system data (e.g., sensor readings)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"storedData"}),": Historical or log-based information."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Fault Resources:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Aggregated status (e.g., active faults)."}),"\n",(0,a.jsx)(n.li,{children:"Severity-based filters (e.g., critical errors only)."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example Query for Identification Data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"GET {base_uri}/components/engine/data?categories=identData\n"})}),"\n",(0,a.jsx)(n.p,{children:"Response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "items": [\n        {"id": "vin", "name": "Vehicle Identification Number", "category": "identData", "data": "V3CT0RV3H1CL3123"}\n    ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"3-dynamic-capability-descriptions",children:["3. ",(0,a.jsx)(n.strong,{children:"Dynamic Capability Descriptions"})]}),"\n",(0,a.jsx)(n.p,{children:"SOVD provides dynamic descriptions of component capabilities through its schema. These descriptions allow clients to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Retrieve a component's operational capabilities."}),"\n",(0,a.jsx)(n.li,{children:"Access schema-based metadata that defines resource structure and semantics."}),"\n",(0,a.jsx)(n.li,{children:"Integrate offline and online capability descriptions seamlessly using OpenAPI and JSON Schema standards."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-of-capability-discovery",children:"Example of Capability Discovery"}),"\n",(0,a.jsx)(n.p,{children:"Capability descriptions define available operations, locking mechanisms, and associated modes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"GET {base_uri}/components/docs?include-schema=true\n"})}),"\n",(0,a.jsx)(n.p,{children:"Response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "paths": {\n        "/components/engine/faults": {\n            "get": {\n                "operationId": "getEngineFaults",\n                "description": "Retrieve active faults for the engine",\n                "parameters": [\n                    {"name": "status", "in": "query", "type": "string"}\n                ],\n                "responses": {\n                    "200": {"description": "List of active faults"}\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"4-aggregated-and-grouped-data-sets",children:["4. ",(0,a.jsx)(n.strong,{children:"Aggregated and Grouped Data Sets"})]}),"\n",(0,a.jsx)(n.p,{children:"SOVD enhances efficiency through support for aggregated and grouped data access. For instance:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Data Lists:"})," Predefined collections of diagnostic data (e.g., grouped sensor readings)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Fault Groups:"})," Aggregated faults categorized by severity or functional domains."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Request to Create a Data List:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'POST {base_uri}/components/data-lists\n{\n    "items": [\n        { "id": "sensor1", "name": "Temperature Sensor", "data": "30\xb0C" },\n        { "id": "sensor2", "name": "Pressure Sensor", "data": "100 kPa" }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "id": "460AB8A5-5971-4693-8626-6287960050AF",\n    "status": "Created"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"fault-memory-and-control-operations",children:"Fault Memory and Control Operations"}),"\n",(0,a.jsx)(n.h3,{id:"fault-memory-handling",children:"Fault Memory Handling"}),"\n",(0,a.jsx)(n.p,{children:"Faults in SOVD are accessible via resource collections. Key operations include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Reading active or historical faults."}),"\n",(0,a.jsx)(n.li,{children:"Querying environment data tied to specific fault codes."}),"\n",(0,a.jsx)(n.li,{children:"Clearing specific or all faults."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example Request to Retrieve Faults:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"GET {base_uri}/components/engine/faults?status[aggregatedStatus]=active\n"})}),"\n",(0,a.jsx)(n.p,{children:"Response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "items": [\n        {\n            "code": "P123401",\n            "fault_name": "O2 Sensor Circuit Open",\n            "severity": 2,\n            "environment": {"temperature": "70\xb0C", "pressure": "101 kPa"}\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"locking-and-operational-control",children:"Locking and Operational Control"}),"\n",(0,a.jsx)(n.p,{children:"SOVD includes locking mechanisms to ensure exclusive access to resources during operations. Locks are tied to client tokens and have configurable expiration times."}),"\n",(0,a.jsx)(n.h4,{id:"example-lock-request",children:"Example Lock Request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'POST {base_uri}/components/engine/locks\n{\n    "lock_expiration": 3600\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "id": "1234-5678-9012",\n    "status": "Locked"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"security-and-extensibility",children:"Security and Extensibility"}),"\n",(0,a.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,a.jsx)(n.p,{children:"SOVD employs OAuth-based authorization to control access. The API dynamically adjusts its response based on user roles and access permissions."}),"\n",(0,a.jsx)(n.h4,{id:"example-of-oauth-token-authorization",children:"Example of OAuth Token Authorization"}),"\n",(0,a.jsx)(n.p,{children:"Request:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"GET {base_uri}/components/engine/data\nAuthorization: Bearer <OAuth-Token>\n"})}),"\n",(0,a.jsx)(n.p,{children:"."}),"\n",(0,a.jsx)(n.h3,{id:"extensible-schema-design",children:"Extensible Schema Design"}),"\n",(0,a.jsx)(n.p,{children:"SOVD\u2019s schema supports future extensions, allowing:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Addition of new resources (e.g., HPC-specific diagnostics)."}),"\n",(0,a.jsx)(n.li,{children:"Integration with advanced IT systems like cloud diagnostics or AI-driven analysis tools."}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"benefits-of-schema-based-sovd",children:"Benefits of Schema-Based SOVD"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Interoperability:"})," Supports diverse clients without specialized stacks."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Scalability:"})," Easily integrates new components and operations."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Dynamic Diagnostics:"})," Adapts to software updates and real-time changes."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Ease of Use:"})," Intuitive structure leveraging REST and JSON standards."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(96540);const a={},r=i.createContext(a);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);