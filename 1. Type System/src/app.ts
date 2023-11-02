// *BASIC DATA TYPES
// *String
let message: string = "Hello";

// *Number
let numberOfDogs: number = 4;

// *Boolean
let isDog: boolean = true;
isDog = [1, 2, 3, 4].some((e) => e === 100);
console.log("boolean:", isDog);

// *Symbol
let uniqueSymbol: Symbol = Symbol("mySymbol");
let anotherSymbol: Symbol = Symbol("mySymbol");
console.log("symbol:", uniqueSymbol === anotherSymbol); // false

// *Null and Undefined
let person: undefined = undefined;
console.log("undefined:", person);

let dogs: null = null;
console.log("null:", dogs);

// *Array
const arrOfNumbers: number[] = [1, 2, 3, 4];
const arrOfStrings: string[] = ["Pesho", "Dog", "Card"];
const arrOfBools: boolean[] = [true, false, true];
console.log("array of numbers:", arrOfNumbers);
console.log("array of strings", arrOfStrings);

type Person = {
  name: string;
  age: number;
};

const arrOfObj: Person[] = [
  { name: "Pesho", age: 30 },
  { name: "Maria", age: 40 },
];

console.log("array of objects:", arrOfObj);

// *Tuple
let numAndStrTuple: [number, string] = [18, "Pesho"];
console.log("number and string:", numAndStrTuple);

// *Enum
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

console.log("enum:", DaysOfWeek);

// *Any and Unknown
let a: any = 5;
a = "Tony";
console.log("any:", a);

let b: unknown = 10;
b = "Emma";
console.log("unknown:", b);

function greeting(name: string): void {
  console.log(`Hello, ${name}!`);
}
greeting("Pesho");

// *OPTIONAL DATA TYPES
function printPersonDetails(name: string, age?: number): string {
  if (typeof age !== "undefined") {
    return `${name}, ${age}`;
  }
  return name;
}

console.log(printPersonDetails("Mitko"));
console.log(printPersonDetails("Pesho", 18));

// *ADVANCED DATA TYPES
// *Union type
let personsArray: string[] | null = null;

function fetchPersons() {
  personsArray = ["Mitko", "Pesho", "Kiro"];
}
console.log("persons array before:", personsArray);
fetchPersons();
console.log("persons array after:", personsArray);

let test: number | number[] = 1;
test = [1, 2, 3];

console.log("union type:", test);

// *Intersection type
type nameOne = { firstName: string };
type nameTwo = { secondName: string };

const obj: nameOne & nameTwo = { firstName: "Pesho", secondName: "Todorov" };
console.log("intersection:", obj);

// *Literal type
let statusMsg: "success" | "error" = "success";
console.log("literal:", statusMsg);

// *Type Aliases
type Age = number;
const myAge: Age = 25;

type User = { id: number; name: string; age: Age };
const user: User = { id: 1, name: "John", age: 20 };
console.log("aliases:", user);

// *keyof

type Point = { x: number; y: number };

const point: Point = { x: 22, y: -12 };

const newPoint = {} as Point;
Object.keys(point).forEach((key) => {
  newPoint[key as keyof Point] = point[key as keyof Point] * 10;
});
console.log("demo keyof", newPoint);

// *Recursive types and Interfaces
type TreeNode = {
	value: number;
	left?: TreeNode;
	right?: TreeNode;
}