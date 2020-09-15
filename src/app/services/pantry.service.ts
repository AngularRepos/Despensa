import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Pantry } from '../models/Pantry';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class PantryService {

  pantryList: AngularFireList<any>;
  selectedPantry: Pantry;

  constructor(private firebase: AngularFireDatabase,
              private fire: FirebaseApp) { }

  getPantrys(){
    var user = this.fire.auth().currentUser.uid;
    return this.pantryList = this.firebase.list('pantry');
  }

  addPantry(pantry: Pantry){
    this.pantryList.push({
      description: pantry.description,
      location: pantry.location,
      owner: pantry.owner
    })
  }
}
