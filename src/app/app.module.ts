import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { FormComponent } from './form/form.component';
import { LoggingService } from './services/LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
