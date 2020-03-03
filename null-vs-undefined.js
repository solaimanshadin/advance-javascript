// Ways to get Undefined
let pakhi;
console.log(pakhi);

const myFunc = () => {
    console.log("Hello World")
}

const sayHello = myFunc();
console.log(sayHello)

const myAnotherFunc = () => {
    console.log("Hey World");
    return
}

const sayAgain = myAnotherFunc();
console.log(sayAgain)

const add = (num1, num2) => {
    return num2;
}

const result = add(10)
console.log(result)

const obj = { name: "solaiman Shadin", age: 22 };
console.log(obj.gf)

//Not recommended
const monkeyValue = undefined;
console.log(monkeyValue);