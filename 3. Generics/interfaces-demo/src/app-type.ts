type Mammal = {
  legsCount: number;
  furColor: string;
};

type Animal = {
  eat: () => void;
};

type Dog = Mammal & Animal & { name: string };

interface DogOwner {
  dogs: Dog[];
}

type PersonTest = {
  dogOwner: DogOwner;
};

function getMammal(): Dog {
  const dog: Dog = {
    name: "Johny",
    legsCount: 4,
    furColor: "brown",
    eat: () => console.log("Dog is eating!"),
  };

  return dog;
}
