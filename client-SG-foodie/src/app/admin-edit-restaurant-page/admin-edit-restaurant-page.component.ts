import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Restaurant } from '../models/restaurant';
import { FoodieService } from '../services/foodie.service';

@Component({
  selector: 'app-admin-edit-restaurant-page',
  templateUrl: './admin-edit-restaurant-page.component.html',
  styleUrls: ['./admin-edit-restaurant-page.component.css']
})

export class AdminEditRestaurantPageComponent implements OnInit {

  restaurant: any;  
  restaurants: any;
  errMsg: string = "";
  _id: any;
  images: any = null;
  title: string = "";
  categories: string[] = ["Nổi bật", "Ưu đãi", "Văn hóa ẩm thực", "Tinh hoa Việt Nam", "Điểm nhấn quận mình", "Kiểu Nhật", "Kiểu Trung", "Kiểu Âu", "Kiểu Hàn"];
  errFlag = false;
  constructor(private _service: FoodieService, private activatedRoute: ActivatedRoute, private router: Router, private _toast: ToastrService
    // , private _formBuilder: FormBuilder
    ){}
  
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      
      this._id = params.get('id');
      console.log(this._id);
      this.getRestaurantById(this._id);
    });
  }

  getRestaurantById(_id: any){
    if( _id == 0){
      this.restaurant = new Restaurant();
      this.title = "Thêm nhà hàng mới"
    }
    else{
      this._service.getResById(_id).subscribe((res) => {
        this.restaurant = res;
      }) 
      this.title = "Chỉnh sửa nhà hàng"
    }
  }
  getRestaurant(){
    this._service.getRestaurantsList().subscribe({
      next: data => this.restaurants = data,
      error: err => this.errMsg = err
    })
  } 
  submitData(form:NgForm){
    if(this.restaurant._id==""){
      this._service.postRestaurant(this.restaurant).subscribe(res=>{
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message==="success"){
          this._toast.success("Insert successfully!", "Insert")
          this.getRestaurant();
          this.onReset();
        }else{
          alert("Fail!");
        }
      }) 
    }else{
      this._service.updateRestaurant(this.restaurant._id,this.restaurant).subscribe(res=>{
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message==="success"){
          this._toast.info("Updated successfully!", "Update")
          this.getRestaurant();
          this.onReset();
        }else{
          alert("Fail!");
        }
      });
    }
  }
  onReset(form?: NgForm){
    if(form)
      form.reset();
    this.restaurant  = new Restaurant();
  }
  onChange(event: any){
    if(event.target.files.length > 0){
      this.restaurant.file = event.target.files[0]
      console.log("file", this.restaurant.file)
    }
    else{
      this.restaurant.image = null;
    }
  }
  validateCategories(value: any){
    if (value == 'none'){
      this.errFlag = true;
    }else{
      this.errFlag = false;
    }
  }
}
