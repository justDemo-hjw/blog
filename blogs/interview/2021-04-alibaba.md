---
title: 21年四月面经最终进入阿里
date: 2021-06-01
tags:
 - 面经
categories:
 - 面试
---
::: tip
20年6月普通二本毕业，毕业时的想法是和女朋友找一个二三线城市拿着普通的工资在父母的帮助下买房买车然后过幸福的生活，因为我对生活的向往所以即使我的同学和实习的同事都去了北京我也没有任何动摇，和女朋友来了南方选择了惠州；但是这不到一年的经历让我。。。我理想中的生活和现实差距不小，而且我总是觉得少了一些奋斗的激情，并且也很害怕丢失掉竞争力，最主要的一点就是或许父母可以帮我首付，可我tm这点薪资月供都不够；好在在这份焦虑下我一直有在提升自己，再加上朋友跳槽的薪资刺激到我，而且女朋友的鼓励和支持更让我没有了后顾之忧，于是就有了这一个半月的面试经历和这份面经；
:::
> 下面我就分公司来写一下面试题，由于比较多我就不贴答案了，而且面试题也都比较简单，希望能帮助到大家回味巩固一下知识点；这是我在掘金发出的第一篇文章，做的不好的地方希望大家帮我提提意见～
## 北京某国企
面北京这家是我的哥们内推的，因为这家待遇特别好哈哈，不过后来因为女朋友适应不了北方气候不去北京就放弃了二面；
1. vue3.0的新特性
2. vue中响应式原理
3. es6用法
4. promise常用api
5. 怎么让浏览器不走缓存
## 滴滴
滴滴投了两个组面了四次，非常感谢滴滴帮助我找到了很多缺点，好好总结了以后对我后面的面试起了很大帮助；这里也想告诉大家遇到自己表现不好甚至很差不要气馁，好好总结就好啦，兴许你也是差了一些运气～    
### 橙心优选组
#### 一面
1. 介绍下近期项目
2. 介绍一下浏览器的缓存
3. vue双向绑定原理
4. promise的作用
5. 一道事件循环的题，包含async
6. es6用过哪些
7. 你说到强引用和弱引用对垃圾回收的影响，介绍一下js的垃圾回收
8. 深拷贝，JSON.parse(JSON.stringify())的缺陷，手写深拷贝解决这些缺陷
9. apply、call、bind的区别，实现一个apply
10. 浏览器从输入URL到渲染发生了什么；这个问题我觉得很多面试官喜欢问，尤其是大厂
11. TCP三次握手过程中有什么攻击方式，第几次握手可以携带数据，为什么第二次不能懈怠
12. TLS握手过程，了解哪种非对称加密算法，对称加密呢
13. 深拷贝，JSON.parse(JSON.stringify())的缺陷，手写深拷贝解决这些缺陷
14. 上面这些大概聊了一个半小时，面试官说没时间考我算法了哈哈，说实话考了算法可能我就没机会二面了；一面面试官特别好，很温柔的引导你去回答，你说到有问题的点会提醒你面试完看看，很感动哈哈；问题都很简单，应该是在照顾我刚毕业不到一年；
#### 二面（挂了）
1. 介绍项目的亮点
2. 如果这个项目让你重新设计你怎么做
3. JS实现超大数字符串相加
4. JS实现正则转换日期格式
5. JS实现深拷贝
6. 实现圣杯布局的三种方式
7. 实现一个CSS3动画效果
8. vue怎么实现自定义指令
9. vue中新建一个标签，怎么从其他vue实例中获取到这个标签的文字
10. webpack原理
11. 砖头的作用是什么
12. 让我认识到了自己编码能力有些问题，然后对css的理解不太够；对我打击挺大的，因为滴滴现在技术面只有两面，我还请了一天假来准备了很多网络和算法，性能优化等等，结果当场挂了哈哈哈哈哈；加油吧～
### 网约车组
#### 一面
1. 介绍下项目中有成就感的点
2. better-scroll的坑
3. 移动端适配怎么做
4. 一道题：寻找对象的深层属性
5. webpack的loader原理，以及链式执行的原理
6. 平时通过什么渠道学习
#### 二面（挂了）
面试官看我比较紧张先和我聊了聊天，比如Base地的选择，有没有别的offer之类的，后面就是自我介绍环节；总的来说面试官很好，给了我很多个人发展的建议，我觉得能遇到这样的面试官真的是很好的运气
1. 介绍项目中有成就感的点
2. 团队如何协作和分工
3. 项目新需求上线流程
4. 常用elementUI？试着实现一个table组件，不用考虑排序什么的，实现一下怎么渲染表格
5. vuex和vue-router原理
6. 圣杯布局如何实现（假设左右为200px，中间自适应）？
7. flex常用属性
8. 浮动布局实现时为什么中间div要放在左右div后面
9. 什么是BFC
10. position各个属性以及含义
11. 假设一个盒子position值为absolute，left和right值都为0，设置width属性，这个盒子是怎样的位置和宽度？
12. 假设一个盒子position值为absolute，不设置定位，他在文档流中是什么样子的
13. ES6中有哪些新特性
14. 强引用和弱引用，为什么影响垃圾回收，强引用的情况下就不能垃圾回收了吗
15. ES6怎么转ES5，babel原理
16. 事件委托的应用
17. JSONP原理，除了script标签还有什么标签能使用JSONP
18. 同源策略是怎样的，a.baidu.com和b.baidu.com是同源的吗
19. 队列和栈的区别，用栈实现队列
## 明源云
面了一个多小时，是我面试10家公司中要求最高的
1. HTML5新特性
2. 语义化标签有哪些
3. CSS3的新特性有哪些
4. BFC是什么
5. 介绍flex布局
6. ES6新特性
7. ES6中对象新增的API
8. 对事件流的了解
9. 对性能优化的了解
10. vue中extend、extends、mixin、mixins区别
11. vue响应式原理
12. vue nextick原理
13. vue异步渲染原理
14. 对设计模式了解哪些
15. 公司对代码质量如何规范，发布流程是怎样的
16. 对webpack的了解
17. 如何学习
18. 谈谈项目中你的角色，你的贡献是什么
一面面的最累的一次，从基础到框架原理，从性能优化到设计模式，从工程化到项目基本什么都问了～

