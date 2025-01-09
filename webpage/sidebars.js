// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  canSidebar: [{type: 'autogenerated', dirName: 'CAN'}],
  linSidebar: [{type: 'autogenerated', dirName: 'LIN'}],
  flexraySidebar: [{type: 'autogenerated', dirName: 'FLEXRAY'}],
  ethernetSidebar: [{type: 'autogenerated', dirName: 'ETHERNET'}],
  doipSidebar: [{type: 'autogenerated', dirName: 'DoIP'}],
  someipSidebar: [{type: 'autogenerated', dirName: 'SOME-IP'}],
  xcpSidebar: [{type: 'autogenerated', dirName: 'XCP'}],
  autosarSidebar: [{type: 'autogenerated', dirName: 'AUTOSAR'}],
  sovaSidebar: [{type: 'autogenerated', dirName: 'SOVA'}],
  sovdSidebar: [{type: 'autogenerated', dirName: 'SOVD'}],
  udsSidebar: [{type: 'autogenerated', dirName: 'UDS'}],
  secocSidebar: [{type: 'autogenerated', dirName: 'SecOC'}],
  glossarySidebar: [{type: 'autogenerated', dirName: 'GLOSSARY'}],
  sourcesSidebar: [{type: 'autogenerated', dirName: 'SOURCES'}],
};

export default sidebars;