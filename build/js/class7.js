"use strict";
// Utility Types
const updateAssignemnt = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "sri",
    title: "maths",
    grade: 7,
    verified: false
};
console.log(updateAssignemnt(assign1, { verified: true }));
// Requried and readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = (assign) => {
    return assign;
};
