import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email: string = "";
  pass: string = "";
  errMessage: string = null;

  constructor(private authService: AuthService,
              private firebase: FirebaseApp,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginUser(this.email, this.pass)
    .then(res => {
        this.router.navigate(["home"]),
        console.log("--login--")
        console.log(this.firebase.auth().currentUser.email);
      })
      .catch(err => this.errMessage = err.message);
  }

  // TODO reutilizar método de redirección si es necesario
  // redirectOnLogin(): void {
  //   localStorage.setItem("loguedUser", "true");
  //   this.router.navigate(['/wishes']);
  // }

  showErrorOnLogin(err: String) {

    console.error( err);
  }

  hideLogPanel(){
    //TODO método para ocultar el panel de login
  }
}
