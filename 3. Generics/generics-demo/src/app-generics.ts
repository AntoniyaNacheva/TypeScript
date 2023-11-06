// const getid = (paramId: string | number): string | number => {
//   return paramId;
// };

// const ed1 = getid(1);
// const id2 = getid("sjdjk");

const getTestGenerics = <Т>(paramId: Т): Т => {
  return paramId;
};

const ed1 = getTestGenerics<number>(1);
const id2 = getTestGenerics<string>("sjdjk");
const ids = getTestGenerics<number[]>([1, 2, 3]);

type UserData<T> = {
  name: string;
  age: number;
  address: string;
  id: T;
};

const x = getTestGenerics<UserData<number>>({
  name: "Mitko",
  age: 12,
  address: "Sofia, Bulgaria",
  id: 1,
});

const y = getTestGenerics<UserData<string>>({
  name: "Mitko",
  age: 12,
  address: "Sofia, Bulgaria",
  id: "1",
});

const attachId = <T>(obj: T) => {
  const objId = Math.random();
  return { ...obj, id: objId };
};

type PersonObjDetails = {
  name: string;
  age: number;
  city: string;
};

const person: PersonObjDetails = { name: "Mitko", age: 21, city: "Lovech" };
// const personWithId = attachId<PersonObjDetails>(person);
const personWithId = attachId(person);
console.log(personWithId);

type AnimalObjDetails = {
  legsCount: number;
  furColor: string;
  name: string;
};

const animal: AnimalObjDetails = {
  legsCount: 4,
  furColor: "blond",
  name: "Fluffy",
};

// const animalWithId = attachId<AnimalObjDetails>(animal);
const animalWithId = attachId(animal);
console.log(animalWithId);

interface DocumentObject<T> {
  id: number;
  name: string;
  data: T;
}

const doc1: DocumentObject<{ name: string }[]> = {
  id: 1,
  name: "flowers",
  data: [{ name: "flower1" }, { name: "flower2" }],
};

const doc2: DocumentObject<{ name: string; age: number; address: string }> = {
  id: 2,
  name: "persons",
  data: { name: "Pesho", age: 12, address: "Bulgaria" },
};

const doc3: DocumentObject<number> = {
  id: 3,
  name: "test",
  data: 1,
};

///

function echo<T>(arg: T): T {
  console.log(typeof arg);

  return arg;
}

echo(1);
echo("1");
echo(true);

///

const takeLast = <T>(array: T[]) => {
  return array[array.length - 1];
};

console.log(takeLast([1, 2, 3, 4]));

///

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj));

const makeTuples = <T, Z>(a: T, b: Z): (T | Z)[] => {
  return [a, b];
};

console.log(makeTuples("a", true));

///

type GenericContructor<T, V> = {
  (arg1: T, arg2: V): [T, V];
};

const generateFn: GenericContructor<string, number> = <T, V>(
  arg1: T,
  arg2: V
) => {
  return [arg1, arg2];
};

console.log(generateFn("Hello", 55));

///

class Collection<T> {
  data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  addEl(el: T) {
    this.data.push(el);
  }

  removeEl(el: T) {
    const index = this.data.indexOf(el);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }
}

const numberColl = new Collection(1, 2, 3, 4);
console.log(numberColl.data);
numberColl.addEl(99);
numberColl.removeEl(2);
console.log(numberColl.data);

const stringColl = new Collection("a", "b", "c", "d");
console.log(stringColl.data);
stringColl.addEl("Pokemon");
stringColl.removeEl("c");
console.log(stringColl.data);

///

class Test<F, S> {
  first: F;
  second: S;

  constructor(first: F, second: S) {
    this.first = first;
    this.second = second;
  }

  getConcatinatedArguments() {
    return `My first param: ${this.first} and my second param: ${this.second}`;
  }
}

const test1 = new Test(1, "Gosho");
console.log(test1.getConcatinatedArguments());

///

const personExtends = {
  age: 33,
  address: "Sofia, Bulgaria",
  firstName: "Pesho",
  lastName: "Ivanov",
  id: 5,
};

interface FullName {
  firstName: string;
  lastName: string;
  id: number;
}

function fullName<T extends FullName>(obj: T) {
  return `The full name of the user is ${obj.firstName} ${obj.lastName}!`;
}

const objExtends = fullName(personExtends);

///

const getSomething = <T extends { age: number }>(obj: T) => {
  return obj;
};

getSomething({ age: 12, a: 1, b: 2, c: 3 });


