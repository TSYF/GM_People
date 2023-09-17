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
    private dataService:    DataService
  ) {}

  public async loadPeople(): Promise<Person[]> {
    let people: Person[] = [];
    
    const people$ = this.dataService.loadPeople();
    
    try {
      people = await firstValueFrom<Person[]>(people$);
      people$.subscribe((receivedPeople: Person[]) => {
        this.people = receivedPeople ?? [];
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
    const person: Person = {...this.people[index]};
    return person;
  }

  public editPerson(index: number, person: Person): void {
    this.dataService.modifyPerson(index, person)
      .subscribe((fetchedPerson: Person) => {
        this.people[index] = fetchedPerson;
        this.peopleChanged.emit(this.people);
      });
    
  }

  public deletePerson(index: number): void {
    // this.dataService.deletePerson(index)
    //   .subscribe((person: Person) => {
    //     this.people.splice(index, 1)
    //   });
    this.people.splice(index, 1)
    this.refreshPeople();
  }

  public refreshPeople(): Observable<Person[]> | boolean | void {
    if (this.people !== undefined) {
      return this.dataService.savePeople(this.people);
    }
    return false;
  }
}