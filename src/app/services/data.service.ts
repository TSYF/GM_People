import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  public savePeople(people: Person[]) {
    this.httpClient.put("https://people-listing-default-rtdb.firebaseio.com/people.json", people)
      .subscribe(
        res => console.log(res),
        error => console.error(error)
        );
  }

  public loadPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>('https://people-listing-default-rtdb.firebaseio.com/people.json');   
  }
}