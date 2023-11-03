import { PersonDetails } from "./interfaces/Person";
import { transformPersonNameToCapitalLetter } from "./utils/person-util";

const person: PersonDetails = { age: 22, name: "mitko" };

const personCapitalized = transformPersonNameToCapitalLetter(person);
console.log(person, personCapitalized);
