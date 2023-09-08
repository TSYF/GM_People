import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Person } from '../../models/person.model';
import { LoggingService } from '../../services/LoggingService.service';
import { PeopleService } from '../../services/PeopleService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  // providers: [LoggingService] //* No longer needed since it's declared on app.module.ts
})
export class FormComponent implements OnInit {
  @Output()
  public createdPerson: EventEmitter<Person> = new EventEmitter<Person>();

  public tempPerson: Person = Person.createEmpty(); // Initialized because of strictPropertyInitialization
  public index: number;
  private editionMode: number;

  @ViewChild("firstNameInput")
  private firstNameInput: ElementRef<HTMLInputElement>;
  @ViewChild("lastNameInput")
  private lastNameInput: ElementRef<HTMLInputElement>;


  public constructor(
    /* private loggingService: LoggingService, */
    private peopleService: PeopleService,
    private router:        Router,
    private route:         ActivatedRoute
  ) {
    this.peopleService.greet.subscribe(
      (index: number) => {
        alert("Index: " + index);
      }
    )
  }
  
  public ngOnInit(): void {
    this.index        = this.route.snapshot.params["id"];
    this.editionMode  = +this.route.snapshot.queryParams["editionMode"];
    if (this.index  !== undefined && this.editionMode === 1) {
      this.tempPerson = this.peopleService.findPerson(this.index);
    }
  }

  public addPerson(person: Person): void {
    // this.people.push({...person});
    // return this.people;
    if (!this.editionMode) {
      this.peopleService.pushPerson({ ...person });
    } else {
      this.peopleService.editPerson(this.index, { ...person });
    }
    this.router.navigate(["people"]);
  }

  public deletePerson(): void {
    if (this.editionMode === 1) {
      this.peopleService.deletePerson(this.index);
    }
    this.router.navigate(["people"]);
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
