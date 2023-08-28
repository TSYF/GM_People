import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { FormComponent } from './form/form.component';
import { LoggingService } from './services/LoggingService.service';
import { PeopleService } from './services/PeopleService.service';

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
  providers: [
    LoggingService,
    PeopleService /* If the components use the same provider by it being declared on their parent,
                    they'll use the same instance and the service will preserve state between components. */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
