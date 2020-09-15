import { Component, OnInit } from '@angular/core';
import { Pantry } from '../models/Pantry';
import { PantryService } from '../services/pantry.service';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {

  pantryList: Pantry[];

  constructor(protected pantryService: PantryService) { }

  ngOnInit(): void {
    this.pantryService.getPantrys()
    .snapshotChanges()
    .subscribe(item => {
      this.pantryList = [];
      item.forEach(
        element => {
          let p = element.payload.toJSON();
          p["$key"] = element.key;
          this.pantryList.push(p as Pantry);
        }
      )
    })
  }

  showProducts(){}

}
