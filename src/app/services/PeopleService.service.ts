import { Person } from "../models/person.model";

export class PeopleService {

  private people: Person[] = [];

  public pushPerson(person: Person): Person[] {
    this.people.push({ ...person });
    return this.people;
  }

  public getPeople() {
    return this.people;
  }
}