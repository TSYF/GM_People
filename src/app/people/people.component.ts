import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { LoggingService } from '../services/LoggingService.service';
import { PeopleService } from '../services/PeopleService.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  // providers: [PeopleService]
})
export class PeopleComponent implements OnInit {
  private people: Person[] = [];

  public constructor(
    /* private loggingService: LoggingService, */
    private peopleService: PeopleService,
    private router:        Router
  ) {}

  public async ngOnInit() {
    try {
      this.people = await this.peopleService.loadPeople();
    } catch (error) {
      console.log("PeopleComponent: ngOnInit");
      console.error(error);
    }
  }

  /* public addPerson(person: Person): Person[] {
    this.peopleService.pushPerson({ ...person });
    this.loggingService.logString("A person has been added to the list.");
    this.loggingService.log(person);
    return this.people;
  } */

  public getPeople(): Person[] {
    return this.people;
  }

  public add(): void {
    this.router.navigate(["people/add"]);
  }
}
