import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model';
import { Observable, Subscription } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  public savePeople(people: Person[]) {
    this.httpClient.put("https://people-listing-default-rtdb.firebaseio.com/people.json", people)
      .subscribe(
        res => console.log(res)
      );
  }

  public loadPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>('https://people-listing-default-rtdb.firebaseio.com/people.json');   
  }

  public modifyPerson(index: number, person: Person): Observable<Person> {
    const url: string = `https://people-listing-default-rtdb.firebaseio.com/people/${ index }.json`
    const person$: Observable<Person> = this.httpClient.patch<Person>(url, person);

    return person$;
  }

  public deletePerson(index: number): Observable<Person> {
    const url: string = `https://people-listing-default-rtdb.firebaseio.com/people/${ index }.json`
    const deletedPerson$ = this.httpClient.delete<Person>(url)
      // .subscribe(
      //   resp => 
      // )
      ;

    return deletedPerson$;
  }
}