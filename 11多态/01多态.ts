// 传统面向对象多态的三大特性
// 继承是多态的前提
// 必须有重写 子类重写父类方法
// 父类引用指向子类对象

// 不同的数据类型进行同一操作，表现出不同的行为 就是多态的表现
class Shape {
	getArea() {}
}

class ReactAngle extends Shape {
	getArea() {
		return 100;
	}
}
class Circle extends Shape {
	getArea() {
		return 200;
	}
}

let r = new ReactAngle();
let c = new Circle();

// 不同的数据类型进行同一操作，表现出不同的行为 就是多态的表现
function calcArea(shape: Shape) {
	console.log(shape.getArea());
}
calcArea(r);
calcArea(c);
