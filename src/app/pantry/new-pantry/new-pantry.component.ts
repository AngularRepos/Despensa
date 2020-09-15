import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PantryService } from '../../services/pantry.service';

@Component({
  selector: 'app-new-pantry',
  templateUrl: './new-pantry.component.html',
  styleUrls: ['./new-pantry.component.css']
})
export class NewPantryComponent implements OnInit {

  $key: string = null;
  owner: string = null;
  description: string = null;
  location: string = null;
  errMessage: string = null;

  constructor(private router: Router,
              private firebase: FirebaseApp,
              public pantryService: PantryService) { }

  ngOnInit(): void {
    this.pantryService.getPantrys();
    this.owner = this.firebase.auth().currentUser.uid;
  }

  onSave(pantryForm: NgForm){
    if (pantryForm.value.$key == null){
      this.pantryService.addPantry(pantryForm.value);
      this.router.navigate(["despensa"]);
    }
  }

}
