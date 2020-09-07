import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private firebase: FirebaseApp) { }

  ngOnInit(): void {
    //this.user = this.firebase.auth().currentUser;
    console.log(this.firebase.auth().currentUser);
  }

  user: Observable<firebase.User | null>
}
