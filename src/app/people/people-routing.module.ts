import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people.component';


const routes: Routes = [
    {
        path: '',
        component: PeopleComponent,
        children: [
            {
                path: '', 
                loadChildren: () => import('./form/form.module').then(m => m.FormModule)
            }
        ]
    },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class PeopleRoutingModule { }
