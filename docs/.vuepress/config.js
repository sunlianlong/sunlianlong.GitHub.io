module.exports = {
  "title": "Sun",
  "description": "个人博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    valineConfig: {
      // appId: 'dXJfrib0qz0Uko6XtINWCJgL-gzGzoHsz',// your appId
      // appKey: 'K2PTbGifnRu9UKGSeTjnhhIi', // your appKey
      placeholder: '请填写邮箱，可收到回复的提醒。'
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            text: "关于", link: "/about/"
          },
          // {
          //   text: "RSS订阅", link: "https://codingyang.com/rss.xml", icon: 'reco-rss'
          // },
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "类别"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   },
    //   {
    //     "title": "邪少",
    //     "desc": "前端技术",
    //     "link": "//itwmw.com"
    //   },
    // ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "更新于",
    "author": "Sun",
    "authorAvatar": "/logo.png",
    "record": "粤ICP备16092199号-3",
    "recordLink": "http://beian.miit.gov.cn",
    "startYear": "2016",
    "repo": 'sunlianlong/sunlianlong.github.io',
    // // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    docsBranch: 'blog',
    // editLinks: true,
    // editLinkText: '参与编辑此文章',
  },
  "markdown": {
    "lineNumbers": true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@pic': 'docs/pic'
      }
    }
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
      welcome: '欢迎来到 Sun 的博客',
      home: '心里的花，我想要带你回家。',
      theme: '好吧，希望你能喜欢我的其他小伙伴。',
      close: '你知道我喜欢吃什么吗？痴痴地望着你。'
    }]
    // ['@vuepress-reco/vuepress-plugin-rss', {
    //   site_url: 'https://sunlianlong.com',
    //   copyright: 'sunlianlong'
    // }],
  ]
}