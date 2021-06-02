/*
 * @Date: 2021-04-08 04:46:52
 * @LastEditors: hanjiawang
 * @LastEditTime: 2021-06-02 18:02:18
*/
module.exports = {
  "title": "虚心",
  "description": "用心总结，逐渐完善知识体系图",
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
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Github",
        "icon": "reco-github",
        "link": "https://github.com/justDemo-hjw/"
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "subSidebar": 'auto',
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco(本博客主题)",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    // "searchMaxSuggestions": 10,
    // "lastUpdated": "Last Updated",
    "author": "justDemo",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2021"
  },
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  },
  "markdown": {
    "lineNumbers": true
  }
}