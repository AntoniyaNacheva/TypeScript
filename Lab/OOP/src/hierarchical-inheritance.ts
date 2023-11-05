class Animal {
  eat(): string {
    return "eating...";
  }
}

class Dog extends Animal {
  bark(): string {
    return "barking...";
  }
}

class Cat extends Animal {
  meow(): string {
    return "meowing...";
  }
}
const animal = new Animal();
console.log(animal.eat());

const dog = new Dog();
console.log(dog.bark(), dog.eat());

const cat = new Cat();
console.log(cat.meow(), cat.eat());
