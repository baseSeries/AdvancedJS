class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eating () {
        console.log(this.name + "eating");
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }
    running () {
        console.log(this.name + " running");
    }
}
console.log(Object.getOwnPropertyDescriptors(Person));
console.log(Object.getOwnPropertyDescriptors(Student.__proto__));
// babel 转换后代码
"use strict";

function _typeof (obj) {
    "@babel/helpers - typeof";
    return (
        (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                }
                : function (obj) {
                    return obj &&
                        "function" == typeof Symbol &&
                        obj.constructor === Symbol &&
                        obj !== Symbol.prototype
                        ? "symbol"
                        : typeof obj;
                }),
        _typeof(obj)
    );
}

// 子类继承父级
function _inherits (subClass, superClass) {

    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    // 寄生组合式继承
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: { value: subClass, writable: true, configurable: true }
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    // 静态方法的继承
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf (o, p) {
    _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf (o, p) {
            o.__proto__ = p;
            return o;
        };
    return _setPrototypeOf(o, p);
}

function _createSuper (Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal () {
        // 获取派生类的父类
        var Super = _getPrototypeOf(Derived),
            result;
        if (hasNativeReflectConstruct) {
            // arguments 父类参数
            // 通过父类创建一个实例  将这个实例原型的construct指向子类
            // 将派生类的原型construct指向
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}

function _possibleConstructorReturn (self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError(
            "Derived constructors may only return object or undefined"
        );
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized (self) {
    if (self === void 0) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    }
    return self;
}

function _isNativeReflectConstruct () {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () { })
        );
        return true;
    } catch (e) {
        return false;
    }
}

function _getPrototypeOf (o) {
    _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf (o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
}

function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties (target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass (Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
}

var Person = /*#__PURE__*/ (function () {
    function Person (name, age) {

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [
        {
            key: "eating",
            value: function eating () {
                console.log(this.name + "eating");
            }
        }
    ]);

    return Person;
})();

var Student = /*#__PURE__*/ (function (_Person) {
    // 子类继承父类
    _inherits(Student, _Person);
    // 传入子类 返回父类
    var _super = _createSuper(Student);

    function Student (name, age, son) {
        // 构造函数不能当做函数调用
        _classCallCheck(this, Student);
        // 创建出对象 父类实例但是construct指向子类
        // 有子类属性 再这里添加
        // 返回一个对象
        _super.call(this, name, age);
        _super.son = son
        return _super
    }

    _createClass(Student, [
        {
            key: "running",
            value: function running () {
                console.log(this.name + " running");
            }
        }
    ]);

    return Student;
})(Person);

let stu = new Student('dang', 18)