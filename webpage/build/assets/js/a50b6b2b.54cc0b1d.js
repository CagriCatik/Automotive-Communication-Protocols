"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[1831],{96248:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"UDS/examples/Security-Access","title":"Examples - 0x27","description":"In this Python example, we simulate the Security Access request and response process between a diagnostic tool and an ECU. The example will focus on the Seed/Key exchange mechanism. We\u2019ll use the XOR algorithm as the Seed/Key generation algorithm for simplicity.","source":"@site/docs/UDS/04_examples/04_Security-Access.md","sourceDirName":"UDS/04_examples","slug":"/UDS/examples/Security-Access","permalink":"/Vehicle-Network-Standards/docs/UDS/examples/Security-Access","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/UDS/04_examples/04_Security-Access.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"udsSidebar","previous":{"title":"Examples - 0x11","permalink":"/Vehicle-Network-Standards/docs/UDS/examples/ECU-Reset-Example"},"next":{"title":"Examples - 0x22","permalink":"/Vehicle-Network-Standards/docs/UDS/examples/Read-Data-by-Identifier"}}');var i=s(74848),r=s(28453);const c={sidebar_position:4},a="Examples - 0x27",o={},d=[{value:"Python Code: Simulating UDS Security Access",id:"python-code-simulating-uds-security-access",level:2},{value:"Explanation of the Python Code:",id:"explanation-of-the-python-code",level:2},{value:"CAPL Code: Simulating Security Access Service",id:"capl-code-simulating-security-access-service",level:2},{value:"Explanation of the CAPL Code:",id:"explanation-of-the-capl-code",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"examples---0x27",children:"Examples - 0x27"})}),"\n",(0,i.jsx)(n.h1,{id:"1-python-example-security-access-communication",children:"1. Python Example: Security Access Communication"}),"\n",(0,i.jsx)(n.p,{children:"In this Python example, we simulate the Security Access request and response process between a diagnostic tool and an ECU. The example will focus on the Seed/Key exchange mechanism. We\u2019ll use the XOR algorithm as the Seed/Key generation algorithm for simplicity."}),"\n",(0,i.jsx)(n.h2,{id:"python-code-simulating-uds-security-access",children:"Python Code: Simulating UDS Security Access"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import random\r\nimport time\r\n\r\n# Function to generate a Seed (random number)\r\ndef generate_seed():\r\n    return random.getrandbits(32)  # Generates a 32-bit Seed\r\n\r\n# Function to generate a Key based on a Seed (XOR operation for simplicity)\r\ndef generate_key(seed, secret_key):\r\n    return seed ^ secret_key\r\n\r\n# ECU Class - Represents the ECU responding to the diagnostic tool\r\nclass ECU:\r\n    def __init__(self, secret_key):\r\n        self.secret_key = secret_key  # Secret key known only to the ECU\r\n\r\n    # Respond to the diagnostic tool\'s request with a Seed\r\n    def provide_seed(self):\r\n        seed = generate_seed()\r\n        print(f"ECU sends Seed: {hex(seed)}")\r\n        return seed\r\n\r\n    # Validate the Key sent by the diagnostic tool\r\n    def validate_key(self, received_key, seed):\r\n        expected_key = generate_key(seed, self.secret_key)\r\n        if received_key == expected_key:\r\n            print("ECU: Key is valid. Access granted.")\r\n            return True\r\n        else:\r\n            print("ECU: Key is invalid. Access denied.")\r\n            return False\r\n\r\n# Diagnostic Tool Class\r\nclass DiagnosticTool:\r\n    def __init__(self, secret_key):\r\n        self.secret_key = secret_key  # Secret key used to generate the Key\r\n\r\n    # Request Security Access from the ECU\r\n    def request_security_access(self, ecu):\r\n        print("Diagnostic Tool: Requesting Security Access...")\r\n        \r\n        # ECU sends a Seed to the diagnostic tool\r\n        seed = ecu.provide_seed()\r\n\r\n        # Diagnostic tool generates a Key using the Seed and its secret key\r\n        key = generate_key(seed, self.secret_key)\r\n        print(f"Diagnostic Tool: Calculated Key: {hex(key)}")\r\n\r\n        # Diagnostic tool sends the Key to the ECU for validation\r\n        access_granted = ecu.validate_key(key, seed)\r\n\r\n        return access_granted\r\n\r\n# Example of usage\r\nif __name__ == "__main__":\r\n    # Initialize the ECU and Diagnostic Tool with the same secret key (for simulation)\r\n    secret_key = 0xA3B5C7D9  # A predefined secret key shared between the ECU and diagnostic tool\r\n    ecu = ECU(secret_key)\r\n    diagnostic_tool = DiagnosticTool(secret_key)\r\n\r\n    # Start Security Access communication\r\n    access_granted = diagnostic_tool.request_security_access(ecu)\r\n\r\n    if access_granted:\r\n        print("Security Access Granted. Proceed with diagnostic operations.")\r\n    else:\r\n        print("Security Access Denied. Access is not authorized.")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"explanation-of-the-python-code",children:"Explanation of the Python Code:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"generate_seed"}),": Generates a random 32-bit value to simulate the Seed sent by the ECU."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"generate_key"}),": The diagnostic tool uses the Seed and a predefined secret key (known to both the ECU and the tool) to generate a Key using an XOR operation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ECU"})," class: This class simulates the ECU. It can send a random Seed to the diagnostic tool and validate the Key received from the diagnostic tool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DiagnosticTool"})," class: This class simulates the diagnostic tool. It sends a request to the ECU, receives the Seed, computes the Key using the Seed and its own secret key, and sends the Key back to the ECU for validation."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"generate_key"})," function in this example uses a simple XOR operation, but in a real-world scenario, you might use more complex cryptographic functions to generate the Key."]}),"\n",(0,i.jsx)(n.h1,{id:"2-capl-example-security-access-in-uds",children:"2. CAPL Example: Security Access in UDS"}),"\n",(0,i.jsx)(n.p,{children:"In CAPL (CAN Application Programming Language), we simulate the Security Access service for an ECU. CAPL is primarily used in tools like CANoe and CANalyzer for automating CAN network operations, including UDS services."}),"\n",(0,i.jsx)(n.h2,{id:"capl-code-simulating-security-access-service",children:"CAPL Code: Simulating Security Access Service"}),"\n",(0,i.jsx)(n.p,{children:"In this CAPL example, we simulate a Security Access request and response in a UDS-based diagnostic session. We'll assume the use of a CAN network to send UDS messages between the diagnostic tool and the ECU."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-capl",children:'// Define UDS Service IDs\r\n#define SECURITY_ACCESS_SERVICE_ID 0x27\r\n#define RESPONSE_OK 0x00\r\n#define RESPONSE_DENIED 0x33\r\n\r\n// Define the Seed and Key (for simplicity, using a fixed Seed and secret Key)\r\nconst long secretKey = 0xA3B5C7D9;  // The shared secret key known by both ECU and diagnostic tool\r\nlong seed = 0x12345678;  // The Seed generated by the ECU (fixed for demonstration)\r\n\r\n// Function to simulate the diagnostic tool requesting Security Access\r\nvoid requestSecurityAccess()\r\n{\r\n  long keyGenerated = seed ^ secretKey;  // Diagnostic tool calculates the Key using XOR\r\n  \r\n  // Simulate sending the request to the ECU (Security Access Service)\r\n  output("Diagnostic Tool: Requesting Security Access...");\r\n  output("Diagnostic Tool: Calculated Key: %X", keyGenerated);\r\n\r\n  // Simulate the ECU validating the Key\r\n  validateSecurityKey(keyGenerated);\r\n}\r\n\r\n// Function to simulate the ECU validating the received Key\r\nvoid validateSecurityKey(long receivedKey)\r\n{\r\n  long expectedKey = seed ^ secretKey;  // ECU calculates the expected Key\r\n  \r\n  // Simulate the ECU\'s response\r\n  if (receivedKey == expectedKey)\r\n  {\r\n    output("ECU: Key is valid. Access granted.");\r\n    // Send response indicating access granted (0x00)\r\n    sendUDSResponse(RESPONSE_OK);\r\n  }\r\n  else\r\n  {\r\n    output("ECU: Key is invalid. Access denied.");\r\n    // Send response indicating access denied (0x33)\r\n    sendUDSResponse(RESPONSE_DENIED);\r\n  }\r\n}\r\n\r\n// Function to send a UDS response message (for simplicity, just a placeholder)\r\nvoid sendUDSResponse(byte responseCode)\r\n{\r\n  // Create a UDS response message\r\n  byte message[8];  // 8-byte CAN message for simplicity\r\n  message[0] = SECURITY_ACCESS_SERVICE_ID;\r\n  message[1] = responseCode;  // Response code: 0x00 (OK) or 0x33 (Denied)\r\n\r\n  // Simulate CAN bus message sending\r\n  output("ECU Response: Service ID: %X, Response Code: %X", message[0], message[1]);\r\n}\r\n\r\n// Main function to start the process\r\non start\r\n{\r\n  // Simulate the diagnostic tool requesting Security Access\r\n  requestSecurityAccess();\r\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"explanation-of-the-capl-code",children:"Explanation of the CAPL Code:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Security Access Service (0x27): This is the UDS service that the diagnostic tool requests to access sensitive functions in the ECU."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"secretKey"})," and ",(0,i.jsx)(n.code,{children:"seed"}),": These values are used for the XOR operation to generate the Key. In real scenarios, they would be securely shared between the ECU and diagnostic tool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"requestSecurityAccess"}),": This function simulates the diagnostic tool requesting Security Access. It calculates the Key using the Seed and sends the request to the ECU."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"validateSecurityKey"}),": This function simulates the ECU's response. The ECU compares the received Key to the expected Key and either grants or denies access."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sendUDSResponse"}),": This function simulates sending a UDS response on the CAN bus, indicating whether access is granted (0x00) or denied (0x33)."]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"running-the-code-in-practice",children:"Running the Code in Practice"}),"\n",(0,i.jsx)(n.p,{children:"In real-world usage:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Python example can be run in any Python environment. It simulates communication between a diagnostic tool and an ECU for Security Access, demonstrating how the Seed/Key mechanism works."}),"\n",(0,i.jsx)(n.li,{children:"The CAPL example is intended to run within a CANoe or CANalyzer environment where you simulate CAN messages for testing UDS services."}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"These examples illustrate the Seed/Key exchange used in Security Access (0x27) within UDS, showing how a diagnostic tool requests access to sensitive ECU functions and how the ECU authenticates the request. While the Python example uses a simple XOR algorithm to generate the Key, the CAPL example simulates the UDS service on a CAN network. In a real-world application, stronger cryptographic methods are typically used, but these examples provide a foundation for understanding the basic concept and process of Security Access in UDS."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);