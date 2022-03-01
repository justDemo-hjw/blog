---
title: ts基础类型
date: 2021-12-10
tags:
 - TS
categories:
 - 学习
---
### 基础类型写法
```typescript
let num: number = 1
let str: string = 'd'
let empty: null = null
let empty2: undefined = undefined
let boolenn: boolean = true
let bignum: bigint = 999n //不知道是不是
```
### 数组写法
```typescript
let list: number[] = [1, 2, 3]
//数组泛型
let list2: Array<number> = [1,23]
```
### 元组写法
```typescript
let x: [string, number] = ['dsads', 2]
```