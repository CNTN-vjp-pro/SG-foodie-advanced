import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { FoodieService } from '../services/foodie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  restaurants: any;
  restaurant = new Restaurant();
  errMess: string = ""
  categories: string[] = ["Nổi bật", "Ưu đãi", "Văn hóa ẩm thực", "Tinh hoa Việt Nam", "Điểm nhấn quận mình"];

  constructor(private _service: FoodieService) { }

  ngOnInit(): void {
    this._service.getRestaurantsList().subscribe((res:any) => {
      this.restaurants = res;
      console.log("get data successfully")
    })
  }

}
