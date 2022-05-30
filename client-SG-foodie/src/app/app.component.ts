import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { FoodieService } from './services/foodie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SG-foodie-advanced';
  updated: boolean = false;

  constructor(private _service:FoodieService, private _swU:SwUpdate, private _swP: SwPush){
    this._swU.activateUpdate().then(() =>{
      this.updated = true;
    })
  }
}

