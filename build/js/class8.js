"use strict";
// Generics
// const echo = (arg: string): string => arg
const echo = (arg) => arg;
const isObj = (arg) => {
    if (typeof arg === "object" && !Array.isArray(arg) && arg !== null) {
        return true;
    }
    return false;
};
