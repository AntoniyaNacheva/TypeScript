/// <reference path="greeter.ts" />

export class Person implements Greeter.Greeting<string> {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduction(): string {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }

  sayGoodbye(name: string): string {
    return `Dear ${name}, it was a pleasure meeting you!`;
  }
}



