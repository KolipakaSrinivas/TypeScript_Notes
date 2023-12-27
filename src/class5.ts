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
  constructor(
    public readonly name: string,
    private age: number,
    public lang: string,
    protected status: boolean
  ) {
    (this.name = name),
      (this.age = age),
      (this.lang = lang),
      (this.status = status);
  }

  public getAge = () => {
    return this.age;
  };
}

const sri = new Coder("sri", 23, "typescript", true);
console.log(sri.getAge);
// sri.status; // it is protucted only access class coder and sunclass

class webDev extends Coder {
  constructor(
    public computer: string = "windows",
    name: string,
    age: number,
    lang: string,
    status: boolean
  ) {
    super(name, age, lang, status);
    this.computer = computer;
  }

  callName = () => {
    return this.name;
  };
}
const srinivas = new webDev("mac", "srinivas", 23, "js", true);
srinivas.getAge();
srinivas.callName();
// srinivas.age //error because it accesed in class coder

interface Human {
  name: string;
  age: number;
  status: boolean;
  pay(action: string): string;
}

class Person implements Human {
  name: string;
  age: number;
  status: boolean;

  constructor(name: string, age: number, status: boolean) {
    (this.name = name), (this.age = age), (this.status = status);
  }

  pay(action: string) {
    return this.name;
  }
}
