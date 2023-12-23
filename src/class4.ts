type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three;

let e = <One>"World";
let d = <string | number>"Hello";

const addAndConcat = (
  a: number,
  b: number,
  c: "add" | "cancat"
): string | number => {
  if (c === "add") return a + c;
  return "" + a + c;
};

const myvalue: string = addAndConcat(2, 2, "cancat") as string;

// Be carful when Ts see no problem but return string
const nextValue: number = <number>addAndConcat(2, 2, "add");

// unknown
10 as unknown as string;

//DOM

const imgElement = document.querySelector("img") as HTMLImageElement;
const nextImageE = <HTMLImageElement>document.getElementById("#img");
const imgElementImg = document.querySelector("img")!; // asing not null !
let imgElementImage: HTMLImageElement | null = document.querySelector("img");
imgElement.src;
nextImageE.src;
