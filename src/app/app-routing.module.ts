import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "people",
    pathMatch: "full"
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'people/add', 
    loadChildren: () => import('./people/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'people/:id', 
    loadChildren: () => import('./people/form/form.module').then(m => m.FormModule)
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ]
})
export class AppRoutingModule { }
