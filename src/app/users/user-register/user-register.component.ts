import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  email: string = "";
  pass: string = "";
  errMessage: string = null;

  constructor(private authService: AuthService,
              private firebase: FirebaseApp,
              private router: Router) { }

  ngOnInit() {
  }

  onRegister(): void {
    this.authService.registerUser(this.email, this.pass)
    .then(res => {
      this.router.navigate(['profile']),
      localStorage.setItem("currentUser", this.firebase.auth().currentUser.uid)
      })
      .catch(err => {
        this.errMessage = err.message;
        console.log("Register error: "+err);
      });
  }

}
