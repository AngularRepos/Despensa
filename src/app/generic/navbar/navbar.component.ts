import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;

  constructor(private authService: AuthService,
              private afAuth: AngularFireAuth,
              private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  onLogout(){
    this.authService.logOut();
    this.router.navigate(["home"])
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(
      auth => {
        if (auth){
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }
      }
    )
  }

}
