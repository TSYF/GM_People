import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './people/person/person.component';
import { FormComponent } from './people/form/form.component';
import { LoggingService } from './services/LoggingService.service';
import { PeopleService } from './services/PeopleService.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    PeopleService, /* If the components use the same provider by it being declared on their parent,
                    they'll use the same instance and the service will preserve state between components. */
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
