import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // [Basic]
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: '谢威的博客',
  /** Will be used in index page & copyright declaration */
  author: '谢威',
  /** Description metadata for your website. Can be used in page metadata. */
  description: '记录学习和思考的博客，希望能写出有意思的东西',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon.ico',
  /** The default social card image for your site which should be a path to an image in the `public/` directory. */
  socialCard: '/images/social-card.png',
  /** Specify the default language for this site. */
  locale: {
    lang: 'zh-CN',
    attrs: 'zh_CN',
    // Date locale
    dateLocale: 'zh-CN',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: '/src/assets/avatar.jpg',
    alt: '谢威的头像'
  },

  titleDelimiter: '•',
  prerender: true, // pagefind search is not supported with prerendering disabled
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // Still in test
  head: [],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: '博客', link: '/blog' },
      { title: '文档', link: '/docs' },
      { title: '项目', link: '/projects' },
      { title: '友链', link: '/links' },
      { title: '关于', link: '/about' }
    ]
  },

  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© ${new Date().getFullYear()}`,
    // year: `© 2019 - ${new Date().getFullYear()}`,
    links: [
      // Privacy Policy link
      {
        title: '站点政策',
        link: '/terms',
        pos: 2 // position set to 2 will be appended to copyright line
      }
    ],
    /** Enable displaying a “Astro & Pure theme powered” link in your site’s footer. */
    credits: false,
    /** Optional details about the social media accounts for this site. */
    social: [
      { icon: 'github', label: 'GitHub', href: 'https://github.com/history-turing' },
      { icon: 'rss', label: 'RSS', href: '/rss.xml' }
    ]
  },

  // [Content]
  content: {
    /** External links configuration */
    externalLinks: {
      content: ' ↗',
      /** Properties for the external links element */
      properties: { style: 'user-select:none' }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    /** Share buttons to show */
    // Currently support weibo, x, bluesky
    share: ['weibo', 'x', 'bluesky']
    /** Enable image captions (default false) */
    // imageCaption: true
  }
}

export const integ: IntegrationUserConfig = {
  // [Links]
  // https://astro-pure.js.org/docs/integrations/links
  links: {
    // Friend logbook
    logbook: [],
    // Yourself link info
    applyTip: [
      { name: '名称', val: theme.title },
      { name: '简介', val: theme.description || '记录学习和思考' },
      { name: '网址', val: 'https://history-turing.github.io/' },
      { name: '头像', val: 'https://history-turing.github.io/favicon/favicon-32x32.png' }
    ],
    // Cache avatars in `public/avatars/` to improve user experience.
    cacheAvatar: false
  },
  // [Search]
  pagefind: true,
  // Add a random quote to the footer (default on homepage footer)
  // See: https://astro-pure.js.org/docs/integrations/advanced#web-content-render
  // [Quote]
  quote: {
    // - Hitokoto
    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80
    // server: 'https://v1.hitokoto.cn/?c=i',
    // target: `(data) => (data.hitokoto || 'Error')`
    // - Quotable
    // https://github.com/lukePeavey/quotable
    // server: 'http://api.quotable.io/quotes/random?maxLength=60',
    // target: `(data) => data[0].content || 'Error'`
    // - Hitokoto
    server: 'https://v1.hitokoto.cn/?c=i&encode=json',
    target: `(data) => data.hitokoto || '保持好奇，持续学习。'`
  },
  // [Typography]
  // https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base',
    // The style of blockquote font `normal` / `italic` (default to italic in typography)
    blockquoteStyle: 'italic',
    // The style of inline code block `code` / `modern` (default to code in typography)
    inlineCodeBlockStyle: 'modern'
  },
  // [Lightbox]
  // A lightbox library that can add zoom effect
  // https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: true, // disable it will not load the whole library
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // Comment system
  waline: {
    // 暂时关闭，接入自己的 Waline 服务后再改为 true 并填写 server。
    enable: false,
    server: '',
    // Show meta info for comments
    showMeta: false,
    // Refer https://waline.js.org/en/guide/features/emoji.html
    emoji: ['bmoji', 'weibo'],
    // Refer https://waline.js.org/en/reference/client/props.html
    additionalConfigs: {
      // search: false,
      locale: {
        nick: '昵称',
        mail: '邮箱',
        login: '登录（可选）',
        placeholder: '说点什么吧……（填写邮箱可接收回复）',
        reaction0: '喜欢'
      }
    }
  }
}

export const terms: CardListData = {
  title: '站点政策',
  list: [
    {
      title: '隐私政策',
      link: '/terms/privacy-policy'
    },
    {
      title: '使用条款',
      link: '/terms/terms-and-conditions'
    },
    {
      title: '版权声明',
      link: '/terms/copyright'
    },
    {
      title: '免责声明',
      link: '/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config
