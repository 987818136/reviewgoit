type obj = {
    a: number,
    b: string
}
const obj2: obj = {
    a: 123,
    b: '1231111'
}

console.log(123);
/*let a: (1 | 2) = 1;
a = 2
const b = { b1: 123, b2: 456 };
b.b1 = 999*/
const arr1: [string | number, number] = [1, 2]
const arr2: number[] = [1, 2]




var arr = [1, '2', 4, 5]
let [one = 3, two, ...three] = arr
console.log(three);

const arrx = [{ a: 1, b: 2 }, 2, 3]
let [{ a, b }, a2, a3] = arrx

let obj1 = {
    foo: 1,
    bar: "123"
}
let { foo, bar } = obj1;
const { floor } = Math;
console.log(foo);

let obj3 = {
    fo: {
        foarr: [1, 2, 3],
    }
}
let { toString: s } = 123;
let { length: len } = "123"
let [a123, b123, c123] = "123"

let { fo, fo: { foarr, foarr: [x, y, z] } } = obj3

//es6默认值

function f1(x = 3, y = 2) {
    return x + y
}
function f2(...num) {
    console.log(num, typeof num);
    //return f1.apply(this, num);
}


//对象内部不适合用箭头

const objsy = {
    a: 1,
    b: 2
}
const sya = Symbol("a");
objsy[sya] = 3;
objsy[sya];
sya.description