"use strict";(self.webpackChunkvns=self.webpackChunkvns||[]).push([[8354],{83171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"UDS/examples/Communication-Control","title":"Examples - 0x28","description":"Below are examples of how you can implement Communication Control (0x28) in Python and CAPL. These examples demonstrate how you might use both languages to request and handle UDS communication control for enabling/disabling reception and transmission.","source":"@site/docs/UDS/04_examples/10_Communication-Control.md","sourceDirName":"UDS/04_examples","slug":"/UDS/examples/Communication-Control","permalink":"/Vehicle-Network-Standards/docs/UDS/examples/Communication-Control","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/UDS/04_examples/10_Communication-Control.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"udsSidebar","previous":{"title":"Examples - 0x03","permalink":"/Vehicle-Network-Standards/docs/UDS/examples/Tester-Present"},"next":{"title":"FAQ","permalink":"/Vehicle-Network-Standards/docs/category/faq"}}');var r=t(74848),s=t(28453);const o={sidebar_position:8},a="Examples - 0x28",c={},l=[{value:"1. Python Implementation for Communication Control (0x28)",id:"1-python-implementation-for-communication-control-0x28",level:2},{value:"2. CAPL Script for Communication Control (0x28)",id:"2-capl-script-for-communication-control-0x28",level:2},{value:"3. Testing and Running the Scripts",id:"3-testing-and-running-the-scripts",level:2},{value:"Testing the Python Script:",id:"testing-the-python-script",level:3},{value:"Testing the CAPL Script:",id:"testing-the-capl-script",level:3},{value:"4. Conclusion",id:"4-conclusion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"examples---0x28",children:"Examples - 0x28"})}),"\n",(0,r.jsx)(n.p,{children:"Below are examples of how you can implement Communication Control (0x28) in Python and CAPL. These examples demonstrate how you might use both languages to request and handle UDS communication control for enabling/disabling reception and transmission."}),"\n",(0,r.jsx)(n.h2,{id:"1-python-implementation-for-communication-control-0x28",children:"1. Python Implementation for Communication Control (0x28)"}),"\n",(0,r.jsxs)(n.p,{children:["To implement a UDS communication control request in Python, you can use libraries like ",(0,r.jsx)(n.code,{children:"python-can"})," for CAN communication, ",(0,r.jsx)(n.code,{children:"uds"})," (a Python UDS library), or ",(0,r.jsx)(n.code,{children:"python-uds"}),". In this example, we'll use the ",(0,r.jsx)(n.code,{children:"python-uds"})," library (which needs to be installed) to create a simple communication control request."]}),"\n",(0,r.jsxs)(n.p,{children:["Installation of Required Libraries:\r\nFirst, install the ",(0,r.jsx)(n.code,{children:"python-uds"})," library (if not installed already):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install python-uds\n"})}),"\n",(0,r.jsx)(n.p,{children:"Python Code for Communication Control Request:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import uds\r\nimport can\r\nimport time\r\n\r\n# Create a CAN bus instance (using a virtual CAN bus for demonstration)\r\nbus = can.interface.Bus(bustype=\'virtual\', channel=\'vcan0\', bitrate=500000)\r\n\r\n# Define UDS Communication Control (0x28) Request with Enable Rx & Tx (0x00)\r\ndef send_communication_control_request():\r\n    # Create the UDS request frame\r\n    request_frame = uds.Request(0x28)  # 0x28 is the service ID for Communication Control\r\n    request_frame.add_data(0x00)  # Sub-function: 0x00 (Enable Rx & Tx)\r\n    request_frame.add_data(0x01)  # Communication Type: CAN\r\n    request_frame.add_data(0x01)  # Node Id (ECU 1)\r\n\r\n    # Send the UDS request\r\n    print("Sending Communication Control Request: Enable Rx & Tx")\r\n    bus.send(can.Message(arbitration_id=0x7DF, data=request_frame.get_data(), is_extended_id=False))\r\n\r\n    # Wait for response (5 seconds timeout)\r\n    start_time = time.time()\r\n    while time.time() - start_time < 5:\r\n        message = bus.recv()\r\n        if message:\r\n            # Parse the response\r\n            if message.arbitration_id == 0x7E8:  # Assuming ECU responds with ID 0x7E8\r\n                response = uds.Response(message.data)\r\n                print(f"Received Response: {response.data}")\r\n                break\r\n    else:\r\n        print("No response received within the timeout.")\r\n\r\n# Call the function to send the request\r\nsend_communication_control_request()\n'})}),"\n",(0,r.jsx)(n.p,{children:"Explanation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The code creates a UDS request for Communication Control (0x28) with Enable Rx & Tx (0x00)."}),"\n",(0,r.jsxs)(n.li,{children:["We use the ",(0,r.jsx)(n.code,{children:"python-can"})," library to send the request over a virtual CAN bus (",(0,r.jsx)(n.code,{children:"vcan0"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"uds"})," library is used to generate the UDS request frame with the necessary sub-function and communication type."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-capl-script-for-communication-control-0x28",children:"2. CAPL Script for Communication Control (0x28)"}),"\n",(0,r.jsx)(n.p,{children:"CAPL (CAN Application Programming Language) is typically used for testing ECUs and can be executed in environments like CANoe or CANalyzer. Below is an example CAPL script for requesting the Communication Control (0x28) service with the sub-function Enable Rx & Tx (0x00)."}),"\n",(0,r.jsx)(n.p,{children:"CAPL Script for Communication Control Request:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-capl",children:'variables\r\n{\r\n  msTimer timeoutTimer;\r\n}\r\n\r\non start\r\n{\r\n  // Initialize timer for response timeout\r\n  setTimer(timeoutTimer, 5000);  // 5 seconds timeout\r\n}\r\n\r\non message 0x7DF  // CAN request message (0x7DF is the standard UDS request address)\r\n{\r\n  // Check if the request is for Communication Control service (0x28)\r\n  if (this.byte(0) == 0x28) {\r\n    byte subFunction = this.byte(1); // Get the sub-function from the request (index 1)\r\n    \r\n    if (subFunction == 0x00) { // Enable Rx & Tx\r\n      output("Received UDS Communication Control Request: Enable Rx & Tx");\r\n\r\n      // Create the response message\r\n      byte response[8];\r\n      response[0] = 0x28;  // Service Id (Communication Control)\r\n      response[1] = 0x00;  // Sub-function (Enable Rx & Tx)\r\n\r\n      // Send the response to the ECU\r\n      output("Sending Response: Enable Rx & Tx");\r\n      sendMessage(0x7E8, response, 2);  // Respond with ID 0x7E8 (ECU response address)\r\n    }\r\n  }\r\n}\r\n\r\non timer timeoutTimer\r\n{\r\n  // If no response is received within the timeout\r\n  output("No response received within the timeout.");\r\n}\r\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Explanation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The script listens for a UDS Communication Control service (0x28) request sent by the tester on CAN ID ",(0,r.jsx)(n.code,{children:"0x7DF"})," (UDS standard address)."]}),"\n",(0,r.jsx)(n.li,{children:"When it detects a request for Enable Rx & Tx (0x00), the ECU responds with a confirmation message containing the same service ID and sub-function."}),"\n",(0,r.jsx)(n.li,{children:"If no response is received within the set timeout (5 seconds), the script outputs a timeout message."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-testing-and-running-the-scripts",children:"3. Testing and Running the Scripts"}),"\n",(0,r.jsx)(n.h3,{id:"testing-the-python-script",children:"Testing the Python Script:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set Up a Virtual CAN Network:\r\nBefore running the Python script, you need to set up a virtual CAN network. On Linux, you can do this by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo modprobe vcan\r\nsudo ip link add dev vcan0 type vcan bitrate 500000\r\nsudo ip link set up vcan0\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run the Python Script:\r\nMake sure that your Python environment has the required libraries (",(0,r.jsx)(n.code,{children:"python-uds"})," and ",(0,r.jsx)(n.code,{children:"python-can"}),"). Then, run the script:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 uds_comm_control.py\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Test and Verify:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If everything is set up correctly, the script will send a request to enable communication and will wait for a response from the ECU (simulated here via a CAN bus)."}),"\n",(0,r.jsx)(n.li,{children:"The response will be printed out if it is received within the timeout period."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"testing-the-capl-script",children:"Testing the CAPL Script:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open CANoe or CANalyzer and create a new configuration that includes a CAN bus with the required message IDs."}),"\n",(0,r.jsx)(n.li,{children:"Paste the CAPL Script into the CANoe or CANalyzer scripting environment."}),"\n",(0,r.jsxs)(n.li,{children:["Run the simulation.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The script will trigger when a CAN message with the ID ",(0,r.jsx)(n.code,{children:"0x7DF"})," (UDS request) is received."]}),"\n",(0,r.jsxs)(n.li,{children:["The response will be sent from the ECU (simulated by the script) on CAN ID ",(0,r.jsx)(n.code,{children:"0x7E8"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-conclusion",children:"4. Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"Both Python and CAPL provide robust environments for testing and simulating UDS communication control. These examples show how you can use Python for creating UDS communication requests and handle responses, as well as how you can use CAPL in CANoe or CANalyzer to simulate the ECU's response to communication control requests."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The Python example uses the ",(0,r.jsx)(n.code,{children:"python-can"})," and ",(0,r.jsx)(n.code,{children:"python-uds"})," libraries to send and receive UDS requests over a virtual CAN network."]}),"\n",(0,r.jsx)(n.li,{children:"The CAPL example demonstrates how to implement a simple response in an ECU simulation environment, like CANoe or CANalyzer."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Both implementations help automate and verify the UDS communication control functionality, which is critical for diagnostic and testing environments."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);