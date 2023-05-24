/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorial: [
    'tutorial/intro',
    'tutorial/macos',
    'tutorial/windows',
    'tutorial/ios',
    'tutorial/android',    
    {
      // label: 'Docusaurus',
      // type: 'category',
      // link: {
      //   type: 'doc',
      //   id: 'blog/Docusaurus/Docusaurus-guides'
      // },
      // items: [

      // ],
    }, 
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/wappalyzer-recognize-technology',
    'tools/windows-custom-right-click-menu',
    'tools/vscode-config',
    'tools/idea-config',
    'tools/vite-plugin',
    'tools/jetbrains-product-activation-method',
  ]  
}

module.exports = sidebars
