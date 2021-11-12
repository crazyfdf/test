## 在代码块中举例说明 JS 中 this 指针的绑定规则和绑定优先级

this 总是指向调用的对象，就是说 this 指向谁与函数声明的位置没有关系，只与调用的位置有关。this 的指向大概分为如下四种

1. new 绑定
   > new 方式是优先级最高的一种调用方式，只要是使用 new 方式来调用一个构造函数，this 一定会指向 new 调用函数新创建的对象

```
function thisTo(a){
 this.a=a;
}
var data=new thisTo(2); //在这里进行了new绑定
console.log(data.a);  //2
```

2. 显示绑定
   > 显示绑定指的是通过 call()和 apply()方法，强制指定某些对象对函数进行调用，this 则强制指向调用函数的对象

```
function thisTo(){
   console.log(this.a);
}
var data={
    a:2
};
thisTo.call(data));  //2
```

3. 隐式绑定
   > 隐式绑定是指通过为对象添加属性，该属性的值即为要调用的函数，进而使用该对象调用函数

```
function thisTo(){
   console.log(this.a);
}
var data={
    a:2,
    foo:thisTo //通过属性引用this所在函数
};
data.foo(); //2
```

4. 默认绑定
   默认绑定是指当上面这三条绑定规则都不符合时，默认绑定会把 this 指向全局对象 window

```
function thisTo(){
   console.log(this.a);
}
var a=2; //a是全局对象的一个同名属性
thisTo(); //2
```

## 在代码块中举例说明 JS 原型链如何实现继承

```
function prototype(child, parent) {
	function F() {}
	F.prototype = parent.prototype;
	prototype.constructor = child;
	child.prototype = new F();
}

function Parent(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
	console.log(this.name);
};

function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
}
prototype(Child, Parent);

const child1 = new Child('x', '18');

console.log(child1); // Parent { name: 'x', colors: [ 'red', 'blue', 'green' ], age: '18' }
```
