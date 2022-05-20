module.exports = {
  title: 'airfire-blog',
  description: '',
  dest: 'public',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: '文档',
        icon: 'reco-message',
        items: [
          {
            text: 'vuepress-reco',
            link: '/docs/theme-reco/'
          }
        ]
      },
      {
        text: '联系我们',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/recoluan',
            icon: 'reco-github'
          }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [''],
      '/docs/life/': ['cooking']
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 2,
        text: 'technology'
      }
    },
    friendLink: [
      {
        title: '联系我',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1874063842@qq.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar:
          'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'liuxu',
    authorAvatar: '/avatar.png',
    record: 'xxxx',
    startYear: '2022'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    // 樱花配置
    [
      'sakura',
      {
        num: 10, // 默认数量
        show: true,
        zIndex: 2,
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: 'https://www.zpzpup.com/assets/image/sakura.png' // 绝对路径
        }
      }
    ]
    // 彩带配置
    // [
    //   'ribbon-animation',
    //   {
    //     size: 90, // 默认数据
    //     opacity: 0.3, //  透明度
    //     zIndex: -1, //  层级
    //     opt: {
    //       // 色带HSL饱和度
    //       colorSaturation: '80%',
    //       // 色带HSL亮度量
    //       colorBrightness: '60%',
    //       // 带状颜色不透明度
    //       colorAlpha: 0.65,
    //       // 在HSL颜色空间中循环显示颜色的速度有多快
    //       colorCycleSpeed: 6,
    //       // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
    //       verticalPosition: 'center',
    //       // 到达屏幕另一侧的速度有多快
    //       horizontalSpeed: 200,
    //       // 在任何给定时间，屏幕上会保留多少条带
    //       ribbonCount: 2,
    //       // 添加笔划以及色带填充颜色
    //       strokeSize: 0,
    //       // 通过页面滚动上的因子垂直移动色带
    //       parallaxAmount: -0.5,
    //       // 随着时间的推移，为每个功能区添加动画效果
    //       animateSections: true
    //     },
    //     ribbonShow: false, //  点击彩带  true显示  false为不显示
    //     ribbonAnimationShow: true // 滑动彩带
    //   }
    // ]
  ]
}
