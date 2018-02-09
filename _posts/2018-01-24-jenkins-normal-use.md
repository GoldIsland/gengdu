---
layout: post
title: jenkins、ant、svn、eclipse实现自动编译和自动部署
categories: [技术, jenkins]
description: jenkins实现
keywords: jenkins，ant，svn，eclipse
---

### 一、 前期准备

	apache-ant-1.9.0-bin.zip
	apache-tomcat-7.0.73.zip
	jenkins-2.89.3.zip
		windows安装版，直接安装之后，会在本机注册一个jenkins的服务；
		同时自动访问： localhost:8080
		如果想要改端口，直接将jenkins根目录中的jenkins.xml的端口改掉即可
		我用的是9090，以免和tomcat的重复。
		另外，jenkins和tomcat的服务器的开启和关闭是不关联的。
	build.xml
		在eclipse中，导出功能生成build.xml，具体步骤百度即可。生成之后，要上传svn

### 二、安装配置步骤
	
##### 1. 双击安装jenkins.msi

##### 2. 将initialAdminPassword文件中的密码复制到“Administrator password”中

##### 3. 插件选择Install suggested plugins
	这点要说明的是，有时候服务器是不能联网的。也就是说，要离线使用jenkins。
	可以先离线将账号等等配置完，然后在可以联网的环境下，下载安装所有的插件，然后把plugins文件夹拷贝过来即可。

##### 4. 然后创建用户

### 三、具体使用步骤
	
##### 1. "系统管理"---->"Global Tool Configuration" 配置 jdk 、ant等工具
	其中ant必须要配置ANT_HOME，并且在Path中复制上ant的bin目录，也就是在windows环境下，cmd运行ant可以运行。

##### 2. 新建一个任务，选择“构建一个自由风格的软件项目”，名称为test,并点击页面下面的“确定”
<div align="center"><img width="750px" height="500px" src="https://goldisland.github.io/gengdu/images/posts/jenkins/jenkins_new1.png"/></div>

##### 3. General配置--点击丢弃旧的构建，并如图设置
<div align="center"><img width="600px" height="500px" src="https://goldisland.github.io/gengdu/images/posts/jenkins/jenkins_new_general.png"/></div>

##### 4. 源码管理--Subversion,点击add，添加svn用户名和密码
<div align="center"><img width="600px" height="400px" src="https://goldisland.github.io/gengdu/images/posts/jenkins/jenkins_new_srcmanege.png"/></div>	
<div align="center"><img width="600px" height="400px" src="https://goldisland.github.io/gengdu/images/posts/jenkins/jenkins_new_srcmanege_user.png"/></div>	

##### 5. 构建触发器--Poll SCM ，参数为 ```* * * * * ``` ，表示每分钟都检查是否有代码上传，如果有就编译，并发布web系统
<div align="center"><img width="600px" height="400px" src="https://goldisland.github.io/gengdu/images/posts/jenkins/jenkins_new_gjcfq.png"/></div>
<div align="center"><img width="600px" height="300px" src="https://goldisland.github.io/gengdu/images/posts/jenkins/jenkins_new_gjhj.png"/></div>	

##### 6. 构建--选择invoke ant和Execute Windows batch command,
<div align="center"><img width="800px" height="500px" src="https://goldisland.github.io/gengdu/images/posts/jenkins/jenkins_new_gj.png"/></div>	

##### 7. 保存，然后运行立即构建即可

### 四、遇到的问题

##### 1. 在找不到build.xml文件
需要在java项目中，用eclipse生成build.xml文件；
    eclipse生成的文件在代码目录中，然后上传到svn上；
    随后在invoke ant中，选择 Build File 中 直接写build.xml
    Target用dist，需要在eclipse生成的build.xml文件中添加下面内容：
    ```
    <!-- 将工程打成war包 -->
    <target name="dist" depends="build" description="将工程打成war包">
        <war destfile="${ant.project.name}.war" basedir="web" webxml="web/WEB-INF/web.xml" />
    </target>
    ```

##### 2. 用ant编译时出现“编码 UTF8 的不可映射字符“，
解决办法：在javac标签中增加一个属性encoding=”UTF-8”
    ```
    <target name="compile" depends="init">
        <javac encoding="UTF-8" srcdir="${src}" destdir="${dest}">
             <classpath>
            <fileset dir="${lib}">
                <include name="*.jar" />
            </fileset>
            </classpath>
        </javac>           
    </target>
    ```
##### 3. windows执行发布的shell时，系统找不到指定的文件
This happens if you have specified your Windows command as "Execute shell" rather than "Execute Windows batch command".

##### 4. ant.bat 不是系统内部命令
需要将ant/bin加入path路径，并设置ant_home

##### 5. tomcat shutdown 指令执行完之后，就不再继续执行，
在shutdown前面应该加上 call

