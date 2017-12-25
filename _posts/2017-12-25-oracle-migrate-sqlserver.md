---
layout: post
title: Oracle数据库迁移到Sqlserver数据库
categories: [技术, 数据库]
description: some word here
keywords: oracle, Sql server
---
谷歌搜索关键字： 将Oracle数据库迁移到Sqlserver数据库
#### 事后诸葛亮：
1. 在谷歌搜索的时候，先用最详细的需求来搜索；如果找不到相应的结果，再分解出关键字重新搜索
	
	这样很有可能直接就能找到你想都要的。
	如果你用百度，我无话可说，找到你想要的你会花上成倍的时间，最后的结果还有可能是没找到。

这篇博文是在我重装了无数次sqlserver，oracle后写出来的，就是为了解决这个问题，你们一定要庆幸了，我为你们节省了这么多时间。
废话不多说，开始。

祭出神器： SQL ServerMigration Assistant ssma（SQL SERVER迁移助手） [下载说明列表](https://docs.microsoft.com/zh-cn/sql/ssma/oracle/installing-ssma-for-oracle-oracletosql) [下载](https://www.microsoft.com/en-us/download/details.aspx?id=54258)， [使用教程](https://docs.microsoft.com/zh-cn/sql/ssma/oracle/migrating-oracle-databases-to-sql-server-oracletosql)

由于微软的教程比较详细，我只说明要注意的点，如图1所示。
1. 注意每次打开工程都需要重新连接数据库，并且选择oracle中要迁移的数据库
2. 将oracle中的schemas 映射为 sqlserver中的dbo
3. 由于oracle中的数据类型不一定存在于sqlserver中，所以要配置这些类型需要转化为哪种sqlserver类型

<div align="center"><img width="192px" height="192px" src="https://goldisland.github.io/gengdu/assets/images/tech/oracle-sqlserver.png"/></div>
![](/images/tech/oracle-sqlserver.png)

按照步骤
1. connect to oracle ， connect to sql server
2. Covert schema
3. Migrate Data 即可

有问题可以问我，态度要好撒







