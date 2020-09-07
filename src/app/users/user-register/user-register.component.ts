import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  email: string = "";
  pass: string = "";
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegister(): void {
    this.authService.registerUser(this.email, this.pass)
    .then(res => this.router.navigate(['profile']))
      .catch(err => this.showErrorOnLogin(err));
  }



  showErrorOnLogin(err: String) {
    console.error( err);
  }

}
