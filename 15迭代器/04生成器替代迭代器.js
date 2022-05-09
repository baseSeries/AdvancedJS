// 1 生成器代替迭代器
function* createArrayIterator (arr) {
    for (let item of arr) {
        // yield * 后面跟一个可迭代对象，每次执行会迭代一个数据返回
        yield* arr
        //
        // yield item;
    }
}
const result = createArrayIterator(["a", "b", "c"]);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());


//  迭代一个返回的值
function* createRangeIterator (start, end) {
    let index = start
    while (index < end) {
        yield index++
    }
    // let index = start
    // return {
    //     next () {
    //         if (index++ < end) {
    //             return { done: false, value: index }
    //         } else {
    //             return { done: true, value: undefined }
    //         }
    //     }
    // }
}
const rangeIterator = createRangeIterator(10, 15)
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());


// class
class ClassRoom {
    constructor(student) {
        this.student = student
    }
    add (newStudent) {
        this.student.push(newStudent)
    }
    // [Symbol.iterator] = function* () {
    //     yield this.student
    // }

    *[Symbol.iterator] () {
        yield this.student
    }
}
const classRoom = new ClassRoom(["aaa", "bbb", "ccc"])
for (let student of classRoom.student) {
    console.log(student);
}