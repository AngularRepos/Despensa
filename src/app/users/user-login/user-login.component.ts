import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email: string = "";
  pass: string = "";
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginUser(this.email, this.pass)
    .then(res => console.log("usuario logueado"))
      .catch(err => this.showErrorOnLogin(err));
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
