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

### diff算法
react中diff算法的时间复杂度是O(n)，有以下三个特点
1. 只对比同级元素
2. 若两元素类型不同则直接删除老节点及它的子节点，替换为新vm节点
3. 通过key标明列表中哪些元素是相同的
- 为什么要用key
  - 在列表对比中如果从后面插入元素react在遍历过程中可以判断出是新增，但若是从头部插入元素则后面元素对比都会不同，导致相同的节点也会重新更新
  - 选取key的规则，不一定要全局唯一，但要列表中唯一
- 为什么不能用index作为key
  - key值不稳定，列表新增时index会变动，导致标记的不是之前的元素