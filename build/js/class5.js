"use strict";
// class
// class Coder {
//   name: string;
//   age: number;
//   lang: string;
//   status: boolean;
//   constructor(name: string, age: number, lang: string, status: boolean) {
//     (this.name = name),
//       (this.age = age),
//       (this.lang = lang),
//       (this.status = status);
//   }
// }
class Coder {
    constructor(name, age, lang, status) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.status = status;
        this.getAge = () => {
            return this.age;
        };
        (this.name = name),
            (this.age = age),
            (this.lang = lang),
            (this.status = status);
    }
}
const sri = new Coder("sri", 23, "typescript", true);
console.log(sri.getAge);
// sri.status; // it is protucted only access class coder and sunclass
class webDev extends Coder {
    constructor(computer = "windows", name, age, lang, status) {
        super(name, age, lang, status);
        this.computer = computer;
        this.callName = () => {
            return this.name;
        };
        this.computer = computer;
    }
}
const srinivas = new webDev("mac", "srinivas", 23, "js", true);
srinivas.getAge();
srinivas.callName();
// srinivas.age //error because it accesed in class coder
