import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../models/person.model";
import { LoggingService } from "./LoggingService.service";
import { DataService } from "./data.service";
import { Observable, firstValueFrom } from "rxjs";

@Injectable()
export class PeopleService {

  private people: Person[] = [];
  public peopleChanged: EventEmitter<Person[]> = new EventEmitter<Person[]>(true);
  public greet: EventEmitter<number> = new EventEmitter<number>();

  public constructor(
    private loggingService: LoggingService,
    private dataService:   DataService
  ) {}

  public async loadPeople(): Promise<Person[]> {
    let people: Person[] = [];
    
    const people$ = this.dataService.loadPeople();
    
    try {
      people = await firstValueFrom<Person[]>(people$);
      people$.subscribe((receivedPeople: Person[]) => {
        console.log("Observable Subscription");
        this.people = receivedPeople;
        this.peopleChanged.emit(receivedPeople);
      });
      this.people = people;
    } catch (error) {
      console.log("PeopleService: loadPeople");
      console.error(error);
    }
    
    return people;
  }
  
  public pushPerson(person: Person): Person[] {
    this.people.push({ ...person });
    this.loggingService.logString(`This person has been propagated: ${person}`);
    this.dataService.savePeople(this.people);
    return this.people;
  }

  public getPeople(): Person[] {
    return this.people;
  }

  public setPeople(people: Person[]): void {
    this.people = people;
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