namespace PersonUtils {
  interface PersonDetails {
    name: string;
  }

  export class Person implements PersonDetails {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    getName() {
      return this.name;
    }
  }
}

const prshoPerson = new PersonUtils.Person("Pesho");

/// <reference path="Animal.ts" />
AnimalGroup.Animal;

namespace AnimalGroup {
  export class Dog extends Animal {
    constructor(furColor: string, type: string) {
      super(furColor, type);
    }
  }
}

const doPenny = new AnimalGroup.Dog("brown", "Penny");

///

namespace Library {
  export namespace ReadFiles {
    export class AsyncRead {}
  }

  export namespace WriteFiles {
    export class AsyncWrite {}
  }
}

new Library.ReadFiles.AsyncRead();
