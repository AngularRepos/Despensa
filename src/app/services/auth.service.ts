import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private firebase: FirebaseApp) { }

  loginUser(email: string, pass: string) {
    return new Promise ((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData), err => reject(err));
    })
  }

  logOut() {
    return this.afAuth.signOut();
  }

  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  registerUser(email: string, pass: string){
    return new Promise(
      (resolve, reject) => {
        this.afAuth.createUserWithEmailAndPassword(email, pass)
          .then(userData => resolve(userData), err => reject(err));
      }
    )
  }

  updateUser(usName: string, photo: string): boolean {
    var result: boolean;
    var user = this.firebase.auth().currentUser;
    user.updateProfile({
      displayName: usName,
      photoURL: photo
    }).then(res => {
        alert("Perfil Actualizado");
        result = true;
      })
    .catch(err => {
        console.log("Ha habido un error actualizando el perfil");
        result = false;
      })
    return result;
  }

  updateUserEmail(email: string){
    var user = this.firebase.auth().currentUser;
    console.log("Email a actualizar: "+email);
    user.updateEmail(email)
      .then(res => console.log("Email actualizado"))
      .catch(err => console.log("Error actualizando el email"))
  }

}
