import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Person } from '../models/person.model';
import { LoggingService } from '../services/LoggingService.service';
import { PeopleService } from '../services/PeopleService.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  // providers: [LoggingService] //* No longer needed since it's declared on app.module.ts
})
export class FormComponent {
  @Output()
  public createdPerson: EventEmitter<Person> = new EventEmitter<Person>();

  public tempPerson: Person = Person.createEmpty(); // Initialized because of strictPropertyInitialization

  @ViewChild("firstNameInput")
  private firstNameInput: ElementRef<HTMLInputElement>;
  @ViewChild("lastNameInput")
  private lastNameInput: ElementRef<HTMLInputElement>;


  public constructor(/* private loggingService: LoggingService, */ private peopleService: PeopleService) {
    this.peopleService.greet.subscribe(
      (index: number) => {
        alert("Index: " + index);
      }
    )
  }
  

  public addPerson(person: Person): void {
    // this.people.push({...person});
    // return this.people;
    this.peopleService.pushPerson({ ...person });
  }
  
  public propagatePersonNoArgs(): void {
    const newPerson: Person = new Person(this.firstNameInput.nativeElement.value, this.lastNameInput.nativeElement.value);
    // this.loggingService.logString(`This person has been propagated: ${newPerson}`);
    // this.createdPerson.emit(newPerson);
    this.peopleService.pushPerson(newPerson);
  }

  public propagatePerson(person: Person): void {
    // this.people.push({...person});
    // return this.people;
    this.createdPerson.emit({ ...person });
  }

  public propagatePersonByReference(firstNameInput: HTMLInputElement, lastNameInput: HTMLInputElement): void {
    // this.people.push({...person});
    // return this.people;
    const newPerson: Person = new Person(firstNameInput.value, lastNameInput.value);
    this.createdPerson.emit(newPerson);
  }

}
