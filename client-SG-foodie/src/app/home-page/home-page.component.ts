import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { FoodieService } from '../services/foodie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
   styleUrls: ['./home-page.component.css',
              '../../assets/additional-style/RestaurantStyle.css',
              '../../assets/additional-style/carousel.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  restaurants: any;
  restaurant = new Restaurant();
  selectedId: any;
  errMess: string = ""
  categories: string[] = ["Nổi bật", "Ưu đãi", "Văn hóa ẩm thực", "Tinh hoa Việt Nam", "Điểm nhấn quận mình"];

  constructor(private _service: FoodieService, private activatedRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this._service.getRestaurantsList().subscribe((res:any) => {
      this.restaurants = res;
      console.log("get data successfully")
    })

  }
  findRestaurantList(restaurants: any[], cat: string): any[] {
    return restaurants.filter(res => res.category.includes(cat));
  }
}
