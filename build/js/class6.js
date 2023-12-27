"use strict";
// index signatures
const deailTranctions = {
    Pizza: 10,
    Books: 10,
    Job: 22
};
console.log(deailTranctions.Pizza);
console.log(deailTranctions["Books"]);
const prop = "Pizza";
// console.log(deailTranctions[prop]); // errr because no index signature
const toTayNet = (obj) => {
    let total = 0;
    for (const key in obj) {
        total += obj[key];
    }
    return total;
};
console.log(toTayNet(deailTranctions));
const student = {
    name: "srinivas",
    age: 23,
    status: [1, 2]
};
for (const key in student) {
    //2
    console.log(student[key]);
}
for (const key in student) {
    //3
    console.log(student[key]);
}
