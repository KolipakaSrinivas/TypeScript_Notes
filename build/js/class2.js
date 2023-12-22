"use strict";
// Array and object
let stringArray = ["a", "b", "c"];
let numberArray = [1, 2, 3];
let boolean = [true, false];
let __unionType = ["string", 56, true];
// stringArray[1] = 2 //error
// stringArray[1] = 'string'
//  Explict seting typing
let __string = ["a", "b", "c"];
let __number = [1, 2, 3];
let __boolean = [true, false];
let mixedData = [2, "a", "Blob"];
// Tuple
let myTuple = ["string", 65, true]; // tuple is more strict
// Objects
let obj;
obj = []; // no error because array one type of object
let obj2 = {
    pro1: "srinivas",
    prop2: 56
};
// let obj3: setType = {
//   pro1: "a",
//   pro2: 9,
//   prop3: [9, "s"],
//   prop4: "string",
//   prop5:{}
// };
// obj3.prop4 = [] // error
// obj3.prop4 = 's'
//  if want set opectional
let obj4 = {
    pro2: 9, // prop one is opt becase used ?
    prop3: [9, "s"],
    prop4: "string",
    prop5: {}
};
// Enums
// enum Grade  {
//   A,
//   B,
//   c,
//   D,
//   E
// }
// enum Grade  {
//   A,
//   B,
//   c,
//   D,
//   E
// }
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["c"] = 3] = "c";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["E"] = 5] = "E";
})(Grade || (Grade = {}));
console.log(Grade.B);
