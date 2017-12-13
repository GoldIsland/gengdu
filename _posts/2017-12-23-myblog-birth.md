---
layout: post/gengdu
title: 本博客诞生的过程
categories: [github]
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
# 1. 概述

github pages ，就是在github中新建一个repository ,然后按照一定的规则组织一个仓库。
jekyll的作用，就像是模板仓库一样，为你安排文件的位置。还有一些可用的css。

# 2. 例子开始

就我现在来看最快的方法是， 找到一个好的模板，然后fork到自己的名下
https://github.com/GoldIsland/gengdu

通过修改_config.yml
文件，将这个博客占为己有。

我遇到了一个问题：
加载css失败

打开_includes中，会发现有一个header.html文件
<link rel="stylesheet" href="{{ site.url }}/assets/vendor/primer-css/css/primer.css">
这就是加载失败的地方，这个模板的作者，将一些公用的抬头html文件放在了这里。
site.url 就是_config.yml中的url属性。

其他的都是显示性的内容，主要是这个url

好吧，我是参考的码志的博客。饮水思源
http://mazhuang.org/







