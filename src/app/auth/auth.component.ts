import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  islogin = true;
  constructor(private authServ: AuthService) { }

  ngOnInit() {
  }

  authentic() {
    this.islogin = !this.islogin
  }

  onSubmit(form: NgForm) {
    let email = form.value.email;
    let pass = form.value.password;
    if(this.islogin) {
      this.authServ.signIn(email, pass)
    } else {
      this.authServ.signUp(email, pass)
    }
  }

}
