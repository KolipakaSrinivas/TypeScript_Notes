// Generics

// const echo = (arg: string): string => arg
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  if (typeof arg === "object" && !Array.isArray(arg) && arg !== null) {
    return true;
  }
  return false;
};
