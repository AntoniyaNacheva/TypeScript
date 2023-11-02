interface UserDetails {
  firstName: "Tsveti" | "Gosho" | "Ivan";
  lastName: string;
  email?: string;
  tellDetails?: () => void;
}

interface Human {
  legsCount: number;
  skinColor: string;
}

interface PersonDetails extends UserDetails, Human {
  fullName: string;
}

// Can be implemented by a class
// class Person implements UserDetails, Human {
class Person implements PersonDetails {
  firstName: "Tsveti" | "Gosho" | "Ivan";
  lastName: string;
  legsCount: number;
  skinColor: string;

  fullName: string;

  constructor(
    firstName: "Tsveti" | "Gosho" | "Ivan",
    lastName: string,
    legsCount: number,
    skinColor: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.legsCount = legsCount;
    this.skinColor = skinColor;

    this.fullName = this.firstName + " " + this.lastName;
  }
}

const personGosho = new Person("Gosho", "Kirilov", 2, "zelena");

// Can be used as a type of a variable
// const user: UserDetails = {
//   firstName: "Pesho",
//   lastName: "Petrov",
//   email: "pesho@gmail.com",
//   tellDetails: function () {
//     console.log(
//       `User Details: ${this.firstName} ${this.lastName} with email ${this.email}`
//     );
//   },
// };

// user.tellDetails();

// Can be used as a return type
function getUsersOne(): UserDetails[] {
  return [
    {
      firstName: "Tsveti",
      lastName: "Petrov",
    },
    {
      firstName: "Ivan",
      lastName: "Petrov",
    },
  ];
}

const users = getUsersOne();
console.log(users);

interface GetNameFn {
  (param1: number, param2: string): string;
}

const getName: GetNameFn = (param1: number, param2: string) => {
  return "";
};
