---
title: CSS animations 和 transitions的性能问题
postTime: 2021-04-07
categories: 
- 前端笔记
- CSS 部分
tags:
- CSS动画
- 浏览器原理
- 优化
---

::: slot abstract

在编写以内容为主的网页时，经常会有给标题增加序号的需求，若是人工的一个一个去加的话，标题少还好说，标题一多（几十个几百个）维护起来就会十分痛苦，可能改了其中一个序号导致后续的所有序号都要更改，并且在添加序号时很容易出错

对于这类问题有一个很好的解决方案：CSS支持对序号的状态管理，结合使用 `counter` 、 `counter-reset` 、 `counter-increment` 属性即可实现序号的自增，具体如何使用请看下文

> 仅限本文，使用了counter来为每个标题添加序号

:::

## 浏览器内部

现代浏览器内部一般会有两个重要的执行线程：**主线程**，**合成线程**

通过 height 设置动画

![animate-height](https://segmentfault.com/img/bVDc96?w=958&h=1479)



通过 transform 设置动画

![transform](https://segmentfault.com/img/bVDda8?w=958&h=1209)
