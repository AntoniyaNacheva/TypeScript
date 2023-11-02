// *Procedural programming
const baseSalary = 30000;
const overtime = 10;

function getWage(baseSalary: number, overtime: number) {
  return baseSalary + overtime * 1.5;
}

console.log(getWage(baseSalary, overtime));

// *OOP programming
const employee = {
  baseSalary: 30000,
  overtime: 10,

  // Robert Martin -> the best function is the function with no parameters
  getWage: function () {
    return this.baseSalary + this.overtime * 1.5;
  },
};

console.log(employee.getWage());

const car = {
  speedLimit: 120,
  suspension: "air",
  color: "green",
  getColorSuspAndLimit: function () {
    return this.color + this.speedLimit + this.suspension;
  },
};

// *Inheritance
interface Details {
  getDetails: () => void;
}

// *Encapsulation
class Person implements Details {
  // *Abstraction
  private eyeColor: string;
  private skinColor: string;

  constructor(eyeColor: string, skinColor: string) {
    this.eyeColor = eyeColor;
    this.skinColor = skinColor;
  }

  // *Abstraction
  public getDetails(): void {
    console.log(
      `Hello, my eyes are ${this.eyeColor} and skin is ${this.skinColor}`
    );
  }
}

class Computer implements Details {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }
  // *Polymorphism
  public getDetails(): void {
    console.log(`Hello, this computer is ${this.color} color!`);
  }
}

const person = new Person("grey", "grey");
person.getDetails();

const comp = new Computer("red");
comp.getDetails();

// *SOLID

// *Single Responsibility
// NO
class StudentDemo {
  studentId: number;
  firstName: string;
  lastName: string;

  constructor(studentId: number, firstName: string, lastName: string) {
    this.studentId = studentId;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  save(): void {}
  email(): void {}
  enrol(): void {}
}

// YES
class EmailService {
  // email functionality
}

class Student {
  // details for the student => id, firstName, lastname
}

class EnrollmentService {
  // enrollment function
}

class StudentRepository {
  // CRUD => Create, Read, Update, Delete
  // Repository classes -> responsible for the DB communication
}

// *Open/Closed
class Car {
  protected color: string;

  constructor(model: string) {
    this.color = model;
  }

  getColor() {
    return this.color;
  }
}

class BMW extends Car {
  private serialNumber: string;

  constructor(color: string, serialNumber: string) {
    super(color);
    this.serialNumber = serialNumber;
  }

  getSerialDetails() {
    console.log(this.color + " - " + this.serialNumber);
  }
}

const myBMW = new BMW("red", "5s5d5sd5sd");
console.log(myBMW.getColor());
myBMW.getSerialDetails();

// *Interface Segregation
interface Geo {
  lat: string;
  lng: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface PersonDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
interface User {
  details: PersonDetails;
  address: Address;
  website: string;
  company: Company;
}

class PersonOne implements PersonDetails {
  id: number = 0;
  name: string = "";
  username: string = "";
  email: string = "";
  phone: string = "";
}

// *Dependency Inversion
class Wallet {
  balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }
}

class User {
  wallet: Wallet;
  firstname: string;

  constructor(firstName: string, wallet: Wallet) {
    this.firstname = firstName;
    this.wallet = wallet;
  }

  getWalletBalance() {
    return `${this.firstname} has ${this.wallet.balance} in his pocket!`;
  }
}

const ivansWallet = new Wallet(4000);
const ivanUser = new User("Ivan", ivansWallet);
console.log(ivanUser.getWalletBalance());

const peshosWallet = new Wallet(3000);
const peshoUser = new User("Pesho", peshosWallet);
console.log(peshoUser.getWalletBalance());

// *CLASSES & OBJECTS
// blueprint => class initialization
class PersonClass {
  // properties
  firstName: string;
  age: number;

  // static props
  static counter: number = 1;

  // object initialization => object creation
  constructor(firstName: string, age: number) {
    this.firstName = firstName;
    this.age = age;
  }

  // static methods
  static incrementor(): number {
    return PersonClass.counter++;
  }

  // methods => behaviour
  greeting() {
    console.log(
      "Hello from " + this.firstName + "! With id: " + PersonClass.incrementor()
    );
  }
}

// instances of class
const personMaria = new PersonClass("Maria", 10);
personMaria.greeting();
const personIvan = new PersonClass("Ivan", 11);
personIvan.greeting();
const personKircho = new PersonClass("Kircho", 12);
personKircho.greeting();

// *Getter and Setter
class EmployeeGetAndSet {
  private _firstName: string;

  constructor(firstName: string) {
    this._firstName = firstName;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(newFirstName: string) {
    if (newFirstName.length < 4) {
      throw new Error("First name is less than 4 characters!");
    }

    this._firstName = newFirstName;
  }
}

const employeeIvan = new EmployeeGetAndSet("Ivan");
console.log("firstName:", employeeIvan.firstName);
employeeIvan.firstName = "Pokemon";
console.log("firstName:", employeeIvan.firstName);

// *Access modifiers
class PersonAccess {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected getDetails(): void {
    console.log(`My name is ${this.name} and I am ${this.age} y/o!`);
  }
}

const mitkoPerson = new PersonAccess("Mitko", 15);
// mitkoPerson.getDetails();

class EmployeeAccess extends PersonAccess {
  constructor(name: string, age: number) {
    super(name, age);
  }

  getEmployeeDetails() {
    return this.getDetails();
  }
}

const employeeAccess = new EmployeeAccess("Pesho", 32);
employeeAccess.getEmployeeDetails();

// *Abstract class => used only for inheritance/extension
abstract class PersonAbstract {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected getDetails(): void {
    console.log(`My name is ${this.name} and I am ${this.age} y/o!`);
  }
}

// *DESIGN PATTERNS

// *Singleton
class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {}

  public static getInstance(): Singleton {
    if (this.instance === null) {
      this.instance = new Singleton();
    }
    return this.instance;
  }

  public someMethod(): void {
    console.log("This is singleton method!");
  }
}

const instanceSingletonOne = Singleton.getInstance();
instanceSingletonOne.someMethod();

const instanceSingletonTwo = Singleton.getInstance();
instanceSingletonTwo.someMethod();

const areInstancesTheSame = instanceSingletonOne === instanceSingletonTwo;
console.log(areInstancesTheSame);

// *Composition
// Component 1
class Engine {
  start() {
    console.log("Engine started");
  }
}

// Component 2
class Wheels {
  roll() {
    console.log("Wheels rolling");
  }
}

// Component 3
class GPS {
  navigate(destination: string) {
    console.log(`Navigating to ${destination}`);
  }
}

class CarComposition {
  private engine: Engine;
  private wheels: Wheels;
  private gps: GPS;

  constructor(engine: Engine, wheels: Wheels, gps: GPS) {
    this.engine = engine;
    this.wheels = wheels;
    this.gps = gps;
  }

  drive(destination: string) {
    this.engine.start();
    this.wheels.roll();
    this.gps.navigate(destination);
  }
}

// Example usage
const myEngine = new Engine();
const myWheels = new Wheels();
const myGPS = new GPS();
const myCar = new CarComposition(myEngine, myWheels, myGPS);
myCar.drive("The Park");
