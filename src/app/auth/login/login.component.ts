import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  public login(form: NgForm): void {
    const { email, password } = form.value;
    console.log(email);
    console.log(password);
  }
}
