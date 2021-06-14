---
title: 学习react过程遇到的问题
date: 2021-06-12
tags:
 - React
categories:
 - 框架
---
## React
### this绑定问题
 react中事件绑定是直接执行事件，不是this.事件，和vue中this.事件不同；这就会导致react中事件绑定如果用下面的方法会导致this丢失，this会指向undefined，因为在直接调用方法的时候，方法中this指向window，而在严格模式下指向undefined，在类中默认是严格模式；
 ```
 class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleClick() {
    console.log(this) //undefined
  }
  render() {
    return(
      <div>
        {users.map(item => {
          return(
            <div key={item.username} onClick={this.handleClick}>
              {item.username}
            </div>
          )
        })}
      </div>
    )
  }
}
// 三种方法解决
1. public class fields语法
handleClick() => {}
2. bind this.handleClick = this.handleClick.bind(this)
3. 箭头函数（this继承父作用域this）
 ```