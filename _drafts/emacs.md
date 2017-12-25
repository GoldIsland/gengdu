---
layout: post
title: template page
categories: [工作]
description: 开发功能的规范文档
keywords: 工作
---

C-x C-c 	退出Emacs
C-g			退出正在运行的命令

C-v			向前移动一屏
M-v			向后移动一屏
C-l			重绘屏幕，并将光标置于屏幕中央

	C-p
C-b		C-f
	C-n

previous/next/backward/forward
scrolling

M-b 	M-f

Meta 系列组合键用来操作 由语言定义的单位（词/句子/段落）
Control 用来操作 与语言无关的基本单位（字符/行等等）

C-a 句首 C-e句尾
M-a 段首 M-e段尾
ahead end

光标 点位

M-<		所有文字的最开头
M->		所有文字的最末尾

大部分的Emacs命令接受数字参数
C-u 输入数字参数，C-f
C-v M-v 向下滚动8行 并不是8屏

有一些Emacs命令被禁用，在询问之后，才会执行

Emacs 可以有多个窗格
C-x 1 只保留一个窗格

C-h k C-f 查询C-f的帮助文档

C-x的许多命令都是与 窗格/文件/缓冲区有关的

转行符号 \

C-u 8 *	 	输入8个*

<del>	删除光标前的一个字符
C-d		删除光标后的一个字符

M-<del> 删除光标前的一个词
M-d     删除光标后的一个词

C-k		移除从光标到“行尾”间的字符
M-k		移除从光标到“句尾”间的字符

delete 和kill（移除）

首先将光标移到移除区域的一段 ， C-<SPC> 或者C-@ 然后将
将光标移到另一段， C-w就可以删除
Mark set

移除和删除的区别在于被移除的东西可以被重新插入（在任何位置）
。重新插入被移除的文字成为召回“yank”

单独的一次C-k会移除内容，第二个C-k会移除换行符
C-k 加参数，会直接移除n行

C-y 召回文字

M-y 召回前几次的移除， M-y是一个环

C-/ 撤销， 改了一段文字可以撤销， 执行了一次命令也可以撤销，多次使用会把以前的命令也撤销了

C-_也是撤销命令， C-x u 也是撤销命令

文件
C-x C-f 寻找一个文件

你输入的文件名会出现在
C_x C_S 存储这个文件
通常会重命名一个文件 ～
关掉文件备份： M-x customize-variable <Return> make-backup-files <Return>

在保存的时候 Emacs才会真正的创建一个文件。

Emacs把 每个编辑中的文件都放在一个成为 “缓存区”