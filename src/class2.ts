// Array and object
let stringArray = ["a", "b", "c"];
let numberArray = [1, 2, 3];
let boolean = [true, false];
let __unionType = ["string", 56, true];

// stringArray[1] = 2 //error
// stringArray[1] = 'string'

//  Explict seting typing
let __string: string[] = ["a", "b", "c"];
let __number: number[] = [1, 2, 3];
let __boolean: boolean[] = [true, false];
let mixedData: (string | number | boolean)[] = [2, "a", "Blob"];

// Tuple
let myTuple: ["string", number, boolean] = ["string", 65, true]; // tuple is more strict

// Objects
let obj: object;
obj = []; // no error because array one type of object

let obj2 = {
  pro1: "srinivas",
  prop2: 56
};

// obj2.pro1 = 76 // error
// obj2.pro1 = 'a'

type setType = {
  pro1: string;
  pro2: number;
  prop3: (number | string)[];
  prop4: number | string;
  prop5: any;
};

interface setType2 {
  pro1?: string;
  pro2: number;
  prop3: (number | string)[];
  prop4: number | string;
  prop5: any;
}

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

let obj4: setType2 = {
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
enum Grade {
  A = 1,
  B,
  c,
  D,
  E
}

console.log(Grade.B);
