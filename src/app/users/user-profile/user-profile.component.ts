import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  email: string;
  userName: string;
  photo: string;

  constructor(private firebase: FirebaseApp,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  onUpdateUser(profileForm: NgForm) {
    if (this.authService.updateUser(profileForm.value.userName, profileForm.value.photo)){
      alert("Perfil actualizado correctamente");
      this.ngOnInit();
    } else {
      alert("Ha habido problemas actualizando el perfil");
    }
    this.authService.updateUserEmail(profileForm.value.email);
  }

  getUserData() {
    var user = this.firebase.auth().currentUser;
    if (user) {
      this.userName = user.displayName;
      this.email = user.email;
      this.photo = user.photoURL;
    }

  }
}
