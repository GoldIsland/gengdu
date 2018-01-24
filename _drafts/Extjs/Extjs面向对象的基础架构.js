深入浅出Extjs
Ext框架基础
1. 创建新类
Ext.define('demo.Demo',{
	name : 'Lingo',
	hello:function() {
		return 'hello';
	}
})

Ext内部会将字符串自动切分并创建出匹配的命名空间。
var demo = new demo.Demo();

2. 对象的继承
Ext.define('demo.DemoWindow',{
	extend : 'Ext.window'
})

Ext.define('demo.DemoWindow',{
	extend : 'Ext.window',
	title : 'demo header', // 设置了一个默认标题
	initComponent: function() {
		// Ext.apply可以将一批属性批量复制给当前对象
		Ext.apply(this, { 
			items : [
				{
					html:'panel1'
				}, {
					html:'panel2'
				}
			]
		})
		// this.height = 200;
		this.callParent(); // 实现父类函数的快捷调用
	}
})

3. 多重继承
Ext提出了使用混入mixins的方法来实现多重继承的支持
Ext.define('demo.DemoPanel', {
	extend : 'Ext.window',
	mixins : ['demo.Demo']
})
Ext将这些类的属性都复制给新类，从而实现了多重继承的功能。

4. 自动生成代码
Ext.define('demo.DemoInstance', {
	config: {
		title : 'demo'
	}
})

实际产生了如下代码：
Ext.define('demo.DemoInstance', {
	title : 'demo',
	getTitle:function() {
		return this.title;
	},
	setTitle: function() {
		this.title = this.applyTitle(title) || title;
	},
	applyTitle : function(title) {
	}
})

Ext自动生成了setter和getter方法，并且为了扩展性，还生成了在设置属性时的自定义校验转换函数
applyTitle();
Ext.define('demo.DemoObject', {
	statics : { // 静态成员
		TYPE_DEFAULT : 0
	},
	// 自定义构造函数
	constructor : function() {
		// do some init
	}
})