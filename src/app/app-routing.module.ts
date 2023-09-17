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
    loadChildren: () => import("./people/people.module").then(m => m.PeopleModule)
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "**",
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ]
})
export class AppRoutingModule { }
