import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';


const routes: Routes = [
  {
    path: 'add', 
    component: FormComponent
  },
  {
      path: ':id', 
      component: FormComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ]
})
export class FormRoutingModule { }
