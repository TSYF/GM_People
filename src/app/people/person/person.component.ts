import { Component, Input } from '@angular/core';
import { Person } from '../../models/person.model';
import { PeopleService } from '../../services/PeopleService.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input()
  public person: Person;

  @Input()
  public index: number;

  public constructor(private peopleService: PeopleService) {}

  public emitGreeting(): void {
    this.peopleService.greet.emit(this.index);
  }
}