## 富途
跟面试官聊的挺开心的，但是一面挂了哈哈哈，不要脸的去问了评价说是算法不行，这确实是我的弱点，以后一定加强～
1. vue组件传值
2. 实现一个简单的eventBus
3. 两个有序数组判断小数组是不是大数组子集
4. 25匹马5条赛道几次可以找出前三名
5. 前端如何做性能优化
6. web安全方面，了解过哪些攻击，如何防御
还有一些回答的还可以的问题记不起来了呜呜，我就记得面完以后很自信的等二面通知，结果一星期都没有消息就不要脸的去问面试官的评价哈哈，后来我再也不敢这么自信了
## 极光
### 一面
和一面面试官聊的很开心，后面零零散散问了很多问题暂时只想到了这么多哈哈，感觉有一种技术讨论的感觉，收获颇丰
1. ReactNative等跨端框架原理
2. Vue双向绑定原理
3. React和Vue区别
4. React单向数据流
5. Vue异步渲染原理
6. Vue3相关
7. Promise常见API、Promise缺陷
8. ES6特性
9. 获取链表的倒数第三个元素
10. 快速排序
11. 事件循环，node中的事件循环和浏览器的区别
12. 打包时的html怎样设置不走缓存
13. 为什么离职
### 二面
二面是直属领导面的，由于老大是后端，所以没问什么前端的知识
1. 介绍一下项目
2. 公司代码发布流程
3. 团队如何协作
4. 需求如何上线
5. CI/CD流程
6. 字符串算数式计算，比如入参是"1+3*4-6"，返回计算结果
7. 如何做性能优化
8. 对Angular和React以及ECharts的了解
9. 平时如何学习
10. 最快入职时间
### 三面技术VP面
1. 对后端了解多少
2. 数据库表设计过吗
3. 谈谈http和https区别，对加密算法的了解
4. 谈谈http2有什么改进
5. 谈谈项目的难点，团队中承担了什么角色
6. 平时如何学习，会看什么书？
感觉VP很忙，大概面了20分钟左右就结束了让我等结果；
### HR面
聊了聊职业规划和离职原因，还有对上家公司的贡献。然后就是谈待遇发offer～拿到offer以后我把一些其他公司（面试题没有写出来）的流程拒绝掉了并且提了离职～
## 阿里
阿里说实话我非常紧张，记得在大三那会儿投过一次淘宝实习，被虐的特别惨哈哈，不知道为什么这次又有胆量投阿里，一面是四月底面的，内推我的同学说通过了，二面估计要五一后约了吧，加油～
### 一面
1. 介绍项目
2. 一个场景：（因为我谈到有将频繁调用数据却几乎不改变的接口在登录时缓存在localStorage）你在登录时缓存的接口数据如果后端的数据出错了呢，以前的场景用户刷新浏览器可能可以解决，现在怎么办？
3. 为什么第一次登录以后再次打开网页不用重新登录了
4. localStorage和sessionStorage的存储上限和生命周期
5. 你的优势是什么
6. 日常如何学习
7. 从浏览器输入url到渲染发生了什么
8. 第7题的答案对工作有什么帮助
9. 电话面试结束了，发来了一个笔试的链接
10. 笔试第一题是实现一个flex布局，类似于新闻的简介那样的文字环绕效果；
11. 笔试的第二题是实现一个promise的并发控制器，能够控制并发执行的数量
# 写在最后
这一个半月在职找工作的经历对自己提升很大，不仅是技术，心里承受能力也是重重磨练哈哈哈；感谢每一个面试官给我的面试机会，让我认识到了自己的不足，我一般的学习途径都是技术博客和极客时间，构建的知识体系有些凌乱，大多是一些点，还没有连成线和图，要注重计算机网络、操作系统数据结构算法这些计算机基础，还有前端的基础，牢牢掌握这些东西才能应变瞬息变化的前端技术。一起共勉吧！接下来我打算通过书来构建知识体系，短期目标是刷一下JS红宝书，同时深入学习React要换框架喽～