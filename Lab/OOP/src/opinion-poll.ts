class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Peter", 12);
console.log(`${person.name} is ${person.age} years old.`);
