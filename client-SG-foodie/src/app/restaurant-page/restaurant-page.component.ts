import { Component, OnInit } from '@angular/core';
import { FoodieService } from '../services/foodie.service';
// import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  restaurant: any;  
  errMsg: string = "";

  constructor(private _service: FoodieService) { }
  
  ngOnInit(): void {
    this._service.getRestaurantsList().subscribe((res:any) => {
      this.restaurant = res;
      console.log("get data successfully")
    })
  }

  // getRestaurant() {
  //   this._service.getRestaurant().subscribe({
  //     next: (data: any) => this.restaurant = data,
  //     error: (err: string) => this.errMsg = err
  //   })
  // }
  // getRestaurant(){
  //   this._service.getRestaurant().subscribe({
  //     next: data => this.restaurant = data,
  //     error: err => this.errMsg = err
  //   })
  // }


}
