import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  email: string = "";
  pass: string = "";
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onRegister(): void {
    this.authService.registerUser(this.email, this.pass)
    .then(res => console.log("usuario logueado"))
      .catch(err => this.showErrorOnLogin(err));
  }



  showErrorOnLogin(err: String) {
    console.error( err);
  }

}
