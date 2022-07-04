---
title: jest框架学习
date: 2022-06-23
tags:
 - 年度计划
categories:
 - 计划
---


## jest esm 问题
- node支持esm，通过package.json设置type=module开启，然后在test命令输入NODE_OPTIONS=--experimental-vm-modules jest
- babel方式解决