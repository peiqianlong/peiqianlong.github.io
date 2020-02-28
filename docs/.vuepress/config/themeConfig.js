const links = require('./links')

module.exports = {
  lang: 'zh-CN', // en zh-CN
  site: 'https://www.baidu.com',
  // logo: '/20171231/logo.png',
  // banner: '/20171231/YgorwbJUDpcQHV5h.png',
  author: 'peiqianlong',
  authorLink: 'qlong.top',
  avatar: 'http://ww1.sinaimg.cn/large/bcbaf152ly1gc6bdn02x6j20u00uqaem.jpg',
  social: {
    github: 'https://github.com/peiqianlong',
    facebook: 'https://www.facebook.com/profile.php?id=100038065722964',
    twitter: 'https://',
    dribbble: 'https://dribbble.com/qianlong-11',
    weibo: 'https://www.weibo.com/3166368082/profile?topnav=1&wvr=6',
    zhihu: 'https://www.zhihu.com/people/123456-91-19-14',
    qq: 'tencent://message/?uin=862896267',
  },
  // ityped: {
  //   typeSpeed: 300,           // 正常速度
  //   backSpeed: 100,           // 反向速度
  //   startDelay: 300,          // 开始延迟（毫秒）
  //   backDelay: 1300,          // 反向延迟（毫秒）
  //   loop: true,               // 循环
  //   showCursor: true,         // 显示指针
  //   placeholder: false,       // 占位
  //   disableBackTyping: false, // 禁用反向输入
  //   cursorChar: '丨',         // 指针字符
  // },
  post: {
    // cover: [
    //   '/20171231/favicon.ico',
    //   'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
    // ],
    // pageSize: 12,
    // pageSizeOptions: ['12', '24', '48', '96'],
  },
  reward: [
    'http://ww1.sinaimg.cn/large/bcbaf152ly1gc0nay63lvj20hk0hi41c.jpg',
    'http://ww1.sinaimg.cn/large/bcbaf152ly1gc0nbahcbcj209i090wgm.jpg',
  ],
  timeline: true,
  links,
  about: true,
  // discuss: 'valine',
  // valine: {
  //   appId: '',
  //   appKey: '',
  //   placeholder: '在这里写下你的留言丨支持 MarkDown 语法',
  //   notify: false,
  //   verify: true,
  //   avatar: 'mp',
  //   pageSize: 8,
  //   recordIP: true,
  //   lang: 'zh-cn',
  // },
  search: {
    type: 'default',
    size: 10,
  },
  // crisp: '',
  // tagSize: 100,
  // baiDu: {
  //   tongJi: '',
  //   autoPush: true,
  // },
  // curtain: {
  //   tip: '页面准备中...',
  //   textShadow: '#e91e63',
  // },
  en: {
    locales: {
      title: 'Stars so bright',
      description: 'Writing life with you',
    },
    navs: [
      {
        text: 'One',
        link: '/one/',
      },
      {
        text: 'Two',
        link: '/two/',
      },
    ],
    nameplate: {
      title: 'Yur'
    },
    buttons: [
      {text: 'Read', link: '/posts/', type: 'primary'},
      {text: 'About', link: '/about.html', type: 'default'},
    ],
    footer: {
      // icon: '/20171231/footer.png',
      one: [
        {
          title: 'peiqianlong',
          subtitle: 'Project',
          link: 'https://github.com/peiqianlong',
        },
      ],
      two: [
        {
          title: 'Hosted On GitHub',
          link: 'https://github.com/peiqianlong',
          type: 'cloud',
          theme: 'filled',
        },
      ],
      three: [
        {
          title: 'Gitter',
          link: 'https://github.com/peiqianlong/my-back-stage-management',
          type: 'message',
          theme: 'outlined',
        },
      ],
    },
  },
  'zh-CN': {
    locales: {
      title: '人间理想 唯有你在',
      description: '万物兴歇皆自然',
    },
    navs: [
      {text: '编程技术', link: '/program/'},
      {text: '生活兴趣', link: '/life/'},
      {text: '软件工具', link: '/tool/'},
      {text: '其它', link: '/other/'},
    ],
    nameplate: {
      title: 'Long',
    },
    buttons: [
      {text: '阅读列表', link: '/posts/', type: 'primary'},
      {text: '了解作者', link: '/about.html', type: 'default'},
    ],
    footer: {
      one: [
        {
          title: '博客关联',
          subtitle: '862896267',
          link: 'https://github.com/peiqianlong/vue-P',
        },
      ],
      two: [
        {
          title: '本站托管于 GitHub',
          link: 'https://github.com/peiqianlong/vue-P',
          type: 'cloud',
          theme: 'filled',
        },
        {
          title: '粤 ICP 备 15709242457 号 - 000',
          link: 'https://github.com/peiqianlong/vue-P',
          type: 'flag',
          theme: 'filled',
        },
      ],
      three: [
        {
          title: '吐个槽',
          link: 'https://github.com/peiqianlong',
          type: 'message',
          theme: 'outlined',
        },
        {
          title: '社区交流扣扣：862896267',
          link: 'https://github.com/peiqianlong',
          type: 'qq',
          theme: 'outlined',
        },
      ],
    },
  },
}
