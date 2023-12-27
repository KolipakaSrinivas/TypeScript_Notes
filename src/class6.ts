// index signatures

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// interface TransactionObj {
//   [index: string] : string
// }

interface TransactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const deailTranctions: TransactionObj = {
  Pizza: 10,
  Books: 10,
  Job: 22
};

console.log(deailTranctions.Pizza);
console.log(deailTranctions["Books"]);

const prop: string = "Pizza";
// console.log(deailTranctions[prop]); // errr because no index signature

const toTayNet = (obj: TransactionObj): number => {
  let total: number = 0;
  for (const key in obj) {
    total += obj[key];
  }

  return total;
};

console.log(toTayNet(deailTranctions));

// -----------------------------------------------------------

interface Student {
  //1
  // [index: string] : string | number | number[] | undefind ,// problem because console.log(student.unknow) insted we use keyOf
  name: string;
  age: number;
  status: number[];
}

const student: Student = {
  name: "srinivas",
  age: 23,
  status: [1, 2]
};

for (const key in student) {
  //2
  console.log(student[key as keyof Student]);
}

for (const key in student) {
  //3
  console.log(student[key as keyof typeof student]);
}
