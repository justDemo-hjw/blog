---
title: react文档阅读笔记
date: 2021-07-12
tags:
 - React
categories:
 - 框架
---
# 核心概念
## JSX简介
1. 类似html的一段代码，可以生成react元素（构成react的最小砖块），支持写入js逻辑
2. jsx属性命名使用驼峰
3. jsx防止xss攻击，在渲染输入内容之前，会默认进行转译
```
& becomes &amp;
< becomes &lt;
> becomes &gt;
" becomes &quot;
' becomes &#39;
```
4. jsx表示对象，Babel会把jsx转译成react.creatElement()函数调用
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
创建结果
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```
## state和生命周期
1. setState可能会多个延迟调用（同步执行，异步调用），类似于nextTick
```
setState((state, props) => {
  这里的state可以确保拿到上一次setState的值，以及本次setState时的props
}, ()=>{
  这里确保setState结束了
})
```
2. 数据流自上而下，单向流动：状态维护在组件内部，不会被其他组件访问，不会影响上层，只可能作用到下层，通过props传递