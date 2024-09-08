/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorial: [
    'useful-records/intro',
    {
      label: 'Clash 相关',
      type: 'category',
      link: {
        type: 'doc',
        id: 'useful-records/clash/overview'
      },
      items: [
        'useful-records/clash/introduction',        
        'useful-records/clash/setting-up-clash-front-end-dashboard',
      ],
      collapsed: false,
    },
    {
      label: 'Docker 相关',
      type: 'category',
      link: {
        type: 'doc',
        id: 'useful-records/docker/introduction'
      },
      items: [
        'useful-records/docker/nginx-proxy-managor',
        'useful-records/docker/redirect-docker',
      ],
      collapsed: false,
    },
    'useful-records/djsk',
    'useful-records/gmail-api',
    'useful-records/multi-ssh',
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
  ],
  stack: [
    'stack/introduction',
  ],
  ai: [
    'ai/scripts-by-gpt',
    'ai/auto-batch-link-connectivity-tester',
    'ai/how-to-transfer-chatgpt-api-service',
    {
      label: 'MetaGPT 教程',
      type: 'category',
      link: {
        type: 'doc',
        id: 'ai/metagpt/introduction'
      },
      items: [
        'ai/metagpt/start',
        'ai/metagpt/install',
      ],
      collapsed: false,
    },    
  ],
  finance: [
    'finance/hsbc-account',
    'finance/stock-account',
    'finance/before-go-to-hk',
  ],
  ecommerce: [
    'ecommerce/facebook',
  ],
  microsoft: [
    'microsoft/introduction',
    'microsoft/e3-msdn-setting',
    'microsoft/onemanagor',
  ],
  docusaurus: [
    'docusaurus/introduction',
    'docusaurus/alert-block',
  ],
  apple: [
    'apple/register-apple-id',
    'apple/pay-service',
  ],
  radio: [
    'radio/the-benefits-of-carrots',
    'radio/the-battle-between-human-and-heat',
    'radio/the-creator-of-air-conditioner',
    'radio/dayun-stadium',
    'radio/how-to-make-atomic-bomb',
  ],

}

module.exports = sidebars
