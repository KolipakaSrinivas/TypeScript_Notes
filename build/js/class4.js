"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a;
let e = "World";
let d = "Hello";
const addAndConcat = (a, b, c) => {
    if (c === "add")
        return a + c;
    return "" + a + c;
};
const myvalue = addAndConcat(2, 2, "cancat");
// Be carful when Ts see no problem but return string
const nextValue = addAndConcat(2, 2, "add");
// unknown
10;
//DOM
const imgElement = document.querySelector("img");
const nextImageE = document.getElementById("#img");
const imgElementImg = document.querySelector("img"); // asing not null !
let imgElementImage = document.querySelector("img");
imgElement.src;
nextImageE.src;
