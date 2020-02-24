// Functions examples
/*
let sum: (num1: number, num2: number) => number;
sum = (x, y) => x + y;

let f: Function;

f = () => ({a: 1});

console.log(f());
*/



// Optional and default params
// дефолтные - либо параметр отсутствует, либо равен undefined, если
// использую пустую строку, ноль или null то параметр передан
/*
let sum: (num1: number, num2?: number) => number;
sum = (x, y = 2) => x + y;
console.log(sum(1));
*/




// overloads
interface MyOverload {
    a: string;
    b: string;
}

function overloadFunc(): null
function overloadFunc(a: string): string
function overloadFunc(a: string, b: string): MyOverload
function overloadFunc(a?: string, b?: string) {
    if (a && !b) {
        return a;
    }

    if (a && b) {
        return {a, b};
    }

    if (!a && !b) {
        return null;
    }
}

console.log(overloadFunc());
console.log(overloadFunc("a"));
console.log(overloadFunc("a", "b"));


