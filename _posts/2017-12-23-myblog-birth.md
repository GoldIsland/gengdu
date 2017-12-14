---
layout: post
title: 本博客诞生的过程
categories: [blogs]
description: github pages, jekyll
keywords: jekyll demo
---

一直想有一个个人的博客，但是搭建自己的网站要维护域名之类的，就一直没有开始。
今天工作做完了就开始了这部分工作。

首先，用google找了一下，无意间发现github pages 提供了自定义博客的功能，就试着选择了困难模式，没想到直接就用来一天的时间来完成。
而且，目前来看，还是有些缺陷的。

参考了这位仁兄
http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html

我只写实现的过程
# 一. 概述

github pages ，就是在github中新建一个repository ,然后按照一定的规则组织一个仓库。
jekyll的作用，就像是模板仓库一样，为你安排文件的位置。还有一些可用的css。

# 二. 例子开始

就我现在来看最快的方法是， 找到一个好的模板，然后fork到自己的名下
https://github.com/GoldIsland/gengdu

通过修改_config.yml
文件，将这个博客占为己有。

# 三．维护博客用到的sit指令
1. git add . ;git commit -m "little modify"; git push;


# 四. 遇到的问题
1. 加载css失败
打开_includes中，会发现有一个header.html文件
```  <link rel="stylesheet" href="{{ site.url }}/assets/vendor/primer-css/css/primer.css"> ```
这就是加载失败的地方，这个模板的作者，将一些公用的抬头html文件放在了这里。
site.url 就是_config.yml中的url属性。
其他的都是显示性的内容，主要是这个url
2. 博客地址点击跳转失败
https://github.com/mzlogin/mzlogin.github.io/issues/48
这个我给原作者-马壮提了一个issue， 没想到他很快就回复了，对博客模板做了一些修改。
针对这些修改，我也看到了jekyll的一些使用方法，我决定剩下的问题，先留着，然后自己来修改。
这点我要说一下， 可以在网上跟大神交流的感觉特别的好，我写博客的初衷也是可以和别人进行交互。
把自己会的教给别人，别人在应用的时候遇到的问题反馈给我，这样来完善。
3. 首页跳转失败，分类跳转失败
首页在_config.yml中定义```navs:```, 在header.html中末尾可以找到, 需要在{{ nav.href }}的位置前面,加上{{site.url}}
这样,首页/分类/维基等都会加上相关的url,就可以正常跳转了.
4. 未增加comments内容

好吧，我是参考的马壮的博客。饮水思源
http://mazhuang.org/







