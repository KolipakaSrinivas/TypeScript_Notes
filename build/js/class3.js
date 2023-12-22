"use strict";
let obj1 = {
    prop1: 67,
    prop2: true,
    prop3: [2, 4, "a"]
};
// Literal Types
let userName;
// userName = "sri" // error
let UserId;
UserId = "2ydtsj22";
// Functions
const add = (a, b) => {
    return a + b;
};
const call = () => {
    console.log("string");
};
const sub = function (c, d) {
    return c - d;
};
// interface mathFunction{
//   (a: number, b: number): number
// }
const mulitply = function (a, b) {
    return a * b;
};
// Option parameters
const addSome = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
const addAll = (a, b, c = 0) => {
    return a + b;
};
const someAll = (a = 10, b, c = 0) => {
    return a + b;
};
// someAll(undefined,1) // error because no use option paremater ?
// Restparamater
const addSomeOfAll = (...nums) => {
    return nums.reduce((p, c) => p + c);
};
//  Create Error message
const createError = (errmessage) => {
    throw new Error("errmessage");
};
// const infinite = () => {
//   let i: number = 1;
//   while (true) { // Never Type
//     i++;
//   }
// };
const infinite = () => {
    let i = 1;
    while (true) {
        // void Type
        i++;
        if (i > 100)
            break;
    }
};
// custom Type grad
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// using never Type
const numberString = (value) => {
    if (typeof value == "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This never Happend");
};
