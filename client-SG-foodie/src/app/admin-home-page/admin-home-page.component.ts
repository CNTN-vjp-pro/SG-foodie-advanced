import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Restaurant } from '../models/restaurant';
import { FoodieService } from '../services/foodie.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  restaurants: any;
  restaurant = new Restaurant();
  errMess: string = ""
  categories: string[] = ["Nổi bật", "Ưu đãi", "Văn hóa ẩm thực", "Tinh hoa Việt Nam", "Điểm nhấn quận mình"];

  constructor(private _service: FoodieService, private _toast: ToastrService) { }

  ngOnInit(): void {
    this._service.getRestaurantsList().subscribe({
      next: data => {
        this.restaurants = data
      },
      error: err => this.errMess = err
    })
  }
  delete(id: any){
    if(confirm("Bạn có muốn xóa nhà hàng này không?") == true){
      this._service.deleteRestaurant(id).subscribe(res =>{
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message === "success"){
          // alert("Delete product successfully");
          this._toast.warning	("Deleted successfully!", "Delete", {
            timeOut: 5000,
            progressBar: false
          })
          this.getRestaurantsList();
        }else{
          alert(resData.message);
        }
      })
    }
  }
  getRestaurantsList(){
    this._service.getRestaurantsList().subscribe({
      next:data => {
        console.log(data);
        this.restaurants = data},
        error:err => this.errMess = err
      }) 
  }
  findRestaurantList(restaurants: any[], cat: string): any[] {
    return restaurants.filter(res => res.category.includes(cat));
  }
}
