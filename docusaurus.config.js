const path = require('path')
const math = require('remark-math');
const katex = require('rehype-katex');
const announcementBarContent = `🎉 欢迎来到道孚站！ <a href="https://wsyfin.com">  </a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '道孚站',
  titleDelimiter: '-',
  url: 'https://wsyfin.com',//请填写你的网站
  baseUrl: '/',//建议填写/
  favicon: 'https://pan.wsyfin.com/f/BB1T8/modified-white-new.ico',
  organizationName: '',
  projectName: 'dolf-vew',
  tagline: '道孚站',
  onBrokenLinks: 'ignore',  //忽略坏链
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'https://pan.wsyfin.com/f/BB1T8/modified-white-new.ico',
    announcementBar: {
       id: 'announcementBar-3',
      content: announcementBarContent,
     },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      showLinenums: true,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'docusaurus-theme-zen',
      },
      {
        name: 'keywords',
        content: 'blog,javascript, nginx,, react, vue, web',
      },
      {
        name: 'keywords',
        content: '程序 · 观点 · 搞钱',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: '道孚站',
      logo: {
        alt: 'Dolf',
        src: 'https://pan.wsyfin.com/f/BB1T8/modified-white-new.ico',
        srcDark: 'https://pan.wsyfin.com/f/BB1T8/modified-white-new.ico',//记得加上绝对路径/
      },
      hideOnScroll: false,
      items: [
        {
          label: '干货记录',
          position: 'left',
          items: [
            {
              label: '技术相关',
              to: 'docs/useful-records/',
            },
            {
              label: '实用工具',
              to: 'docs/tools/',
            },
            {
              label: 'AI 探索',
              to: 'docs/ai/',
            },
            {
              label: '金融相关',
              to: 'docs/finance/',
            },
            {
              label: '微软 365',
              to: 'docs/microsoft/',
            },
            {
              label: 'Docusaurus',
              to: 'docs/docusaurus/',
            },            
          ],
        },
        {
          label: '博客',
          position: 'left',
          items: [
            {
              label: '所有文章',
              to: 'tags',
            },
            {
              label: '时间线',
              to: 'archive',
            },
          ],
        },        
        {
          label: '推荐站点',
          position: 'left',
          to: 'resource',
        },
        {
          label: '项目展示',
          position: 'left',
          to: 'project',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '博客',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },

          ],
        },
        {
          title: '常用文档',
          items: [
            {
              label: 'macOS',
              to: 'docs/stack',
            },
            {
              label: 'Windows',
              to: 'project',
            },          
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wrm244/docusaurus-theme-zen',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '推荐站点',
              to: 'friends',
            },
            {
              label: '导航',
              to: 'resource',
            },
            {
              html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img alt="Built with Docusaurus" style="height:50px;margin-top:0.5rem" src="https://pan.createvoyage.com/f/KEf4/buildwith.png" /></a>`,
            },
          ],
        },
      ],
      copyright: `版权所有 © ${new Date().getFullYear()} 道孚站, 此网站主题基于 <a href="https://github.com/wrm244/docusaurus-theme-zen" target="_blank">Theme-zen</a>  搭建。
      <span id="runtime_span"></span>
      <script type="text/javascript">function show_runtime(){window.setTimeout("show_runtime()",1000);X=new 
      Date("10/16/2022 8:22:00");
      Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;
      a=T/M;A=Math.floor(a);b=(a-A)*24;B=Math.floor(b);c=(b-B)*60;C=Math.floor((b-B)*60);D=Math.floor((c-C)*60);
      runtime_span.innerHTML="<br>本站已运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"}show_runtime();</script>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    // algolia: { algolia 评论插件需要安装
    //   appId: 'S4K9Vx4X',
    //   apiKey: '3bf796bbbc1561253bcb25dafc',
    //   indexName: 'wikiblog',
    // },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: '#eef9fd',
        dark: 'rgb(50, 50, 50)',
      },
      config: {
        magin: 10,
        scrollOffset: 0,
      },
    },
    giscus: {
      repo: 'wrm244/docusaurus-theme-zen',
      repoId: 'R_kgDOJZ-VIA',
      category: 'General',
      categoryId: 'DIC_kwDOJZ-VIM4CV95r',
      loading: "lazy",
      lang: "zh-CN",
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {//需要修改
      github: 'https://github.com/',
      twitter: 'https://twitter.com/',
      csdn: 'https://blog.csdn.net/',
      juejin: 'https://juejin.cn/',
      qq: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=xxxxxxxx&website=www.oicqzone.com',
      zhihu: 'https://www.zhihu.com/',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'docusaurus-theme-zen',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-GCMVDTECQR',
          anonymizeIP: true,
        },        
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    // 'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/KimSunDolf/dolfview/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: 'docusaurus-theme-zen',
        blogSidebarCount: 10,
        blogSidebarTitle: '点击标题进行阅读阅读 🔽',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'docusaurus-theme-zen',
          copyright: `Copyright © ${new Date().getFullYear()} your name Built with Docusaurus. class="footer_lin">`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'assets/images/social/avatar.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {

            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [
    {
    href: 'https://jsd.onmicrosoft.cn/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  },],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      zh: {
        htmlLang: 'zh-CN',
      },
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  themes: [
    // ... Your other themes.
    // [
    //   require.resolve("@easyops-cn/docusaurus-search-local"),
    //   /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
    //   ({
    //     // `hashed` is recommended as long-term-cache of index file is possible.
    //     hashed: true,
    //     language: ["en", "zh"],
    //     indexBlog: true,
    //     indexPages: true,
    //     indexDocs: true,
    //   }),
    // ],
  ],
}

module.exports = config
