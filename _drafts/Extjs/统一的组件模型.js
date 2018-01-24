2.2 统一的组件模型
我们日常开发接触的最多的还是各种组件与布局，通过组件和布局的各种组合才形成了功能强劲的应用。

2.2.1 Ext.Component
Ext中所有的可视化组件都继承自Ext.Component, 
这种单根继承的模型保证所有组件都拥有相同的通用方法与生命周期
方便维护管理，也保证了布局的便利。

initComponnet()、render()、show()、hide()
初始化、渲染、显示、隐藏

作为基类，Ext.Component 本身不包含任何格式，在使用时为它指定渲染的html

var box = new Ext.Component({
	el:'test',
	style : 'background-color:red;postion:absolute;',
	pageX : 100,
	pageY: 50, 
	width: 200,
	height: 150
});
box.render();

2.2.2 Ext.Panel
Ext.Panel 直接继承自Ext.Container.
浮动阴影、可拖放、可折叠，设置了大小、位置、标题和内容的Ext.Panel
var panel = new Ext.Panel({
	el : 'test',
	title : '测试标题',
	floating : true,
	shadow : true,
	draggable : true,
	collapsible : true,
	html :'测试内容',
	pageX: 100,
	pageY: 50,
	width: 200,
	height: 150
})
panel.render();

2.2.3 Ext.Container
Ext.Container 是一切可布局组件的超类
最原始的方法，是将这些组件都创建好，再加入到布局容器里
new Ext.Viewport({
	layout:'border',
	items : [
		new Ext.Panel({region:'north'}),
		new Ext.Panel({region:'south'}),
		new Ext.Panel({region:'east'}),
		new Ext.Panel({region:'center'})
	]
})
采用xtype的方法：
new Ext.Viewport({
	layout:'border',
	items : [{
		xtype:'panel',
		region:'north'
	},{
		xtype:'panel',
		region:'south'
	},{
		xtype:'panel',
		region:'east'
	},{
		xtype:'panel',
		region:'east'
	}]
})

2.3 完善的事件机制
事件模型在Ext应用中尤为重要。
在Ext中，事件分为两种类型：自定义事件和浏览器事件。
自定义事件
Ext遵循一种树状的事件模型，所有继承Ext.util.Observable类的控件都可以支持事件。

Person = function(name) {
	this.name = name;
	this.addEvents('walk','eat','sleep');
}
Ext.extend(Person, Ext.util.Observable, {
	info: function(event) {
		return this.name + 'is' + event + 'ing.';
	}
})

1. 初始化时，调用this.addEvents()定义了3个事件 walk eat sleep

2. 为person添加事件监听器
var person = new Person("lingo");
person.on('walk',function() {
	Ext.Msg.alert('event', person.name + "走啊走啊");
})
person.on('eat', function(bf, lunch, supper) {
	Ext.Msg.alert("event" + person.name + "要吃" + bf + lunch + supper);
})
这里on()是addListener()的简写形式， 功能完全一样。
un()是removeListener()的简写形式。
purgeListeners() 删除所有的监听器
3. 触发person的事件
person.fireEvent('walk');
person.fireEvent('eat', '早餐', '午餐');

浏览器事件：
Ext使用Ext.EventManager Ext.EventObject 和Ext.lib.Event对原生浏览器事件进行了封装，
从而生成了一套统一的浏览器的通用事件接口

var e = document.getElementById("test");
e.onclick = function(){alert("handler1")};
e.onclick = function(){alert("handler2")};
事件2会覆盖事件1

Ext.onReady(function(){
	var test = Ext.get('test');
	test.on('click',function() {
		alert('handler1');
	})
	test.on('click',function(){
		alert('handler2');
	})
})
事件2不会覆盖事件1


2.3.3 Ext.EventObjectImpl
1. 首先它封装了不同浏览器的事件处理函数，为上层组件提供了统一的接口
getX(), getY(), getXY() 获取事件的坐标位置
getTarget(),返回事件的目标元素，ev.Target,ev.srcElement
on() un() 
preventDefault() 取消浏览器对当前时间所执行的操作
stopPropagation() 停止事件传递。
stopEvent() 调用peventDefault(),stopPropagation()

Ext.EventObjectImpl 定义了一系列功能按键
	BACKSPACE 8 TAB 9

Ext.get('text').on('keypress', function() {
	if(e.charCode == Ext.EventObjectImpl.SPACE) {
		Ext.Meg.alert("info", '空格');
	}
})

获取原始的浏览器事件，通过Ext.EventObjectImpl的browserEvent来获得

2.3.4 Ext.util.Observable 
要实现一个可以处理事件的Ext组件，最直接的方法就是继承Ext.util.Observable

Ext.get('test').on('click', fn, this, {
	single : true , // 只触发一次
	delay : 100, 
	testId : 4
})

Ext.get('test').on('click', fn, this , {
	buffer: 1000,
	testId : 4
})

buffer和delay的作用是相同的，但是buffer会创建一个Ext.util.DelayTask对象，并把fn放入等待执行
。如果再次触发事件，那么上次的任务就会取消，并把新的fn放入任务队列里。

Ext.get('test').on({
	'click':{
		fn:fn
	},
	'mouseover':{
		fn:fn,
		single:true,
		delay : 100
	}
})


2.3.5 Ext.EventManager
作为事件管理器，Ext.EventManager定义了一系列与事件相关的处理函数，例如：
onDocumentReady(Ext.onReady),onWindowResize,onTextResize


3.2 制作一个简单的表格


