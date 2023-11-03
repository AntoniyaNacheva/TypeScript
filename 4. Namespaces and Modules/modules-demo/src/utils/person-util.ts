import { PersonDetails } from "../interfaces/Person";
import { capitalizeFirstLetter } from "./string-util";

export const transformPersonNameToCapitalLetter = (person: PersonDetails) => {
  const { name } = person;

  return {
    ...person,
    name: capitalizeFirstLetter(name),
  };
};
