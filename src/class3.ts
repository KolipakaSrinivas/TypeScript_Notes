// Type Aliases
type stringNumber = string | number;
type stringBooleanNumber = string | number | boolean;
type numberStringArray = (number | string)[];

type objectStyle = {
  prop1: stringNumber;
  prop2: stringBooleanNumber;
  prop3: numberStringArray;
};

let obj1 = {
  prop1: 67,
  prop2: true,
  prop3: [2, 4, "a"]
};

// Literal Types
let userName: "Dave";
// userName = "sri" // error

let UserId: "12345" | "2ydtsj22";

UserId = "2ydtsj22";

// Functions

const add = (a: number, b: number): number => {
  return a + b;
};

const call = (): void => {
  console.log("string");
};

const sub = function (c: number, d: number): number {
  return c - d;
};

// function(str: any) {
//   console.log(str);
// }

type mathFunction = (a: number, b: number) => number;

// interface mathFunction{
//   (a: number, b: number): number
// }

const mulitply: mathFunction = function (a, b) {
  return a * b;
};

// Option parameters

const addSome = (a: number, b: number, c?: number) => {
  if (c !== undefined) {
    return a + b + c;
  }
  return a + b;
};

const addAll = (a: number, b: number, c: number = 0) => {
  return a + b;
};

const someAll = (a: number = 10, b: number, c: number = 0) => {
  return a + b;
};
// someAll(undefined,1) // error because no use option paremater ?

// Restparamater

const addSomeOfAll = (...nums: number[]): number => {
  return nums.reduce((p, c) => p + c);
};

//  Create Error message

const createError = (errmessage: string): never => {
  throw new Error("errmessage");
};

// const infinite = () => {
//   let i: number = 1;

//   while (true) { // Never Type
//     i++;
//   }
// };

const infinite = () => {
  let i: number = 1;

  while (true) {
    // void Type
    i++;
    if (i > 100) break;
  }
};

// custom Type grad

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// using never Type
const numberString = (value: string | number) => {
  if (typeof value == "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This never Happend");
};
