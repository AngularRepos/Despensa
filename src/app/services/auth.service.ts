import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth) { }

  loginUser(email: string, pass: string) {
    return new Promise ((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData), err => reject(err));
    })
  }

  logOut() {
    return this.afAuth.signOut();
  }

  registerUser(email: string, pass: string){
    return new Promise(
      (resolve, reject) => {
        this.afAuth.createUserWithEmailAndPassword(email, pass)
          .then(userData => resolve(userData), err => reject(err));
      }
    )
  }

}
