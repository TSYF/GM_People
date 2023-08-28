import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { LoggingService } from '../services/LoggingService.service';
import { PeopleService } from '../services/PeopleService.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {
  private people: Person[] = [];

  public constructor(private loggingService: LoggingService, private peopleService: PeopleService) {}

  public ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

  public addPerson(person: Person): Person[] {
    this.peopleService.pushPerson({ ...person });
    this.loggingService.logString("A person has been added to the list.");
    this.loggingService.log(person);
    return this.people;
  }

  public getPeople(): Person[] {
    return this.people;
  }
}
