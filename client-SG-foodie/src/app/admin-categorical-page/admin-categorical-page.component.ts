import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Restaurant } from '../models/restaurant';
import { FoodieService } from '../services/foodie.service';

@Component({
  selector: 'app-admin-categorical-page',
  templateUrl: './admin-categorical-page.component.html',
  styleUrls: ['./admin-categorical-page.component.css']
})
export class AdminCategoricalPageComponent implements OnInit {

  constructor(private _service: FoodieService,private activatedRoute: ActivatedRoute,private router: Router, private _toast: ToastrService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
   
  categories: string[] = ["Nổi bật", "Ưu đãi", "Văn hóa ẩm thực", "Tinh hoa Việt Nam", "Điểm nhấn quận mình","Kiểu Nhật","Kiểu Trung","Kiểu Âu","Kiểu Hàn"];
  category:any;
  restaurants: any;
  restaurant = new Restaurant();
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.category = params.get('category');
	  if(this.categories.includes(this.category)==false){
          this.router.navigateByUrl('/**');
	  }
	  else{
		this.getRestaurantsCategory(this.category);
	  }
    });
  }

  delete(id: any){
    if(confirm("Bạn có muốn xóa nhà hàng này không?") == true){
      this._service.deleteRestaurant(id).subscribe(res =>{
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message === "success"){
          alert("Delete product successfully");
          this._toast.warning	("Deleted successfully!", "Delete", {
            timeOut: 5000,
            progressBar: false
          })
          this.getRestaurantsCategory(this.category);
        }else{
          alert(resData.message);
        }
      })
    }
  }

  getRestaurantsCategory(category:any){
    this._service.getRestaurantsListByCategory(category).subscribe((res:any) => {
      this.restaurants = res;
     })
  }
  
}
