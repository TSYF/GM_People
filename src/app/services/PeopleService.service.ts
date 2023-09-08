import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../models/person.model";
import { LoggingService } from "./LoggingService.service";

@Injectable()
export class PeopleService {

  private people: Person[] = [];
  public greet: EventEmitter<number> = new EventEmitter<number>();

  public constructor(private loggingService: LoggingService) {}

  public pushPerson(person: Person): Person[] {
    this.people.push({ ...person });
    this.loggingService.logString(`This person has been propagated: ${person}`);
    return this.people;
  }

  public getPeople(): Person[] {
    return this.people;
  }

  public findPerson(index: number): Person {
    const person: Person = this.people[index];
    return person;
  }

  public editPerson(index: number, person: Person): void {
    const oldPerson = this.people[index];
    oldPerson.firstName = person.firstName;
    oldPerson.lastName = person.lastName;
  }

  public deletePerson(index: number): void {
    this.people.splice(index, 1);
  }
}